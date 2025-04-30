"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell, Calendar, Eye, Megaphone, Pin, Plus } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
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
}
