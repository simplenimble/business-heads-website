const JOIN_URL = 'https://www.businessheads.com.au/checkout/joining-business-heads'

export const home = {
  join_url: JOIN_URL,

  hero: {
    heading: 'Business is better with the right people around you.',
    sub1: 'A business network where you can connect, test ideas, learn and grow with other business heads.',
    sub2: 'Not a referral machine. Not a pitch-fest. Something worth your time.',
    cta: 'Join Business Heads',
    secondaryCta: 'Learn more',
  },

  people: {
    overline: 'Why Business Heads exists',
    heading: 'Business owners do better when they help each other out.',
    body: [
      'You have probably been to a few networking events. You wander the room, swap some business cards, have a drink, and head home thinking you would have got more done at your desk, or with a friend who knows your business.',
      'Business Heads started because a few of us wanted something different: people in a similar position to talk to, to solve problems with, and who would challenge our thinking. That is what we built, and members shape it from here.',
    ],
    link: { href: '/experience', label: 'See what happens at an event' },
  },

  prize: {
    overline: 'The Quarterly Draw',
    heading: '$5,000 goes back to the community each quarter.',
    body: 'Each quarter, one member wins $5,000 to spend with other members. That win becomes work for another member\'s business, so the money keeps circulating inside the community. Every member is entered into every draw, and buying an event ticket earns you another entry.',
    clarification: 'The first draw runs once our founding member group is in place.',
    footnote: 'Winners may choose a $1,500 cash alternative instead of the member-business prize.',
  },

  benefits: {
    overline: 'What you get',
    heading: 'What is yours when you join',
    body: 'Each of these gets better as more members take part.',
    items: [
      {
        title: 'Four evenings a year with people who get it',
        body: 'Quarterly events in Sydney, each with a topic or activity that gets the whole room talking about real things.',
      },
      {
        title: 'Introductions to the right people',
        body: 'Tell us what you are working on and we will introduce you to a member who can help. There is also a directory of everyone in the community.',
      },
      {
        title: 'Your own advisory board',
        body: 'Once a month, a small group of members works through something real together. Optional, and always useful.',
      },
      {
        title: 'Sessions on what you need to know',
        body: 'Monthly sessions led by people who have done it. Topics come from members, and when something keeps coming up, it becomes a session. Coming soon.',
      },
      {
        title: 'Savings on what you already buy',
        body: 'Member discounts on software, services and suppliers you are probably already paying for.',
      },
      {
        title: 'A community online, between events',
        body: 'Five spaces on Circle to ask questions, share wins and find answers when you need them.',
      },
    ],
    link: { href: '/experience', label: 'See everything that is included' },
  },

  audience: {
    heading: 'Who Business Heads is for',
    groups: [
      {
        heading: 'You are running it mostly on your own.',
        body: 'Sole trader or small team. You hold it all together, and most days there is nobody to think out loud with. You want people who understand the job.',
      },
      {
        heading: 'You have made it work, and that can be lonely too.',
        body: 'Mid-sized team. You have figured a lot out, which can make it harder to find people you can be straight with. You want peers who know what the job is really like.',
      },
    ],
    footer: 'You are busy, independent and practical, and you give your time to things that are worth it.',
  },

  eventProof: {
    overline: 'Next event',
    heading: 'Tuesday 27 October 2026. Sydney.',
    body: 'In person. Venue and format will be announced soon. Tickets are $40 per person and are sold separately to membership.',
    link: { href: '/events', label: 'Event details' },
  },

  pricing: {
    overline: 'Founding offer',
    heading: 'Founding member rate: 30% off your first year.',
    subheading: 'One good introduction, one subscription saved or one conversation that shifts your direction can cover the cost.',
    plans: [
      {
        id: 'monthly',
        name: 'Monthly subscription',
        price: '$220',
        priceNote: 'per month, incl. GST',
        badge: null,
        description: 'Get a feel for it first.',
        foundingPrice: '$154',
        foundingPriceNote: 'per month, incl. GST, for your first year',
        includes: [
          'One entry every month into the quarterly member draw',
          'Discounted member tickets to quarterly events',
          'Full access to the member community',
          'Invitations to member-only online events',
          'Member discounts and offers',
        ],
        cta: 'Join Business Heads',
        ctaUrl: JOIN_URL,
      },
      {
        id: 'annual',
        name: 'Annual subscription',
        price: '$2,400',
        priceNote: 'per year, incl. GST',
        badge: 'Most popular',
        description: 'One month free, and you are in for the year.',
        foundingPrice: '$1,680',
        foundingPriceNote: 'for your first year, incl. GST',
        includes: [
          'Five entries into every quarterly draw (20 a year)',
          'One month free',
          'Discounted member tickets to quarterly events',
          'Full access to the member community',
          'Invitations to member-only online events',
          'Member discounts and offers',
        ],
        cta: 'Join Business Heads',
        ctaUrl: JOIN_URL,
      },
    ],
    footnote: 'All prices include GST. No lock-in. Cancel any time.',
  },

  firmPartnership: {
    heading: 'Host a Business Heads evening for your clients.',
    body: 'Your firm can host an evening for its own clients, with your name on it. Get in touch and we will talk it through.',
    cta: 'Talk to us about hosting',
    // /partner doesn't exist yet; points to the firm partnership card on /join.
    href: '/join#firm-partnership',
  },

  leadCapture: {
    overline: 'Not ready yet?',
    heading: 'Register your interest.',
    body: 'No commitment. We will keep you across what is happening.',
    button: 'Register your interest',
  },

  finalCta: {
    quote: 'Business is better with the right people around you.',
    cta: 'Join Business Heads',
  },
}
