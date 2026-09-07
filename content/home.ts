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
    heading: 'The money stays in the room.',
    body: 'One member wins the quarterly draw. They spend it with other members. Their win becomes someone else\'s work. The money moves around, not out.',
    footnote: 'Every member gets an entry into every draw, just for being here. Buy an event ticket, get another entry.',
    firstDrawLine: 'The first $5,000 draw runs once our founding member group is in place.',
    legalNote: 'Winners may choose a $1,500 cash alternative instead of the member-business prize.',
    legalNoteLinkLabel: 'See Competition Rules',
    legalNoteLinkHref: '/competition-rules',
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
    heading: 'Off the record: Can AI give you half your week back?',
    body: 'Adam Dong, Director of Horizon AI. Thursday 24 September 2026, 11:00am–12:00pm AEST. Live on Microsoft Teams. Free.',
    cta: 'Register now',
    link: { href: '/events/ai-webinar', label: 'See the full agenda' },
  },

  pricing: {
    overline: 'Founding offer',
    heading: 'Founding member rate.',
    subheading: 'One good introduction. One subscription saved. One conversation that changes your direction. This membership earns its keep.',
    highlight: 'This membership earns its keep.',
    foundingDiscount: '30% off your first year — founding members only.',
    plans: [
      {
        id: 'monthly',
        name: 'Monthly subscription',
        price: '$220',
        priceNote: 'per month (inc. GST)',
        originalPrice: null,
        badge: null,
        description: 'For business owners who want to get a feel for it first.',
        foundingPrice: '',
        foundingNote: '',
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
        priceNote: 'per year (inc. GST)',
        originalPrice: null,
        badge: 'Most popular',
        description: 'Our most popular option. One month free, and you\'re in for the year.',
        foundingPrice: '',
        foundingNote: 'Founding member rate. 30% off your first year, so you pay $1,680.',
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
    footnote: '$220/month or $2,400/year at full rate. No lock-in. Cancel any time.',
  },

  firmPartnership: {
    heading: 'Give your clients the best two hours they will have in business this year. And put your name on it.',
    subtext: 'This is an invitation for your firm to host a room of its own.',
    cta: 'Learn more',
    href: '/join#firm-partnership',
  },

  leadCapture: {
    overline: 'Not ready yet?',
    heading: 'Register your interest.',
    body: 'No commitment. We\'ll keep you across what\'s happening.',
  },

  finalCta: {
    quote: 'Business is better with the right people around you.',
    cta: 'Join Business Heads',
  },
}
