"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Plus,
  Search,
  Filter,
  ArrowUpDown,
  Edit,
  Trash,
  AlertTriangle,
} from "lucide-react";

// Sample food stock data
const foodStockData = [
  {
    id: 1,
    name: "Rice",
    category: "grains",
    quantity: 25,
    unit: "kg",
    status: "available",
    expiryDate: "2024-08-15",
    lastUpdated: "2024-05-01",
  },
  {
    id: 2,
    name: "Wheat Flour",
    category: "grains",
    quantity: 15,
    unit: "kg",
    status: "available",
    expiryDate: "2024-07-20",
    lastUpdated: "2024-04-28",
  },
  {
    id: 3,
    name: "Chicken Breast",
    category: "meat",
    quantity: 0,
    unit: "kg",
    status: "out_of_stock",
    expiryDate: null,
    lastUpdated: "2024-05-02",
  },
  {
    id: 4,
    name: "Eggs",
    category: "dairy",
    quantity: 120,
    unit: "pcs",
    status: "available",
    expiryDate: "2024-05-25",
    lastUpdated: "2024-05-01",
  },
  {
    id: 5,
    name: "Milk",
    category: "dairy",
    quantity: 18,
    unit: "liters",
    status: "available",
    expiryDate: "2024-05-10",
    lastUpdated: "2024-05-01",
  },
  {
    id: 6,
    name: "Tomatoes",
    category: "vegetables",
    quantity: 8,
    unit: "kg",
    status: "low_stock",
    expiryDate: "2024-05-08",
    lastUpdated: "2024-04-30",
  },
  {
    id: 7,
    name: "Onions",
    category: "vegetables",
    quantity: 15,
    unit: "kg",
    status: "available",
    expiryDate: "2024-06-15",
    lastUpdated: "2024-04-29",
  },
  {
    id: 8,
    name: "Potatoes",
    category: "vegetables",
    quantity: 30,
    unit: "kg",
    status: "available",
    expiryDate: "2024-06-30",
    lastUpdated: "2024-04-28",
  },
  {
    id: 9,
    name: "Beef",
    category: "meat",
    quantity: 0,
    unit: "kg",
    status: "out_of_stock",
    expiryDate: null,
    lastUpdated: "2024-05-02",
  },
  {
    id: 10,
    name: "Apples",
    category: "fruits",
    quantity: 5,
    unit: "kg",
    status: "low_stock",
    expiryDate: "2024-05-12",
    lastUpdated: "2024-04-30",
  },
  {
    id: 11,
    name: "Bananas",
    category: "fruits",
    quantity: 12,
    unit: "kg",
    status: "available",
    expiryDate: "2024-05-09",
    lastUpdated: "2024-05-01",
  },
  {
    id: 12,
    name: "Sugar",
    category: "condiments",
    quantity: 20,
    unit: "kg",
    status: "available",
    expiryDate: "2024-12-31",
    lastUpdated: "2024-04-15",
  },
];

export default function FoodStatus() {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [currentTab, setCurrentTab] = useState("all");

  // Filter data based on search query, category, and status
  const filteredData = foodStockData.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      categoryFilter === "all" || item.category === categoryFilter;
    const matchesStatus =
      statusFilter === "all" || item.status === statusFilter;
    const matchesTab =
      currentTab === "all" ||
      (currentTab === "available" && item.status === "available") ||
      (currentTab === "low_stock" && item.status === "low_stock") ||
      (currentTab === "out_of_stock" && item.status === "out_of_stock") ||
      (currentTab === "expiring_soon" &&
        item.expiryDate &&
        new Date(item.expiryDate) <=
          new Date(Date.now() + 7 * 24 * 60 * 60 * 1000));

    return matchesSearch && matchesCategory && matchesStatus && matchesTab;
  });

  // Get unique categories for filter dropdown
  const categories = Array.from(
    new Set(foodStockData.map((item) => item.category))
  );

  // Format date to readable format
  const formatDate = (dateString: string | null) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Check if item is expiring soon (within 7 days)
  const isExpiringSoon = (dateString: string | null) => {
    if (!dateString) return false;
    const expiryDate = new Date(dateString);
    const today = new Date();
    const sevenDaysFromNow = new Date(
      today.getTime() + 7 * 24 * 60 * 60 * 1000
    );
    return expiryDate <= sevenDaysFromNow && expiryDate >= today;
  };

  return (
    <div className="p-4 md:p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-2xl font-bold">Food Stock Management</h1>
        <Button className="gap-1 bg-black text-white hover:bg-gray-800 mt-4 md:mt-0">
          <Plus className="h-4 w-4" /> Add New Item
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card className="bg-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              Total Items
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{foodStockData.length}</div>
          </CardContent>
        </Card>
        <Card className="bg-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              Available
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {
                foodStockData.filter((item) => item.status === "available")
                  .length
              }
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              Low Stock
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">
              {
                foodStockData.filter((item) => item.status === "low_stock")
                  .length
              }
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              Out of Stock
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">
              {
                foodStockData.filter((item) => item.status === "out_of_stock")
                  .length
              }
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Search items..."
                className="pl-8 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <div className="w-40">
                <Select
                  value={categoryFilter}
                  onValueChange={setCategoryFilter}
                >
                  <SelectTrigger>
                    <div className="flex items-center gap-2">
                      <Filter className="h-4 w-4" />
                      <span>
                        {categoryFilter === "all"
                          ? "All Categories"
                          : categoryFilter}
                      </span>
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="w-40">
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger>
                    <div className="flex items-center gap-2">
                      <Filter className="h-4 w-4" />
                      <span>
                        {statusFilter === "all"
                          ? "All Status"
                          : statusFilter === "available"
                          ? "Available"
                          : statusFilter === "low_stock"
                          ? "Low Stock"
                          : "Out of Stock"}
                      </span>
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="available">Available</SelectItem>
                    <SelectItem value="low_stock">Low Stock</SelectItem>
                    <SelectItem value="out_of_stock">Out of Stock</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>

        <Tabs
          value={currentTab}
          onValueChange={setCurrentTab}
          className="w-full"
        >
          <TabsList className="w-full justify-start border-b h-auto p-0 bg-transparent rounded-none">
            <TabsTrigger
              value="all"
              className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:text-black py-3 px-6"
            >
              All Items
            </TabsTrigger>
            <TabsTrigger
              value="available"
              className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-green-500 data-[state=active]:text-green-600 py-3 px-6"
            >
              Available
            </TabsTrigger>
            <TabsTrigger
              value="low_stock"
              className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-yellow-500 data-[state=active]:text-yellow-600 py-3 px-6"
            >
              Low Stock
            </TabsTrigger>
            <TabsTrigger
              value="out_of_stock"
              className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-red-500 data-[state=active]:text-red-600 py-3 px-6"
            >
              Out of Stock
            </TabsTrigger>
            <TabsTrigger
              value="expiring_soon"
              className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-orange-500 data-[state=active]:text-orange-600 py-3 px-6"
            >
              Expiring Soon
            </TabsTrigger>
          </TabsList>

          <TabsContent value={currentTab} className="m-0">
            <div className="min-h-[300px]">
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent">
                    <TableHead className="w-[250px]">Item Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>
                      <div className="flex items-center gap-1 cursor-pointer">
                        Quantity
                        <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Expiry Date</TableHead>
                    <TableHead>Last Updated</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredData.length > 0 ? (
                    filteredData.map((item) => (
                      <TableRow key={item.id} className="hover:bg-gray-50">
                        <TableCell className="font-medium">
                          {item.name}
                        </TableCell>
                        <TableCell className="capitalize">
                          {item.category}
                        </TableCell>
                        <TableCell>
                          {item.quantity} {item.unit}
                        </TableCell>
                        <TableCell>
                          {item.status === "available" ? (
                            <Badge className="bg-green-100 text-green-600 hover:bg-green-100 border-0">
                              Available
                            </Badge>
                          ) : item.status === "low_stock" ? (
                            <Badge className="bg-yellow-100 text-yellow-600 hover:bg-yellow-100 border-0">
                              Low Stock
                            </Badge>
                          ) : (
                            <Badge className="bg-red-100 text-red-600 hover:bg-red-100 border-0">
                              Out of Stock
                            </Badge>
                          )}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            {formatDate(item.expiryDate)}
                            {isExpiringSoon(item.expiryDate) && (
                              <AlertTriangle className="h-4 w-4 text-orange-500" />
                            )}
                          </div>
                        </TableCell>
                        <TableCell>{formatDate(item.lastUpdated)}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-8 w-8 p-0 text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                            >
                              <Edit className="h-4 w-4" />
                              <span className="sr-only">Edit</span>
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-8 w-8 p-0 text-red-500 hover:text-red-700 hover:bg-red-50"
                            >
                              <Trash className="h-4 w-4" />
                              <span className="sr-only">Delete</span>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell
                        colSpan={7}
                        className="text-center py-8 text-gray-500"
                      >
                        No items found matching your filters
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
