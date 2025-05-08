"use client";

import { useState } from "react";
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
  const currentDate = new Date();
  const [day, setDay] = useState<string>(currentDate.getDate().toString());
  const [month, setMonth] = useState<string>(
    (currentDate.getMonth() + 1).toString()
  );
  const [year, setYear] = useState<string>(
    currentDate.getFullYear().toString()
  );
  const [mealType, setMealType] = useState("breakfast");

  // Generate arrays for days, months, and years
  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
  const months = [
    { value: "1", label: "January" },
    { value: "2", label: "February" },
    { value: "3", label: "March" },
    { value: "4", label: "April" },
    { value: "5", label: "May" },
    { value: "6", label: "June" },
    { value: "7", label: "July" },
    { value: "8", label: "August" },
    { value: "9", label: "September" },
    { value: "10", label: "October" },
    { value: "11", label: "November" },
    { value: "12", label: "December" },
  ];
  const years = Array.from({ length: 5 }, (_, i) =>
    (currentDate.getFullYear() - 2 + i).toString()
  );

  // Format the selected date
  const formatSelectedDate = () => {
    const monthName = months.find((m) => m.value === month)?.label || "January";
    return `${monthName} ${day}, ${year}`;
  };

  // Sample menu data
  const menuData = {
    breakfast: [
      {
        id: 1,
        name: "Scrambled Eggs",
        description: "Fresh eggs with herbs",
        status: "approved",
      },
      {
        id: 2,
        name: "Oatmeal",
        description: "Whole grain oats with fruits",
        status: "approved",
      },
      {
        id: 3,
        name: "Toast with Jam",
        description: "Whole wheat bread with fruit jam",
        status: "pending",
      },
    ],
    lunch: [
      {
        id: 4,
        name: "Grilled Chicken Salad",
        description: "Grilled chicken breast with mixed greens",
        status: "approved",
      },
      {
        id: 5,
        name: "Vegetable Soup",
        description: "Mixed vegetables in clear broth",
        status: "approved",
      },
      {
        id: 6,
        name: "Pasta with Tomato Sauce",
        description: "Whole wheat pasta with fresh tomato sauce",
        status: "pending",
      },
    ],
    dinner: [
      {
        id: 7,
        name: "Baked Fish",
        description: "Baked tilapia with lemon and herbs",
        status: "approved",
      },
      {
        id: 8,
        name: "Steamed Rice",
        description: "Plain steamed white rice",
        status: "approved",
      },
      {
        id: 9,
        name: "Sautéed Vegetables",
        description: "Mixed vegetables sautéed in olive oil",
        status: "pending",
      },
    ],
  };

  const getMealIcon = (type: string) => {
    switch (type) {
      case "breakfast":
        return <Coffee className="h-4 w-4" />;
      case "lunch":
        return <Salad className="h-4 w-4" />;
      case "dinner":
        return <ChefHat className="h-4 w-4" />;
      default:
        return <Coffee className="h-4 w-4" />;
    }
  };

  return (
    <div className="p-4 md:p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-2xl font-bold">Menu Management</h1>
        <div className="flex items-center gap-2 mt-4 md:mt-0">
          <Select value={day} onValueChange={setDay}>
            <SelectTrigger className="w-[70px] border-gray-300">
              <SelectValue placeholder="Day" />
            </SelectTrigger>
            <SelectContent>
              {days.map((d) => (
                <SelectItem key={d} value={d}>
                  {d}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={month} onValueChange={setMonth}>
            <SelectTrigger className="w-[120px] border-gray-300">
              <SelectValue placeholder="Month" />
            </SelectTrigger>
            <SelectContent>
              {months.map((m) => (
                <SelectItem key={m.value} value={m.value}>
                  {m.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={year} onValueChange={setYear}>
            <SelectTrigger className="w-[90px] border-gray-300">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              {years.map((y) => (
                <SelectItem key={y} value={y}>
                  {y}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {canEdit && (
            <Button className="gap-1 bg-black text-white hover:bg-gray-800">
              <Plus className="h-4 w-4" /> Add Menu Item
            </Button>
          )}
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold">
            Menu for {formatSelectedDate()}
          </h2>
          <p className="text-sm text-gray-500">
            Manage meal items for the selected date
          </p>
        </div>

        <Tabs value={mealType} onValueChange={setMealType} className="w-full">
          <TabsList className="w-full justify-start border-b h-auto p-0 bg-transparent rounded-none">
            <TabsTrigger
              value="breakfast"
              className="flex gap-2 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-green-500 data-[state=active]:text-green-600 data-[state=active]:bg-green-50 py-3 px-6"
            >
              <Coffee className="h-4 w-4" />
              Breakfast
            </TabsTrigger>
            <TabsTrigger
              value="lunch"
              className="flex gap-2 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:text-blue-600 data-[state=active]:bg-blue-50 py-3 px-6"
            >
              <Salad className="h-4 w-4" />
              Lunch
            </TabsTrigger>
            <TabsTrigger
              value="dinner"
              className="flex gap-2 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-purple-500 data-[state=active]:text-purple-600 data-[state=active]:bg-purple-50 py-3 px-6"
            >
              <ChefHat className="h-4 w-4" />
              Dinner
            </TabsTrigger>
          </TabsList>

          {["breakfast", "lunch", "dinner"].map((meal) => (
            <TabsContent key={meal} value={meal} className="m-0">
              <div className="flex justify-between items-center p-3 border-b border-gray-200">
                <h3 className="text-sm font-medium flex items-center gap-2">
                  {getMealIcon(meal)}
                  <span className="capitalize">{meal} Menu</span>
                </h3>
                {canEdit && (
                  <Button
                    size="sm"
                    variant="outline"
                    className="gap-1 text-green-600 border-green-200 hover:bg-green-50 hover:text-green-700"
                  >
                    <Plus className="h-3.5 w-3.5" />
                    Add Item
                  </Button>
                )}
              </div>

              <div className="min-h-[200px]">
                <Table>
                  <TableHeader>
                    <TableRow className="hover:bg-transparent">
                      <TableHead className="w-[250px]">Item</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead className="w-[150px]">Status</TableHead>
                      {canEdit && (
                        <TableHead className="w-[100px] text-right">
                          Actions
                        </TableHead>
                      )}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {menuData[meal as keyof typeof menuData].map((item) => (
                      <TableRow key={item.id} className="hover:bg-gray-50">
                        <TableCell className="font-medium">
                          {item.name}
                        </TableCell>
                        <TableCell>{item.description}</TableCell>
                        <TableCell>
                          {item.status === "approved" ? (
                            <Badge className="bg-green-100 text-green-600 hover:bg-green-100 border-0">
                              Approved
                            </Badge>
                          ) : (
                            <Badge className="bg-yellow-100 text-yellow-600 hover:bg-yellow-100 border-0">
                              Pending
                            </Badge>
                          )}
                        </TableCell>
                        {canEdit && (
                          <TableCell className="text-right">
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-8 w-8 p-0 text-red-500 hover:text-red-700 hover:bg-red-50"
                            >
                              <Trash className="h-4 w-4" />
                              <span className="sr-only">Delete</span>
                            </Button>
                          </TableCell>
                        )}
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

function AddMealDialog({ mealType }: { mealType: string }) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size="sm"
          variant="outline"
          className="gap-1 text-green-600 border-green-200 hover:bg-green-50 hover:text-green-700"
        >
          <Plus className="h-3.5 w-3.5" />
          Add Item
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {mealType === "breakfast" && <Coffee className="h-5 w-5" />}
            {mealType === "lunch" && <Salad className="h-5 w-5" />}
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
            <Input id="name" placeholder="Enter item name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" placeholder="Enter item description" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="status">Status</Label>
            <Select defaultValue="pending">
              <SelectTrigger id="status">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="approved">Approved</SelectItem>
              </SelectContent>
            </Select>
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
            onClick={() => setOpen(false)}
            className="bg-black hover:bg-gray-800"
          >
            Add Item
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
