"use client";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, Clock, Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
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

export default function UtensilRequests() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedUtensil, setSelectedUtensil] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [requests, setRequests] = useState<UtensilRequest[]>([]);

  const [currentUser, setUser] = useState<any | null>(null);
  const [userType, setUserType] = useState<any | null>(null);

  // const supervisorId = 1; // Replace with actual logged-in supervisor's ID
  type UtensilRequest = {
    utensil_request_id: number;
    quantity_requested: number;
    status_sent: string;
    status_recieved: string;
    utensils: {
      name: string;
    };
  };

  const utensils = [
    { id: 1, name: "Fork" },
    { id: 2, name: "Spoon" },
    { id: 3, name: "Knife" },
    { id: 4, name: "Plate" },
    { id: 5, name: "Bowl" },
    { id: 6, name: "Cup" },
    { id: 7, name: "Glass" },
    { id: 8, name: "Chopsticks" },
    { id: 9, name: "Whisk" },
    { id: 10, name: "Tongs" },
    { id: 11, name: "Ladle" },
    { id: 12, name: "Rolling Pin" },
    { id: 13, name: "Measuring Cup" },
    { id: 14, name: "Grater" },
    { id: 15, name: "Peeler" },
    { id: 16, name: "Spatula" },
    { id: 17, name: "Colander" },
    { id: 18, name: "Cutting Board" },
    { id: 19, name: "Can Opener" },
    { id: 20, name: "Strainer" },
  ];

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      setUser(parsedUser);
      if (parsedUser.role === "Supervisor") {
        setUserType("sup");
      } else if (parsedUser.role === "Worker") {
        setUserType("worker");
      }
      console.log(parsedUser);
    }
  }, []);

  useEffect(() => {
    if (currentUser && userType) {
      getRequests();
    }
  }, [currentUser, userType]);
  
  const BACKEND_HOST = process.env.NEXT_PUBLIC_BACKEND_HOST;

  const getRequests = async () => {
    try {
      const response = await fetch(
        `${BACKEND_HOST}/api/${userType}/requested/${currentUser.id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.json();
      console.log(result);
      setRequests(result);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmitRequest = async () => {
    const selectedUtensilObj = utensils.find(
      (u) => u.id.toString() === selectedUtensil
    );
    if (!selectedUtensilObj) return;

    const newRequest = {
      utensil_request_id: parseInt(selectedUtensil),
      hospital_id: currentUser.hospital_id,
      quantity_requested: parseInt(quantity),
      status_sent: "Yes",
      status_recieved: "No",
    };

    try {
      const list = {
        list: newRequest,
      };
      console.log(list);
      // const BACKEND_HOST = process.env.NEXT_PUBLIC_BACKEND_HOST;
      const response = await fetch(
        `${BACKEND_HOST}/api/${userType}/genreq/${currentUser.id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            list: [newRequest],
          }),
        }
      );

      if (response.ok) {
        setRequests((prev: UtensilRequest[]) => [
          ...prev,
          {
            utensil_request_id: newRequest.utensil_request_id,
            quantity_requested: newRequest.quantity_requested,
            status_sent: "Yes",
            status_recieved: "No",
            utensils: {
              name: selectedUtensilObj.name,
            },
          },
        ]);

        setIsDialogOpen(false);
        setSelectedUtensil("");
        setQuantity("1");
        getRequests();
      } else {
        console.error("Request failed");
      }
    } catch (err) {
      console.error("Error submitting request:", err);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Tabs defaultValue="all" className="space-y-4">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="all">All Requests</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="approved">Approved</TabsTrigger>
          </TabsList>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                New Request
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Request Utensils</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="utensil">Utensil</Label>
                  <Select
                    value={selectedUtensil}
                    onValueChange={setSelectedUtensil}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select utensil" />
                    </SelectTrigger>
                    <SelectContent>
                      {utensils.map((u) => (
                        <SelectItem key={u.id} value={u.id.toString()}>
                          {u.name}
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
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button onClick={handleSubmitRequest}>Submit Request</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <TabsContent value="all" className="space-y-3">
          {Array.isArray(requests) &&
            requests.map((request, index) => (
              <UtensilRequestCard
                key={index}
                request={request}
              />
            ))}
        </TabsContent>

        <TabsContent value="pending" className="space-y-3">
          {Array.isArray(requests) &&
            requests
              .filter((r) => r.status_recieved === "No")
              .map((request, index) => (
                <UtensilRequestCard
                  key={index}
                  request={request}
                />
              ))}
        </TabsContent>

        <TabsContent value="approved" className="space-y-3">
          {Array.isArray(requests) &&
            requests
              .filter((r) => r.status_recieved === "Yes")
              .map((request,index) => (
                <UtensilRequestCard key={index} request={request} />
              ))}
        </TabsContent>
      </Tabs>

    </div>
  );
}

interface UtensilRequestCardProps {
  request: {
    utensil_request_id: number;
    quantity_requested: number;
    status_sent: string;
    status_recieved: string;
    utensils: {
      name: string;
    };
  };
}
function UtensilRequestCard({ request }: UtensilRequestCardProps) {
  const getStatusIcon = () => {
    if (request.status_recieved === "Yes") {
      return <CheckCircle2 className="h-5 w-5 text-green-600" />;
    } else {
      return <Clock className="h-5 w-5 text-amber-600" />;
    }
  };

  const getStatusBadge = () => {
    if (request.status_recieved === "Yes") {
      return <Badge className="bg-green-100 text-green-800">Received</Badge>;
    } else {
      return <Badge className="bg-amber-100 text-amber-800">Pending</Badge>;
    }
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {getStatusIcon()}
            <CardTitle className="text-lg">
              {request.utensils?.name || "Unknown Utensil"}
            </CardTitle>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className="border-blue-200 text-blue-800">
              Qty: {request.quantity_requested}
            </Badge>
            {getStatusBadge()}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Request for {request.quantity_requested}{" "}
          {request.utensils?.name?.toLowerCase() ?? "utensils"}
        </p>
      </CardContent>
    </Card>
  );
}
