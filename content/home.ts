const JOIN_URL = 'https://www.businessheads.com.au/checkout/joining-business-heads'

export const home = {
  join_url: JOIN_URL,

  hero: {
    overline: 'Sydney, Australia',
    headingLines: [
      'Not a referral machine.',
      'Not a room full of strangers pitching each other.',
      'Not a corporate lottery.',
    ],
    highlight: 'Something else.',
    sub1: 'A community that genuinely pays its members back.',
    sub2: 'The place where successful business owners talk to each other like human beings.',
    cta: 'Join Business Heads',
  },

  people: {
    overline: 'Why members stay',
    heading: 'One good conversation, every time.',
    body: [
      'Events are not pitch rounds. They are a question-and-connection activity, followed by open conversation. You show up, answer one honest question, and find out who else in the room has been thinking the same thing.',
      'No name-tag small talk. No agenda. Just business owners being straight with each other.',
    ],
    testimonialPlaceholder:
      '[Real member quote goes here post-launch. Specific detail beats generic praise.]',
    testimonialAuthorPlaceholder: 'Name, Business, Sydney',
  },

  prize: {
    overline: 'The prize',
    number: '$10k',
    tagline: 'Back to the community, every quarter.',
    heading: 'Not a raffle. Proof the model gives back.',
    body: [
      'Every quarter, Business Heads draws $10,000 from membership revenue and gives it back to the community. Winners spend it inside the community, on member businesses.',
      'The more events you attend, the more entries you earn.',
    ],
    footnote:
      'Winners receive $10,000 to spend on member businesses, or $3,000 cash if nothing fits.',
  },

  benefits: {
    overline: 'Your membership includes',
    heading: 'The rational case for $200 a month.',
    items: [
      {
        title: 'Member discounts',
        body: 'Real savings on software, services, and suppliers you already use, through verified member partners.',
      },
      {
        title: 'Member directory',
        body: 'Find other members, see what they do, and get in touch without the awkward LinkedIn dance.',
      },
      {
        title: 'Learning sessions',
        body: 'Monthly sessions on things business owners actually need to know, led by people who have done it.',
      },
      {
        title: 'Co-coaching circles',
        body: 'An optional monthly drop-in for working through a specific problem with a small group.',
      },
      {
        title: 'Facilitated introductions',
        body: 'New members can request an introduction to another member. We make the connection.',
      },
      {
        title: 'The online platform',
        body: 'Five spaces on Circle: Town Centre, Events, Member Benefits, Member Directory, and Resources Hub.',
      },
    ],
    link: { href: '/benefits', label: 'See the full breakdown' },
  },

  audience: {
    heading: 'If any of this sounds familiar, you are in the right place.',
    groups: [
      {
        heading: 'You are doing it mostly alone.',
        body: [
          'Sole trader or small team. You are the one holding the whole thing together, and most days there is no one to sense-check your thinking with.',
          'You are not looking for advice. You are looking for someone who gets it.',
        ],
      },
      {
        heading: 'You have made it work, and that is a little isolating.',
        body: [
          'Mid-sized team. You have figured a lot out. That makes it harder, not easier, to find people you can talk to honestly.',
          'You want peers. Not a mentor programme, not a mastermind group. Just other people who understand the actual job.',
        ],
      },
    ],
    footer: 'Busy, independent, and pragmatic. You only give your time to something with proven value.',
  },

  eventProof: {
    overline: 'Next event',
    heading: 'Business Heads Sydney.',
    body: 'Venue and date to be confirmed. Register your interest below and we will be in touch with details.',
    format: [
      'Arrival and time to settle in',
      'A question-and-connection activity, not a pitch round',
      'The quarterly prize draw',
      'Open networking until you are ready to leave',
    ],
    link: { href: '/events', label: 'Event details' },
  },

  foundingOffer: {
    overline: 'Founding offer',
    heading: 'Join before 31 August.',
    body: 'Lock in your founding member rate for the life of your membership. When the founding rate closes, it closes.',
    cta: 'Join Business Heads',
    footnote: '$200/month or $2,200/year. No lock-in.',
  },

  leadCapture: {
    overline: 'Not ready to join yet?',
    heading: 'Register your interest.',
    body: 'No commitment. We will keep you across what is happening and reach out before the founding rate closes.',
  },

  finalCta: {
    quote: '"Business Heads. Because running a business should not mean going it alone."',
    cta: 'Join Business Heads',
  },
}
