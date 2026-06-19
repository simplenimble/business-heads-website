export type Testimonial = {
  id: string
  quote: string
  author: string
  business: string
  location: string
  type: 'member' | 'early-feedback'
  photoPlaceholder?: string
}

export const testimonials: Testimonial[] = [
  {
    id: 'kiri-fitzpatrick',
    quote:
      "I joined Business Heads because I wanted to meet people with similar interests. But instead, it has turned into business opportunities, more diverse work, and connections I was struggling to create in other spaces like my local business chamber.",
    author: 'Kiri Fitzpatrick',
    business: 'Simple Nimble Pty Ltd',
    location: 'Sydney',
    type: 'member',
  },
  {
    id: 'brad-seeto',
    quote:
      "I was sick of wasting time at business events that always turned out to be sale pitches. I want a place where I can actually talk and connect with people, and help others do that too.",
    author: 'Brad Seeto',
    business: 'Bramelle Partners Pty Ltd',
    location: 'Sydney',
    type: 'member',
  },
  {
    id: 'placeholder-3',
    quote:
      'Placeholder — add a third member testimonial here post-launch. Ideally addresses the time hesitation: something specific they got out of it that justified showing up.',
    author: 'Name',
    business: 'Business',
    location: 'Sydney',
    type: 'early-feedback',
    photoPlaceholder: '[Photo pending — confirm with Nica]',
  },
]

export const storiesHero = {
  overline: 'Member Stories',
  heading: 'The people, in their own words.',
  body: 'The most useful thing on this page is not written by us.',
}
