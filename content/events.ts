export type EventStatus = 'upcoming' | 'past'

export type EventItem = {
  id: string
  name: string
  date: string
  venue: string
  suburb: string
  city: string
  ticketPrice: string
  bonusTicket?: string
  eventSpecial?: string
  rsvpUrl: string
  status: EventStatus
  recap?: string
}

/* Update this file with real event details as they are confirmed.
   The page renders whatever is in the `events` array below.
   Add past events by changing status to 'past' and adding a recap. */

export const events: EventItem[] = [
  {
    id: 'sydney-launch-2026',
    name: 'Business Heads Sydney — Launch Event',
    date: '1 July 2026',
    venue: 'East Village Hotel',
    suburb: 'Balmain',
    city: 'Sydney, NSW',
    ticketPrice: '$40 per person.',
    bonusTicket: 'For this launch event, every ticket comes with a bonus ticket to bring someone along.',
    eventSpecial: 'Every guest gets a free professional headshot on arrival.',
    rsvpUrl: 'https://www.businessheads.com.au/launch',
    status: 'upcoming',
  },
]

export const eventFormat = [
  {
    time: 'Arrival',
    description: 'Doors open. Time to settle in.',
  },
  {
    time: 'The activity',
    description: 'A prompting topic or facilitated activity. The whole room participates.',
  },
  {
    time: 'The quarterly draw',
    description: '$10,000 drawn live. One member wins.',
  },
  {
    time: 'Open conversation',
    description: 'The rest of the evening is yours.',
  },
]

export const eventsHero = {
  overline: 'Events',
  heading: 'Quarterly. Sydney.',
  body: 'One evening, four times a year.',
}

export const eventsIntro = {
  heading: 'What to expect.',
  body: 'Every Business Heads event follows the same format. A facilitated activity that gets the whole room talking about something real, a live prize draw, lucky door prizes, and open conversation. We\'ll also throw in something extra at every event — something that will help you and your business. Think a professional headshot, a 5-minute brand consult, a business card audit, personality testing, and more. Tickets are $40. Members get in at the member rate.',
  link: { href: '/experience', label: 'Read more about the experience' },
}
