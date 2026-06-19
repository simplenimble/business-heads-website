const JOIN_URL = 'https://www.businessheads.com.au/checkout/joining-business-heads'

export const join = {
  hero: {
    overline: 'Pricing and joining',
    heading: 'One price. One community.',
  },

  pricing: {
    monthly: {
      label: 'Monthly',
      price: '$200',
      period: '/month',
      note: 'Cancel any time.',
    },
    annual: {
      label: 'Annual',
      price: '$2,200',
      period: '/year',
      note: 'Two months free.',
    },
    included: [
      'Quarterly in-person events (Sydney)',
      'Access to the full online platform (Circle)',
      'Member directory and facilitated introductions',
      'Monthly co-coaching circles',
      'Learning sessions',
      'Member discounts (powered by Rewards Gateway)',
      'Entries in the quarterly $10,000 prize draw',
    ],
  },

  foundingOffer: {
    heading: 'Join before 31 August.',
    body: 'Founding members lock in their rate for the life of their membership. When the founding rate closes, it closes. There is no discount tier planned after that.',
    deadline: '31 August 2026',
  },

  afterJoining: {
    heading: 'What happens after you click join',
    steps: [
      'You will be taken to the Business Heads checkout on Circle.',
      'Complete your payment and account setup there.',
      'You will receive a welcome message with access to the community platform.',
      'If you would like a facilitated introduction, let us know what you are working on.',
    ],
    note: 'The handoff to Circle is intentional. The community lives there, not here. This site markets it. Circle is where it happens.',
  },

  cta: {
    primary: 'Join Business Heads',
    url: JOIN_URL,
  },
}
