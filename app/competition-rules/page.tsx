import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Competition Rules and Conditions of Entry | Business Heads',
  description: 'Business Heads Giveaway competition rules and conditions of entry for the quarterly prize draw. Effective 1 July 2026.',
}

export default function CompetitionRulesPage() {
  return (
    <>
      <section className="bg-bh-charcoal px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <p className="font-body text-bh-yellow text-sm uppercase tracking-widest mb-4">Legal</p>
          <h1 className="font-heading font-semibold text-4xl md:text-5xl text-white leading-tight mb-4">
            Competition Rules and Conditions of Entry
          </h1>
          <p className="font-body text-white/50">
            Business Heads Pty Ltd (ABN 78 693 566 326) · Effective 1 July 2026
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="max-w-3xl mx-auto">

          {/* Important notice */}
          <div className="mb-12 rounded-2xl border border-bh-charcoal/10 bg-bh-charcoal/[0.03] p-6">
            <p className="font-body text-xs uppercase tracking-widest font-semibold text-bh-charcoal mb-2">
              Important Notice to Entrants
            </p>
            <p className="font-body text-bh-charcoal/80">
              By entering this promotion, you agree to be bound by these Rules. Please read these Rules carefully before entering. Entry into the promotion constitutes acceptance of these Rules in full. The Promoter reserves the right to disqualify any entrant who does not comply with these Rules.
            </p>
          </div>

          <div className="space-y-10 font-body text-bh-charcoal/80 leading-[1.8]">

            <Section num="1" heading="Definitions">
              <p>In these Rules, unless the context otherwise requires:</p>
              <div className="rounded-2xl border border-bh-charcoal/10 overflow-x-auto my-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-bh-charcoal/5 text-left">
                      <th className="px-5 py-3 font-semibold text-bh-charcoal">Term</th>
                      <th className="px-5 py-3 font-semibold text-bh-charcoal">Definition</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Draw Date', 'The date on which the prize draw is conducted at the relevant Quarterly Event, being approximately every three months commencing on or about 1 October 2026, and each subsequent quarter thereafter.'],
                      ['Eligible Entry', 'An entry submitted by an Eligible Entrant in accordance with Rule 4.'],
                      ['Eligible Entrant', 'A person who satisfies all eligibility requirements set out in Rule 3.'],
                      ['Entry Period', 'The period commencing on the date of launch of each quarterly promotion cycle and closing at 11:59 pm (AEST) on the day immediately preceding the relevant Draw Date.'],
                      ['Member', 'A current subscriber to a paid Business Heads membership or other paid product or service offered by the Promoter.'],
                      ['Prize', 'The prize described in Rule 6 applicable to the relevant quarterly promotion cycle.'],
                      ['Promoter', 'Business Heads Pty Ltd ABN 78 693 566 326.'],
                      ['Prize Value', 'The maximum value of the Prize for a given quarterly promotion cycle, as specified by the Promoter and published on the Website in accordance with Rule 5.3.'],
                      ['Qualifying Transaction', 'A payment made to the Promoter by an Eligible Entrant for a Business Heads subscription (monthly or annual), event ticket, or such other paid product or service as the Promoter designates from time to time.'],
                      ['Quarterly Event', 'The Business Heads member event held approximately every three months at which the prize draw is conducted.'],
                      ['Rules', 'These Competition Rules and Conditions of Entry as amended from time to time in accordance with Rule 12.'],
                      ['Winner', 'The entrant selected in accordance with Rule 7.'],
                    ].map(([term, def]) => (
                      <tr key={term} className="border-t border-bh-charcoal/8 align-top">
                        <td className="px-5 py-3.5 text-bh-charcoal font-medium w-48">{term}</td>
                        <td className="px-5 py-3.5 text-bh-charcoal/70">{def}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Section>

            <Section num="2" heading="Promoter Details">
              <p>The promotion known as the &quot;Business Heads Giveaway&quot; (Promotion) is conducted by:</p>
              <div className="rounded-2xl border border-bh-charcoal/10 overflow-hidden mt-4">
                <table className="w-full text-sm font-body">
                  <tbody>
                    {[
                      ['Promoter', 'Business Heads Pty Ltd'],
                      ['ABN', '78 693 566 326'],
                      ['Website', 'www.businessheads.com.au'],
                      ['Nature of Promotion', 'Trade promotion lottery (prize draw by random selection)'],
                    ].map(([label, value]) => (
                      <tr key={label} className="border-b border-bh-charcoal/8 last:border-0">
                        <td className="px-5 py-3.5 text-bh-charcoal/50 w-44 align-top">{label}</td>
                        <td className="px-5 py-3.5 text-bh-charcoal">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Section>

            <Section num="3" heading="Eligibility">
              <Clause n="3.1">To be eligible to enter this Promotion, a person must, at the time of each entry:</Clause>
              <Lettered
                items={[
                  { n: 'a', text: 'be an individual aged 18 years or over;' },
                  { n: 'b', text: 'be a resident of Australia;' },
                  { n: 'c', text: 'not be an employee, director, officer, contractor or agent of the Promoter or any entity associated with the Promoter, or an immediate family member of any such person.' },
                ]}
              />
              <Clause n="3.2">For the avoidance of doubt, the Promotion is open only to residents of New South Wales and Tasmania. Entrants must be resident in one of those two States; entries from other States and Territories will not be accepted.</Clause>
              <Clause n="3.3">The Promoter reserves the right to verify the eligibility of any entrant at any stage of the Promotion, including prior to the award of any Prize. Failure to satisfy eligibility requirements will result in disqualification.</Clause>
            </Section>

            <Section num="4" heading="How to Enter">
              <Clause n="4.1">A free entry into this Promotion is granted upon the completion of a Qualifying Transaction during an Entry Period. No separate application to enter is required.</Clause>
              <Clause n="4.2">Eligible Entrants will receive entries into the prize draw as follows:</Clause>
              <div className="rounded-2xl border border-bh-charcoal/10 overflow-x-auto my-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-bh-charcoal/5 text-left">
                      <th className="px-5 py-3 font-semibold text-bh-charcoal">Qualifying Transaction</th>
                      <th className="px-5 py-3 font-semibold text-bh-charcoal">Number of Entries Received</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Monthly subscription payment', '1 entry per payment, i.e., 3 entries per quarterly draw'],
                      ['Annual subscription payment', '5 entries per quarterly draw'],
                      ['Event ticket purchase', '1 entry per ticket purchased'],
                    ].map(([type, entries]) => (
                      <tr key={type} className="border-t border-bh-charcoal/8 align-top">
                        <td className="px-5 py-3.5 text-bh-charcoal font-medium">{type}</td>
                        <td className="px-5 py-3.5 text-bh-charcoal/70">{entries}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Clause n="4.3">An entrant may accumulate multiple entries across multiple Qualifying Transactions during an Entry Period. Each Eligible Entry will be allocated a unique entry number and will be included in the relevant prize draw.</Clause>
              <Clause n="4.4">Entries that are incomplete, fraudulent, inaccurate or otherwise not in compliance with these Rules will be void and disregarded.</Clause>
            </Section>

            <Section num="5" heading="Promotion Period and Draw Schedule">
              <Clause n="5.1">This Promotion operates on a recurring quarterly basis. The first promotion cycle commences on 1 July 2026.</Clause>
              <Clause n="5.2">Each quarterly promotion cycle comprises:</Clause>
              <Lettered
                items={[
                  { n: 'a', text: 'an Entry Period, during which Qualifying Transactions accumulate entries;' },
                  { n: 'b', text: 'a Draw Date, being the date of the relevant Quarterly Event at which the prize draw is conducted; and' },
                  { n: 'c', text: 'a prize notification and fulfilment period following the Draw Date.' },
                ]}
              />
              <Clause n="5.3">The Promoter will publish the specific Entry Period dates, Draw Date, venue, and the Prize Value applicable to that cycle (including the goods/services prize value and any cash alternative) on its website at www.businessheads.com.au no less than 14 days prior to the commencement of that cycle.</Clause>
              <Clause n="5.4">For the purposes of New South Wales permit requirements, the first promotion cycle has a Draw Date of on or about 1 October 2026. Subsequent Draw Dates will be approximately three months after the preceding Draw Date.</Clause>
            </Section>

            <Section num="6" heading="Prizes">
              <Clause n="6.1">One (1) Winner will be selected in each quarterly promotion cycle.</Clause>
              <Clause n="6.2">Each Winner may elect to receive one of the following prize options:</Clause>
              <div className="rounded-2xl border border-bh-charcoal/10 overflow-x-auto my-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-bh-charcoal/5 text-left">
                      <th className="px-4 py-3 font-semibold text-bh-charcoal">Option</th>
                      <th className="px-4 py-3 font-semibold text-bh-charcoal">Prize Description</th>
                      <th className="px-4 py-3 font-semibold text-bh-charcoal">Maximum Prize Value</th>
                      <th className="px-4 py-3 font-semibold text-bh-charcoal">Conditions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Option A', 'Goods and/or services supplied by Business Heads member businesses, as nominated by the Winner, which may include Business Heads membership fees.', 'The Prize Value for the relevant cycle, as published under Rule 5.3', 'Must be redeemed with participating Business Heads member businesses. Subject to availability. See Rule 6.4.'],
                      ['Option B', "Cash prize paid by electronic funds transfer to the Winner's nominated Australian bank account.", 'The cash alternative for the relevant cycle, as published under Rule 5.3', 'Winner must provide valid Australian bank account details within 14 days of notification. See Rule 6.5.'],
                    ].map(([option, desc, value, conditions]) => (
                      <tr key={option} className="border-t border-bh-charcoal/8 align-top">
                        <td className="px-4 py-3.5 text-bh-charcoal font-medium">{option}</td>
                        <td className="px-4 py-3.5 text-bh-charcoal/70">{desc}</td>
                        <td className="px-4 py-3.5 text-bh-charcoal/70">{value}</td>
                        <td className="px-4 py-3.5 text-bh-charcoal/70">{conditions}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Clause n="6.3">The Winner must notify the Promoter of their selected prize option within 7 days of being notified as the Winner. Failure to nominate a prize option within that period will result in Option B (cash prize) being deemed to have been selected.</Clause>
              <Clause n="6.4">Option A (Goods and Services): Where the Winner selects Option A, the Promoter will pay the Prize Value for the relevant cycle (or the relevant part thereof) to the participating Business Heads member business(es). The Winner may apply some or all of the prize value towards Business Heads membership fees. The Promoter does not warrant the quality, suitability or availability of goods or services provided by third-party member businesses. Any dispute regarding the goods or services is to be resolved between the Winner and the relevant member business.</Clause>
              <Clause n="6.5">Option B (Cash Prize): Where the Winner selects Option B (or is deemed to have selected Option B), the Promoter will pay the cash alternative for the relevant cycle to the Winner&apos;s nominated Australian bank account within 14 days of receipt of valid bank account details from the Winner.</Clause>
              <Clause n="6.6">Prizes are not transferable to another person and may not be exchanged for an alternative prize, except as expressly permitted by these Rules. The Promoter reserves the right to substitute a prize of equal or greater value if the designated prize becomes unavailable for reasons beyond the Promoter&apos;s control.</Clause>
            </Section>

            <Section num="7" heading="The Prize Draw">
              <Clause n="7.1">The prize draw will be conducted at the Quarterly Event held in New South Wales or Tasmania (as applicable to the relevant cycle) on the relevant Draw Date.</Clause>
              <Clause n="7.2">The draw will be conducted by random selection from all Eligible Entries received during the relevant Entry Period. The method of random selection will be by electronic barrel draw or equivalent randomised process conducted or supervised by an independent person nominated by the Promoter.</Clause>
              <Clause n="7.3">One (1) Winner will be selected per quarterly promotion cycle.</Clause>
              <Clause n="7.4">One (1) reserve draw will also be conducted at the same time. The reserve entrant will become the Winner if the primary Winner cannot be contacted, is ineligible, does not claim the Prize within the required period, or forfeits the Prize.</Clause>
              <Clause n="7.5">The Promoter&apos;s decision in relation to the draw and the identity of the Winner is final and binding. No correspondence will be entered into.</Clause>
            </Section>

            <Section num="8" heading="Winner Notification and Prize Claim">
              <Clause n="8.1">If the Winner is present at the Quarterly Event at which the draw is conducted, the Winner will be notified in person at that event.</Clause>
              <Clause n="8.2">If the Winner is not present at the Quarterly Event, the Promoter will use reasonable endeavours to notify the Winner by email and telephone using the contact details provided at the time of entry, within 5 business days of the Draw Date.</Clause>
              <Clause n="8.3">The Winner must:</Clause>
              <Lettered
                items={[
                  { n: 'a', text: "respond to the Promoter's notification within 14 days of the date of notification;" },
                  { n: 'b', text: 'nominate a prize option in accordance with Rule 6.3; and' },
                  { n: 'c', text: 'provide any information reasonably required by the Promoter to verify eligibility and facilitate prize delivery.' },
                ]}
              />
              <Clause n="8.4">Subject to the foregoing, the Prize will be awarded within 28 days of the Draw Date.</Clause>
              <Clause n="8.5">If the Winner cannot be contacted or does not respond within 14 days of notification, the Winner will be deemed to have forfeited the Prize and the reserve entrant will be contacted in accordance with this Rule.</Clause>
              <Clause n="8.6">The Winner&apos;s name and suburb will be published on the Promoter&apos;s website at www.businessheads.com.au within 28 days of the Draw Date. Where the draw is conducted in Tasmania, the result will also be made publicly available promptly in accordance with the Gaming Control Act 1993 (Tas). Where a NSW community gaming authority is held, publication will comply with its conditions.</Clause>
            </Section>

            <Section num="9" heading="General Conditions of Entry">
              <Clause n="9.1">By entering the Promotion, each entrant:</Clause>
              <Lettered
                items={[
                  { n: 'a', text: 'agrees to be bound by these Rules and any directions of the Promoter;' },
                  { n: 'b', text: "consents to the collection, use and disclosure of their personal information in accordance with Rule 10 and the Promoter's Privacy Policy;" },
                  { n: 'c', text: "acknowledges that the Promoter's decision in relation to all matters concerning this Promotion is final; and" },
                  { n: 'd', text: "agrees that, if selected as Winner, they may be required to participate in promotional and publicity activities (including the publication of their name and suburb on the Promoter's website and social media channels) without further compensation." },
                ]}
              />
              <Clause n="9.2">The Promoter reserves the right to disqualify an entrant who:</Clause>
              <Lettered
                items={[
                  { n: 'a', text: 'tampers with the entry process or engages in any fraudulent conduct;' },
                  { n: 'b', text: 'provides false or misleading information;' },
                  { n: 'c', text: "engages in conduct that, in the Promoter's reasonable opinion, is harmful, offensive or disruptive to other entrants, the Promoter or the Promotion; or" },
                  { n: 'd', text: 'otherwise fails to comply with these Rules.' },
                ]}
              />
            </Section>

            <Section num="10" heading="Privacy and Data Collection">
              <Clause n="10.1">The Promoter collects personal information from entrants including name, email address, telephone number and postal address for the purpose of administering this Promotion, verifying eligibility and contacting Winners.</Clause>
              <Clause n="10.2">The Promoter handles personal information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles.</Clause>
              <Clause n="10.3">By entering this Promotion, entrants consent to the Promoter using their personal information for marketing and promotional communications, including subscription to the Business Heads mailing list. Entrants may opt out of such communications at any time by contacting the Promoter or using the unsubscribe facility in any marketing communication.</Clause>
              <Clause n="10.4">The Promoter&apos;s Privacy Policy is available at www.businessheads.com.au. The Privacy Policy sets out how the Promoter collects, holds, uses and discloses personal information, and how entrants may access and correct their personal information.</Clause>
            </Section>

            <Section num="11" heading="Limitation of Liability">
              <Clause n="11.1">To the maximum extent permitted by law, the Promoter and its officers, employees, contractors and agents:</Clause>
              <Lettered
                items={[
                  { n: 'a', text: 'exclude all liability for any loss, damage, cost or expense (including indirect, consequential or special loss) arising out of or in connection with participation in this Promotion or the acceptance or use of any Prize; and' },
                  { n: 'b', text: 'are not responsible for lost, late, incomplete or misdirected entries, or any technical difficulties or failures affecting the receipt or processing of entries.' },
                ]}
              />
              <Clause n="11.2">Nothing in these Rules excludes, restricts or modifies any guarantee, warranty, right or remedy that cannot be excluded, restricted or modified under the Australian Consumer Law (Schedule 2 to the Competition and Consumer Act 2010 (Cth)) or any other applicable law.</Clause>
            </Section>

            <Section num="12" heading="Cancellation, Modification and Force Majeure">
              <Clause n="12.1">The Promoter reserves the right to cancel, suspend, modify or extend this Promotion or these Rules at any time without prior notice, including where:</Clause>
              <Lettered
                items={[
                  { n: 'a', text: 'required to do so by applicable law or regulatory authority;' },
                  { n: 'b', text: "the integrity or proper conduct of the Promotion is impaired by events beyond the Promoter's control; or" },
                  { n: 'c', text: 'a force majeure event (including pandemic, natural disaster, government restriction or act of God) prevents or materially impedes the conduct of the Promotion.' },
                ]}
              />
              <Clause n="12.2">Any modification to these Rules will be published on the Promoter&apos;s website at www.businessheads.com.au.</Clause>
            </Section>

            <Section num="13" heading="Regulatory and Permit Information">
              <Clause n="13.1">This Promotion is a trade promotion conducted in accordance with applicable state and territory legislation.</Clause>
              <Clause n="13.2">For the purposes of New South Wales community gaming legislation, this Promotion is conducted as a trade promotion under the Community Gaming Act 2018 (NSW) and the Community Gaming Regulation 2020 (NSW), administered by NSW Fair Trading. In Tasmania, this Promotion is conducted as a trade promotion under the Gaming Control Act 1993 (Tas), for which no permit is required. The draw will be conducted in New South Wales or Tasmania, as applicable to the relevant cycle.</Clause>
              <Clause n="13.3">NSW Community Gaming Authority Number: TP/05190. No permit is issued or required in Tasmania for a trade promotion conducted under the Gaming Control Act 1993 (Tas).</Clause>
            </Section>

            <Section num="14" heading="Governing Law and Jurisdiction">
              <p>These Rules are governed by the laws of New South Wales, Australia. Each entrant submits to the non-exclusive jurisdiction of the courts of New South Wales.</p>
            </Section>

            <Section num="15" heading="Contact and Complaints">
              <p>Any queries, complaints or requests for further information regarding this Promotion should be directed to the Promoter at:</p>
              <div className="rounded-2xl border border-bh-charcoal/10 overflow-hidden mt-4">
                <table className="w-full text-sm font-body">
                  <tbody>
                    {[
                      ['Entity', 'Business Heads Pty Ltd'],
                      ['Website', 'www.businessheads.com.au'],
                      ['Email', 'hello@businessheads.com.au'],
                    ].map(([label, value]) => (
                      <tr key={label} className="border-b border-bh-charcoal/8 last:border-0">
                        <td className="px-5 py-3.5 text-bh-charcoal/50 w-36 align-top">{label}</td>
                        <td className="px-5 py-3.5 text-bh-charcoal">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Section>

            <div>
              <h2 className="font-heading font-semibold text-xl text-bh-charcoal mb-4 mt-2">
                Schedule 1 — Summary of Key Dates and Prize Information
              </h2>
              <div className="space-y-4">
                <p>This Schedule provides a reference summary of the recurring promotional structure. Specific dates for each cycle will be published at www.businessheads.com.au.</p>
                <div className="rounded-2xl border border-bh-charcoal/10 overflow-hidden mt-4">
                  <table className="w-full text-sm font-body">
                    <tbody>
                      {[
                        ['First Draw Date', 'On or about 1 October 2026'],
                        ['Draw Frequency', 'Approximately quarterly'],
                        ['Draw Location', 'Business Heads Quarterly Event (NSW or Tasmania)'],
                        ['Eligible Entrants', 'Australian residents aged 18+ who are current Business Heads customers'],
                        ['Prize Value (Option A)', 'Set per cycle and published under Rule 5.3 (e.g. $5,000 AUD for X date) (goods/services with BH member businesses)'],
                        ['Prize Value (Option B)', 'Cash alternative set per cycle and published under Rule 5.3'],
                        ['Winner Notification Deadline', 'Within 5 business days of Draw Date (if Winner not present at event)'],
                        ['Prize Award Deadline', 'Within 28 days of Draw Date'],
                      ].map(([label, value]) => (
                        <tr key={label} className="border-b border-bh-charcoal/8 last:border-0">
                          <td className="px-5 py-3.5 text-bh-charcoal/50 w-56 align-top">{label}</td>
                          <td className="px-5 py-3.5 text-bh-charcoal">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

function Section({ num, heading, children }: { num: string; heading: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-heading font-semibold text-xl text-bh-charcoal mb-4 mt-2">
        {num}.&nbsp;&nbsp;{heading.toUpperCase()}
      </h2>
      <div className="space-y-4">{children}</div>
    </div>
  )
}

function Clause({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <p>
      <span className="font-semibold text-bh-charcoal">{n}</span>&nbsp;&nbsp;{children}
    </p>
  )
}

function Lettered({ items }: { items: { n: string; text: React.ReactNode }[] }) {
  return (
    <ul className="list-none pl-6 space-y-1.5">
      {items.map((item) => (
        <li key={item.n}>
          <span className="font-semibold text-bh-charcoal">({item.n})</span>&nbsp;&nbsp;{item.text}
        </li>
      ))}
    </ul>
  )
}
