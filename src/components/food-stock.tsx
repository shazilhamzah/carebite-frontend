"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AlertCircle, ArrowUpDown, BarChart3, Plus, Search, ShoppingCart } from "lucide-react"

export default function FoodStock() {
  const [category, setCategory] = useState("all")

  // Sample food stock data
  const stockData = [
    { id: 1, name: "Rice", category: "grains", quantity: 250, unit: "kg", status: "sufficient", reorderLevel: 50 },
    {
      id: 2,
      name: "Wheat Flour",
      category: "grains",
      quantity: 120,
      unit: "kg",
      status: "sufficient",
      reorderLevel: 30,
    },
    { id: 3, name: "Chicken", category: "meat", quantity: 45, unit: "kg", status: "low", reorderLevel: 50 },
    { id: 4, name: "Beef", category: "meat", quantity: 60, unit: "kg", status: "sufficient", reorderLevel: 40 },
    { id: 5, name: "Tomatoes", category: "vegetables", quantity: 15, unit: "kg", status: "critical", reorderLevel: 20 },
    {
      id: 6,
      name: "Potatoes",
      category: "vegetables",
      quantity: 80,
      unit: "kg",
      status: "sufficient",
      reorderLevel: 30,
    },
    { id: 7, name: "Milk", category: "dairy", quantity: 25, unit: "L", status: "low", reorderLevel: 30 },
    { id: 8, name: "Eggs", category: "dairy", quantity: 200, unit: "pcs", status: "sufficient", reorderLevel: 100 },
    { id: 9, name: "Apples", category: "fruits", quantity: 10, unit: "kg", status: "critical", reorderLevel: 15 },
    { id: 10, name: "Bananas", category: "fruits", quantity: 30, unit: "kg", status: "sufficient", reorderLevel: 20 },
  ]

  const filteredStock = category === "all" ? stockData : stockData.filter((item) => item.category === category)

  // Calculate statistics
  const totalItems = stockData.length
  const lowStockItems = stockData.filter((item) => item.status === "low").length
  const criticalItems = stockData.filter((item) => item.status === "critical").length

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Food Stock Management</h2>
        <div className="flex items-center gap-2">
          <RequestItemsDialog />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Items</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalItems}</div>
            <p className="text-xs text-muted-foreground">Items in inventory</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Low Stock Items</CardTitle>
            <AlertCircle className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{lowStockItems}</div>
            <p className="text-xs text-muted-foreground">Items below recommended levels</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Critical Stock</CardTitle>
            <AlertCircle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{criticalItems}</div>
            <p className="text-xs text-muted-foreground">Items requiring immediate attention</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Inventory</CardTitle>
              <CardDescription>Manage and track food inventory</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="grains">Grains</SelectItem>
                  <SelectItem value="meat">Meat</SelectItem>
                  <SelectItem value="vegetables">Vegetables</SelectItem>
                  <SelectItem value="fruits">Fruits</SelectItem>
                  <SelectItem value="dairy">Dairy</SelectItem>
                </SelectContent>
              </Select>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search items..." className="w-[200px] pl-8" />
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>
                  <Button variant="ghost" className="p-0 h-8 font-medium">
                    Item Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead>Category</TableHead>
                <TableHead>
                  <Button variant="ghost" className="p-0 h-8 font-medium">
                    Quantity
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead>Unit</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStock.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell className="capitalize">{item.category}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>{item.unit}</TableCell>
                  <TableCell>
                    {item.status === "sufficient" && (
                      <Badge variant="outline" className="bg-green-50 text-green-600 hover:bg-green-50">
                        Sufficient
                      </Badge>
                    )}
                    {item.status === "low" && (
                      <Badge variant="outline" className="bg-yellow-50 text-yellow-600 hover:bg-yellow-50">
                        Low Stock
                      </Badge>
                    )}
                    {item.status === "critical" && (
                      <Badge variant="outline" className="bg-red-50 text-red-600 hover:bg-red-50">
                        Critical
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    <Button size="sm" variant="outline">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Request
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

function RequestItemsDialog() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Request Items
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Request Food Items</DialogTitle>
          <DialogDescription>Submit a request for additional food items.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="item">Item</Label>
            <Select>
              <SelectTrigger id="item">
                <SelectValue placeholder="Select item" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rice">Rice</SelectItem>
                <SelectItem value="chicken">Chicken</SelectItem>
                <SelectItem value="tomatoes">Tomatoes</SelectItem>
                <SelectItem value="milk">Milk</SelectItem>
                <SelectItem value="apples">Apples</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="quantity">Quantity</Label>
            <div className="flex items-center gap-2">
              <Input id="quantity" type="number" className="flex-1" placeholder="0" />
              <Select defaultValue="kg">
                <SelectTrigger className="w-[100px]">
                  <SelectValue placeholder="Unit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="kg">kg</SelectItem>
                  <SelectItem value="L">L</SelectItem>
                  <SelectItem value="pcs">pcs</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="urgency">Urgency</Label>
            <Select defaultValue="normal">
              <SelectTrigger id="urgency">
                <SelectValue placeholder="Select urgency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="normal">Normal</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="critical">Critical</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
    \
