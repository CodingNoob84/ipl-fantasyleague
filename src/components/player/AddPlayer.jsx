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

export function AddPlayer() {
  const form = useForm({
    //resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      profileimage: "",
      role: "",
      team: "",
      country: "",
    },
  });
  const onSubmit = (data) => console.log(data);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Player</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <ImageEditor
              getimage={form.getValues("profileimage")}
              setvalue={form.setValue}
            />
            <div className="px-4 pb-4 space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="flex flex-row justify-center items-center gap-5">
                    <FormLabel className="w-1/4">Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter player name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem className="flex flex-row justify-center items-center gap-5">
                    <FormLabel className="w-1/4">Role</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a role" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {Role.map((role, i) => (
                          <SelectItem key={i} value={role}>
                            {role}
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
                name="team"
                render={({ field }) => (
                  <FormItem className="flex flex-row justify-center items-center gap-5">
                    <FormLabel className="w-1/4">Team</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a Team" />
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
                name="country"
                render={({ field }) => (
                  <FormItem className="flex flex-row justify-center items-center gap-5">
                    <FormLabel className="w-1/4">Country</FormLabel>
                    <FormControl className="w-3/4">
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-row space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="indian" />
                          </FormControl>
                          <FormLabel className="font-normal">Indian</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="foreigner" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Foreigner
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-full">Update Profile</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default AddPlayer;
