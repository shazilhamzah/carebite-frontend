"use client";

import { useEffect, useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash, Coffee, Salad, ChefHat } from "lucide-react";

interface MenuProps {
  canEdit?: boolean;
}

export default function Menu({ canEdit = true }: MenuProps) {
  const [week, setweek] = useState<any>(1);
  const [currentUser, setUser] = useState<any | null>(null);
  const [mealType, setMealType] = useState("breakfast");
  const [menu, setMenu] = useState<any[]>([]);

  // Generate arrays for week
  const weeks = [
    { value: "1", label: "Monday" },
    { value: "2", label: "Tuesday" },
    { value: "3", label: "Wednesday" },
    { value: "4", label: "Thursday" },
    { value: "5", label: "Friday" },
    { value: "6", label: "Saturday" },
    { value: "7", label: "Sunday" },
  ];

  // Format the selected date
  const formatSelectedDate = (number: any) => {
    if (number == 1) {
      return "Monday";
    } else if (number == 2) {
      return "Tuesday";
    } else if (number == 3) {
      return "Wednesday";
    } else if (number == 4) {
      return "Thursday";
    } else if (number == 5) {
      return "Friday";
    } else if (number == 6) {
      return "Saturday";
    } else if (number == 7) {
      return "Sunday";
    }
  };

  // Sample menu data
  // const menuData = {
  //   breakfast: [
  //     {
  //       id: 1,
  //       name: "Scrambled Eggs",
  //       description: "Fresh eggs with herbs",
  //       status: "approved",
  //     },
  //   ],
  //   dinner: [
  //     {
  //       id: 7,
  //       name: "Baked Fish",
  //       description: "Baked tilapia with lemon and herbs",
  //       status: "approved",
  //     },
  //   ],
  // };

  const getMealIcon = (type: string) => {
    switch (type) {
      case "breakfast":
        return <Coffee className="h-4 w-4" />;
      case "dinner":
        return <ChefHat className="h-4 w-4" />;
      default:
        return <Coffee className="h-4 w-4" />;
    }
  };

  const BACKEND_HOST =
    // "https://carebite-backend-dsgqf7fceqc0gmcw.canadacentral-01.azurewebsites.net";
    // "http://localhost:5000";
    process.env.NEXT_PUBLIC_BACKEND_HOST;

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  useEffect(() => {
    if (currentUser) {
      getMenu();
      console.log(menu);
    }
  }, [currentUser]);

  async function getMenu() {
    try {
      const res = await fetch(
        `${BACKEND_HOST}/api/gmh/menu/${currentUser.id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      console.log(data);
      setMenu(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="p-4 md:p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-2xl font-bold">Menu Management</h1>
        <div className="flex items-center gap-2 mt-4 md:mt-0">
          <Select value={week} onValueChange={setweek}>
            <SelectTrigger className="w-[120px] border-gray-300">
              <SelectValue placeholder="week" />
            </SelectTrigger>
            <SelectContent>
              {weeks.map((m) => (
                <SelectItem key={m.value} value={m.value}>
                  {m.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {canEdit && (
            <AddMealDialog
              mealType={mealType}
              week={week}
              currentUser={currentUser}
              menu={menu}
              setMenu={setMenu}
            />
          )}
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold">
            Menu for {formatSelectedDate(week)}
          </h2>
          <p className="text-sm text-gray-500">
            Manage meal items for the selected date
          </p>
        </div>

        <Tabs
          value={mealType}
          onValueChange={setMealType}
          className="w-full p-6"
        >
          <TabsList className="w-full justify-start border-b h-auto p-0 bg-transparent rounded-none">
            <TabsTrigger
              value="breakfast"
              className="flex gap-2 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-green-500 data-[state=active]:text-green-600 data-[state=active]:bg-green-50 py-3 px-6"
            >
              <Coffee className="h-4 w-4" />
              Breakfast
            </TabsTrigger>

            <TabsTrigger
              value="dinner"
              className="flex gap-2 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-purple-500 data-[state=active]:text-purple-600 data-[state=active]:bg-purple-50 py-3 px-6"
            >
              <ChefHat className="h-4 w-4" />
              Dinner
            </TabsTrigger>
          </TabsList>

          {["breakfast", "dinner"].map((meal) => (
            <TabsContent key={meal} value={meal} className="m-0">
              <div className="flex justify-between items-center p-3 border-b border-gray-200">
                <h3 className="text-sm font-medium flex items-center gap-2">
                  {getMealIcon(meal)}
                  <span className="capitalize">{meal} Menu</span>
                </h3>
              </div>

              <div className="min-h-[00px]">
                <Table>
                  <TableBody>
                    {menu[week] &&
                      menu[week][mealType]

                        ?.split(",")
                        .map((item: string, index: number) => (
                          <TableRow key={index} className="hover:bg-gray-50">
                            <TableCell>{item.trim()}</TableCell>
                          </TableRow>
                        ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
function AddMealDialog({
  mealType,
  week,
  currentUser,
  menu,
  setMenu,
}: {
  mealType: string;
  week: any;
  currentUser: any;
  menu: any[];
  setMenu: (menu: any[]) => void;
}) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");

  // const BACKEND_HOST = "http://localhost:5000";
  const BACKEND_HOST = process.env.NEXT_PUBLIC_BACKEND_HOST;

  const handleSubmit = async () => {
    const day = formatSelectedDate(week);
    const dayIndex = weeks.findIndex((w) => w.label === day);

    const updatedMenu = [...menu];

    // Add item to selected meal (breakfast/dinner)
    const currentItems = updatedMenu[dayIndex][mealType]
      ? updatedMenu[dayIndex][mealType].split(",").map((i: string) => i.trim())
      : [];

    currentItems.push(name);
    updatedMenu[dayIndex][mealType] = currentItems.join(", ");

    async function getMenu() {
      try {
        const res = await fetch(
          `${BACKEND_HOST}/api/gmh/menu/${currentUser.id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await res.json();
        console.log(data);
        setMenu(data);
      } catch (error) {
        console.error(error);
      }
    }

    try {
      await fetch(`${BACKEND_HOST}/api/gmh/menu/${currentUser.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          list: [updatedMenu[dayIndex]],
        }),
      });

      setMenu(updatedMenu);
      setOpen(false);
      setName("");
      getMenu();
    } catch (error) {
      console.error("Error posting menu item:", error);
    }
  };

  const formatSelectedDate = (number: any) => {
    return weeks[number].label;
  };

  const weeks = [
    { value: "1", label: "Monday" },
    { value: "2", label: "Tuesday" },
    { value: "3", label: "Wednesday" },
    { value: "4", label: "Thursday" },
    { value: "5", label: "Friday" },
    { value: "6", label: "Saturday" },
    { value: "7", label: "Sunday" },
  ];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-1 bg-black text-white hover:bg-gray-800">
          <Plus className="h-4 w-4" />
          Add Menu Item
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {mealType === "breakfast" && <Coffee className="h-5 w-5" />}
            {mealType === "dinner" && <ChefHat className="h-5 w-5" />}
            Add {mealType.charAt(0).toUpperCase() + mealType.slice(1)} Item
          </DialogTitle>
          <DialogDescription>
            Add a new item to the {mealType} menu.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Item Name</Label>
            <Input
              id="name"
              placeholder="Enter item name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="button"
            variant="outline"
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            onClick={handleSubmit}
            className="bg-black hover:bg-gray-800"
          >
            Add Item
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
