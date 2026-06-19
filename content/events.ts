export type EventItem = {
  id: string
  name: string
  date: string
  venue: string
  suburb: string
  city: string
  ticketPrice: string
  rsvpUrl: string
  status: 'upcoming' | 'past'
  recap?: string
}

/* Update this file with real event details as they are confirmed.
   The page renders whatever is in the `events` array below.
   Add past events by changing status to 'past' and adding a recap. */

export const events: EventItem[] = [
  {
    id: 'sydney-launch-2026',
    name: 'Business Heads Sydney — Launch Event',
    date: '[Date to be confirmed]',
    venue: '[Venue to be confirmed]',
    suburb: '[Suburb]',
    city: 'Sydney, NSW',
    ticketPrice: '$40 per person. Free plus-one for this first event.',
    rsvpUrl: '[RSVP link to be added — Eventbrite or Circle]',
    status: 'upcoming',
  },
]

export const eventFormat = [
  { time: 'Arrival', description: 'Doors open. Time to settle in before anything starts.' },
  {
    time: 'Question & connection',
    description:
      'A structured activity around one honest question. Not a pitch round. No agenda.',
  },
  {
    time: 'Quarterly draw',
    description: 'The $10,000 quarterly prize is drawn live. One member wins.',
  },
  { time: 'Open networking', description: 'Unstructured conversation. Leave when you are ready.' },
]
