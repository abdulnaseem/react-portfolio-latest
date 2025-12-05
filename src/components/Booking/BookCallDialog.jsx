// components/Booking/BookCallDialog.jsx
import {
    Dialog, DialogHeader, DialogTitle, DialogDescription,
    DialogBody, DialogFooter
  } from "../ui/dialog";
  import { Button } from "../ui/button";
  
  export default function BookCallDialog({ open, onOpenChange, bookingUrl }) {
    const url = bookingUrl || import.meta?.env?.VITE_BOOKING_URL;
  
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogHeader>
          <DialogTitle>Book a call</DialogTitle>
          <DialogDescription>
            Choose a time on my Google Calendar — a Meet link is created automatically.
          </DialogDescription>
        </DialogHeader>
  
        <DialogBody>
          <p className="text-sm text-slate-700">
            Google blocks their booking page from being embedded, so you’ll open it in a new tab.
            Pick a slot that works for you; you’ll get a calendar invite with a Google Meet link.
          </p>
  
          <div className="mt-4 rounded-xl border bg-slate-50 p-4 text-sm text-slate-600">
            <div className="font-medium mb-1">What happens next?</div>
            <ul className="list-disc pl-5 space-y-1">
              <li>Pick a time → confirm</li>
              <li>You receive an email + calendar invite</li>
              <li>Meet link is added automatically</li>
            </ul>
          </div>
        </DialogBody>
  
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>Close</Button>
          {url ? (
            <a href={url} target="_blank" rel="noreferrer">
              <Button>Open booking page</Button>
            </a>
          ) : (
            <a href="/#contact" onClick={() => onOpenChange(false)}>
              <Button>Go to contact</Button>
            </a>
          )}
        </DialogFooter>
      </Dialog>
    );
  }
  