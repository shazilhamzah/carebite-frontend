"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
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
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AlertCircle, CheckCircle, MessageSquare, Plus, Star } from "lucide-react"

interface ReviewsProps {
  canSubmit?: boolean
  canReview?: boolean
  canRespond?: boolean
}

export default function Reviews({ canSubmit = false, canReview = false, canRespond = false }: ReviewsProps) {
  const [activeTab, setActiveTab] = useState("all")

  // Sample reviews data
  const reviewsData = [
    {
      id: 1,
      title: "Food Quality Issue",
      description: "The rice served today was undercooked and hard to eat.",
      date: "May 15, 2023",
      status: "open",
      priority: "high",
      submittedBy: "Hospital A",
      response: "",
    },
    {
      id: 2,
      title: "Excellent Meal Service",
      description: "The new menu items have been well received by patients. Great job!",
      date: "May 12, 2023",
      status: "closed",
      priority: "medium",
      submittedBy: "Hospital B",
      response: "Thank you for your positive feedback. We're glad the new menu items are being enjoyed.",
    },
    {
      id: 3,
      title: "Late Delivery",
      description: "Lunch delivery was 45 minutes late today, causing scheduling issues.",
      date: "May 10, 2023",
      status: "in-progress",
      priority: "high",
      submittedBy: "Hospital C",
      response: "We're investigating the delay with our logistics team and will provide an update soon.",
    },
    {
      id: 4,
      title: "Portion Size Concern",
      description: "Portion sizes for the dinner meals have been inconsistent this week.",
      date: "May 8, 2023",
      status: "open",
      priority: "medium",
      submittedBy: "Hospital A",
      response: "",
    },
    {
      id: 5,
      title: "Special Diet Request",
      description: "Need more options for patients with gluten allergies.",
      date: "May 5, 2023",
      status: "closed",
      priority: "low",
      submittedBy: "Hospital D",
      response: "We've updated our menu to include more gluten-free options starting next week.",
    },
  ]

  const filteredReviews =
    activeTab === "all" ? reviewsData : reviewsData.filter((review) => review.status === activeTab)

  return (
    <div className="space-y-6 m-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Reviews & Feedback</h2>
        {canSubmit && <SubmitReviewDialog />}
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="all">All Reviews</TabsTrigger>
          <TabsTrigger value="open">Open</TabsTrigger>
          <TabsTrigger value="in-progress">In Progress</TabsTrigger>
          <TabsTrigger value="closed">Closed</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>
                {activeTab === "all"
                  ? "All Reviews"
                  : activeTab === "open"
                    ? "Open Reviews"
                    : activeTab === "in-progress"
                      ? "Reviews In Progress"
                      : "Closed Reviews"}
              </CardTitle>
              <CardDescription>
                {filteredReviews.length} {filteredReviews.length === 1 ? "review" : "reviews"} found
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Submitted By</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredReviews.map((review) => (
                    <TableRow key={review.id}>
                      <TableCell className="font-medium">{review.title}</TableCell>
                      <TableCell>{review.submittedBy}</TableCell>
                      <TableCell>{review.date}</TableCell>
                      <TableCell>
                        {review.priority === "high" && (
                          <Badge variant="outline" className="bg-red-50 text-red-600 hover:bg-red-50">
                            High
                          </Badge>
                        )}
                        {review.priority === "medium" && (
                          <Badge variant="outline" className="bg-yellow-50 text-yellow-600 hover:bg-yellow-50">
                            Medium
                          </Badge>
                        )}
                        {review.priority === "low" && (
                          <Badge variant="outline" className="bg-green-50 text-green-600 hover:bg-green-50">
                            Low
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell>
                        {review.status === "open" && (
                          <Badge variant="outline" className="bg-blue-50 text-blue-600 hover:bg-blue-50">
                            Open
                          </Badge>
                        )}
                        {review.status === "in-progress" && (
                          <Badge variant="outline" className="bg-purple-50 text-purple-600 hover:bg-purple-50">
                            In Progress
                          </Badge>
                        )}
                        {review.status === "closed" && (
                          <Badge variant="outline" className="bg-green-50 text-green-600 hover:bg-green-50">
                            Closed
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <ViewReviewDialog review={review} canRespond={canRespond} canReview={canReview} />
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function SubmitReviewDialog() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Submit Review
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Submit Review</DialogTitle>
          <DialogDescription>Submit a new review or feedback about food quality or service.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="title">Title</Label>
            <input
              id="title"
              placeholder="Review title"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="priority">Priority</Label>
            <Select defaultValue="medium">
              <SelectTrigger id="priority">
                <SelectValue placeholder="Select priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="high">High</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Detailed description of your review or feedback"
              className="min-h-[100px]"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="button" variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button type="submit" onClick={() => setOpen(false)}>
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

function ViewReviewDialog({
  review,
  canRespond,
  canReview,
}: { review: any; canRespond?: boolean; canReview?: boolean }) {
  const [open, setOpen] = useState(false)
  const [response, setResponse] = useState(review.response)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <MessageSquare className="mr-2 h-4 w-4" />
          View
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {review.title}
            {review.priority === "high" && <AlertCircle className="h-5 w-5 text-red-500" />}
          </DialogTitle>
          <DialogDescription>
            Submitted by {review.submittedBy} on {review.date}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Badge
                variant="outline"
                className={
                  review.status === "open"
                    ? "bg-blue-50 text-blue-600"
                    : review.status === "in-progress"
                      ? "bg-purple-50 text-purple-600"
                      : "bg-green-50 text-green-600"
                }
              >
                {review.status === "open" ? "Open" : review.status === "in-progress" ? "In Progress" : "Closed"}
              </Badge>
              <Badge
                variant="outline"
                className={
                  review.priority === "high"
                    ? "bg-red-50 text-red-600"
                    : review.priority === "medium"
                      ? "bg-yellow-50 text-yellow-600"
                      : "bg-green-50 text-green-600"
                }
              >
                {review.priority.charAt(0).toUpperCase() + review.priority.slice(1)} Priority
              </Badge>
            </div>

            {canReview && (
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-400 cursor-pointer" fill="currentColor" />
                ))}
              </div>
            )}
          </div>

          <div className="bg-muted p-4 rounded-md">
            <p className="text-sm">{review.description}</p>
          </div>

          {review.response && (
            <div className="mt-4">
              <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Response
              </h4>
              <div className="bg-muted p-4 rounded-md">
                <p className="text-sm">{review.response}</p>
              </div>
            </div>
          )}

          {canRespond && (
            <div className="mt-4">
              <Label htmlFor="response" className="text-sm font-medium">
                {review.response ? "Update Response" : "Add Response"}
              </Label>
              <Textarea
                id="response"
                placeholder="Enter your response"
                className="mt-2 min-h-[100px]"
                value={response}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setResponse(e.target.value)}
              />
            </div>
          )}
        </div>
        <DialogFooter>
          <Button type="button" variant="outline" onClick={() => setOpen(false)}>
            Close
          </Button>
          {canRespond && (
            <Button type="submit" onClick={() => setOpen(false)}>
              {review.response ? "Update" : "Submit Response"}
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
