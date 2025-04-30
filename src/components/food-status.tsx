"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, CheckCircle2, Clock, Package, ShoppingCart } from "lucide-react"

export default function FoodStatus() {
  // Sample food inventory data
  const foodInventory = [
    {
      id: 1,
      category: "Grains",
      items: [
        { name: "Rice", quantity: 500, unit: "kg", status: "Adequate" },
        { name: "Wheat Flour", quantity: 350, unit: "kg", status: "Adequate" },
        { name: "Oats", quantity: 120, unit: "kg", status: "Low" },
      ],
    },
    {
      id: 2,
      category: "Proteins",
      items: [
        { name: "Chicken", quantity: 200, unit: "kg", status: "Adequate" },
        { name: "Eggs", quantity: 1500, unit: "units", status: "Adequate" },
        { name: "Lentils", quantity: 80, unit: "kg", status: "Low" },
      ],
    },
    {
      id: 3,
      category: "Dairy",
      items: [
        { name: "Milk", quantity: 300, unit: "liters", status: "Adequate" },
        { name: "Cheese", quantity: 50, unit: "kg", status: "Low" },
        { name: "Yogurt", quantity: 100, unit: "kg", status: "Critical" },
      ],
    },
    {
      id: 4,
      category: "Vegetables",
      items: [
        { name: "Potatoes", quantity: 400, unit: "kg", status: "Adequate" },
        { name: "Tomatoes", quantity: 150, unit: "kg", status: "Low" },
        { name: "Onions", quantity: 200, unit: "kg", status: "Adequate" },
      ],
    },
  ]

  // Sample orders data
  const pendingOrders = [
    {
      id: "ORD-001",
      date: "April 20, 2023",
      items: ["Rice (100kg)", "Chicken (50kg)", "Vegetables (80kg)"],
      supplier: "Global Food Supplies",
      status: "Processing",
      eta: "April 25, 2023",
    },
    {
      id: "ORD-002",
      date: "April 18, 2023",
      items: ["Milk (100L)", "Eggs (500 units)", "Cheese (20kg)"],
      supplier: "Dairy Distributors Inc.",
      status: "Shipped",
      eta: "April 22, 2023",
    },
  ]

  return (
    <div className="container mx-auto p-6">
      <Tabs defaultValue="inventory" className="space-y-6">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="inventory">Inventory</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="consumption">Consumption</TabsTrigger>
          </TabsList>
          <Button>
            <ShoppingCart className="mr-2 h-4 w-4" />
            Place Order
          </Button>
        </div>

        <TabsContent value="inventory" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Food Items</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">Across all categories</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Adequate Stock</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <div className="text-2xl font-bold">16</div>
                  <Badge className="ml-2 bg-green-100 text-green-800">67%</Badge>
                </div>
                <p className="text-xs text-muted-foreground">Items with sufficient stock</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Low Stock</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <div className="text-2xl font-bold">6</div>
                  <Badge className="ml-2 bg-amber-100 text-amber-800">25%</Badge>
                </div>
                <p className="text-xs text-muted-foreground">Items that need reordering soon</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Critical Stock</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <div className="text-2xl font-bold">2</div>
                  <Badge className="ml-2 bg-red-100 text-red-800">8%</Badge>
                </div>
                <p className="text-xs text-muted-foreground">Items that need immediate reordering</p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {foodInventory.map((category) => (
              <Card key={category.id}>
                <CardHeader>
                  <CardTitle>{category.category}</CardTitle>
                  <CardDescription>Current inventory status</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.items.map((item, index) => (
                      <div key={index} className="flex items-center justify-between border-b pb-2">
                        <div>
                          <div className="font-medium">{item.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {item.quantity} {item.unit}
                          </div>
                        </div>
                        <StatusBadge status={item.status} />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="orders">
          <Card>
            <CardHeader>
              <CardTitle>Pending Orders</CardTitle>
              <CardDescription>Food orders that are currently in process</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {pendingOrders.map((order) => (
                  <div key={order.id} className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">{order.id}</div>
                      <OrderStatusBadge status={order.status} />
                    </div>
                    <div className="mt-2 text-sm text-muted-foreground">
                      Ordered on {order.date} from {order.supplier}
                    </div>
                    <div className="mt-4">
                      <div className="text-sm font-medium">Items:</div>
                      <ul className="mt-1 list-inside list-disc text-sm text-muted-foreground">
                        {order.items.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="text-sm">
                        <span className="font-medium">ETA:</span> {order.eta}
                      </div>
                      <Button variant="outline" size="sm">
                        Track Order
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="mt-6 w-full">
                View Order History
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="consumption">
          <Card>
            <CardHeader>
              <CardTitle>Food Consumption</CardTitle>
              <CardDescription>Monthly consumption patterns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-10">
                <p className="text-muted-foreground">Food consumption charts would appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function StatusBadge({ status }: { status: string }) {
  switch (status) {
    case "Adequate":
      return <Badge className="bg-green-100 text-green-800">Adequate</Badge>
    case "Low":
      return <Badge className="bg-amber-100 text-amber-800">Low</Badge>
    case "Critical":
      return <Badge className="bg-red-100 text-red-800">Critical</Badge>
    default:
      return <Badge variant="outline">Unknown</Badge>
  }
}

function OrderStatusBadge({ status }: { status: string }) {
  switch (status) {
    case "Processing":
      return (
        <Badge className="bg-blue-100 text-blue-800">
          <Clock className="mr-1 h-3 w-3" />
          Processing
        </Badge>
      )
    case "Shipped":
      return (
        <Badge className="bg-amber-100 text-amber-800">
          <Package className="mr-1 h-3 w-3" />
          Shipped
        </Badge>
      )
    case "Delivered":
      return (
        <Badge className="bg-green-100 text-green-800">
          <CheckCircle2 className="mr-1 h-3 w-3" />
          Delivered
        </Badge>
      )
    case "Delayed":
      return (
        <Badge className="bg-red-100 text-red-800">
          <AlertCircle className="mr-1 h-3 w-3" />
          Delayed
        </Badge>
      )
    default:
      return <Badge variant="outline">Unknown</Badge>
  }
}
