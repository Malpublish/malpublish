import Link from 'next/link'

const FACETS = [
  {
    title: 'Content Violations',
    icon: '1',
    items: [
      'Disregarding ethical standards',
      'Spreading false or deceptive claims',
      'Presenting opinions as facts',
      'Failing to retract errors promptly',
      'Misattribution or unauthorized use',
      'Prioritizing sensationalism',
      'Undisclosed AI-generated content',
    ],
  },
  {
    title: 'Production Failures',
    icon: '2',
    description: 'Negligent quality control across all formats and media types, including inadequate fact-checking, poor editorial oversight, and rushed publication processes.',
  },
  {
    title: 'Contractual Obligations',
    icon: '3',
    description: 'Breach of agreements with contributors, authors, and sources. This includes violating terms of use, ignoring licensing requirements, and failing to honor commitments.',
  },
  {
    title: 'Intent & Negligence',
    icon: '4',
    description: 'Includes both deliberate violations and accidental breaches. Whether intentional deception or careless disregard, both constitute malpublishing.',
  },
]

const RELATED_TERMS = [
  { term: 'Malpublisher', definition: 'An entity or individual engaging in malpublishing practices' },
  { term: 'Malpublished', definition: 'Content that has been unethically published' },
  { term: 'Malpublication', definition: 'A specific instance of malpublished content' },
  { term: 'Malpublicity', definition: 'Exposure resulting from malpublishing practices' },
  { term: 'Malpublishing', definition: 'The practice or act of publishing unethically' },
  { term: 'Malpublishable', definition: 'Content that could potentially be malpublished' },
  { term: 'Malpublicist', definition: 'One who promotes or engages in malpublishing' },
]

const GUIDELINES = [
  { title: 'Fact-check all information', description: 'Verify claims with multiple reliable sources before publishing.' },
  { title: 'Distinguish facts from opinions', description: 'Clearly label opinion pieces and editorials as such.' },
  { title: 'Provide proper attribution', description: 'Credit sources, quotes, and referenced material appropriately.' },
  { title: 'Engage in responsible editing', description: 'Ensure editorial processes prioritize accuracy over speed.' },
  { title: 'Be transparent with corrections', description: 'When errors occur, correct them promptly and visibly.' },
  { title: 'Respect intellectual property', description: 'Obtain proper permissions and honor licensing agreements.' },
  { title: 'Use plagiarism detection', description: 'Employ tools to ensure content originality.' },
  { title: 'Make corrections immediately', description: 'Any ethical violation risks the entire piece\'s integrity.' },
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
              &ldquo;Malpublish&rdquo; serves as an umbrella term for publishing breaches.
              <strong> Malpublishing is the cause of misinformation.</strong>
            </p>
            <p className="text-gray-600">
              It highlights the role unethical publishing practices play in eroding public trust
              in media, academia, and information sources.
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
            It addresses a linguistic gap in discussing the root causes of misinformation
            rather than just its effects.
          </p>
        </div>
      </section>

      {/* Four Facets */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
            Four Facets of Malpublishing
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Malpublishing encompasses four overlapping categories
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {FACETS.map((facet) => (
              <div key={facet.title} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 bg-[#0074ff] text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {facet.icon}
                  </span>
                  <h3 className="font-semibold text-lg text-gray-900">{facet.title}</h3>
                </div>
                {facet.items ? (
                  <ul className="space-y-2">
                    {facet.items.map((item) => (
                      <li key={item} className="text-gray-600 text-sm flex items-start gap-2">
                        <span className="text-[#0074ff] mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-600 text-sm">{facet.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Terms */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Related Terms & Derivatives
          </h2>
          <div className="overflow-hidden rounded-lg border border-gray-200">
            <table className="w-full">
              <thead className="bg-gray-50">
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

      {/* How to Avoid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            How to Avoid Malpublishing
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {GUIDELINES.map((guideline, index) => (
              <div key={guideline.title} className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-[#0074ff] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{guideline.title}</h3>
                    <p className="text-gray-600 text-sm">{guideline.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-[#0074ff] text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Define Your Publishing Standards
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Create a publishing policy that declares your commitments and defines
            what malpublishing means for your organization.
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
