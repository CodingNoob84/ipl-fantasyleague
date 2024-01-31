"use client";
import React, { useState } from "react";
import {
  DndContext,
  closestCorners,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
  useDroppable,
  MouseSensor,
  TouchSensor,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { updatePlayingFifteen } from "@/lib/dbservices";
import { QueryClient, useMutation } from "@tanstack/react-query";

const Card = ({ item, groupname, index }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      key={item.id}
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <div
        className={cn(
          " border flex justify-center items-center rounded-md shadow-md p-1 text-sm mx-2",
          groupname === "playing"
            ? index < 11
              ? "bg-green-200"
              : "bg-blue-300"
            : "bg-red-300"
        )}
      >
        {item.fullname}
      </div>
    </div>
  );
};

const Container = ({ id, items, label }) => {
  const { setNodeRef } = useDroppable({
    id,
  });

  return (
    <SortableContext
      id={id}
      items={items}
      strategy={verticalListSortingStrategy}
    >
      <div ref={setNodeRef} className="border flex flex-col gap-3">
        <div className="flex flex-row gap-2 justify-center items-center p-2">
          <div className="text-xl font-bold">{label}</div>
          <div className="text-xs text-center rounded-full p-1 bg-orange-300">
            {items.length}
          </div>
        </div>
        {items.map((item, i) => (
          <Card key={item.id} item={item} groupname={id} index={i} />
        ))}
      </div>
    </SortableContext>
  );
};

function PlayingFifteen({ players, matchid, teamid, setShow, refetch }) {
  const queryClient = new QueryClient();
  const updatePlayingFifteenMutation = useMutation({
    // Specify the mutation function
    mutationFn: updatePlayingFifteen,
    onSuccess: () => {
      // Invalidate the relevant query key to trigger a data refetch
      queryClient.invalidateQueries(["teamscorecard", matchid, teamid]);
    },
  });

  const [loading, setLoading] = useState(false);
  const [allPlayers] = useState(getPlayingPlayers(players));
  const [items, setItems] = useState({
    playing: allPlayers.filter((player) => player.playing),
    nonplaying: allPlayers.filter((player) => !player.playing),
  });
  const [activePlayer, setActivePlayer] = useState();

  const sensors = useSensors(
    //useSensor(PointerSensor),
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleUpdate = async () => {
    setLoading(true);
    const data = {
      matchid: matchid,
      teamid: teamid,
      players: items.playing.map((player) => player.id),
    };
    try {
      const result = await updatePlayingFifteenMutation.mutateAsync(data);
      //console.log(result);
      if (result.success) {
        //console.log("success");
        refetch();
        queryClient.invalidateQueries(["teamscorecard", matchid, teamid]);
        setShow(false);
      }
    } catch (error) {
      console.error("Error updating playing fifteen:", error);
    } finally {
      setLoading(false);
    }
  };

  const findContainer = (id) => {
    const containers = Object.keys(items);
    for (const containerId of containers) {
      const containerItems = items[containerId];

      if (containerItems.some((item) => item.id === id)) {
        return containerId;
      }
    }

    return null;
  };

  const handleDragStart = ({ active }) => {
    const activePlayer = allPlayers.find((player) => player.id === active.id);
    setActivePlayer(activePlayer);
  };

  const handleDragOver = (event) => {
    const { active, over, draggingRect } = event;
    const { id } = active;
    const { id: overId } = over;

    // Find the containers
    const activeContainer = findContainer(id);
    const overContainer = findContainer(overId);

    if (
      !activeContainer ||
      !overContainer ||
      activeContainer === overContainer
    ) {
      return;
    }

    setItems((prevItems) => {
      const activeItems = prevItems[activeContainer];
      const overItems = prevItems[overContainer];

      // Prevent dropping items into the "playing" container if it already contains 15 items
      if (overContainer === "playing" && overItems.length >= 15) {
        toast.warning("Maximum 15 players are allowed to play");
        return prevItems;
      }

      // Find the indexes for the items
      const activeIndex = activeItems.findIndex((item) => item.id === id);
      const overIndex = overItems.findIndex((item) => item.id === overId);

      // Calculate the offset manually
      const containerRect = over.rect;
      const offset =
        draggingRect?.offsetTop -
        containerRect?.offsetTop -
        containerRect?.height;

      let newIndex;
      if (overId in prevItems) {
        // We're at the root droppable of a container
        newIndex = overItems.length + 1;
      } else {
        const isBelowLastItem =
          over && overIndex === overItems.length - 1 && offset > 0;

        const modifier = isBelowLastItem ? 1 : 0;

        newIndex = overIndex >= 0 ? overIndex + modifier : overItems.length + 1;
      }

      const updatedItems = {
        ...prevItems,
        [activeContainer]: activeItems.filter((item) => item.id !== id),
        [overContainer]: [
          ...overItems.slice(0, newIndex),
          ...activeItems.filter((item) => item.id === id),
          ...overItems.slice(newIndex),
        ],
      };

      return updatedItems;
    });
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    const { id } = active;

    if (!over) {
      // Drag ended outside droppable area
      return;
    }

    const { id: overId } = over;

    const activeContainer = findContainer(id);
    const overContainer = findContainer(overId);

    if (
      !activeContainer ||
      !overContainer ||
      activeContainer !== overContainer
    ) {
      return;
    }

    setItems((prevItems) => {
      const activeItems = prevItems[activeContainer];
      const overItems = prevItems[overContainer];

      const activeIndex = activeItems.findIndex((item) => item.id === id);
      const overIndex = overItems.findIndex((item) => item.id === overId);

      if (activeIndex !== overIndex) {
        return {
          ...prevItems,
          [overContainer]: arrayMove(overItems, activeIndex, overIndex),
        };
      }

      return prevItems;
    });
  };

  return (
    <div className=" flex flex-col items-center justify-center">
      <div className="max-w-sm flex-col items-center justify-center gap-4 ">
        <div
          className="w-full p-4 bg-violet-300 text-center cursor-pointer"
          onClick={handleUpdate}
        >
          {loading ? "Updating..." : "Update"}
        </div>
        <div className="max-w-sm flex flex-row gap-4 ">
          <DndContext
            id="players"
            sensors={sensors}
            collisionDetection={closestCorners}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDragEnd={handleDragEnd}
          >
            <Container id="playing" items={items.playing} label="Playing" />
            <Container
              id="nonplaying"
              items={items.nonplaying}
              label="Non-Playing"
            />

            <DragOverlay>
              {activePlayer && (
                <div className="border flex justify-center items-center rounded-md shadow-md p-1 text-sm mx-2 bg-yellow-200">
                  {activePlayer.fullname}
                </div>
              )}
            </DragOverlay>
          </DndContext>
        </div>
      </div>
    </div>
  );
}

function getPlayingPlayers(players) {
  return players.map((player, index) => ({
    ...player,
    playing: index < 15,
  }));
}

export default PlayingFifteen;
