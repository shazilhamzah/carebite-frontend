<<<<<<< HEAD
"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell, Calendar, Eye, Megaphone, Pin, Plus } from "lucide-react"
=======
"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
>>>>>>> main
import {
  Dialog,
  DialogContent,
  DialogDescription,
<<<<<<< HEAD
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

interface AnnouncementsProps {
  canCreate?: boolean
}

export default function Announcements({ canCreate = false }: AnnouncementsProps) {
  // Sample announcements data
  const announcements = [
    {
      id: 1,
      title: "Company Holiday Schedule",
      content: "Please note that the office will be closed on May 1st for Labor Day and May 5th for Eid al-Fitr.",
      date: "April 20, 2023",
      category: "Holiday",
      isPinned: true,
      isImportant: true,
    },
    {
      id: 2,
      title: "Quarterly Performance Review",
      content: "The Q2 performance reviews will begin on May 15th. Please prepare your self-assessment by May 10th.",
      date: "April 18, 2023",
      category: "HR",
      isPinned: true,
      isImportant: false,
    },
    {
      id: 3,
      title: "New Health Insurance Provider",
      content:
        "Starting June 1st, we will be switching to a new health insurance provider. Information sessions will be held next week.",
      date: "April 15, 2023",
      category: "Benefits",
      isPinned: false,
      isImportant: true,
    },
    {
      id: 4,
      title: "Office Maintenance",
      content: "The building management will be conducting maintenance on the air conditioning system this weekend.",
      date: "April 12, 2023",
      category: "Facility",
      isPinned: false,
      isImportant: false,
    },
    {
      id: 5,
      title: "Team Building Event",
      content:
        "We're planning a team building event for the end of May. Please fill out the survey to indicate your preferences.",
      date: "April 10, 2023",
      category: "Events",
      isPinned: false,
      isImportant: false,
    },
  ]

  return (
    <div className="container mx-auto p-6">
      <Tabs defaultValue="all" className="space-y-6">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="important">Important</TabsTrigger>
            <TabsTrigger value="pinned">Pinned</TabsTrigger>
          </TabsList>
          <div className="flex items-center gap-2">
            {canCreate && <CreateAnnouncementDialog />}
            <Button variant="outline" size="sm">
              <Bell className="mr-2 h-4 w-4" />
              Notification Settings
            </Button>
          </div>
        </div>

        <TabsContent value="all" className="space-y-4">
          {announcements.map((announcement) => (
            <AnnouncementCard key={announcement.id} announcement={announcement} canEdit={canCreate} />
          ))}
        </TabsContent>

        <TabsContent value="important" className="space-y-4">
          {announcements
            .filter((a) => a.isImportant)
            .map((announcement) => (
              <AnnouncementCard key={announcement.id} announcement={announcement} canEdit={canCreate} />
            ))}
        </TabsContent>

        <TabsContent value="pinned" className="space-y-4">
          {announcements
            .filter((a) => a.isPinned)
            .map((announcement) => (
              <AnnouncementCard key={announcement.id} announcement={announcement} canEdit={canCreate} />
            ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface AnnouncementCardProps {
  announcement: {
    id: number
    title: string
    content: string
    date: string
    category: string
    isPinned: boolean
    isImportant: boolean
  }
  canEdit?: boolean
}

function AnnouncementCard({ announcement, canEdit = false }: AnnouncementCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Megaphone className="h-5 w-5 text-muted-foreground" />
            <CardTitle className="text-lg">{announcement.title}</CardTitle>
          </div>
          <div className="flex items-center space-x-2">
            {announcement.isPinned && <Pin className="h-4 w-4 text-muted-foreground" />}
            {announcement.isImportant && <Badge variant="destructive">Important</Badge>}
            <Badge variant="outline">{announcement.category}</Badge>
          </div>
        </div>
        <CardDescription className="flex items-center pt-1">
          <Calendar className="mr-1 h-3 w-3" />
          {announcement.date}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{announcement.content}</p>
        <div className="mt-4 flex items-center justify-between">
          <Button variant="ghost" size="sm" className="text-xs">
            <Eye className="mr-1 h-3 w-3" />
            Mark as Read
          </Button>
          {canEdit && (
            <div className="flex gap-2">
              <Button size="sm" variant="outline" className="text-xs">
                Edit
              </Button>
              <Button size="sm" variant="outline" className="text-xs text-destructive">
                Delete
              </Button>
            </div>
          )}
          {announcement.category === "Events" && (
            <Button size="sm" variant="outline" className="text-xs">
              RSVP
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

function CreateAnnouncementDialog() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Create Announcement
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Create Announcement</DialogTitle>
          <DialogDescription>Create a new announcement for your hospital.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" placeholder="Announcement title" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="category">Category</Label>
            <Select>
              <SelectTrigger id="category">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">General</SelectItem>
                <SelectItem value="holiday">Holiday</SelectItem>
                <SelectItem value="hr">HR</SelectItem>
                <SelectItem value="facility">Facility</SelectItem>
                <SelectItem value="events">Events</SelectItem>
                <SelectItem value="benefits">Benefits</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="content">Content</Label>
            <Textarea id="content" placeholder="Announcement content" className="min-h-[100px]" />
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="important" />
              <Label htmlFor="important">Mark as Important</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="pinned" />
              <Label htmlFor="pinned">Pin Announcement</Label>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="button" variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button type="submit" onClick={() => setOpen(false)}>
            Create Announcement
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
=======
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

// Sample announcements data - in a real app, this would come from an API or database
const announcements = [
  {
    id: 1,
    title: "Hospital Accreditation Achievement",
    date: "2023-04-15",
    category: "achievement",
    content: `
      <p>We are pleased to announce that our hospital has successfully achieved Joint Commission International (JCI) accreditation for the fourth consecutive time.</p>
      
      <p>This prestigious recognition reflects our unwavering commitment to maintaining the highest standards of patient care and safety. The accreditation process involved a comprehensive evaluation of our facilities, procedures, and staff competencies.</p>
      
      <p>Key highlights from the accreditation report:</p>
      <ul>
        <li>Excellence in patient safety protocols</li>
        <li>Outstanding infection control measures</li>
        <li>Exceptional medication management systems</li>
        <li>Comprehensive staff training programs</li>
      </ul>
      
      <p>We extend our heartfelt gratitude to all staff members whose dedication and hard work made this achievement possible. This accreditation reinforces our position as a leading healthcare provider committed to excellence.</p>
      
      <p>The official certificate will be displayed in the main lobby starting next week.</p>
    `,
  },
  {
    id: 2,
    title: "Updated COVID-19 Protocols",
    date: "2023-04-10",
    category: "important",
    content: `
      <p>In response to the latest CDC guidelines and local health department recommendations, we are implementing updated COVID-19 protocols effective immediately.</p>
      
      <p><strong>Key changes include:</strong></p>
      <ul>
        <li>Revised masking requirements in non-patient care areas</li>
        <li>Updated visitor policy allowing two visitors per patient</li>
        <li>Modified screening procedures at hospital entrances</li>
        <li>New testing protocols for staff and patients</li>
      </ul>
      
      <p>All staff members are required to complete the updated COVID-19 safety training module available on the learning management system by April 20, 2023.</p>
      
      <p>Department heads will conduct briefing sessions this week to address any questions or concerns. Please refer to the detailed policy document shared via email for comprehensive information.</p>
      
      <p>Thank you for your continued cooperation in maintaining a safe environment for our patients, visitors, and staff.</p>
    `,
  },
  {
    id: 3,
    title: "Annual Staff Appreciation Week",
    date: "2023-04-05",
    category: "event",
    content: `
      <p>We are excited to announce our Annual Staff Appreciation Week scheduled for May 8-12, 2023!</p>
      
      <p>This year's theme is "Heroes in Healthcare: Above and Beyond." The week will feature various activities and events designed to celebrate the exceptional dedication and hard work of our entire staff.</p>
      
      <p><strong>Schedule of Events:</strong></p>
      <ul>
        <li><strong>Monday:</strong> Kick-off breakfast (7:00-10:00 AM, Main Cafeteria)</li>
        <li><strong>Tuesday:</strong> Wellness Day featuring massage stations and mindfulness sessions</li>
        <li><strong>Wednesday:</strong> Department recognition ceremonies</li>
        <li><strong>Thursday:</strong> Hospital-wide picnic lunch (11:00 AM-2:00 PM, East Garden)</li>
        <li><strong>Friday:</strong> Awards ceremony and closing reception (3:00-5:00 PM, Auditorium)</li>
      </ul>
      
      <p>Special giveaways will be distributed throughout the week. Don't forget to wear your department colors on Thursday for the department spirit contest!</p>
      
      <p>We look forward to celebrating with all of you!</p>
    `,
  },
  {
    id: 4,
    title: "Electronic Health Record System Upgrade",
    date: "2023-03-28",
    category: "information",
    content: `
      <p>We will be upgrading our Electronic Health Record (EHR) system to version 12.5 on the weekend of April 22-23, 2023.</p>
      
      <p>The system will be unavailable from Saturday, April 22 at 11:00 PM until Sunday, April 23 at 5:00 AM. During this time, please follow the downtime procedures as outlined in the hospital policy.</p>
      
      <p><strong>Key improvements in the new version include:</strong></p>
      <ul>
        <li>Enhanced user interface for improved workflow efficiency</li>
        <li>New medication reconciliation module</li>
        <li>Improved clinical decision support tools</li>
        <li>Advanced reporting capabilities</li>
        <li>Better integration with laboratory and radiology systems</li>
      </ul>
      
      <p>Training sessions for the new features will be conducted from April 10-20. Please sign up for a session through the Learning Management System.</p>
      
      <p>If you have any questions, please contact the IT Help Desk at ext. 4357 or email <strong>helpdesk@hospital.org</strong>.</p>
    `,
  },
  {
    id: 5,
    title: "New Parking Garage Opening",
    date: "2023-03-20",
    category: "information",
    content: `
      <p>We are pleased to announce that the new West Parking Garage will open on May 1, 2023.</p>
      
      <p>The new garage adds 450 parking spaces and will help alleviate the parking constraints we've experienced. Staff members with parking permits B and C will be relocated to the new garage.</p>
      
      <p><strong>Important information:</strong></p>
      <ul>
        <li>New access cards will be distributed from April 24-28 at the Security Office</li>
        <li>The garage will feature electric vehicle charging stations on Level 1</li>
        <li>A covered walkway connects the garage to the main hospital building</li>
        <li>24/7 security monitoring and emergency call boxes are installed on each level</li>
      </ul>
      
      <p>A map of the new parking assignments and walking routes will be posted on the intranet next week.</p>
      
      <p>Thank you for your patience during the construction period. We believe this addition will significantly improve the parking experience for both staff and visitors.</p>
    `,
  },
];

export default function Announcements() {
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<
    (typeof announcements)[0] | null
  >(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAnnouncementClick = (announcement: (typeof announcements)[0]) => {
    setSelectedAnnouncement(announcement);
    setIsDialogOpen(true);
  };

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
                      {announcements.map((announcement) => (
                        <TableRow
                          key={announcement.id}
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
                          <TableCell>{formatDate(announcement.date)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
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
    </div>
  );
>>>>>>> main
}
