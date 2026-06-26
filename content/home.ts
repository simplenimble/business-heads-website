const JOIN_URL = '/join'

export const home = {
  join_url: JOIN_URL,

  hero: {
    heading: 'Business is better with the right people around you.',
    sub1: 'A business network where you can connect, test ideas, learn and grow with other business heads.',
    sub2: 'Not a referral machine. Not a pitch-fest. Something worth your time.',
    cta: 'Join Business Heads',
  },

  people: {
    overline: 'Why members stay',
    heading: 'One good conversation changes things.',
    body: 'You\'ve been to those events. You circulate, grab a drink, and leave wondering whether you\'d have been better off staying home. Business Heads exists because a few of us needed somewhere to think out loud — with people who\'d been through it, push back on our thinking, and actually understand the pressure.',
    link: { href: '/experience', label: 'What actually happens' },
  },

  prize: {
    overline: 'The Quarterly Draw',
    heading: '$10,000. Back in the room. Every quarter.',
    body: 'One member wins it. They spend it with other members. The money moves around, not out.',
    footnote: 'Every member gets a ticket to every draw. Additional ticket entries granted with every event ticket purchase. First draw: October 2026.',
    footnoteLinkLabel: 'See Terms and Conditions',
    footnoteLinkHref: '/terms',
  },

  benefits: {
    overline: 'What you get',
    heading: 'More than a membership. A room worth being in.',
    body: 'Quarterly events, a prize draw, member discounts, co-coaching circles, facilitated introductions, and an online platform that keeps the conversation going between events.',
    link: { href: '/experience', label: 'See everything that\'s included' },
  },

  audience: {
    heading: 'Sound familiar?',
    groups: [
      {
        heading: 'You\'re doing it mostly alone.',
        body: 'Sole trader or small team. You\'re the one holding it all together, and most days there\'s nobody to think out loud with.',
      },
      {
        heading: 'You\'ve made it work. That\'s isolating in its own way.',
        body: 'Mid-sized team. You\'ve figured a lot out, which makes it harder to find people you can be honest with.',
      },
    ],
    footer: 'Busy, independent, pragmatic. You only give your time to something worth it.',
  },

  eventProof: {
    overline: 'Next event',
    heading: '1 July. Balmain, Sydney.',
    body: 'The launch event is at East Village Hotel, Balmain. Tickets are $40. Every ticket comes with a bonus ticket to bring someone along.',
    link: { href: '/events', label: 'Event details and tickets' },
  },

  pricing: {
    overline: 'Founding offer',
    heading: 'Join before 31 August.',
    subheading: 'One good introduction. One subscription saved. One conversation that changes your direction. This membership earns its keep.',
    highlight: 'This membership earns its keep.',
    foundingDeadline: '31 August 2026',
    foundingDiscount: '30% off your first year — founding members only.',
    plans: [
      {
        id: 'monthly',
        name: 'Monthly subscription',
        price: '$200',
        priceNote: 'per month (inc. GST)',
        originalPrice: null,
        badge: null,
        description: 'For business owners who want to get a feel for it first.',
        foundingPrice: '',
        foundingNote: '',
        includes: [
          'One entry per month into the quarterly $10,000 prize draw',
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
        price: '$2,200',
        priceNote: 'per year (inc. GST)',
        originalPrice: null,
        badge: 'Most popular',
        description: 'Our most popular option. One month free, and you\'re in for the year.',
        foundingPrice: '',
        foundingNote: '30% off until 31 August — pay just $1,540 for your first year.',
        includes: [
          'Five entries per quarterly $10,000 prize draw (20 per year)',
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
    footnote: '$200/month or $2,200/year at full rate. No lock-in. Cancel any time.',
  },

  leadCapture: {
    overline: 'Not ready yet?',
    heading: 'Register your interest.',
    body: 'No commitment. We\'ll keep you across what\'s happening and reach out before the founding rate closes.',
  },

  finalCta: {
    quote: 'Business is better with the right people around you.',
    cta: 'Join Business Heads',
  },
}
