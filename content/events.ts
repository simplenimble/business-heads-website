export type EventStatus = 'upcoming' | 'past'

export type EventItem = {
  id: string
  name: string
  date: string
  month: string
  venue?: string
  suburb?: string
  city?: string
  host?: string
  ticketPrice?: string
  bonusTicket?: string
  eventSpecial?: string
  rsvpUrl?: string
  status: EventStatus
  recap?: string
  photos?: string[]
  photoCredit?: {
    name: string
    studio?: string
    url?: string
  }
}

export type UpcomingEventCard = {
  id: string
  tabLabel: string
  label?: string
  date?: string
  time?: string
  heading: string
  body: string
  subtext?: string
  ctaLabel?: string
  ctaUrl?: string
}

/* Update this file with real event details as they are confirmed.
   The page renders whatever is in the `events` array below.
   Add past events by changing status to 'past' and adding a recap. */

export const events: EventItem[] = [
  {
    id: 'sydney-launch-2026',
    name: 'Business Heads Sydney — Launch Event',
    date: '1 July 2026',
    month: 'Jul',
    venue: 'East Village Hotel',
    suburb: 'Balmain',
    city: 'Sydney, NSW',
    ticketPrice: '$40 per person.',
    bonusTicket: 'For this launch event, every ticket comes with a bonus ticket to bring someone along.',
    eventSpecial: 'Over $3,000 in lucky door prizes, free professional headshots on arrival, and food and drink provided. Note: the launch event does not include the $5,000 prize draw — the first draw is at our October event.',
    status: 'past',
    photoCredit: {
      name: 'Oscar Colman',
      studio: 'Oscar Colman Portrait Studio',
      url: 'https://oscarcolman.com',
    },
    photos: [
      '/images/events/2026-07-01-launch/20260701_Business_Heads_Networking-East_Village_Hotel_Balmain_60.jpg',
      '/images/events/2026-07-01-launch/20260701_Business_Heads_Networking-East_Village_Hotel_Balmain_83.jpg',
      '/images/events/2026-07-01-launch/20260701_Business_Heads_Networking-East_Village_Hotel_Balmain_126.jpg',
      '/images/events/2026-07-01-launch/20260701_Business_Heads_Networking-East_Village_Hotel_Balmain_136.jpg',
      '/images/events/2026-07-01-launch/20260701_Business_Heads_Networking-East_Village_Hotel_Balmain_158.jpg',
      '/images/events/2026-07-01-launch/20260701_Business_Heads_Networking-East_Village_Hotel_Balmain_174.jpg',
      '/images/events/2026-07-01-launch/20260701_Business_Heads_Networking-East_Village_Hotel_Balmain_212.jpg',
      '/images/events/2026-07-01-launch/20260701_Business_Heads_Networking-East_Village_Hotel_Balmain_218.jpg',
      '/images/events/2026-07-01-launch/20260701_Business_Heads_Networking-East_Village_Hotel_Balmain_232.jpg',
      '/images/events/2026-07-01-launch/20260701_Business_Heads_Networking-East_Village_Hotel_Balmain_235.jpg',
      '/images/events/2026-07-01-launch/20260701_Business_Heads_Networking-East_Village_Hotel_Balmain_258.jpg',
      '/images/events/2026-07-01-launch/20260701_Business_Heads_Networking-East_Village_Hotel_Balmain_259.jpg',
    ],
  },
  {
    id: 'webinar-aug-2026',
    name: 'Off the record: Getting real value from your frequent flyer points',
    date: '20 August 2026',
    month: 'Aug',
    host: 'Brad Seeto, Bramelle Partners',
    status: 'past',
    photos: [
      '/images/August webinar.png',
      '/images/august webinar 2.png',
    ],
  },
]

/* Tentative upcoming events shown as tabs (Aug–Dec) on the events page.
   Update dates/details here as they're confirmed. */
export const upcomingEventCards: UpcomingEventCard[] = [
  {
    id: 'online-sep-2026',
    tabLabel: 'Sep',
    label: 'Online',
    heading: 'Off The Records: AI for Business',
    body: 'Live webinar on AI for Businesses. Speaker: Adam Dong from Horizon AI. Date and time to be confirmed.',
  },
  {
    id: 'in-person-oct-2026',
    tabLabel: 'Oct',
    label: 'In person',
    date: 'October',
    heading: 'October. In person.',
    body: 'Venue to be determined.',
  },
  {
    id: 'online-nov-2026',
    tabLabel: 'Nov',
    label: 'Online',
    date: 'November',
    heading: 'November. Online.',
    body: 'Community poll topic.',
  },
  {
    id: 'in-person-dec-2026',
    tabLabel: 'Dec',
    label: 'In person',
    date: 'December',
    heading: 'December. In person.',
    body: 'Holiday Casual Drinks. Venue to be determined.',
    subtext: 'Christmas Drinks – Casual / Social Catch ups',
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
    description: 'Drawn live at every quarterly event. One member wins, and spends it inside the community. First draw: October 2026, $5,000.',
    note: 'Winners may choose a $1,500 cash alternative.',
    noteLinkLabel: 'See Competition Rules',
    noteLinkHref: '/competition-rules',
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
