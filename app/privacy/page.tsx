import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Business Heads',
  description: 'Business Heads privacy policy. How we collect, use and protect your personal information.',
}

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-bh-charcoal px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <p className="font-body text-bh-yellow text-sm uppercase tracking-widest mb-4">Legal</p>
          <h1 className="font-heading font-semibold text-4xl md:text-5xl text-white leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="font-body text-white/50">
            Business Heads Pty Ltd (ABN 78 693 566 326) · Version 1.0 · Effective 1 July 2026
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-10 font-body text-bh-charcoal/80 leading-[1.8]">

            <Section num="1" heading="About This Policy">
              <p>Business Heads Pty Ltd (we, us, our) is committed to protecting your privacy and handling your personal information responsibly. This Privacy Policy explains what personal information we collect, how we use and disclose it, and how you can access, correct, update or request deletion of your information.</p>
              <p>Personal information means information or an opinion about an identified individual or a reasonably identifiable individual, whether true or not, in accordance with the Privacy Act 1988 (Cth).</p>
              <p>This policy is consistent with the Australian Privacy Act 1988 (Cth), the Australian Privacy Principles (APPs) and the Spam Act 2003 (Cth). It applies to all personal information we collect in connection with the Business Heads platform, membership, events and quarterly prize draw.</p>
              <p>By using our website, signing up for a membership, registering for an event or entering our prize draw, you agree to the collection and use of your information as described in this policy.</p>
            </Section>

            <Section num="2" heading="Who This Policy Applies To">
              <p>This policy applies to current and prospective Business Heads members, event attendees whether or not they are members, quarterly prize draw entrants, and visitors to www.businessheads.com.au.</p>
              <p>The Business Heads platform is for individuals aged 18 and over. We do not knowingly collect personal information from anyone under 18. If you believe we have inadvertently collected information from a minor, contact us at <a href="mailto:hello@businessheads.com.au" className="text-bh-blue underline underline-offset-2">hello@businessheads.com.au</a> and we will delete it promptly.</p>
            </Section>

            <Section num="3" heading="What Information We Collect">
              <p>We collect different types of personal information depending on how you interact with us.</p>
              <div className="rounded-2xl border border-bh-charcoal/10 overflow-x-auto my-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-bh-charcoal/5 text-left">
                      <th className="px-4 py-3 font-semibold text-bh-charcoal">Category</th>
                      <th className="px-4 py-3 font-semibold text-bh-charcoal">Examples</th>
                      <th className="px-4 py-3 font-semibold text-bh-charcoal">Primary purpose</th>
                      <th className="px-4 py-3 font-semibold text-bh-charcoal">Retention</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Member profile', 'First name, last name, business name, job title, LinkedIn URL, profile photo, bio, industry, location', 'Member directory, platform access, community participation', 'Deleted within 30 days of membership ending'],
                      ['Contact details', 'Email address, phone number (if provided)', 'Membership admin, communications, direct marketing with consent', 'Up to 2 years after membership ends, then deleted or de-identified'],
                      ['Payment and billing', 'Billing address, ABN, transaction records. Card numbers processed by Stripe — not held by Business Heads.', 'Processing payments, financial records', '7 years (ATO)'],
                      ['Event registration', 'Name, contact details, dietary or accessibility requirements (if provided), ticket records', 'Event administration and attendance', '2 years from event'],
                      ['Competition entries', 'Name, contact details, membership status, qualifying transaction records', 'Administering the draw, verifying eligibility, notifying winners', '7 years (members)'],
                      ['LinkedIn data', 'Name, photo, job title and employer, where you choose to link your LinkedIn profile', 'Pre-populating member profile, member directory', 'Treated as member profile data'],
                      ['Website analytics', 'IP address, browser type, device type, pages visited, session duration', 'Understanding site usage, improving the platform', '26 months'],
                      ['Communications', 'Emails, enquiries and support messages sent to us', 'Responding to enquiries, improving our service, legal records', '3 years from last interaction'],
                    ].map(([cat, ex, purpose, ret]) => (
                      <tr key={cat} className="border-t border-bh-charcoal/8 align-top">
                        <td className="px-4 py-3.5 text-bh-charcoal font-medium">{cat}</td>
                        <td className="px-4 py-3.5 text-bh-charcoal/70">{ex}</td>
                        <td className="px-4 py-3.5 text-bh-charcoal/70">{purpose}</td>
                        <td className="px-4 py-3.5 text-bh-charcoal/70">{ret}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <SubSection num="1" heading="Sensitive information">
                <p>We do not intentionally collect sensitive information as defined in the Privacy Act. If you provide dietary or accessibility requirements when registering for an event, we treat this as sensitive information, collect it only with your consent, and use it solely to manage your attendance at that event.</p>
              </SubSection>
              <SubSection num="2" heading="Information we do not collect">
                <p>We do not collect government identifiers such as tax file numbers, passport numbers or Medicare numbers.</p>
              </SubSection>
            </Section>

            <Section num="4" heading="How We Collect Your Information">
              <SubSection num="1" heading="Collecting personal information">
                <p>We collect personal information directly from you when you sign up for a membership, create or update your member profile, purchase event tickets, enter the quarterly prize draw, contact us, or visit our website. We do not collect personal information from third parties without your knowledge, except as described below.</p>
              </SubSection>
              <SubSection num="2" heading="LinkedIn and third-party sign-in">
                <p>If you choose to link your LinkedIn profile to your Business Heads profile, we collect the information you make available through that connection, including your name, profile photo, job title and employer. This is optional. LinkedIn-sourced data is treated as member profile data and handled in accordance with this policy. You can disconnect LinkedIn at any time through the member platform.</p>
              </SubSection>
            </Section>

            <Section num="5" heading="How We Use Your Information">
              <SubSection num="1" heading="The purpose for which it was collected">
                <p>We use your personal information to:</p>
                <ul className="list-disc pl-6 space-y-1.5 mt-2">
                  <li>manage your membership and provide access to member benefits;</li>
                  <li>display your profile in the member directory to other current members;</li>
                  <li>process payments and maintain financial records;</li>
                  <li>administer the quarterly prize draw and notify winners;</li>
                  <li>manage event registrations and attendance;</li>
                  <li>send you membership communications, renewal reminders and receipts;</li>
                  <li>send you marketing communications about Business Heads where you have consented or where it is within reasonable expectations given your membership;</li>
                  <li>respond to your enquiries and provide support;</li>
                  <li>improve the website and member platform; and</li>
                  <li>comply with our legal obligations.</li>
                </ul>
                <p className="mt-3">We will not use your personal information for any purpose incompatible with the purpose for which it was collected, unless you consent or an exception under the Privacy Act applies.</p>
              </SubSection>
              <SubSection num="2" heading="Aggregated data">
                <p>We may use de-identified, aggregated data about our membership for internal analysis and reporting. Aggregated data does not identify individual members and is not sold or shared with third parties in a form that could identify you.</p>
              </SubSection>
            </Section>

            <Section num="6" heading="Sharing Your Information">
              <SubSection num="1" heading="General principle">
                <p>We do not sell your personal information to third parties. We share your information only in the circumstances described in this section.</p>
              </SubSection>
              <SubSection num="2" heading="Member directory">
                <p>Your member profile is visible to other current Business Heads members through the member directory. See section 10 for details of what information is included and how you can manage your profile.</p>
              </SubSection>
              <SubSection num="3" heading="Rewards Gateway">
                <p>When you become a member, we share your first name, last name and email address with Rewards Gateway to create your access to the Business Heads member deals program. Once your account is created, Rewards Gateway processes your personal information, including your activity on the deals platform, under its own Privacy Policy. Business Heads notifies Rewards Gateway when your membership ends, at which point Rewards Gateway retains your data for 60 days before deletion, with order history retained for 2 years.</p>
                <p>We encourage you to read Rewards Gateway&rsquo;s Privacy Policy before using the deals platform.</p>
              </SubSection>
              <SubSection num="4" heading="Member deals and referrals">
                <p>If you express interest in a deal or offer made available by another member business (separate from the Rewards Gateway program), we may share your name and contact details with that member business to facilitate the connection, or you can make the connection yourself. We will notify you before any such sharing occurs. Once shared, that member business&rsquo;s own privacy practices govern how they handle your information.</p>
              </SubSection>
              <SubSection num="5" heading="Competition administration">
                <p>Personal information collected from prize draw entrants is used to administer the draw, verify eligibility and notify winners. Winner names and general location may be published in accordance with the Competition Rules. We do not use prize draw entry data for marketing purposes without your consent.</p>
              </SubSection>
              <SubSection num="6" heading="Events">
                <p>We may share attendee information with third-party event suppliers, including venue operators, to manage event attendance and logistics. Photographers or videographers may be present at Business Heads events and we will notify attendees in advance where images may be taken and used in our communications. Where a Business Heads event involves a co-host, sponsor or event partner, any sharing of attendee information with that partner will be disclosed at the time of event registration.</p>
              </SubSection>
              <SubSection num="7" heading="Service providers">
                <p>We share personal information with third-party service providers who assist us in operating the platform and delivering services. These providers are permitted to use your information only for the specific purpose for which it was shared. Current providers are listed in section 8.</p>
              </SubSection>
              <SubSection num="8" heading="Legal requirements">
                <p>We may disclose your personal information where required or authorised by law, including to comply with a court order, subpoena or regulatory requirement, or to protect the rights, property or safety of Business Heads, our members or others.</p>
              </SubSection>
              <SubSection num="9" heading="Business sale or transfer">
                <p>If Business Heads is sold, merged or transferred to another entity, your personal information may be transferred as part of that transaction. We will notify you before any such transfer and ensure the receiving entity is bound by privacy obligations consistent with this policy. If we cease to operate, member profile data will be deleted within 30 days of platform closure.</p>
              </SubSection>
            </Section>

            <Section num="7" heading="Direct Marketing and the Spam Act">
              <p>We may use your contact details to send you information about Business Heads membership, events, prize draws and community news, where you have consented or where it is within reasonable expectations given your membership. Entering our quarterly prize draw does not constitute consent to receive marketing communications.</p>
              <p>All commercial electronic messages we send comply with the Spam Act 2003 (Cth). This means:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>for members, we may rely on inferred consent arising from your active membership relationship with us;</li>
                <li>for all other individuals, we will only send marketing communications where you have given express consent;</li>
                <li>every marketing email we send identifies Business Heads as the sender and includes our contact details; and</li>
                <li>every marketing email includes a clear and functional unsubscribe mechanism.</li>
              </ul>
              <p>You can opt out of direct marketing at any time by using the unsubscribe link in any email we send, or by contacting us at <a href="mailto:hello@businessheads.com.au" className="text-bh-blue underline underline-offset-2">hello@businessheads.com.au</a>. We will process opt-out requests within 5 business days. Opting out does not affect transactional communications about your membership, such as renewal reminders, receipts and account notices.</p>
            </Section>

            <Section num="8" heading="Overseas Disclosure and Third-Party Providers">
              <p>We use third-party service providers and platforms to operate Business Heads. Some process data outside Australia. We take reasonable steps to ensure all providers handle personal information consistently with the Australian Privacy Principles, including by accepting their data processing agreements.</p>
              <SubSection num="1" heading="Third-party platforms you interact with directly">
                <p>Business Heads provides access to two third-party platforms that you will use directly as a member:</p>
                <p><strong className="font-semibold text-bh-charcoal">Circle (community platform):</strong> The Business Heads online community is hosted on Circle&rsquo;s platform. Your posts, messages, profile activity and interactions within the community are processed by Circle under Circle&rsquo;s Terms of Service and Privacy Policy. Circle processes this data independently of Business Heads. Business Heads has entered into Circle&rsquo;s Data Processing Agreement to govern the handling of member personal information. We encourage you to read Circle&rsquo;s privacy policy at <a href="https://circle.so/privacy" className="text-bh-blue underline underline-offset-2" target="_blank" rel="noopener noreferrer">circle.so/privacy</a>.</p>
                <p><strong className="font-semibold text-bh-charcoal">Rewards Gateway (member deals):</strong> Your access to and use of the Business Heads member deals program is provided through Rewards Gateway&rsquo;s platform. Rewards Gateway processes your data under its own Privacy Policy. See section 6 for details of what information Business Heads shares with Rewards Gateway to create your account.</p>
                <p>Business Heads is not responsible for the privacy practices of Circle or Rewards Gateway beyond the obligations set out in our data processing agreements with each provider.</p>
              </SubSection>
              <div className="rounded-2xl border border-bh-charcoal/10 overflow-x-auto mt-5">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-bh-charcoal/5 text-left">
                      <th className="px-4 py-3 font-semibold text-bh-charcoal">Provider</th>
                      <th className="px-4 py-3 font-semibold text-bh-charcoal">Country</th>
                      <th className="px-4 py-3 font-semibold text-bh-charcoal">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Stripe', 'United States', 'Processing membership and event payments. Card data held by Stripe, not Business Heads. See stripe.com/au/privacy.'],
                      ['Circle', 'United States', 'Member community platform. Hosts the Business Heads online community and member directory. Members interact directly with Circle\'s platform. DPA in place. See circle.so/privacy.'],
                      ['Rewards Gateway', 'United Kingdom / Australia', 'Member deals and rewards program. Business Heads shares first name, last name and email to create member accounts. See rewardsgateway.com.au for their privacy policy.'],
                      ['Email Hub', 'United States', 'Sending membership communications, newsletters and event notifications.'],
                      ['Google Analytics', 'United States', 'Website analytics, usage data and performance monitoring.'],
                      ['Vercel', 'United States', 'Hosting the Business Heads website.'],
                      ['Supabase', 'United States', 'Lead enquiries submitted through this website are stored using Supabase, a database service provided by Supabase Inc.'],
                    ].map(([provider, country, purpose]) => (
                      <tr key={provider} className="border-t border-bh-charcoal/8 align-top">
                        <td className="px-4 py-3.5 text-bh-charcoal font-medium">{provider}</td>
                        <td className="px-4 py-3.5 text-bh-charcoal/70">{country}</td>
                        <td className="px-4 py-3.5 text-bh-charcoal/70">{purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-sm text-bh-charcoal/50">We will update this table when we add or change providers.</p>
            </Section>

            <Section num="9" heading="Cookies and Website Analytics">
              <p>Our website uses cookies and similar technologies to support platform functionality and to understand how the site is used.</p>
              <div className="rounded-2xl border border-bh-charcoal/10 overflow-x-auto my-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-bh-charcoal/5 text-left">
                      <th className="px-4 py-3 font-semibold text-bh-charcoal">Cookie type</th>
                      <th className="px-4 py-3 font-semibold text-bh-charcoal">Purpose</th>
                      <th className="px-4 py-3 font-semibold text-bh-charcoal">Can you opt out?</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-bh-charcoal/8 align-top">
                      <td className="px-4 py-3.5 text-bh-charcoal font-medium">Essential cookies</td>
                      <td className="px-4 py-3.5 text-bh-charcoal/70">Keeping you logged in, maintaining your session, security</td>
                      <td className="px-4 py-3.5 text-bh-charcoal/70">No. The platform cannot function without these.</td>
                    </tr>
                    <tr className="border-t border-bh-charcoal/8 align-top">
                      <td className="px-4 py-3.5 text-bh-charcoal font-medium">Analytics cookies</td>
                      <td className="px-4 py-3.5 text-bh-charcoal/70">Understanding site usage and improving the platform</td>
                      <td className="px-4 py-3.5 text-bh-charcoal/70">Yes. Via your browser settings or <a href="https://tools.google.com/dlpage/gaoptout" className="text-bh-blue underline underline-offset-2" target="_blank" rel="noopener noreferrer">Google&rsquo;s opt-out browser add-on</a>.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>By continuing to use our website, you consent to our use of cookies as described above. Most browsers allow you to manage or disable cookies through their settings. Disabling essential cookies may affect your ability to use the member platform.</p>
            </Section>

            <Section num="10" heading="Member Directory and Profile Privacy">
              <SubSection num="1" heading="What is visible and to whom">
                <p>Your member profile is visible to other current Business Heads members only through the Business Heads community on Circle&rsquo;s platform. It is not visible to the general public, to former members or to individuals who are not logged in.</p>
              </SubSection>
              <SubSection num="2" heading="Mandatory and optional fields">
                <p>The following fields are required to create a member profile: first name, last name and business name. All other profile fields, including job title, LinkedIn URL, profile photo, bio, industry and location, are optional. You choose what you share.</p>
              </SubSection>
              <SubSection num="3" heading="Managing your profile">
                <p>You can update, restrict or remove information from your member profile at any time through the member platform, without needing to cancel your membership. If you need assistance, contact us at <a href="mailto:hello@businessheads.com.au" className="text-bh-blue underline underline-offset-2">hello@businessheads.com.au</a> and we will respond within 5 business days.</p>
              </SubSection>
              <SubSection num="4" heading="Responsible use of directory information">
                <p>By accessing the member directory, you agree to use the information you find there only for genuine professional networking purposes. You must not use directory information to send unsolicited commercial messages to other members, copy or harvest the directory for use outside the platform, or share other members&rsquo; information with third parties without their consent. Breach of these obligations may result in suspension or cancellation of your membership. Business Heads is not liable for misuse of directory information by other members but will investigate and act on complaints.</p>
              </SubSection>
              <SubSection num="5" heading="Profile removal on membership ending">
                <p>Your profile will be removed from the member directory within 30 days of your membership ending. Contact details and transaction records will be retained for the periods in section 3, subject to your right to request deletion under section 13.</p>
              </SubSection>
            </Section>

            <Section num="11" heading="How Long We Keep Your Information">
              <p>We keep personal information only for as long as it is needed for the purpose for which it was collected, or as required by law. The retention periods in section 3 apply as a general guide. When information is no longer needed, we delete or de-identify it securely.</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Financial records including membership fee and event ticket transaction records are retained for 7 years in accordance with ATO requirements.</li>
                <li>Member profile data is deleted within 30 days of membership ending.</li>
                <li>Contact details are retained for up to 2 years after membership ends for legal and dispute resolution purposes, then deleted or de-identified.</li>
                <li>If we cease to operate, all remaining member data will be deleted within 30 days of platform closure.</li>
              </ul>
              <p>When your membership ends, Business Heads notifies Rewards Gateway, who will retain your data for 60 days before deletion, with order history retained for 2 years. Data held within Circle&rsquo;s platform is subject to Circle&rsquo;s own retention practices following deletion by Business Heads.</p>
            </Section>

            <Section num="12" heading="Protecting Your Information">
              <SubSection num="1" heading="Security measures">
                <p>We take reasonable steps to protect personal information from misuse, interference, loss, unauthorised access, modification and disclosure. Our measures include:</p>
                <ul className="list-disc pl-6 space-y-1.5 mt-2">
                  <li>secure HTTPS connections on our website and member platform;</li>
                  <li>encryption of personal data at rest;</li>
                  <li>access controls and two-factor authentication for administrative accounts;</li>
                  <li>staff access to personal information limited on a need-to-know basis;</li>
                  <li>use of reputable third-party providers, including Rewards Gateway which holds ISO 27001 certification; and</li>
                  <li>a documented data breach response plan.</li>
                </ul>
                <p className="mt-3">No system is completely secure. If you have concerns about the security of your information, please contact us at <a href="mailto:hello@businessheads.com.au" className="text-bh-blue underline underline-offset-2">hello@businessheads.com.au</a>.</p>
              </SubSection>
              <SubSection num="2" heading="Data breaches">
                <p>If we become aware of a data breach likely to result in serious harm, we will assess it promptly and, where required under the Notifiable Data Breaches scheme, notify affected individuals and the Office of the Australian Information Commissioner (OAIC).</p>
              </SubSection>
            </Section>

            <Section num="13" heading="Accessing, Correcting and Deleting Your Information">
              <p>You have the right to request access to the personal information we hold about you, to ask us to correct inaccurate or incomplete information, and to request deletion of information that is no longer required. Contact us at <a href="mailto:hello@businessheads.com.au" className="text-bh-blue underline underline-offset-2">hello@businessheads.com.au</a>. We will respond within 30 days. Members can update most profile information directly through the member platform at any time.</p>
              <SubSection num="1" heading="Deletion requests">
                <p>Where you request deletion of your personal information, we will delete or de-identify information that we are not required to retain. Please note:</p>
                <ul className="list-disc pl-6 space-y-1.5 mt-2">
                  <li>financial transaction records must be retained for 7 years in accordance with ATO requirements and cannot be deleted on request;</li>
                  <li>where your information is held within Circle&rsquo;s platform, we will request deletion on your behalf and remove your access. Circle processes deletion requests and purges backup data in accordance with its own Data Processing Agreement;</li>
                  <li>Rewards Gateway retains order history for 2 years from the date of order and payment records for 1 year, subject to Rewards Gateway&rsquo;s own retention obligations;</li>
                  <li>information you have shared directly with other members through the platform or through member deals referrals cannot be recalled from those individuals; and</li>
                  <li>information held by other third-party providers including Stripe is subject to those providers&rsquo; own retention policies.</li>
                </ul>
                <p className="mt-3">We will confirm the outcome of your deletion request in writing within 30 days.</p>
              </SubSection>
            </Section>

            <Section num="14" heading="Third Party Links">
              <p>Our website, member platform and newsletters may contain links to external websites, LinkedIn profiles, member business websites and other third-party content. Business Heads is not responsible for the content or privacy practices of linked third-party sites. We encourage you to review the privacy policies of any external sites you visit.</p>
            </Section>

            <Section num="15" heading="Privacy Complaints">
              <p>If you have a concern about how we have handled your personal information, contact us at <a href="mailto:hello@businessheads.com.au" className="text-bh-blue underline underline-offset-2">hello@businessheads.com.au</a>. We will acknowledge your complaint within 5 business days and aim to resolve it within 30 days.</p>
              <p>If you are not satisfied with our response, you may lodge a complaint with the Office of the Australian Information Commissioner (OAIC):</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Website: <a href="https://www.oaic.gov.au" className="text-bh-blue underline underline-offset-2" target="_blank" rel="noopener noreferrer">www.oaic.gov.au</a></li>
                <li>Phone: 1300 363 992</li>
                <li>Post: GPO Box 5218, Sydney NSW 2001</li>
              </ul>
            </Section>

            <Section num="16" heading="Changes to This Policy">
              <p>We may update this policy from time to time to reflect changes in our practices or in the law. We will notify current members of any material changes by email and by publishing the updated policy on our website with at least 30 days notice. The version number and effective date at the top of this policy will be updated with each revision. We review this policy at least annually.</p>
            </Section>

            <Section num="17" heading="Contact Us">
              <p>For any privacy-related questions, requests or complaints:</p>
              <div className="rounded-2xl border border-bh-charcoal/10 overflow-hidden mt-4">
                <table className="w-full text-sm font-body">
                  <tbody>
                    {[
                      ['Business name', 'Business Heads Pty Ltd'],
                      ['ABN', '78 693 566 326'],
                      ['Privacy contact', 'hello@businessheads.com.au'],
                      ['Website', 'www.businessheads.com.au'],
                      ['External regulator', 'Office of the Australian Information Commissioner | www.oaic.gov.au | 1300 363 992'],
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
