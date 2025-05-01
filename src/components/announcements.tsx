"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bell, Calendar, Megaphone, AlertCircle, Info, Loader2, ChevronRight } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog"
import { fetchWorkerAnnouncements } from "@/lib/api"
import { AlertDialog, AlertDialogDescription, AlertDialogTitle } from "@/components/ui/alert-dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface Announcement {
  id: number
  title: string
  content: string
  date_added: string
  category: string
}

interface AnnouncementsProps {
  userId: number
}

export default function Announcements({ userId }: AnnouncementsProps) {
  const [announcements, setAnnouncements] = useState<Announcement[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<Announcement | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  useEffect(() => {
    const loadAnnouncements = async () => {
      try {
        const data = await fetchWorkerAnnouncements(userId)
        if (typeof data === "string") {
          // Handle the case where the API returns a string message
          setAnnouncements([])
        } else {
          setAnnouncements(data)
        }
      } catch (err) {
        setError("Failed to load announcements")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    loadAnnouncements()
  }, [userId])

  const handleAnnouncementClick = (announcement: Announcement) => {
    setSelectedAnnouncement(announcement)
    setIsDialogOpen(true)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  const getCategoryBadge = (category: string) => {
    switch (category?.toLowerCase()) {
      case "important":
        return (
          <Badge variant="outline" className="bg-red-50 text-red-600 border-red-200 flex items-center gap-1">
            <AlertCircle className="h-3 w-3" />
            Important
          </Badge>
        )
      case "achievement":
        return (
          <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200 flex items-center gap-1">
            <Megaphone className="h-3 w-3" />
            Achievement
          </Badge>
        )
      case "event":
        return (
          <Badge variant="outline" className="bg-amber-50 text-amber-600 border-amber-200 flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            Event
          </Badge>
        )
      default:
        return (
          <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-200 flex items-center gap-1">
            <Info className="h-3 w-3" />
            Information
          </Badge>
        )
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  if (error) {
    return (
          <div className="container mx-auto p-6">
            <div className="flex items-center gap-3 rounded-md border border-red-300 bg-red-50 p-4 text-red-700">
              <AlertCircle className="h-5 w-5 text-red-600" />
              <span>{error}</span>
            </div>
          </div>
        )
  }

  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <div className="px-4 lg:px-6">
            <Card className="overflow-hidden">
              <CardHeader className="bg-primary/5 pb-6 pt-6">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="h-5 w-5 text-primary" />
                    Announcements
                  </CardTitle>
                  <Badge variant="outline" className="bg-primary/10 text-primary px-2.5 py-1">
                    {announcements.length} Total
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="p-0">
                {announcements.length === 0 ? (
                  <div className="p-6 text-center text-muted-foreground">No announcements available</div>
                ) : (
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
                          <TableRow key={announcement.id} className="cursor-pointer hover:bg-muted/50">
                            <TableCell
                              className="font-medium text-primary"
                              onClick={() => handleAnnouncementClick(announcement)}
                            >
                              <div className="flex items-center justify-between">
                                <span>{announcement.title}</span>
                                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                              </div>
                            </TableCell>
                            <TableCell>{getCategoryBadge(announcement.category)}</TableCell>
                            <TableCell>{formatDate(announcement.date_added)}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
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
                <span className="text-sm text-muted-foreground">{formatDate(selectedAnnouncement.date_added)}</span>
              </div>
              <DialogTitle className="text-xl">{selectedAnnouncement.title}</DialogTitle>
              <DialogDescription className="sr-only">Announcement details</DialogDescription>
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
  )
}
