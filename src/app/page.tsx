'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

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
  {
    title: 'Label content clearly',
    description: 'Be transparent about what the content is—news, opinion, satire, sponsored, AI-generated. Don\'t deceive audiences about intent.'
  },
  {
    title: 'Don\'t overclaim',
    description: 'State what you know, not more. Don\'t present speculation as fact or certainty you don\'t have.'
  },
  {
    title: 'Attribute sources',
    description: 'Credit where information comes from. Let readers verify claims themselves.'
  },
  {
    title: 'Correct errors promptly',
    description: 'When you learn something is wrong, fix it quickly and visibly. Being unreachable or feigning ignorance is itself malpublishing.'
  },
  {
    title: 'Respect rights',
    description: 'Honor intellectual property, privacy, and human dignity. Get permission when required.'
  },
]

const SECTIONS = [
  { id: 'definition', label: 'Definition' },
  { id: 'why-matters', label: 'Why It Matters' },
  { id: 'umbrella', label: 'Umbrella Term' },
  { id: 'who-determines', label: 'Who Determines' },
  { id: 'examples', label: 'Examples' },
  { id: 'not-malpublishing', label: 'Not Malpublishing' },
  { id: 'best-practices', label: 'Best Practices' },
  { id: 'etymology', label: 'Etymology' },
  { id: 'related-terms', label: 'Related Terms' },
  { id: 'origin', label: 'Origin' },
  { id: 'call-to-action', label: 'Call to Action' },
]

export default function Home() {
  const [showContact, setShowContact] = useState(false)
  const [activeSection, setActiveSection] = useState('definition')
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0px -70% 0px' }
    )

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Desktop Navigation - Fixed Right Side */}
      <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <div className="flex flex-col gap-3">
          {SECTIONS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className="group flex items-center gap-2 justify-end"
              title={label}
            >
              <span className={`text-xs transition-colors ${
                activeSection === id ? 'text-gray-700' : 'text-gray-400'
              }`}>
                {label}
              </span>
              <span className={`w-2 h-2 rounded-full transition-all ${
                activeSection === id
                  ? 'bg-[#0074ff] scale-125'
                  : 'bg-gray-300 group-hover:bg-[#0074ff]/40'
              }`} />
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="definition" className="bg-[#0074ff] text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Malpublish
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-2 font-mono">
            /mal-PUB-lish/ (verb)
          </p>
          <p className="text-2xl md:text-3xl">
            &ldquo;To publish in a manner that constitutes malpractice&rdquo;
          </p>
        </div>
      </section>

      {/* Mobile Navigation */}
      <nav className="lg:hidden overflow-x-auto bg-white border-b border-gray-200">
        <div className="flex gap-4 px-4 py-3 min-w-max">
          {SECTIONS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`text-sm whitespace-nowrap transition-colors ${
                activeSection === id ? 'text-[#0074ff] font-medium' : 'text-gray-500'
              }`}
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      {/* Why This Matters */}
      <section id="why-matters" className="py-16 px-4 bg-gray-50">
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
              These harms don&apos;t exist in isolation. They share a common root cause: publishing malpractice (&quot;malpublishing&quot;).
            </p>
          </div>
        </div>
      </section>

      {/* The Umbrella Term */}
      <section id="umbrella" className="py-16 px-4">
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

      {/* Who Determines */}
      <section id="who-determines" className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Who Determines What Constitutes Malpublishing?
          </h2>
          <div className="space-y-4 text-gray-700 text-lg mb-8">
            <p className="text-center">
              <strong>Your community does</strong>—but &ldquo;community&rdquo; isn&apos;t a single entity.
            </p>
            <p>
              It&apos;s the layered stack of publishing policies that apply to you: your jurisdiction,
              your industry, your organization, and your specific publication or channel. Each layer
              may set different standards, and you operate under all of them.
            </p>
          </div>

          {/* Hierarchy Diagram */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8 font-mono text-sm text-gray-600">
            <div className="space-y-1">
              <p>Jurisdiction <span className="text-gray-400">(national laws, press regulations)</span></p>
              <p className="pl-4">└── Region <span className="text-gray-400">(state/provincial requirements)</span></p>
              <p className="pl-8">└── Industry <span className="text-gray-400">(journalism, academia, entertainment)</span></p>
              <p className="pl-12">└── Organization <span className="text-gray-400">(your company or institution)</span></p>
              <p className="pl-16">└── Publication <span className="text-gray-400">(specific channel or section)</span></p>
            </div>
          </div>

          <p className="text-gray-700 text-lg mb-8">
            The same action can be malpublishing in one context and acceptable in another.
            Consider these scenarios:
          </p>

          {/* Examples */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-5 shadow-sm border-l-4 border-[#0074ff]">
              <h4 className="font-semibold text-gray-900 mb-2">AI-Generated Images</h4>
              <p className="text-gray-600">
                A news outlet&apos;s standards require disclosure of any AI-generated visuals—publishing
                without it is malpublishing. A meme community, where AI manipulation is expected and
                contextually obvious, may have no such requirement.
              </p>
            </div>
            <div className="bg-white rounded-lg p-5 shadow-sm border-l-4 border-[#0074ff]">
              <h4 className="font-semibold text-gray-900 mb-2">Sponsored Content</h4>
              <p className="text-gray-600">
                Journalism ethics require clear separation of editorial and advertising. Influencer
                marketing operates under different disclosure norms. What&apos;s malpublishing in a
                newspaper may be standard practice on social media—though both contexts have their
                own evolving standards.
              </p>
            </div>
            <div className="bg-white rounded-lg p-5 shadow-sm border-l-4 border-[#0074ff]">
              <h4 className="font-semibold text-gray-900 mb-2">Cross-Regional Operations</h4>
              <p className="text-gray-600">
                Organization X operating in California faces different disclosure requirements than
                its Texas office. The same content strategy may be compliant in one region and
                malpublishing in another—even within the same company.
              </p>
            </div>
          </div>

          <p className="text-[#0074ff] font-medium text-lg mt-8 text-center">
            This is why making your publishing policy explicit matters—it defines which layer you&apos;re operating at.
          </p>
        </div>
      </section>

      {/* Examples of Malpublishing */}
      <section id="examples" className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Examples of Malpublishing
          </h2>
          <p className="text-gray-600 text-center mb-6">
            These actions are commonly considered malpublishing in many publishing contexts.
            Whether they apply in your context depends on your applicable standards.
          </p>
          <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#0074ff] font-bold">•</span>
                <span>Publishing <strong>AI-generated deepfakes</strong> without clear, overt disclosure</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#0074ff] font-bold">•</span>
                <span>A <strong>platform distributing content</strong> that violates its own publishing policy—or the standards of the community it affects</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#0074ff] font-bold">•</span>
                <span>Clickbait headlines deliberately designed to misrepresent the actual story</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#0074ff] font-bold">•</span>
                <span>Republishing someone&apos;s work without attribution or permission</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#0074ff] font-bold">•</span>
                <span>A publication ignoring corrections and doubling down on false claims</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#0074ff] font-bold">•</span>
                <span>Sponsored content disguised as independent journalism</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#0074ff] font-bold">•</span>
                <span>Rushing to publish sensational claims without basic fact-checking</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* What Isn't Malpublishing */}
      <section id="not-malpublishing" className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            What Isn&apos;t Malpublishing
          </h2>
          <p className="text-gray-600 text-center mb-6">
            While standards vary by context, most publishing communities share these baseline understandings:
          </p>
          <div className="bg-white rounded-lg shadow-sm p-8 border-l-4 border-green-500">
            <p className="text-lg text-gray-700 mb-4">
              Writing opinions, theories, or fiction doesn&apos;t constitute malpublishing
              when practices remain ethical within the applicable standards.
            </p>
            <p className="text-gray-600 mb-4">
              Content must be <strong>clearly labeled</strong> appropriately, and audiences
              shouldn&apos;t be deceived about the content&apos;s intent or factual accuracy.
              A clearly marked opinion piece or satirical article isn&apos;t malpublishing—but
              presenting fiction as fact is.
            </p>
            <p className="text-gray-700 font-medium mb-4">
              The key distinction is intent and response. An honest mistake—caught and corrected—isn&apos;t
              malpublishing. Knowing about a problem and ignoring it, or being deliberately unreachable, is.
            </p>
            <p className="text-gray-500 text-sm italic">
              Note: Some communities may have stricter standards. Academic publishing, for example,
              may consider certain practices malpublishing that would be acceptable elsewhere.
            </p>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section id="best-practices" className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
            Best Practices
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Mistakes happen. Forgetting to cite a source or publishing an error isn&apos;t automatically
            malpublishing—it becomes malpublishing when you learn of the problem and don&apos;t fix it
            promptly and visibly. What matters is intent and response. These practices help publishers
            stay accountable:
          </p>
          <div className="space-y-4">
            {GUIDELINES.map((guideline, index) => (
              <div key={guideline.title} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
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
          <p className="text-center text-gray-600 mt-8">
            Ready to go deeper? Build a publishing policy tailored to your community.
          </p>
        </div>
      </section>

      {/* Etymology */}
      <section id="etymology" className="py-16 px-4 bg-gray-50">
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

      {/* Related Terms */}
      <section id="related-terms" className="py-16 px-4">
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

      {/* Why This Term Exists */}
      <section id="origin" className="py-16 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">
            Why This Term Exists
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>
              In 2023, I observed a pattern: we had dozens of words for specific publishing
              failures—plagiarism, clickbait, deepfakes, fake news—but no umbrella term for
              the root cause. We named the symptoms but not the disease.
            </p>
            <p>
              This linguistic gap matters. Without a shared term for publishing malpractice,
              we struggle to discuss it, legislate it, or hold it accountable. We talk past
              each other using different words for the same problem.
            </p>
            <p>
              &ldquo;Malpublishing&rdquo; is my attempt to fill that gap. It&apos;s an act of free speech
              advocating for more responsible speech—naming the harm so we can address it.
            </p>
            <p>
              I offer this term to the world—and publish it here to give the concept
              a clear, stable definition. If it helps communities define their standards
              and hold publishers accountable, it will have served its purpose.
            </p>
          </div>
          <p className="text-right text-gray-500 mt-6 text-sm">
            — Roarke Clinton, March 2023
          </p>
        </div>
      </section>

      {/* CTA */}
      <section id="call-to-action" className="py-20 px-4 bg-[#0074ff] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Take the Next Step
          </h2>
          <p className="text-lg mb-8 opacity-90">
            This site introduces the concept. <strong>PublishingPolicy.org</strong> goes deeper—whether
            you&apos;re a publisher defining standards or a reader understanding them.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="https://publishingpolicy.org/build"
              className="inline-block bg-white text-[#0074ff] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg min-w-[280px]"
            >
              Build Your Publishing Policy
            </Link>
            <Link
              href="https://publishingpolicy.org"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0074ff] transition-colors text-lg min-w-[280px]"
            >
              What Is a Publishing Policy?
            </Link>
          </div>
          <p className="mt-6 text-sm opacity-70">
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
          <div className="text-sm">
            {!showContact ? (
              <button
                onClick={() => setShowContact(true)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Contact →
              </button>
            ) : (
              <div className="space-y-2">
                <a href="mailto:stopmalpublishing@gmail.com" className="text-white hover:underline">
                  stopmalpublishing@gmail.com
                </a>
                <p className="text-xs text-gray-500 max-w-md mx-auto">
                  Due to high volume, I may not be able to respond to every inquiry—but I&apos;ll reach out if I can.
                </p>
              </div>
            )}
          </div>
          <p className="text-sm mt-6 pt-4 border-t border-gray-700">
            Want to champion a healthier information ecosystem?{' '}
            <a href="#" className="text-[#0074ff] hover:underline">
              Support this project
            </a>
          </p>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 bg-[#0074ff] text-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center hover:bg-[#0063dd] transition-colors z-50"
          aria-label="Back to top"
        >
          ↑
        </button>
      )}
    </div>
  )
}
