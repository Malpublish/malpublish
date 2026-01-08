import Link from 'next/link'

const FACETS = [
  {
    title: 'Content Violations',
    icon: '1',
    items: [
      'Disregarding truth standards and fact-checking',
      'Spreading false or misleading claims',
      'Presenting unverified statements as facts',
      'Failing to promptly correct errors',
      'Misattributing or plagiarizing content',
      'Prioritizing sensationalism over accuracy',
      'Publishing undisclosed AI-generated content',
    ],
  },
  {
    title: 'Production Failures',
    icon: '2',
    items: [
      'Inadequate fact-checking processes',
      'Poor editorial oversight',
      'Rushed publication without review',
      'Negligent quality control',
    ],
  },
  {
    title: 'Contractual Breaches',
    icon: '3',
    items: [
      'Violating agreements with contributors',
      'Ignoring licensing requirements',
      'Failing to honor commitments to sources',
      'Breaching terms of use',
    ],
  },
  {
    title: 'Intent & Negligence',
    icon: '4',
    items: [
      'Deliberate deception of audiences',
      'Careless disregard for accuracy',
      'Reckless indifference to harm',
      'Both intentional and accidental breaches qualify',
    ],
  },
]

const RELATED_TERMS = [
  { term: 'Malpublisher', definition: 'An entity or individual engaging in malpublishing practices' },
  { term: 'Malpublished', definition: 'Content that has been unethically published' },
  { term: 'Malpublication', definition: 'A specific instance of malpublished content' },
  { term: 'Malpublishment', definition: 'An act or result of publishing malpractice' },
  { term: 'Malpublicity', definition: 'Exposure resulting from malpublishing practices' },
  { term: 'Malpublishing', definition: 'The practice or act of publishing unethically' },
  { term: 'Malpublishable', definition: 'Content that could potentially be malpublished' },
  { term: 'Malpublicist', definition: 'One who engages in malpublishing' },
]

const GUIDELINES = [
  { title: 'Verify facts with multiple sources', description: 'Cross-reference claims through credible, independent sources before publishing.' },
  { title: 'Label content clearly', description: 'Distinguish news from opinion, editorial, sponsored content, and AI-generated material.' },
  { title: 'Attribute and respect rights', description: 'Credit sources properly and honor intellectual property and licensing agreements.' },
  { title: 'Correct errors promptly', description: 'When mistakes occur, fix them quickly and visibly—transparency builds trust.' },
  { title: 'Maintain independence', description: 'Keep editorial decisions separate from advertiser or sponsor influence.' },
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#0074ff] text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg opacity-80 mb-4">
            Want to champion a healthier information ecosystem?
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Malpublish
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-2 font-mono">
            /mal-PUB-lish/ (verb)
          </p>
          <p className="text-2xl md:text-3xl mb-8">
            &ldquo;To publish in a manner that constitutes malpractice&rdquo;
          </p>
          <p className="text-sm opacity-70">
            Coined March 2023 by Roarke Clinton
          </p>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Why This Matters
          </h2>
          <div className="bg-white rounded-lg shadow-sm p-8 border-l-4 border-[#0074ff]">
            <p className="text-lg text-gray-700 mb-4">
              Publishing failures cause real harm. When publishers breach ethical standards,
              the consequences ripple through society:
            </p>
            <ul className="space-y-2 mb-6 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-[#0074ff] font-bold">•</span>
                <span><strong>Misinformation</strong> — False information spreads and takes root</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0074ff] font-bold">•</span>
                <span><strong>Erosion of trust</strong> — Public loses faith in media, academia, and institutions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0074ff] font-bold">•</span>
                <span><strong>Harm to individuals</strong> — Defamation, privacy violations, and reputation damage</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0074ff] font-bold">•</span>
                <span><strong>Social division</strong> — Inflammatory content that polarizes communities</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0074ff] font-bold">•</span>
                <span><strong>Economic harm</strong> — Fraudulent claims and deceptive advertising</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0074ff] font-bold">•</span>
                <span><strong>Health and safety risks</strong> — Dangerous medical or safety misinformation</span>
              </li>
            </ul>
            <p className="text-gray-600 italic">
              These harms don&apos;t exist in isolation. They share a common root cause: publishing malpractice.
            </p>
          </div>
        </div>
      </section>

      {/* The Umbrella Term */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            The Umbrella Term
          </h2>
          <div className="space-y-4 text-gray-700 text-lg">
            <p>
              You&apos;ve heard of plagiarism, deepfakes, clickbait, fabrication, and fake news.
              These are specific publishing failures. <strong>Malpublishing is the umbrella term</strong> that
              encompasses them all.
            </p>
            <p>
              Just as &ldquo;malpractice&rdquo; covers many specific medical failures, &ldquo;malpublishing&rdquo;
              covers many specific publishing failures—when they violate a community&apos;s standards.
            </p>
            <p>
              Whether a practice constitutes malpublishing depends on context. Each community defines its own
              publishing standards. What&apos;s unacceptable in one context may be acceptable in another.
            </p>
            <p className="text-[#0074ff] font-medium">
              This is why publishing policies matter—they make standards explicit.
            </p>
          </div>
        </div>
      </section>

      {/* Etymology */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Etymology & Context
          </h2>
          <p className="text-gray-700 text-lg text-center max-w-2xl mx-auto">
            The term combines the prefix &ldquo;mal-&rdquo; (meaning bad or wrongful) with &ldquo;publish.&rdquo;
            This follows established patterns like <em>malpractice</em> and <em>malfunction</em>.
            It addresses a linguistic gap—naming the root cause of information harms
            rather than just describing their effects.
          </p>
        </div>
      </section>

      {/* What Isn't Malpublishing */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            What Isn&apos;t Malpublishing
          </h2>
          <div className="bg-white rounded-lg shadow-sm p-8 border-l-4 border-green-500">
            <p className="text-lg text-gray-700 mb-4">
              Writing opinions, theories, or fiction doesn&apos;t constitute malpublishing
              if practices remain ethical.
            </p>
            <p className="text-gray-600">
              Content must be <strong>clearly labeled</strong> appropriately, and audiences
              shouldn&apos;t be deceived about the content&apos;s intent or factual accuracy.
              A clearly marked opinion piece or satirical article isn&apos;t malpublishing—but
              presenting fiction as fact is.
            </p>
          </div>
        </div>
      </section>

      {/* Understanding Malpublishing */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
            Understanding Malpublishing
          </h2>
          <p className="text-center text-gray-600 mb-12">
            What it looks like and how to avoid it
          </p>

          {/* Four Facets */}
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Four Facets of Malpublishing
          </h3>
          <p className="text-gray-600 mb-6 bg-gray-50 p-4 rounded-lg border-l-4 border-gray-300">
            What constitutes malpublishing varies by context. A newsroom, a school, a social platform,
            and a government agency may each define different thresholds. This site provides the framework
            and vocabulary—<strong>your publishing policy defines what it means for your community</strong>.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {FACETS.map((facet) => (
              <div key={facet.title} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 bg-[#0074ff] text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {facet.icon}
                  </span>
                  <h4 className="font-semibold text-lg text-gray-900">{facet.title}</h4>
                </div>
                <ul className="space-y-2">
                  {facet.items.map((item) => (
                    <li key={item} className="text-gray-600 text-sm flex items-start gap-2">
                      <span className="text-[#0074ff] mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* How to Avoid */}
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            How to Avoid It
          </h3>
          <div className="space-y-4">
            {GUIDELINES.map((guideline, index) => (
              <div key={guideline.title} className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {index + 1}
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{guideline.title}</h4>
                    <p className="text-gray-600 text-sm">{guideline.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Terms */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Related Terms & Derivatives
          </h2>
          <div className="overflow-hidden rounded-lg border border-gray-200">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Term</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Definition</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {RELATED_TERMS.map((item) => (
                  <tr key={item.term}>
                    <td className="px-6 py-4 font-medium text-gray-900">{item.term}</td>
                    <td className="px-6 py-4 text-gray-600">{item.definition}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Reader Responsibility */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Reader Responsibility
          </h2>
          <p className="text-gray-700 text-lg text-center max-w-2xl mx-auto mb-6">
            Consumers should approach content critically, question sources, and call out
            apparent malpublishing.
          </p>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            This accountability creates a culture of responsible publishing and demands
            better standards from publishers and platforms alike.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-[#0074ff] text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Define Your Publishing Standards
          </h2>
          <p className="text-lg mb-4 opacity-90">
            This site introduces the concept. <strong>PublishingPolicy.org</strong> helps you define
            what it means for your community—whether you&apos;re a newsroom, school, platform, or
            individual creator.
          </p>
          <p className="text-base mb-8 opacity-80">
            Create a publishing policy that declares your commitments and sets the standards
            for your organization.
          </p>
          <Link
            href="https://publishingpolicy.org/build"
            className="inline-block bg-white text-[#0074ff] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
          >
            Build Your Publishing Policy
          </Link>
          <p className="mt-4 text-sm opacity-70">
            Free at publishingpolicy.org
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-gray-400">
        <div className="max-w-3xl mx-auto text-center">
          <p className="mb-4">
            <Link
              href="https://publishingpolicy.org"
              className="text-white hover:underline"
            >
              publishingpolicy.org
            </Link>
            {' '}&mdash; Define what you stand for
          </p>
          <p className="text-sm">
            Contact:{' '}
            <a href="mailto:stopmalpublishing@gmail.com" className="hover:text-white">
              stopmalpublishing@gmail.com
            </a>
          </p>
          <p className="text-xs mt-4 opacity-70">
            &ldquo;Malpublish&rdquo; coined March 2023 by Roarke Clinton
          </p>
        </div>
      </footer>
    </div>
  )
}
