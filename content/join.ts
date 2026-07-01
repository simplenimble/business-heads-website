const JOIN_URL = 'https://www.businessheads.com.au/checkout/joining-business-heads'

export const join = {
  hero: {
    overline: 'Joining',
    heading: 'Join a community of business heads.',
  },

  pricing: {
    monthly: {
      label: 'Monthly',
      price: '$220',
      period: '/month',
      note: 'Cancel any time.',
    },
    annual: {
      label: 'Annual',
      price: '$2,400',
      period: '/year',
      note: 'Two months free.',
    },
    included: [
      'Quarterly in-person events (Sydney)',
      'Access to the full online platform (Circle)',
      'Member directory — find and connect with other members, plus facilitated introductions',
      'Monthly co-coaching circles',
      'Learning sessions',
      'Member discounts (powered by Rewards Gateway)',
      'Entries in the quarterly $10,000 prize draw',
    ],
  },

  foundingOffer: {
    heading: 'Join before 31 August.',
    body: 'Join before 31 August and get 30% off your first year. After that, the full rate applies.',
    deadline: '31 August 2026',
  },

  afterJoining: {
    heading: 'What happens after you click join',
    steps: [
      "You'll pay securely through Stripe. Quick, no fuss.",
      "You'll land on a confirmation page. You're in.",
      "You'll receive an invitation to Circle, our community platform, via your email address.",
      "You'll then be asked to create your community profile. Set it up and explore the platform.",
      "Want a facilitated introduction? Tell us what you're working on.",
    ],
    note: 'The handoff to Circle is intentional. The community lives there, not here. This site markets it. Circle is where it happens.',
  },

  cta: {
    primary: 'Join Business Heads',
    url: JOIN_URL,
  },
}
