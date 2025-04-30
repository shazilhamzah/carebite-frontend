"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Edit, Plus, Trash } from "lucide-react"

interface MenuProps {
  canEdit?: boolean
}

export default function Menu({ canEdit = false }: MenuProps) {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [mealType, setMealType] = useState("breakfast")

  // Sample menu data
  const menuData = {
    breakfast: [
      {
        id: 1,
        name: "Scrambled Eggs",
        description: "Fresh eggs with herbs",
        nutritionalValue: "Protein: 12g, Carbs: 2g, Fat: 10g",
        status: "approved",
      },
      {
        id: 2,
        name: "Oatmeal",
        description: "Whole grain oats with fruits",
        nutritionalValue: "Protein: 5g, Carbs: 30g, Fat: 3g",
        status: "approved",
      },
      {
        id: 3,
        name: "Toast with Jam",
        description: "Whole wheat bread with fruit jam",
        nutritionalValue: "Protein: 3g, Carbs: 25g, Fat: 1g",
        status: "pending",
      },
    ],
    lunch: [
      {
        id: 4,
        name: "Grilled Chicken Salad",
        description: "Grilled chicken breast with mixed greens",
        nutritionalValue: "Protein: 25g, Carbs: 10g, Fat: 8g",
        status: "approved",
      },
      {
        id: 5,
        name: "Vegetable Soup",
        description: "Mixed vegetables in clear broth",
        nutritionalValue: "Protein: 5g, Carbs: 15g, Fat: 2g",
        status: "approved",
      },
      {
        id: 6,
        name: "Pasta with Tomato Sauce",
        description: "Whole wheat pasta with fresh tomato sauce",
        nutritionalValue: "Protein: 8g, Carbs: 45g, Fat: 3g",
        status: "pending",
      },
    ],
    dinner: [
      {
        id: 7,
        name: "Baked Fish",
        description: "Baked tilapia with lemon and herbs",
        nutritionalValue: "Protein: 22g, Carbs: 0g, Fat: 5g",
        status: "approved",
      },
      {
        id: 8,
        name: "Steamed Rice",
        description: "Plain steamed white rice",
        nutritionalValue: "Protein: 3g, Carbs: 45g, Fat: 0g",
        status: "approved",
      },
      {
        id: 9,
        name: "Sautéed Vegetables",
        description: "Mixed vegetables sautéed in olive oil",
        nutritionalValue: "Protein: 2g, Carbs: 10g, Fat: 5g",
        status: "pending",
      },
    ],
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Menu Calendar</CardTitle>
            <CardDescription>View and plan meals by date</CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
          </CardContent>
        </Card>

        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Menu Overview</CardTitle>
            <CardDescription>
              {date
                ? date.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })
                : "Select a date"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={mealType} onValueChange={setMealType}>
              <TabsList className="grid grid-cols-3 mb-4">
                <TabsTrigger value="breakfast">Breakfast</TabsTrigger>
                <TabsTrigger value="lunch">Lunch</TabsTrigger>
                <TabsTrigger value="dinner">Dinner</TabsTrigger>
              </TabsList>

              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium capitalize">{mealType} Menu</h3>
                {canEdit && <AddMealDialog mealType={mealType} />}
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Item</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Nutritional Value</TableHead>
                    <TableHead>Status</TableHead>
                    {canEdit && <TableHead>Actions</TableHead>}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {menuData[mealType as keyof typeof menuData].map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">{item.name}</TableCell>
                      <TableCell>{item.description}</TableCell>
                      <TableCell>{item.nutritionalValue}</TableCell>
                      <TableCell>
                        {item.status === "approved" ? (
                          <Badge variant="outline" className="bg-green-50 text-green-600 hover:bg-green-50">
                            Approved
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="bg-yellow-50 text-yellow-600 hover:bg-yellow-50">
                            Pending
                          </Badge>
                        )}
                      </TableCell>
                      {canEdit && (
                        <TableCell>
                          <div className="flex gap-2">
                            <Button size="sm" variant="ghost">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="ghost" className="text-red-500 hover:text-red-700">
                              <Trash className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      )}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function AddMealDialog({ mealType }: { mealType: string }) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm">
          <Plus className="mr-2 h-4 w-4" />
          Add Item
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Add Menu Item</DialogTitle>
          <DialogDescription>Add a new item to the {mealType} menu.</DialogDescription>
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
          <div className="grid grid-cols-3 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="protein">Protein (g)</Label>
              <Input id="protein" type="number" placeholder="0" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="carbs">Carbs (g)</Label>
              <Input id="carbs" type="number" placeholder="0" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="fat">Fat (g)</Label>
              <Input id="fat" type="number" placeholder="0" />
            </div>
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
          <Button type="button" variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button type="submit" onClick={() => setOpen(false)}>
            Add Item
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
