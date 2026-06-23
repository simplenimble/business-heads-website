import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Membership Terms & Conditions | Business Heads',
  description: 'Business Heads membership terms and conditions. Effective 1 July 2026.',
}

export default function TermsPage() {
  return (
    <>
      <section className="bg-bh-charcoal px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <p className="font-body text-bh-yellow text-sm uppercase tracking-widest mb-4">Legal</p>
          <h1 className="font-heading font-semibold text-4xl md:text-5xl text-white leading-tight mb-4">
            Membership Terms &amp; Conditions
          </h1>
          <p className="font-body text-white/50">
            Business Heads Pty Ltd (ABN 78 693 566 326) · Effective 1 July 2026
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="max-w-3xl mx-auto">

          {/* Business details table */}
          <div className="mb-12 rounded-2xl border border-bh-charcoal/10 overflow-hidden">
            <table className="w-full text-sm font-body">
              <tbody>
                {[
                  ['Business name', 'Business Heads Pty Ltd'],
                  ['ABN', '78 693 566 326'],
                  ['Website', 'www.businessheads.com.au'],
                  ['Contact email', 'hello@businessheads.com.au'],
                  ['Governing law', 'New South Wales and Tasmania, Australia'],
                  ['Address', '902/50 Berry Street, North Sydney NSW 2060'],
                ].map(([label, value]) => (
                  <tr key={label} className="border-b border-bh-charcoal/8 last:border-0">
                    <td className="px-5 py-3.5 text-bh-charcoal/50 w-44 align-top">{label}</td>
                    <td className="px-5 py-3.5 text-bh-charcoal">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="space-y-10 font-body text-bh-charcoal/80 leading-[1.8]">

            <Section num="1" heading="About These Terms">
              <p>These are the terms and conditions that apply to your Business Heads membership. By signing up for a membership, you agree to these terms. Please read them before completing your purchase.</p>
              <p>These terms sit alongside the Business Heads Competition Rules and Conditions of Entry, which govern the quarterly prize draw. If you have any questions, contact us at <a href="mailto:hello@businessheads.com.au" className="text-bh-blue underline underline-offset-2">hello@businessheads.com.au</a>.</p>
            </Section>

            <Section num="2" heading="Who Can Become a Member">
              <p>To join Business Heads, you must:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>be an individual aged 18 years or over;</li>
                <li>be a resident of Australia; and</li>
                <li>be purchasing membership for business or professional purposes.</li>
              </ul>
              <p>Business Heads reserves the right to decline a membership application at its discretion, including where the applicant does not meet these requirements or where membership would not be in keeping with the Business Heads community.</p>
            </Section>

            <Section num="3" heading="What Your Membership Includes">
              <p>A current Business Heads membership gives you access to the following:</p>
              <div className="rounded-2xl border border-bh-charcoal/10 overflow-x-auto my-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-bh-charcoal/5 text-left">
                      <th className="px-5 py-3 font-semibold text-bh-charcoal">Benefit</th>
                      <th className="px-5 py-3 font-semibold text-bh-charcoal">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Member directory and profile', 'A profile page in the Business Heads member directory, visible to other current members.'],
                      ['Member deals and discounts', 'We facilitate access to offers and discounts where member businesses choose to make them available. The range and availability of deals will vary over time.'],
                      ['Networking platform', 'Access to the Business Heads online community and member platform.'],
                      ['Quarterly event access', 'Priority access to purchase tickets to Business Heads quarterly networking events. Event tickets are sold separately and are not included in your membership fee.'],
                      ['Competition entries', 'Free entries into the Business Heads quarterly prize draw in accordance with the Competition Rules and Conditions of Entry. See section 7 for details.'],
                    ].map(([benefit, desc]) => (
                      <tr key={benefit} className="border-t border-bh-charcoal/8">
                        <td className="px-5 py-3.5 text-bh-charcoal font-medium align-top w-52">{benefit}</td>
                        <td className="px-5 py-3.5 text-bh-charcoal/70">{desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>Business Heads may add to or adjust member benefits from time to time. Where a benefit is removed or materially reduced, we will give you at least 30 days notice. If you are on an annual membership and we remove or adjust any of the above benefits in a material way during your paid period, you may cancel and receive a pro-rata refund for the unused portion.</p>
              <p>For the purposes of these terms, a material benefit is one of the core membership inclusions listed in the table above — the member directory, networking platform, member deals, quarterly event access, or competition entries. Minor changes to how a benefit is delivered do not constitute removal of a material benefit.</p>
            </Section>

            <Section num="4" heading="Pricing and Billing">
              <SubSection num="1" heading="Membership fees">
                <p>Current membership fees are:</p>
                <div className="rounded-2xl border border-bh-charcoal/10 overflow-x-auto my-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-bh-charcoal/5 text-left">
                        <th className="px-5 py-3 font-semibold text-bh-charcoal">Membership type</th>
                        <th className="px-5 py-3 font-semibold text-bh-charcoal">Fee (AUD, GST incl.)</th>
                        <th className="px-5 py-3 font-semibold text-bh-charcoal">Billing cycle</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-bh-charcoal/8">
                        <td className="px-5 py-3.5 text-bh-charcoal">Monthly membership</td>
                        <td className="px-5 py-3.5 text-bh-charcoal/70">$200 per month</td>
                        <td className="px-5 py-3.5 text-bh-charcoal/70">Automatically renews monthly</td>
                      </tr>
                      <tr className="border-t border-bh-charcoal/8">
                        <td className="px-5 py-3.5 text-bh-charcoal">Annual membership</td>
                        <td className="px-5 py-3.5 text-bh-charcoal/70">$2,200 per year</td>
                        <td className="px-5 py-3.5 text-bh-charcoal/70">Automatically renews annually</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>All fees are in Australian dollars and are inclusive of GST.</p>
              </SubSection>
              <SubSection num="2" heading="Automatic renewal">
                <p>Your membership renews automatically at the end of each billing period unless you cancel before the renewal date. For annual memberships, we will send a renewal reminder at least 30 days before your renewal date.</p>
              </SubSection>
              <SubSection num="3" heading="Price changes">
                <p>We may change membership fees from time to time. We will give you at least 30 days notice of any price increase before it takes effect. If you do not wish to continue at the new price, you may cancel your membership before the new price applies without penalty. A price change during a prepaid annual period does not take effect until your next renewal date.</p>
              </SubSection>
              <SubSection num="4" heading="Failed payments">
                <p>If a payment fails, we will attempt to contact you using the details on your account. If payment is not received within 7 days of the due date, your membership may be suspended until the outstanding amount is paid.</p>
              </SubSection>
              <SubSection num="5" heading="Tax invoice">
                <p>A GST-inclusive tax invoice will be issued to your registered email address following each successful payment.</p>
              </SubSection>
              <SubSection num="6" heading="Payment method and billing details">
                <p>Membership fees are collected by credit or debit card via our secure payment provider (Stripe). Your card details are stored and processed securely and are not held by Business Heads.</p>
                <p>To update your billing details, log in to your member account or contact us at <a href="mailto:hello@businessheads.com.au" className="text-bh-blue underline underline-offset-2">hello@businessheads.com.au</a>.</p>
              </SubSection>
            </Section>

            <Section num="5" heading="Cancellation">
              <SubSection num="1" heading="Monthly memberships">
                <p>You may cancel a monthly membership at any time. Your cancellation will take effect at the end of the current billing period, and you will retain access to your membership benefits until that date. No refund is payable for the current billing period.</p>
              </SubSection>
              <SubSection num="2" heading="Annual memberships">
                <p>You may cancel an annual membership at any time. Your cancellation will take effect at the end of the current annual period, and you will retain access to your membership benefits until that date. We do not offer pro-rata refunds for unused portions of an annual membership where cancellation is for change of mind.</p>
                <p>This does not affect your rights under the Australian Consumer Law. If we fail to provide the services as described, or if a statutory guarantee applies, you may be entitled to a remedy including a refund for the unused portion of your prepaid period.</p>
              </SubSection>
              <SubSection num="3" heading="How to cancel">
                <p>To cancel your membership, contact us at <a href="mailto:hello@businessheads.com.au" className="text-bh-blue underline underline-offset-2">hello@businessheads.com.au</a>. We will confirm your cancellation by email within 2 business days.</p>
              </SubSection>
              <SubSection num="4" heading="Cancellation by Business Heads">
                <p>We may cancel or suspend your membership where you breach these terms or engage in conduct described in section 6. Where we cancel your membership for reasons other than breach, we will refund any prepaid fees for the unused portion of your current membership period.</p>
              </SubSection>
            </Section>

            <Section num="6" heading="Your Responsibilities as a Member">
              <p>As a Business Heads member, you agree to:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>provide accurate information when setting up and maintaining your member profile;</li>
                <li>treat other members and Business Heads staff with respect;</li>
                <li>not use your membership or the Business Heads platform to spam, solicit, harass, mislead or harm other members;</li>
                <li>not use the member directory for unsolicited sales activity, data harvesting or any purpose other than genuine professional networking;</li>
                <li>not share your membership login or access with others;</li>
                <li>comply with any community guidelines published by Business Heads from time to time; and</li>
                <li>notify us promptly if your contact details or billing information change.</li>
              </ul>
              <p>If Business Heads considers that you may have breached these responsibilities, we will notify you of the concern and give you 5 business days to respond before taking action, unless the conduct involves fraud, harassment, misuse of the member directory including unsolicited solicitation or data harvesting, or other serious behaviour that warrants immediate suspension. Where your membership is cancelled for breach, no pro-rata refund is payable for the remaining period in your subscription.</p>
              <p>These rights exist solely to protect the integrity of the Business Heads community and the interests of other members.</p>
            </Section>

            <Section num="7" heading="Competition Entries">
              <p>Your membership includes access to free entries into the Business Heads quarterly prize draw. The number of entries you receive depends on your membership type and any event tickets you purchase, as set out in the Competition Rules and Conditions of Entry.</p>
              <p>The Competition Rules govern how entries are counted, how the draw is conducted, and how prizes are awarded. A copy of the Competition Rules is available at <a href="https://www.businessheads.com.au" className="text-bh-blue underline underline-offset-2">www.businessheads.com.au</a>.</p>
              <p>If the quarterly prize draw is permanently discontinued, annual members who have not yet completed their paid period may cancel and receive a pro-rata refund for the unused portion of that period.</p>
            </Section>

            <Section num="8" heading="Our Responsibilities to You">
              <p>Business Heads will:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>make reasonable efforts to ensure the member platform and benefits are available and functioning;</li>
                <li>give you at least 30 days notice of any material changes to membership benefits or these terms; and</li>
                <li>handle your personal information in accordance with our Privacy Policy and the Australian Privacy Principles.</li>
              </ul>
              <p>We may need to take the platform offline occasionally for maintenance or updates. We will aim to minimise disruption and communicate planned outages in advance.</p>
              <p>Business Heads facilitates access to deals and offers from member businesses but is not responsible for the quality, accuracy or availability of those deals. Any dispute about a third-party offer is between you and that member business.</p>
            </Section>

            <Section num="9" heading="Limitation of Liability">
              <p>To the maximum extent permitted by law, Business Heads limits its liability to you in connection with your membership to the total membership fees you have paid in the 12 months preceding the relevant claim.</p>
              <p>Business Heads is not liable for any indirect, consequential or special loss arising from your use of the platform or participation in member benefits.</p>
              <p>Nothing in these terms excludes, restricts or modifies any right or remedy you have under the Australian Consumer Law or any other law that cannot be excluded.</p>
            </Section>

            <Section num="10" heading="Changes to These Terms">
              <p>We may update these terms from time to time. We will notify you of any material changes by email and by publishing the updated terms on our website, with at least 30 days notice before the change takes effect.</p>
              <p>If a material change is to your detriment and you do not wish to continue on the updated terms, you may cancel your membership before the change takes effect without penalty. If you are on an annual membership, we will refund the pro-rata value of your unused period in that circumstance.</p>
              <p>If you continue your membership after a change takes effect, you are taken to have accepted the updated terms.</p>
            </Section>

            <Section num="11" heading="Your Profile and Content">
              <p>When you create or update your member profile, you retain ownership of the content you provide. By submitting content to your profile, you grant Business Heads a non-exclusive licence to display that content to other current members as part of the member directory for the duration of your membership.</p>
              <p>You are responsible for ensuring that any content you post to your profile does not infringe the rights of others. Business Heads reserves the right to remove content that it considers inappropriate or in breach of these terms.</p>
              <p>When your membership ends, your profile will be removed from the member directory. If Business Heads is sold or ceases to operate, members will be notified by email and all member profile data will be deleted within 30 days of the platform closure. Any retained data will be handled in accordance with the Privacy Policy.</p>
            </Section>

            <Section num="12" heading="Privacy">
              <p>Business Heads collects and handles your personal information in accordance with our <a href="/privacy" className="text-bh-blue underline underline-offset-2">Privacy Policy</a>, available at www.businessheads.com.au. The Privacy Policy explains what information we collect, how we use it, and how you can access or correct it.</p>
              <p>Your member profile is visible to other current Business Heads members only. By creating a profile, you consent to this visibility. If you do not wish certain information to be visible to other members, do not include it in your profile.</p>
              <p>By becoming a member, you consent to us using your contact details to communicate with you about your membership and Business Heads news and events. You can opt out of marketing communications at any time by contacting us or using the unsubscribe link in any email.</p>
            </Section>

            <Section num="13" heading="Complaints and Disputes">
              <p>If you have a complaint or concern about your membership, please contact us at <a href="mailto:hello@businessheads.com.au" className="text-bh-blue underline underline-offset-2">hello@businessheads.com.au</a>. We will respond within 5 business days and will work with you in good faith to resolve the matter.</p>
              <p>If a dispute cannot be resolved through this process, either party may refer the matter to mediation before commencing legal proceedings, unless the circumstances require urgent relief from a court.</p>
            </Section>

            <Section num="14" heading="Governing Law">
              <p>These terms are governed by the laws of New South Wales, Australia. Each party submits to the non-exclusive jurisdiction of the courts of New South Wales. Where you are based in Tasmania, Tasmanian consumer protection laws also apply to the extent required by law.</p>
            </Section>

            <Section num="15" heading="Contact Us">
              <p>If you have questions about your membership or these terms, please get in touch:</p>
              <div className="rounded-2xl border border-bh-charcoal/10 overflow-hidden mt-4">
                <table className="w-full text-sm font-body">
                  <tbody>
                    {[
                      ['Business name', 'Business Heads Pty Ltd'],
                      ['ABN', '78 693 566 326'],
                      ['Email', 'hello@businessheads.com.au'],
                      ['Website', 'www.businessheads.com.au'],
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

function SubSection({ num, heading, children }: { num: string; heading: string; children: React.ReactNode }) {
  return (
    <div className="mt-5">
      <h3 className="font-body font-semibold text-bh-charcoal mb-2">
        {num}.&nbsp;&nbsp;{heading}
      </h3>
      <div className="space-y-3">{children}</div>
    </div>
  )
}
