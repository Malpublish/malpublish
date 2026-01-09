'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

const RELATED_TERMS = [
  { term: 'Malpublisher', pos: 'n.', definition: 'An entity or individual engaging in malpublishing practices' },
  { term: 'Malpublished', pos: 'adj.', definition: 'Content that has been unethically published' },
  { term: 'Malpublication', pos: 'n.', definition: 'A specific instance of malpublished content' },
  { term: 'Malpublishment', pos: 'n.', definition: 'An act or result of publishing malpractice' },
  { term: 'Malpublishing', pos: 'n.', definition: 'The practice or act of publishing unethically' },
]

const GUIDELINES = [
  { title: 'Verify facts with multiple sources', description: 'Cross-reference claims through credible, independent sources before publishing.' },
  { title: 'Label content clearly', description: 'Distinguish news from opinion, editorial, sponsored content, and AI-generated material.' },
  { title: 'Attribute and respect rights', description: 'Credit sources properly and honor intellectual property and licensing agreements.' },
  { title: 'Correct errors promptly', description: 'When mistakes occur, fix them quickly and visibly—transparency builds trust.' },
  { title: 'Maintain independence', description: 'Keep editorial decisions separate from advertiser or sponsor influence.' },
]

const SECTIONS = [
  { id: 'definition', label: 'Definition' },
  { id: 'significance', label: 'Significance' },
  { id: 'scope', label: 'Scope' },
  { id: 'context', label: 'Context' },
  { id: 'examples', label: 'Examples' },
  { id: 'etymology', label: 'Etymology' },
  { id: 'guidelines', label: 'Guidelines' },
  { id: 'origin', label: 'Origin' },
]

export default function Home() {
  const [showContact, setShowContact] = useState(false)
  const [activeSection, setActiveSection] = useState('definition')

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

  return (
    <div className="min-h-screen bg-white">
      {/* Progress Dots - Fixed Right Side */}
      <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <div className="flex flex-col gap-3">
          {SECTIONS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className="group flex items-center gap-2 justify-end"
              title={label}
            >
              <span className={`text-xs transition-opacity ${
                activeSection === id ? 'opacity-100 text-gray-700' : 'opacity-0 group-hover:opacity-100 text-gray-500'
              }`}>
                {label}
              </span>
              <span className={`w-2 h-2 rounded-full transition-all ${
                activeSection === id
                  ? 'bg-[#0074ff] scale-125'
                  : 'bg-gray-300 group-hover:bg-gray-400'
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

      {/* Significance */}
      <section id="significance" className="py-16 px-4 bg-gray-50 border-b border-gray-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Why This Term Matters
          </h2>
          <div className="bg-white rounded-lg p-6 border-l-4 border-[#0074ff] shadow-sm">
            <p className="text-gray-700 mb-4">
              Publishing failures cause real harm. When publishers breach ethical standards,
              consequences ripple through society:
            </p>
            <ul className="space-y-2 text-gray-700">
              {[
                ['Misinformation', 'False information spreads and takes root'],
                ['Erosion of trust', 'Public loses faith in media and institutions'],
                ['Harm to individuals', 'Defamation, privacy violations, reputation damage'],
                ['Social division', 'Inflammatory content polarizes communities'],
                ['Economic harm', 'Fraudulent claims and deceptive advertising'],
                ['Health risks', 'Dangerous medical or safety misinformation'],
              ].map(([title, desc]) => (
                <li key={title} className="flex items-start gap-2">
                  <span className="text-[#0074ff] font-bold">•</span>
                  <span><strong>{title}</strong> — {desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Scope - The Umbrella Term */}
      <section id="scope" className="py-16 px-4 border-b border-gray-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Scope
          </h2>

          {/* Pull Quote */}
          <blockquote className="border-l-4 border-[#0074ff] pl-6 mb-8">
            <p className="text-xl text-gray-700 italic">
              &ldquo;Malpublishing is the umbrella term that encompasses plagiarism, deepfakes,
              clickbait, fabrication, fake news, and other specific publishing failures.&rdquo;
            </p>
          </blockquote>

          <div className="space-y-4 text-gray-700">
            <p>
              Just as <em>malpractice</em> covers many specific medical failures, <em>malpublishing</em>
              covers many specific publishing failures—when they violate a community&apos;s standards.
            </p>
            <p>
              Whether a practice constitutes malpublishing depends on context. Each community defines its own
              publishing standards. What&apos;s unacceptable in one context may be acceptable in another.
            </p>
          </div>

          {/* Not Malpublishing */}
          <div className="mt-8 border-l-4 border-green-500 pl-6">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <span className="text-green-600">&#10003;</span>
              What Is Not Malpublishing
            </h3>
            <p className="text-gray-700">
              Writing opinions, theories, or fiction doesn&apos;t constitute malpublishing
              when practices remain ethical within applicable standards. Content must be
              <strong> clearly labeled</strong>, and audiences shouldn&apos;t be deceived about
              intent or factual accuracy. A clearly marked opinion piece or satirical article
              isn&apos;t malpublishing—but presenting fiction as fact is.
            </p>
          </div>
        </div>
      </section>

      {/* Context - Who Determines + Standards Layer */}
      <section id="context" className="py-16 px-4 bg-gray-50 border-b border-gray-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Contextual Application
          </h2>

          <p className="text-gray-700 mb-8">
            <strong>Your community determines what constitutes malpublishing</strong>—but
            &ldquo;community&rdquo; isn&apos;t a single entity. It&apos;s the layered stack of
            publishing policies that apply to you.
          </p>

          {/* Hierarchy Diagram - CSS Based */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
              Publishing Standards Hierarchy
            </h3>
            <div className="space-y-2">
              {[
                { level: 'Jurisdiction', desc: 'National laws, press regulations', width: '100%' },
                { level: 'Region', desc: 'State/provincial requirements', width: '88%' },
                { level: 'Industry', desc: 'Journalism, academia, entertainment', width: '76%' },
                { level: 'Organization', desc: 'Your company or institution', width: '64%' },
                { level: 'Publication', desc: 'Specific channel or section', width: '52%' },
              ].map(({ level, desc, width }, i) => (
                <div
                  key={level}
                  className="relative"
                  style={{ width, marginLeft: `${i * 6}%` }}
                >
                  <div className="bg-white border border-gray-300 rounded px-4 py-3 shadow-sm">
                    <div className="font-semibold text-gray-900 text-sm">{level}</div>
                    <div className="text-gray-500 text-xs">{desc}</div>
                  </div>
                  {i < 4 && (
                    <div className="absolute -bottom-2 left-6 w-px h-4 bg-gray-300" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contextual Examples */}
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
            Same Action, Different Standards
          </h3>
          <div className="space-y-3">
            {[
              {
                title: 'AI-Generated Images',
                text: 'A news outlet requires disclosure—publishing without it is malpublishing. A meme community, where AI manipulation is expected, may have no such requirement.',
              },
              {
                title: 'Sponsored Content',
                text: 'Journalism requires clear separation of editorial and advertising. Influencer marketing operates under different disclosure norms.',
              },
              {
                title: 'Cross-Regional Operations',
                text: 'Organization X in California faces different disclosure requirements than its Texas office. Same content strategy may be compliant in one region, malpublishing in another.',
              },
            ].map(({ title, text }) => (
              <details key={title} className="group bg-white rounded border border-gray-200">
                <summary className="px-4 py-3 cursor-pointer font-medium text-gray-900 flex items-center justify-between">
                  {title}
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">&#9662;</span>
                </summary>
                <p className="px-4 pb-3 text-gray-600 text-sm">{text}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Examples */}
      <section id="examples" className="py-16 px-4 border-b border-gray-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
            Examples of Malpublishing
          </h2>
          <p className="text-gray-500 text-sm mb-6 text-center">
            Actions commonly considered malpublishing in many publishing contexts.
            Applicability depends on your community&apos;s standards.
          </p>

          <ul className="space-y-3">
            {[
              'Publishing AI-generated deepfakes without clear disclosure',
              'A platform distributing content that violates its own publishing policy',
              'Clickbait headlines deliberately designed to misrepresent the actual story',
              'Republishing someone\'s work without attribution or permission',
              'A publication ignoring corrections and doubling down on false claims',
              'Sponsored content disguised as independent journalism',
              'Rushing to publish sensational claims without basic fact-checking',
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700">
                <span className="text-[#0074ff] font-bold mt-0.5">•</span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Etymology */}
      <section id="etymology" className="py-16 px-4 bg-gray-50 border-b border-gray-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Etymology & Related Terms
          </h2>

          <div className="bg-white rounded-lg p-6 border-l-4 border-[#0074ff] shadow-sm mb-8">
            <p className="text-gray-700">
              The term combines the prefix <strong>mal-</strong> (from Latin <em>malus</em>, meaning bad or wrongful)
              with <strong>publish</strong>. This follows established patterns like <em>malpractice</em> and <em>malfunction</em>.
              It addresses a linguistic gap—naming the root cause of information harms rather than just describing their effects.
            </p>
          </div>

          {/* Related Terms - Definition List Style */}
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4" id="related-terms">
            Related Terms
          </h3>
          <dl className="space-y-4">
            {RELATED_TERMS.map(({ term, pos, definition }) => (
              <div key={term} className="border-b border-gray-200 pb-3">
                <dt className="font-sans">
                  <span className="font-bold text-gray-900">{term}</span>
                  <span className="text-gray-400 text-sm ml-2">{pos}</span>
                </dt>
                <dd className="text-gray-600 mt-1">{definition}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Guidelines */}
      <section id="guidelines" className="py-16 px-4 border-b border-gray-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
            Baseline Publishing Practices
          </h2>
          <p className="text-gray-500 text-sm mb-8 text-center">
            Widely-adopted practices that form the foundation of many publishing policies.
          </p>

          <ol className="space-y-4">
            {GUIDELINES.map((guideline, index) => (
              <li key={guideline.title} className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-bold">
                  {index + 1}
                </span>
                <div>
                  <div className="font-semibold text-gray-900">{guideline.title}</div>
                  <div className="text-gray-600 text-sm">{guideline.description}</div>
                </div>
              </li>
            ))}
          </ol>

          {/* Inline CTA */}
          <div className="mt-10 p-6 bg-[#0074ff]/5 rounded-lg border border-[#0074ff]/20">
            <p className="text-gray-700 mb-4">
              Ready to go deeper? Build a publishing policy tailored to your community.
            </p>
            <Link
              href="https://publishingpolicy.org/build"
              className="inline-block bg-[#0074ff] text-white px-6 py-2 rounded font-medium hover:bg-[#0063dd] transition-colors"
            >
              Build Your Policy
            </Link>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section id="origin" className="py-16 px-4 bg-gray-50 border-b border-gray-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Why This Term Exists
          </h2>

          <div className="bg-white rounded-lg p-8 border-l-4 border-[#0074ff] shadow-sm relative">
            <div className="text-6xl text-gray-200 absolute -top-4 left-4">&ldquo;</div>
            <div className="relative space-y-4 text-gray-700 pl-6">
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
        </div>
      </section>

      {/* CTA */}
      <section id="call-to-action" className="py-20 px-4 bg-[#0074ff] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Take the Next Step
          </h2>
          <p className="text-gray-300 mb-8">
            This site introduces the concept. <strong className="text-white">PublishingPolicy.org</strong> goes deeper—whether
            you&apos;re a publisher defining standards or a reader understanding them.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="https://publishingpolicy.org/build"
              className="inline-block bg-white text-gray-900 px-8 py-4 rounded font-semibold hover:bg-gray-100 transition-colors min-w-[260px]"
            >
              Build Your Publishing Policy
            </Link>
            <Link
              href="https://publishingpolicy.org"
              className="inline-block bg-transparent border border-white text-white px-8 py-4 rounded font-semibold hover:bg-white hover:text-gray-900 transition-colors min-w-[260px]"
            >
              What Is a Publishing Policy?
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-950 text-gray-400">
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
                Contact &rarr;
              </button>
            ) : (
              <div className="space-y-2">
                <a href="mailto:stopmalpublishing@gmail.com" className="text-white hover:underline">
                  stopmalpublishing@gmail.com
                </a>
                <p className="text-xs text-gray-500 max-w-md mx-auto">
                  Due to high volume, I may not be able to respond to every inquiry.
                </p>
              </div>
            )}
          </div>
          <p className="text-sm mt-6 pt-4 border-t border-gray-800">
            Want to champion a healthier information ecosystem?{' '}
            <a href="#" className="text-[#0074ff] hover:underline">
              Support this project
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
