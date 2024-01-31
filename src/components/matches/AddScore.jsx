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
import { createEditPlayer } from "@/lib/dbservices";
import { useState } from "react";
import { ButtonLoading } from "../ui/buttonloading";
import { IoReload } from "react-icons/io5";
import { revalidatePath } from "next/cache";
import { useQueryClient } from "@tanstack/react-query";
import { Switch } from "../ui/switch";

const Role = ["Batsman", "WicketKeeper", "Allrounder", "Blower"];

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

export function AddScore({ defaultvalues }) {
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);
  const form = useForm({
    //resolver: yupResolver(schema),
    defaultValues: defaultvalues,
  });
  const onSubmit = async (data) => {
    console.log(data);
    //const result = await createEditPlayer(data);
    // console.log(result);
    // if (result.success) {
    //   form.reset();
    //   setOpen(false);
    //   queryClient.invalidateQueries({ queryKey: ["allplayers"] });
    // }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Button size={"sm"} onClick={() => setOpen(true)}>
        Edit
      </Button>
      <DialogContent className="sm:max-w-[425px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="px-4 pb-4 space-y-6">
              <FormField
                control={form.control}
                name="runs"
                render={({ field }) => (
                  <FormItem className="flex flex-row justify-center items-center gap-5">
                    <FormLabel className="w-1/4">Runs</FormLabel>
                    <FormControl>
                      <Input placeholder="How many runs scored" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="wickets"
                render={({ field }) => (
                  <FormItem className="flex flex-row justify-center items-center gap-5">
                    <FormLabel className="w-1/4">Wickets</FormLabel>
                    <FormControl>
                      <Input placeholder="How many wickets taken" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="catches"
                render={({ field }) => (
                  <FormItem className="flex flex-row justify-center items-center gap-5">
                    <FormLabel className="w-1/4">Catches</FormLabel>
                    <FormControl>
                      <Input placeholder="How many catches taken" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="runouts"
                render={({ field }) => (
                  <FormItem className="flex flex-row justify-center items-center gap-5">
                    <FormLabel className="w-1/4">Run outs</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter player name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="motm"
                render={({ field }) => (
                  <FormItem className="flex flex-row justify-center items-center gap-5">
                    <FormLabel className="w-1/4">MOM</FormLabel>
                    <div className="w-3/4">
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </div>
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
                  "Update Profile"
                )}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default AddScore;
