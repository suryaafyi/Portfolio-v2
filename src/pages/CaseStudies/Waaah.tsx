import React from 'react';
import { CaseStudyLayout } from './CaseStudyLayout';
import {
  MetadataBar,
  SectionBlock,
  CalloutBlock,
  StatRow,
  PersonaCard,
  ImagePlaceholder,
  NextProjectFooter,
  SectionDivider
} from '../../components/CaseStudy/UIComponents';
import { WaaahIntroSplash } from '../../components/CaseStudy/WaaahIntroSplash';

export const WaaahCaseStudy = () => {
  const [showSplash, setShowSplash] = React.useState(true);

  React.useEffect(() => {
    if (showSplash) {
      document.body.style.overflow = 'hidden';
      if ((window as any).lenis) (window as any).lenis.stop();
    } else {
      document.body.style.overflow = 'unset';
      if ((window as any).lenis) {
        (window as any).lenis.start();
        (window as any).lenis.scrollTo(0, { immediate: true });
      }
      window.scrollTo(0, 0);
    }
    return () => {
      document.body.style.overflow = 'unset';
      if ((window as any).lenis) (window as any).lenis.start();
    };
  }, [showSplash]);
  const tocSections = [
    { id: 'context', label: '01. Context' },
    { id: 'problem', label: '02. The Problem' },
    { id: 'research', label: '03. Research' },
    { id: 'define', label: '04. Define' },
    { id: 'design-system', label: '05. Design System' },
    { id: 'user-flow', label: '06. User Flow' },
    { id: 'ai', label: '07. The AI' },
    { id: 'build', label: '08. Build & Ship' },
    { id: 'reflection', label: '09. Reflection' },
  ];

  return (
    <>
      {showSplash && <WaaahIntroSplash onEnter={() => setShowSplash(false)} />}
      
      <CaseStudyLayout
      tags={['AI PRODUCT', 'MOBILE APP', 'UX RESEARCH', 'SHIPPED']}
      headline="Waaah — AI That Speaks Baby"
      metadata={
        <MetadataBar
          role="Founder & Product Designer (100%)"
          team="Solo Project"
          timeline="May 2026 · 3 days"
          skills="UX Research, Product Design, AI Integration, React, Shipped Product"
        />
      }
      heroImageColor="#FFB347"
      heroImageCaption="WAAAH APP MOCKUP"
      heroImageSrc="/case-studies/waaah-hero.png"
      tocSections={tocSections}
    >
      <SectionBlock id="context" label="01. CONTEXT" heading="Why I built this.">
        <p>Every new parent has Googled "why is my baby crying" at 3am. The results are either too vague or too scary. There's no calm, intelligent, instant answer - just panic and guesswork.</p>
        <p className="mt-4">I built Waaah for the Nori Mother's Day AI Challenge: a community-voted contest where the best AI product for moms wins $1,000. I had 3 days, a free tech stack, and one goal - build something a sleep-deprived mom would actually trust at 3am.</p>
      </SectionBlock>

      <SectionDivider />

      <SectionBlock id="problem" label="02. THE PROBLEM" heading="Parents don't need more information. They need one answer.">
        <CalloutBlock>
          "I never know if she's hungry or gassy or just overtired. I've Googled 'baby crying won't stop' at 3am more times than I can count."
          <br />— Shri, first-time mom, 3-month-old
        </CalloutBlock>
        <div className="grid sm:grid-cols-3 gap-6 my-12">
          {[
            { title: 'Google is too slow and scary', desc: 'Search results lead to worst-case scenarios, not useful under stress.' },
            { title: 'Tracker apps are too complex', desc: 'Moms need a 5-second answer, not a form to fill out.' },
            { title: 'No context awareness', desc: 'Nothing connects feeding, sleeping, and cry sounds all at once.' }
          ].map((item, i) => (
            <div key={i} className="bg-bg-secondary p-6 rounded-2xl">
              <h5 className="font-bold text-accent-red mb-2 text-sm uppercase tracking-wider">{item.title}</h5>
              <p className="font-body text-sm text-text-primary/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </SectionBlock>

      <SectionDivider />

      <SectionBlock id="research" label="03. RESEARCH" heading="Who I designed for.">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <PersonaCard
            name="Shri, 28 — The First-Time Mom"
            quote="I just need to know if she's okay."
            background="3-month-old, maternity leave, exhausted. Googles everything."
            goals="Calm confidence at 3am."
            painPoints="Information overload, anxiety."
            needs={['Instant clarity', 'One-handed usage', 'Dark-mode optimization']}
          />
          <PersonaCard
            name="Priya, 34 — The Second-Time Mom"
            quote="I don't have time for a setup process."
            background="8-month-old + 4-year-old, works remotely."
            goals="Instant answer, no friction."
            painPoints="Skeptical of apps, busy schedule."
            needs={['Zero sign-ups', 'Speed', 'Direct actions']}
          />
        </div>
        <div className="bg-bg-secondary p-8 rounded-2xl border border-black/5">
          <h4 className="font-mono text-sm tracking-widest uppercase mb-4 text-accent-red">Key Insights</h4>
          <ul className="list-disc pl-6 space-y-4 font-body text-text-primary/80">
            <li>The most painful moment is not knowing WHY — parents cycle through everything frantically.</li>
            <li>One-handed, dark-room usage is critical. Every extra tap is friction.</li>
            <li>Design constraint: open to answer in under 20 seconds.</li>
          </ul>
        </div>
      </SectionBlock>

      <SectionDivider />

      <SectionBlock id="define" label="04. DEFINE" heading="The core insight.">
        <CalloutBlock>
          The product that wins isn't the most feature-rich — it's the one that feels like a calm, experienced friend.
        </CalloutBlock>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {[
            { label: 'Hunger', color: '#FF6B6B', action: 'Feed her now', desc: 'Red blob — crying, drooling' },
            { label: 'Tired', color: '#FFB347', action: 'Dark room, rock gently', desc: 'Orange blob — rubbing eye' },
            { label: 'Gas', color: '#4ECDC4', action: 'Bicycle kicks', desc: 'Teal blob — tummy grip' },
            { label: 'Pain', color: '#C77DFF', action: 'Check temperature', desc: 'Purple blob — lightning bolts' },
            { label: 'Comfort', color: '#FF99BC', action: 'Hold close', desc: 'Pink blob — arms out' }
          ].map((item, i) => (
            <div key={i} className="border border-black/5 p-6 rounded-2xl flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="font-bold uppercase tracking-widest text-xs">{item.label}</span>
              </div>
              <p className="text-xs text-text-primary/50">{item.desc}</p>
              <div className="mt-2 font-display text-lg lowercase italic">{item.action}</div>
            </div>
          ))}
        </div>
      </SectionBlock>

      <SectionDivider />

      <SectionBlock id="design-system" label="05. DESIGN SYSTEM" heading="Visual language — warm at 3am.">
        <div className="space-y-8">
          <p>The result screen IS the answer. Full bleed in the cry reason's color. Blob character fills the top half. One giant word. One action. That's it.</p>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="bg-[#FFE4EE] p-8 rounded-2xl flex flex-col justify-center items-center gap-4 border border-black/5">
              <div className="text-[#FF99BC] font-display text-4xl">soft blush</div>
              <div className="text-xs font-mono uppercase opacity-50">Girl Theme / #FFE4EE</div>
            </div>
            <div className="bg-[#DFF0FF] p-8 rounded-2xl flex flex-col justify-center items-center gap-4 border border-black/5">
              <div className="text-[#4060ff] font-display text-4xl">soft sky</div>
              <div className="text-xs font-mono uppercase opacity-50">Boy Theme / #DFF0FF</div>
            </div>
          </div>
          <ImagePlaceholder color="#FFB347" caption="BLOB CHARACTERS COLLAGE" src="/case-studies/waaah-ui.png" />
          <p className="font-body text-sm text-text-primary/70">Blob characters — custom characters created to express the exact emotion of the cry reason. They are the heart of the product, helping parents feel the result instantly.</p>
        </div>
      </SectionBlock>

      <SectionDivider />

      <SectionBlock id="user-flow" label="06. USER FLOW" heading="6 screens, 20 seconds.">
        <p>The critical path is just 3 screens: Home (record) → Context (3 chip questions) → Result (full screen blob).</p>
        <StatRow stats={[
          { number: "3", label: "Critical Screens" },
          { number: "20s", label: "Total Time" },
          { number: "0", label: "Sign-ups Required" }
        ]} />
        <div className="mt-8 bg-bg-secondary p-8 rounded-2xl">
          <h5 className="font-bold uppercase text-xs tracking-widest mb-4">The Symptom Fallback</h5>
          <p className="text-sm text-text-primary/70">A manual describe-what-you-see flow via chips for when the microphone isn't ideal. This was the most important design decision for accessibility and instant adoption.</p>
        </div>
      </SectionBlock>

      <SectionDivider />

      <SectionBlock id="ai" label="07. THE AI" heading="Gemini 2.0 Flash as the brain.">
        <p>The AI prompt needed to think like a pediatric nurse — not a chatbot.</p>
        <div className="space-y-4 my-8">
          {[
            { title: 'Audio-first detection', desc: 'Checks if a baby is actually crying before analysis to prevent false positives.' },
            { title: 'Context-weighted analysis', desc: 'Cry pattern + time since last feed + sleep + symptoms = trusted reasoning.' },
            { title: 'Structured JSON output', desc: 'Direct mapping to UI components for instant rendering.' }
          ].map((item, i) => (
            <div key={i} className="bg-bg-secondary p-6 rounded-2xl flex flex-col sm:flex-row gap-4 sm:items-center">
              <div className="font-bold text-accent-red min-w-[200px] text-sm uppercase tracking-wider">{item.title}</div>
              <div className="font-body text-sm text-text-primary/80">{item.desc}</div>
            </div>
          ))}
        </div>
      </SectionBlock>

      <SectionDivider />

      <SectionBlock id="build" label="08. BUILD & SHIP" heading="Full stack, 3 days, $0.">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-black/10">
                <th className="py-4 text-left font-mono text-xs uppercase opacity-40">Layer</th>
                <th className="py-4 text-left font-mono text-xs uppercase opacity-40">Tool</th>
                <th className="py-4 text-left font-mono text-xs uppercase opacity-40">Cost</th>
              </tr>
            </thead>
            <tbody className="font-body text-sm">
              <tr className="border-b border-black/5">
                <td className="py-4 font-bold">Frontend</td>
                <td className="py-4">React + Vite</td>
                <td className="py-4">Free</td>
              </tr>
              <tr className="border-b border-black/5">
                <td className="py-4 font-bold">Backend</td>
                <td className="py-4">Node.js + Express</td>
                <td className="py-4">Free</td>
              </tr>
              <tr className="border-b border-black/5">
                <td className="py-4 font-bold">Database</td>
                <td className="py-4">Supabase</td>
                <td className="py-4">Free</td>
              </tr>
              <tr className="border-b border-black/5">
                <td className="py-4 font-bold">AI</td>
                <td className="py-4">Gemini 2.0 Flash</td>
                <td className="py-4">Free</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-8 p-6 bg-accent-red/5 border border-accent-red/20 rounded-2xl">
          <h5 className="font-bold text-accent-red text-xs uppercase mb-2">Technical Challenge</h5>
          <p className="text-sm">Solving iOS Safari's mic permission cold start via a module-level stream cache that keeps the permission alive across recordings.</p>
        </div>
      </SectionBlock>

      <SectionDivider />

      <SectionBlock id="reflection" label="09. REFLECTION" heading="What I learned.">
        <p>Constraint made it better. By cutting everything that wasn't the core 20-second loop, the product became truly useful. Emotion communicates faster than text — the blob characters land differently with a panicked parent than a simple icon ever could.</p>
        <h4 className="font-mono text-sm tracking-widest uppercase mt-12 mb-6 text-accent-red">Next Steps</h4>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            'Pattern learning for specific babies',
            'Pediatrician report export (PDF)',
            'Multi-baby support',
            'Native app via Capacitor'
          ].map((item, i) => (
            <div key={i} className="border border-black/10 p-4 rounded-xl text-sm font-body">
              {item}
            </div>
          ))}
        </div>
      </SectionBlock>

      <NextProjectFooter
        link="/work/shift"
        title="Shift"
        behanceLink="https://waaah-ai.vercel.app/"
        behanceLabel="Try out Waaah"
        ctaImage="/case-studies/Loading.gif"
      />
    </CaseStudyLayout>
    </>
  );
};
