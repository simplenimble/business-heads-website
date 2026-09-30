type ExperienceFormatStep = {
  label: string
  description: string
  note?: string
  noteLinkLabel?: string
  noteLinkHref?: string
}

export const experience = {
  hero: {
    overline: 'The Experience',
    heading: 'What happens at Business Heads.',
    body: 'What it is like to be part of it, and why it is worth your time.',
  },

  origin: {
    overline: 'Why Business Heads exists',
    heading: 'One good conversation can change how you see your business.',
    body: [
      'Business owners do better when they help each other out.',
      'It might be a question you have been sitting on for months, and a member who has already worked it out. You leave with a plan.',
    ],
    credit: 'Members bring the topics. We look after the room.',
  },

  events: {
    overline: 'Quarterly, Sydney',
    heading: 'Four evenings a year with people who get it.',
    body: [
      'Each evening has a topic or activity that gets the whole room talking about something real, like what is working, what is stuck and what you would do differently.',
      'You will leave having talked properly with people you would like to talk to again.',
    ],
    format: {
      heading: 'How the evening runs',
      steps: [
        {
          label: 'Doors open',
          description: 'Arrive, get a drink and settle in.',
        },
        {
          label: 'The activity',
          description: 'A topic or facilitated activity that involves the whole room. This is where the good conversations start.',
        },
        {
          label: 'Lucky door prizes',
          description: 'Prizes offered by members, drawn on the night.',
        },
        {
          label: 'Open conversation',
          description: 'The rest of the evening is yours. Stay as long as you like.',
        },
      ] as ExperienceFormatStep[],
    },
    detail: 'Tickets are sold separately to membership. Tickets are $40 per person.',
  },

  prize: {
    overline: 'The Quarterly Draw',
    heading: '$5,000 goes back to the community each quarter.',
    body: [
      'Each quarter, one member wins $5,000 to spend with other members. That win becomes work for another member\'s business, so the money keeps circulating inside the community.',
      'Every member is entered into every draw, and buying an event ticket earns you another entry.',
    ],
    clarification: 'The first draw runs once our founding member group is in place.',
    footnote: 'Winners may choose a $1,500 cash alternative instead of the member-business prize.',
    footnoteLinkLabel: 'See Competition Terms',
    footnoteLinkHref: '/competition-terms',
  },

  platform: {
    overline: 'Between events',
    heading: 'The conversation carries on after the evening ends.',
    body: 'Business Heads runs on Circle. There are five spaces, and members decide what goes in them.',
    spaces: [
      {
        name: 'Community Feed',
        description: 'Ask questions, share wins and post an offer to the group. This is where members stay in touch between events.',
      },
      {
        name: 'Events',
        description: 'Upcoming event details, registration, and recaps from past evenings.',
      },
      {
        name: 'Member Offers',
        description: 'Post a deal for fellow members, or use curated discounts from partner suppliers.',
      },
      {
        name: 'Member Directory',
        description: 'Find members, see what they are working on and reach out directly. It grows as the community does.',
      },
      {
        name: 'Resources Hub',
        description: 'Guides, templates and tips that have helped other members.',
      },
    ],
    note: 'The more members put in, the more everyone gets out.',
  },

  softBenefits: {
    overline: 'What is yours when you join',
    heading: 'Connections that lead somewhere.',
    items: [
      {
        id: 'introductions',
        heading: 'Introductions to the right people',
        body: 'When you join, tell us what you are working on. We will introduce you to a member who can help, and you take it from there.',
      },
      {
        id: 'coaching',
        heading: 'Your own advisory board',
        body: 'Once a month, a small group of members works through something real together. You bring a problem and so does everyone else. It is structured enough to be useful and relaxed enough to be honest. You will leave with a perspective you did not have when you arrived.',
      },
      {
        id: 'learning',
        heading: 'Sessions on what you need to know',
        body: 'Monthly sessions led by people who have done it. Topics come from members, and when something keeps coming up in the community, it becomes a session. Coming soon.',
      },
    ],
  },

  ethos: {
    heading: 'Come as you are and talk about what is really going on.',
    body: 'Bring a question, a problem or a win, and the room takes it from there. Members set the topics, and you decide how much you share.',
  },

  cta: {
    heading: 'Come along to the next one.',
    body: 'The next event is in Sydney on Tuesday 27 October 2026. Tickets are $40, sold separately to membership, so it is an easy way to see if Business Heads suits you.',
    cta: 'Join Business Heads',
  },
}
