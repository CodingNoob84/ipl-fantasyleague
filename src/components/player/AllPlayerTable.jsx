"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

import { useQuery } from "@tanstack/react-query";
import { getAllPlayers } from "@/lib/dbservices";
import ReactTable from "./ReactTable";

function SkeletonTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Team</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell colSpan={4}>
            <div className="flex justify-center items-center">Loading...</div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

function AllPlayerTable() {
  const { data, isLoading } = useQuery({
    queryKey: ["allplayers"],
    queryFn: () => getAllPlayers(),
  });
  console.log("isloading", isLoading);
  console.log(data);

  return (
    <div className="rounded-md border">
      {isLoading ? <SkeletonTable /> : <ReactTable data={data} />}
    </div>
  );
}

export default AllPlayerTable;
