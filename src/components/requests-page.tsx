"use client";
import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ShoppingBasket,
  UtensilsCrossed,
  Search,
  Plus,
  Filter,
  RefreshCw,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

// Types based on the schema
interface UtensilRequest {
  utensil_request_id: number;
  hospital_id: number;
  quantity_requested: number;
  status_sent: string;
  status_recieved: string;
  name: string; // From utensils table
}

interface GroceryRequest {
  grocery_request_id: number;
  hospital_id: number;
  quantity_requested: number;
  status_sent: string;
  status_recieved: string;
  name: string; // From grocery_items table
}

interface Utensil {
  utensils_id: number;
  name: string;
}

interface GroceryItem {
  grocery_id: number;
  name: string;
}

export default function RequestsPage() {
  // State for requests
  const [utensilRequests, setUtensilRequests] = useState<UtensilRequest[]>([]);
  const [groceryRequests, setGroceryRequests] = useState<GroceryRequest[]>([]);

  // State for available items
  const [utensils, setUtensils] = useState<Utensil[]>([]);
  const [groceryItems, setGroceryItems] = useState<GroceryItem[]>([]);

  // State for filters
  const [utensilFilter, setUtensilFilter] = useState("all");
  const [groceryFilter, setGroceryFilter] = useState("all");

  // State for search
  const [utensilSearch, setUtensilSearch] = useState("");
  const [grocerySearch, setGrocerySearch] = useState("");

  // State for new request forms
  const [newUtensilRequest, setNewUtensilRequest] = useState({
    utensil_id: 0,
    quantity: 1,
    hospital_id: 1, // Default hospital ID
  });

  const [newGroceryRequest, setNewGroceryRequest] = useState({
    grocery_id: 0,
    quantity: 1,
    hospital_id: 1, // Default hospital ID
  });

  // Load mock data on component mount
  useEffect(() => {
    // Mock data for utensils
    const mockUtensils = [
      { utensils_id: 1, name: "Plates" },
      { utensils_id: 2, name: "Spoons" },
      { utensils_id: 3, name: "Forks" },
      { utensils_id: 4, name: "Knives" },
      { utensils_id: 5, name: "Serving Bowls" },
      { utensils_id: 6, name: "Cooking Pots" },
    ];

    // Mock data for grocery items
    const mockGroceryItems = [
      { grocery_id: 1, name: "Rice" },
      { grocery_id: 2, name: "Flour" },
      { grocery_id: 3, name: "Sugar" },
      { grocery_id: 4, name: "Salt" },
      { grocery_id: 5, name: "Cooking Oil" },
      { grocery_id: 6, name: "Lentils" },
    ];

    // Mock data for utensil requests
    const mockUtensilRequests = [
      {
        utensil_request_id: 1,
        hospital_id: 1,
        quantity_requested: 20,
        status_sent: "Yes",
        status_recieved: "No",
        name: "Plates",
      },
      {
        utensil_request_id: 2,
        hospital_id: 1,
        quantity_requested: 30,
        status_sent: "Yes",
        status_recieved: "Yes",
        name: "Spoons",
      },
      {
        utensil_request_id: 3,
        hospital_id: 1,
        quantity_requested: 15,
        status_sent: "No",
        status_recieved: "No",
        name: "Cooking Pots",
      },
    ];

    // Mock data for grocery requests
    const mockGroceryRequests = [
      {
        grocery_request_id: 1,
        hospital_id: 1,
        quantity_requested: 10,
        status_sent: "Yes",
        status_recieved: "Yes",
        name: "Rice",
      },
      {
        grocery_request_id: 2,
        hospital_id: 1,
        quantity_requested: 5,
        status_sent: "Yes",
        status_recieved: "No",
        name: "Flour",
      },
      {
        grocery_request_id: 4,
        hospital_id: 1,
        quantity_requested: 2,
        status_sent: "No",
        status_recieved: "No",
        name: "Cooking Oil",
      },
    ];

    setUtensils(mockUtensils);
    setGroceryItems(mockGroceryItems);
    setUtensilRequests(mockUtensilRequests);
    setGroceryRequests(mockGroceryRequests);

    // In a real application, you would fetch this data from your API
    // Example:
    // fetch('/api/utensils')
    //   .then(response => response.json())
    //   .then(data => setUtensils(data))
  }, []);

  // Filter utensil requests based on status and search
  const filteredUtensilRequests = utensilRequests.filter((request) => {
    // Filter by status
    if (
      utensilFilter === "pending" &&
      (request.status_sent === "No" || request.status_recieved === "No")
    ) {
      return request.name.toLowerCase().includes(utensilSearch.toLowerCase());
    } else if (
      utensilFilter === "completed" &&
      request.status_sent === "Yes" &&
      request.status_recieved === "Yes"
    ) {
      return request.name.toLowerCase().includes(utensilSearch.toLowerCase());
    } else if (utensilFilter === "all") {
      return request.name.toLowerCase().includes(utensilSearch.toLowerCase());
    }
    return false;
  });

  // Filter grocery requests based on status and search
  const filteredGroceryRequests = groceryRequests.filter((request) => {
    // Filter by status
    if (
      groceryFilter === "pending" &&
      (request.status_sent === "No" || request.status_recieved === "No")
    ) {
      return request.name.toLowerCase().includes(grocerySearch.toLowerCase());
    } else if (
      groceryFilter === "completed" &&
      request.status_sent === "Yes" &&
      request.status_recieved === "Yes"
    ) {
      return request.name.toLowerCase().includes(grocerySearch.toLowerCase());
    } else if (groceryFilter === "all") {
      return request.name.toLowerCase().includes(grocerySearch.toLowerCase());
    }
    return false;
  });

  // Handle creating a new utensil request
  const handleCreateUtensilRequest = () => {
    if (newUtensilRequest.utensil_id === 0) {
      alert("Please select a utensil");
      return;
    }

    const selectedUtensil = utensils.find(
      (u) => u.utensils_id === newUtensilRequest.utensil_id
    );

    if (!selectedUtensil) return;

    const newRequest: UtensilRequest = {
      utensil_request_id:
        Math.max(...utensilRequests.map((r) => r.utensil_request_id), 0) + 1,
      hospital_id: newUtensilRequest.hospital_id,
      quantity_requested: newUtensilRequest.quantity,
      status_sent: "No",
      status_recieved: "No",
      name: selectedUtensil.name,
    };

    setUtensilRequests([...utensilRequests, newRequest]);

    // Reset form
    setNewUtensilRequest({
      utensil_id: 0,
      quantity: 1,
      hospital_id: 1,
    });

    // In a real application, you would send this data to your API
    // Example:
    // fetch('/api/utensil-requests', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(newUtensilRequest)
    // })
  };

  // Handle creating a new grocery request
  const handleCreateGroceryRequest = () => {
    if (newGroceryRequest.grocery_id === 0) {
      alert("Please select a grocery item");
      return;
    }

    const selectedGrocery = groceryItems.find(
      (g) => g.grocery_id === newGroceryRequest.grocery_id
    );

    if (!selectedGrocery) return;

    const newRequest: GroceryRequest = {
      grocery_request_id:
        Math.max(...groceryRequests.map((r) => r.grocery_request_id), 0) + 1,
      hospital_id: newGroceryRequest.hospital_id,
      quantity_requested: newGroceryRequest.quantity,
      status_sent: "No",
      status_recieved: "No",
      name: selectedGrocery.name,
    };

    setGroceryRequests([...groceryRequests, newRequest]);

    // Reset form
    setNewGroceryRequest({
      grocery_id: 0,
      quantity: 1,
      hospital_id: 1,
    });

    // In a real application, you would send this data to your API
  };

  // Function to get status badge
  const getStatusBadge = (sent: string, received: string) => {
    if (sent === "Yes" && received === "Yes") {
      return <Badge className="bg-green-500">Completed</Badge>;
    } else if (sent === "Yes" && received === "No") {
      return <Badge className="bg-yellow-500">In Transit</Badge>;
    } else {
      return <Badge className="bg-gray-500">Pending</Badge>;
    }
  };

  return (
    <div className="container mx-auto py-6 px-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Cook House Requests</CardTitle>
          <CardDescription>
            Manage grocery and utensil requests for the cook house
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="utensils" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="utensils" className="flex items-center gap-2">
                <UtensilsCrossed className="h-4 w-4" />
                Utensil Requests
              </TabsTrigger>
              <TabsTrigger
                value="groceries"
                className="flex items-center gap-2"
              >
                <ShoppingBasket className="h-4 w-4" />
                Grocery Requests
              </TabsTrigger>
            </TabsList>

            {/* Utensil Requests Tab */}
            <TabsContent value="utensils">
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <CardTitle>Utensil Requests</CardTitle>
                    <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                      <div className="flex items-center gap-2">
                        <Search className="h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="Search utensils..."
                          className="w-full sm:w-[200px]"
                          value={utensilSearch}
                          onChange={(e) => setUtensilSearch(e.target.value)}
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <Filter className="h-4 w-4 text-muted-foreground" />
                        <Select
                          value={utensilFilter}
                          onValueChange={setUtensilFilter}
                        >
                          <SelectTrigger className="w-full sm:w-[150px]">
                            <SelectValue placeholder="Filter by status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Requests</SelectItem>
                            <SelectItem value="pending">Pending</SelectItem>
                            <SelectItem value="completed">Completed</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="w-full sm:w-auto">
                            <Plus className="h-4 w-4 mr-2" />
                            New Request
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Create Utensil Request</DialogTitle>
                            <DialogDescription>
                              Request utensils for the cook house
                            </DialogDescription>
                          </DialogHeader>
                          <div className="grid gap-4 py-4">
                            <div className="grid gap-2">
                              <Label htmlFor="utensil">Utensil</Label>
                              <Select
                                value={newUtensilRequest.utensil_id.toString()}
                                onValueChange={(value) =>
                                  setNewUtensilRequest({
                                    ...newUtensilRequest,
                                    utensil_id: Number.parseInt(value),
                                  })
                                }
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Select utensil" />
                                </SelectTrigger>
                                <SelectContent>
                                  {utensils.map((utensil) => (
                                    <SelectItem
                                      key={utensil.utensils_id}
                                      value={utensil.utensils_id.toString()}
                                    >
                                      {utensil.name}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="grid gap-2">
                              <Label htmlFor="quantity">Quantity</Label>
                              <Input
                                id="quantity"
                                type="number"
                                min="1"
                                value={newUtensilRequest.quantity}
                                onChange={(e) =>
                                  setNewUtensilRequest({
                                    ...newUtensilRequest,
                                    quantity: Number.parseInt(e.target.value),
                                  })
                                }
                              />
                            </div>
                          </div>
                          <DialogFooter>
                            <Button onClick={handleCreateUtensilRequest}>
                              Submit Request
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>ID</TableHead>
                          <TableHead>Utensil</TableHead>
                          <TableHead>Quantity</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredUtensilRequests.length > 0 ? (
                          filteredUtensilRequests.map((request) => (
                            <TableRow key={request.utensil_request_id}>
                              <TableCell className="font-medium">
                                {request.utensil_request_id}
                              </TableCell>
                              <TableCell>{request.name}</TableCell>
                              <TableCell>
                                {request.quantity_requested}
                              </TableCell>
                              <TableCell>
                                {getStatusBadge(
                                  request.status_sent,
                                  request.status_recieved
                                )}
                              </TableCell>
                              <TableCell className="text-right">
                                <Button variant="ghost" size="sm">
                                  <RefreshCw className="h-4 w-4 mr-2" />
                                  Update
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))
                        ) : (
                          <TableRow>
                            <TableCell
                              colSpan={5}
                              className="text-center py-4 text-muted-foreground"
                            >
                              No utensil requests found
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Grocery Requests Tab */}
            <TabsContent value="groceries">
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <CardTitle>Grocery Requests</CardTitle>
                    <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                      <div className="flex items-center gap-2">
                        <Search className="h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="Search groceries..."
                          className="w-full sm:w-[200px]"
                          value={grocerySearch}
                          onChange={(e) => setGrocerySearch(e.target.value)}
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <Filter className="h-4 w-4 text-muted-foreground" />
                        <Select
                          value={groceryFilter}
                          onValueChange={setGroceryFilter}
                        >
                          <SelectTrigger className="w-full sm:w-[150px]">
                            <SelectValue placeholder="Filter by status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Requests</SelectItem>
                            <SelectItem value="pending">Pending</SelectItem>
                            <SelectItem value="completed">Completed</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="w-full sm:w-auto">
                            <Plus className="h-4 w-4 mr-2" />
                            New Request
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Create Grocery Request</DialogTitle>
                            <DialogDescription>
                              Request groceries for the cook house
                            </DialogDescription>
                          </DialogHeader>
                          <div className="grid gap-4 py-4">
                            <div className="grid gap-2">
                              <Label htmlFor="grocery">Grocery Item</Label>
                              <Select
                                value={newGroceryRequest.grocery_id.toString()}
                                onValueChange={(value) =>
                                  setNewGroceryRequest({
                                    ...newGroceryRequest,
                                    grocery_id: Number.parseInt(value),
                                  })
                                }
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Select grocery item" />
                                </SelectTrigger>
                                <SelectContent>
                                  {groceryItems.map((item) => (
                                    <SelectItem
                                      key={item.grocery_id}
                                      value={item.grocery_id.toString()}
                                    >
                                      {item.name}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="grid gap-2">
                              <Label htmlFor="quantity">Quantity</Label>
                              <Input
                                id="quantity"
                                type="number"
                                min="1"
                                value={newGroceryRequest.quantity}
                                onChange={(e) =>
                                  setNewGroceryRequest({
                                    ...newGroceryRequest,
                                    quantity: Number.parseInt(e.target.value),
                                  })
                                }
                              />
                            </div>
                          </div>
                          <DialogFooter>
                            <Button onClick={handleCreateGroceryRequest}>
                              Submit Request
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>ID</TableHead>
                          <TableHead>Grocery Item</TableHead>
                          <TableHead>Quantity</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredGroceryRequests.length > 0 ? (
                          filteredGroceryRequests.map((request) => (
                            <TableRow key={request.grocery_request_id}>
                              <TableCell className="font-medium">
                                {request.grocery_request_id}
                              </TableCell>
                              <TableCell>{request.name}</TableCell>
                              <TableCell>
                                {request.quantity_requested}
                              </TableCell>
                              <TableCell>
                                {getStatusBadge(
                                  request.status_sent,
                                  request.status_recieved
                                )}
                              </TableCell>
                              <TableCell className="text-right">
                                <Button variant="ghost" size="sm">
                                  <RefreshCw className="h-4 w-4 mr-2" />
                                  Update
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))
                        ) : (
                          <TableRow>
                            <TableCell
                              colSpan={5}
                              className="text-center py-4 text-muted-foreground"
                            >
                              No grocery requests found
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
