"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"

interface RequestCardProps {
  title: string
  description: string
  from: string
  date: string
  onReply?: () => void
  onAccept?: () => void
  onReject?: () => void
  showReplyForm?: boolean
}

export function RequestCard({
  title,
  description,
  from,
  date,
  onReply,
  onAccept,
  onReject,
  showReplyForm = false,
}: RequestCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-base">{title}</CardTitle>
          <span className="text-xs text-muted-foreground">{date}</span>
        </div>
        <CardDescription>From: {from}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{description}</p>

        {showReplyForm && (
          <div className="mt-4">
            <Textarea placeholder="Type your reply here..." className="mb-2" />
            <Button size="sm" onClick={onReply}>
              Send Reply
            </Button>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        {onAccept && (
          <Button size="sm" variant="outline" onClick={onAccept}>
            Accept
          </Button>
        )}
        {onReject && (
          <Button size="sm" variant="outline" onClick={onReject}>
            Reject
          </Button>
        )}
        {onReply && !showReplyForm && (
          <Button size="sm" onClick={onReply}>
            Reply
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
