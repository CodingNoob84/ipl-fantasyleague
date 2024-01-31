"use client";
import { cn, compareDateWithToday, formatDateTime } from "@/lib/utils";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { getAllMatches } from "@/lib/dbservices";

function AllMatches() {
  const { data, isLoading } = useQuery({
    queryKey: ["allmatches"],
    queryFn: () => getAllMatches(),
  });
  //console.log(isLoading);
  //console.log(data?.data);
  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : (
        <>
          <table className="border">
            <thead>
              <tr>
                <th>DateTime</th>
                <th>Matches</th>
              </tr>
            </thead>
            <tbody>
              {data?.data.map((match) => (
                <tr
                  key={match.id}
                  className={cn(
                    compareDateWithToday(match.datetime, match.timezone) ===
                      "today"
                      ? "bg-green-200"
                      : compareDateWithToday(match.datetime, match.timezone) ===
                        "past"
                      ? "bg-red-300"
                      : "bg-yellow-100"
                  )}
                >
                  <td className="text-center">
                    {formatDateTime(match.datetime, match.timezone)}
                  </td>
                  <td className="flex items-center justify-evenly">
                    <div>
                      <Link href={`/dashboard/matches/${match.id}`}>
                        {match.hometeam.shortName} Vs {match.awayteam.shortName}
                      </Link>
                    </div>
                    {/* <Button variant={"link"} asChild>
                      <Link href={`/dashboard/matches/${match.id}`}>
                        Playing 15
                      </Link>
                    </Button> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
}

export default AllMatches;
