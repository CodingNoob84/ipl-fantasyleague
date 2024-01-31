"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ImageEditor from "@/components/player/ImageEditor";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { createEditMatch, createEditPlayer } from "@/lib/dbservices";
import { useState } from "react";
import { ButtonLoading } from "../ui/buttonloading";
import { IoReload } from "react-icons/io5";
import { useQueryClient } from "@tanstack/react-query";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { format } from "date-fns";
import { cn, mergeDateTimeString } from "@/lib/utils";
import { FaCalendar } from "react-icons/fa";
import { Calendar } from "../ui/calendar";

const TEAMS = [
  { label: "CSK", value: "1" },
  { label: "DC", value: "2" },
  { label: "GT", value: "3" },
  { label: "KKR", value: "4" },
  { label: "LSG", value: "5" },
  { label: "MI", value: "6" },
  { label: "PBKS", value: "7" },
  { label: "RR", value: "8" },
  { label: "RCB", value: "9" },
  { label: "SRH", value: "10" },
];

function AddMatch() {
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);
  const form = useForm({
    //resolver: yupResolver(schema),
    defaultValues: {
      date: "",
      time: "",
      timezone: "Asia/Kolkata",
      hometeamid: "",
      awayteamid: "",
    },
  });

  const onSubmit = async (data) => {
    data.datetime = mergeDateTimeString(data.date, data.time);
    //console.log(data);
    if (data.datetime) {
      const result = await createEditMatch(data);
      //console.log(result);
      if (result.success) {
        form.reset();
        setOpen(false);
        queryClient.invalidateQueries({ queryKey: ["allmatches"] });
      }
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Button onClick={() => setOpen(true)}>Add Match</Button>
      <DialogContent className="sm:max-w-[425px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="px-4 pb-4 space-y-6">
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="flex flex-row  items-center">
                    <FormLabel className="w-1/4">Date </FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[240px] pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <FaCalendar className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="time"
                render={({ field }) => (
                  <FormItem className="flex flex-row justify-center items-center gap-5">
                    <FormLabel className="w-1/4">Name</FormLabel>
                    <FormControl>
                      <Input
                        type={"time"}
                        placeholder="Enter player name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="hometeamid"
                render={({ field }) => (
                  <FormItem className="flex flex-row justify-center items-center gap-5">
                    <FormLabel className="w-1/4">Home Team</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a Home Team" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {TEAMS.map((team, i) => (
                          <SelectItem key={i} value={team.value}>
                            {team.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="awayteamid"
                render={({ field }) => (
                  <FormItem className="flex flex-row justify-center items-center gap-5">
                    <FormLabel className="w-1/4">Away Team</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an away Team" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {TEAMS.map((team, i) => (
                          <SelectItem key={i} value={team.value}>
                            {team.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-full" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? (
                  <>
                    <IoReload className="mr-2 h-4 w-4 animate-spin" />
                    Please wait
                  </>
                ) : (
                  "Update Match Schedule"
                )}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default AddMatch;
