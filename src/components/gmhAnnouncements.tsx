"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  BellIcon,
  CalendarIcon,
  ChevronRightIcon,
  MegaphoneIcon,
  AlertCircleIcon,
  InfoIcon,
} from "lucide-react";

export default function GMHAnnouncements() {
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<
    (typeof announcements)[0] | null
  >(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAnnouncementClick = (announcement: (typeof announcements)[0]) => {
    setSelectedAnnouncement(announcement);
    setIsDialogOpen(true);
  };

  const [currentUser, setUser] = useState<any | null>(null);
  const [announcements, setAnnouncements] = useState<any[]>([]);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  // const BACKEND_HOST = process.env.NEXT_PUBLIC_BACKEND_HOST;
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
    console.log("Current user after load:", currentUser);
  }, [currentUser]);

  async function getAnnouncements(role: String) {
    try {
      const res = await fetch(
        `${BACKEND_HOST}/api/gmh/announcements/${currentUser.id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      // console.log("API response:", data);
      if (!res.ok) throw new Error(data.message || "Failed to fetch");

      // Assuming API returns [{ date_added, title, details }]
      let formatted: any = [];
      if (data) {
        formatted = data.map((item: any, index: number) => ({
          id: item.id || index,
          title: item.title,
          date: item.date_added,
          category: "information", // API doesn’t return category
          content: `<p>${item.details}</p>`, // Wrap in <p> for consistency
        }));

        setAnnouncements(formatted);
      } else if (role === "General Manager Coordinator") {
        const res = await fetch(
          `${BACKEND_HOST}/api/gmc/announcements/${currentUser.id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await res.json();
        // console.log("API response:", data);
        if (!res.ok) throw new Error(data.message || "Failed to fetch");

        // Assuming API returns [{ date_added, title, details }]
        let formatted: any = [];
        if (data) {
          formatted = data.map((item: any, index: number) => ({
            id: item.id || index,
            title: item.title,
            date: item.date_added,
            category: "information", // API doesn’t return category
            content: `<p>${item.details}</p>`, // Wrap in <p> for consistency
          }));
        }

        setAnnouncements(formatted);
      }
    } catch (err) {
      console.error("Error fetching announcements:", err);
    }
  }

  useEffect(() => {
    if (!currentUser) return;

    let role: string = "";

    role = "General Manager Hospital";
    getAnnouncements(role);

    console.log("Current user after null check:", currentUser);
  }, [currentUser]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case "important":
        return (
          <Badge
            variant="outline"
            className="bg-red-50 text-red-600 border-red-200 flex items-center gap-1"
          >
            <AlertCircleIcon className="h-3 w-3" />
            Important
          </Badge>
        );
      case "achievement":
        return (
          <Badge
            variant="outline"
            className="bg-green-50 text-green-600 border-green-200 flex items-center gap-1"
          >
            <MegaphoneIcon className="h-3 w-3" />
            Achievement
          </Badge>
        );
      case "event":
        return (
          <Badge
            variant="outline"
            className="bg-amber-50 text-amber-600 border-amber-200 flex items-center gap-1"
          >
            <CalendarIcon className="h-3 w-3" />
            Event
          </Badge>
        );
      default:
        return (
          <Badge
            variant="outline"
            className="bg-blue-50 text-blue-600 border-blue-200 flex items-center gap-1"
          >
            <InfoIcon className="h-3 w-3" />
            Information
          </Badge>
        );
    }
  };

  const addAnnouncement = async () => {
    try {
      const response = await fetch(
        `${BACKEND_HOST}/api/gmh/announcements/${currentUser.id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: newTitle,
            details: newContent,
          }),
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <div className="px-4 lg:px-6">
            <Card className="overflow-hidden">
              <CardHeader className="bg-primary/5 pb-6 pt-6">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <BellIcon className="h-5 w-5 text-primary" />
                    Announcements
                  </CardTitle>
                  <Badge
                    variant="outline"
                    className="bg-primary/10 text-primary px-2.5 py-1"
                  >
                    {announcements.length} Total
                  </Badge>
                </div>
              </CardHeader>
              {announcements.length == 0 ? (
                <h1 className="text-lg font-bold text-center">
                  No announcements yet!
                </h1>
              ) : (
                <CardContent className="p-0">
                  <div className="p-4">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[60%]">Title</TableHead>
                          <TableHead className="w-[20%]">Category</TableHead>
                          <TableHead className="w-[20%]">Date</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {announcements.map((announcement, index) => (
                          <TableRow
                            key={index}
                            className="cursor-pointer hover:bg-muted/50"
                          >
                            <TableCell
                              className="font-medium text-primary"
                              onClick={() =>
                                handleAnnouncementClick(announcement)
                              }
                            >
                              <div className="flex items-center justify-between">
                                <span>{announcement.title}</span>
                                <ChevronRightIcon className="h-4 w-4 text-muted-foreground" />
                              </div>
                            </TableCell>
                            <TableCell>
                              {getCategoryBadge(announcement.category)}
                            </TableCell>
                            <TableCell>
                              {formatDate(announcement.date)}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              )}
              <Button
                className="mx-auto"
                size="sm"
                onClick={() => setIsAddDialogOpen(true)}
              >
                Add Announcement
              </Button>
            </Card>
          </div>
        </div>
      </div>

      {/* Announcement Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        {selectedAnnouncement && (
          <DialogContent className="sm:max-w-[500px] p-4 max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <div className="flex items-center gap-2 mb-1">
                {getCategoryBadge(selectedAnnouncement.category)}
                <span className="text-sm text-muted-foreground">
                  {formatDate(selectedAnnouncement.date)}
                </span>
              </div>
              <DialogTitle className="text-xl">
                {selectedAnnouncement.title}
              </DialogTitle>
              <DialogDescription className="sr-only">
                Announcement details
              </DialogDescription>
            </DialogHeader>
            <div
              className="mt-2 prose prose-xs max-w-none text-sm"
              dangerouslySetInnerHTML={{ __html: selectedAnnouncement.content }}
            />
            <div className="mt-4 flex justify-end">
              <DialogClose asChild>
                <Button>Close</Button>
              </DialogClose>
            </div>
          </DialogContent>
        )}
      </Dialog>

      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Add New Announcement</DialogTitle>
            <DialogDescription>Fill out the details below:</DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Title"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="border rounded p-2 text-sm"
            />
            <textarea
              placeholder="Announcement"
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
              rows={4}
              className="border rounded p-2 text-sm"
            />
          </div>
          <div className="flex justify-end gap-2 mt-4">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button
              onClick={
                addAnnouncement
              }
            >
              Save
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
