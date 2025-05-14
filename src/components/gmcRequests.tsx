"use client";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Clock, Plus } from "lucide-react";
import { Button } from "./ui/button";

export default function UtensilRequests() {
  const [requests, setRequests] = useState<UtensilRequest[]>([]);

  const [currentUser, setUser] = useState<any | null>(null);
  // const BACKEND_HOST = "http://localhost:5000";
  const BACKEND_HOST = process.env.NEXT_PUBLIC_BACKEND_HOST;

  type UtensilRequest = {
    utensil_request_id: number;
    quantity_requested: number;
    status_sent: string;
    status_recieved: string;
    utensils: {
      name: string;
    };
  };

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      setUser(parsedUser);
      console.log(parsedUser);
    }
  }, []);

  useEffect(() => {
    if (currentUser) {
      getRequests();
    }
  }, [currentUser]);

  const getRequests = async () => {
    try {
      const response = await fetch(
        `${BACKEND_HOST}/api/gmc/requesteduten/${currentUser.id}`,
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

  return (
    <div className="container mx-auto p-4">
      {Array.isArray(requests) &&
        requests.map((request, index) => (
          <UtensilRequestCard
            key={index}
            request={request}
            userID={currentUser.id}
          />
        ))}
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
  userID: number;
}

function UtensilRequestCard({ request, userID }: UtensilRequestCardProps) {
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

  const BACKEND_HOST = process.env.NEXT_PUBLIC_BACKEND_HOST;

  const handleApproval = async () => {
    try {
      const response = await fetch(
        `${BACKEND_HOST}/api/gmc/requesteduten/${userID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            list: [
              {
                utensil_request_id: request.utensil_request_id,
                quantity_requested: request.quantity_requested,
                status_sent: "Yes",
                status_recieved: "Yes",
              },
            ],
          }),
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
    console.log(request);
  };

  return (
    <Card className="mb-6">
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
        <div className="flex justify-between items-center">
          <p className="text-sm text-muted-foreground">
            Request for {request.quantity_requested}{" "}
            {request.utensils?.name?.toLowerCase() ?? "utensils"}
          </p>
          <Button
            size="sm"
            className="bg-green-600 hover:bg-green-700"
            onClick={handleApproval}
          >
            Approve
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
