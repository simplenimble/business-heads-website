export type EventStatus = 'upcoming' | 'past'

export type EventItem = {
  id: string
  name: string
  date: string
  venue: string
  suburb: string
  city: string
  ticketPrice?: string
  bonusTicket?: string
  eventSpecial?: string
  rsvpUrl?: string
  status: EventStatus
  recap?: string
  photos?: string[]
}

export type UpcomingEventCard = {
  id: string
  label: string
  heading: string
  body: string
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
    eventSpecial: 'Over $3,000 in lucky door prizes, free professional headshots on arrival, and food and drink provided. Note: the launch event does not include the $10,000 prize draw — the first draw is at our October event.',
    status: 'past',
    photos: [
      '/images/events/2026-07-01-launch/20260701_Business_Heads_Networking-East_Village_Hotel_Balmain_60.jpg',
      '/images/events/2026-07-01-launch/20260701_Business_Heads_Networking-East_Village_Hotel_Balmain_83.jpg',
      '/images/events/2026-07-01-launch/20260701_Business_Heads_Networking-East_Village_Hotel_Balmain_126.jpg',
      '/images/events/2026-07-01-launch/20260701_Business_Heads_Networking-East_Village_Hotel_Balmain_134.jpg',
      '/images/events/2026-07-01-launch/20260701_Business_Heads_Networking-East_Village_Hotel_Balmain_136.jpg',
      '/images/events/2026-07-01-launch/20260701_Business_Heads_Networking-East_Village_Hotel_Balmain_158.jpg',
      '/images/events/2026-07-01-launch/20260701_Business_Heads_Networking-East_Village_Hotel_Balmain_174.jpg',
      '/images/events/2026-07-01-launch/20260701_Business_Heads_Networking-East_Village_Hotel_Balmain_212.jpg',
      '/images/events/2026-07-01-launch/20260701_Business_Heads_Networking-East_Village_Hotel_Balmain_218.jpg',
      '/images/events/2026-07-01-launch/20260701_Business_Heads_Networking-East_Village_Hotel_Balmain_232.jpg',
      '/images/events/2026-07-01-launch/20260701_Business_Heads_Networking-East_Village_Hotel_Balmain_235.jpg',
      '/images/events/2026-07-01-launch/20260701_Business_Heads_Networking-East_Village_Hotel_Balmain_253.jpg',
      '/images/events/2026-07-01-launch/20260701_Business_Heads_Networking-East_Village_Hotel_Balmain_258.jpg',
      '/images/events/2026-07-01-launch/20260701_Business_Heads_Networking-East_Village_Hotel_Balmain_259.jpg',
    ],
  },
]

/* Tentative upcoming events shown as an auto-swiping carousel on the events page.
   Update dates/details here as they're confirmed. */
export const upcomingEventCards: UpcomingEventCard[] = [
  {
    id: 'online-aug-2026',
    label: 'Members only',
    heading: 'Online. August 5.',
    body: 'Our first members-only online session. Details coming soon.',
  },
  {
    id: 'online-sep-2026',
    label: 'Members only',
    heading: 'Online. September 2.',
    body: 'Another hour with people who get it. More details soon.',
  },
  {
    id: 'in-person-oct-2026',
    label: 'In person',
    heading: 'October 7. Location TBC.',
    body: 'The quarterly event. The prize draw. The room worth being in.',
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
    description: '$10,000 drawn live. One member wins. First draw at our October 2026 event.',
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
