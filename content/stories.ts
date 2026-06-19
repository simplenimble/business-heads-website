export type Testimonial = {
  id: string
  quote: string
  author: string
  business: string
  location: string
  type: 'member' | 'early-feedback'
  photoPlaceholder?: string
}

/*
 * Testimonials are the most engaging content on the site (tester feedback).
 * Replace early-feedback quotes with real member voices post-launch.
 * Do not fabricate member quotes — mark early feedback clearly (type: 'early-feedback').
 */

export const testimonials: Testimonial[] = [
  {
    id: 'placeholder-1',
    quote:
      'Placeholder — add real testimonial from founding member or beta tester here. Specific detail beats generic praise. What did they actually get out of it?',
    author: 'Name',
    business: 'Business',
    location: 'Sydney',
    type: 'early-feedback',
    photoPlaceholder: '[Photo pending — confirm with Nica]',
  },
  {
    id: 'placeholder-2',
    quote:
      'Placeholder — a second testimonial, ideally from a different type of business owner (e.g. if the first is a sole trader, this one could be a small team).',
    author: 'Name',
    business: 'Business',
    location: 'Sydney',
    type: 'early-feedback',
    photoPlaceholder: '[Photo pending — confirm with Nica]',
  },
  {
    id: 'placeholder-3',
    quote:
      'Placeholder — a third testimonial. Ideally addresses one of the four core hesitations: time, cost, not wanting to pitch, or not wanting another networking group.',
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
