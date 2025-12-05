// components/CaseStudyDialog.jsx
import {
    Dialog, DialogHeader, DialogTitle, DialogDescription,
    DialogBody, DialogFooter
  } from "../ui/dialog";
  import { Button } from "../ui/button";
  
  export default function CaseStudyDialog({ open, onOpenChange, project }) {
    if (!project) return null;
    const title = project.projectTitle || "Case Study";
    const slug = project.slug || title.toLowerCase();
  
    const isTalibnotes = slug.includes("talib");
    const isTBM = slug.includes("tbm") || slug.includes("butterfly");
  
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogHeader>
          <DialogTitle>{title} - Case Study</DialogTitle>
          <DialogDescription>
            {isTalibnotes
              ? "Qur’an & Hadith reading + note-taking • React, Node.js, MongoDB"
              : isTBM
              ? "Community programs website • React, JavaScript, Node (light)"
              : project.subtitle || ""}
          </DialogDescription>
        </DialogHeader>
  
        <DialogBody>
          {project.screenshot && (
            <div className="rounded-xl border overflow-hidden">
              <img
                src={project.screenshot}
                alt={`${title} screenshot`}
                className="w-full h-auto"
              />
            </div>
          )}
  
          {isTalibnotes && <TalibnotesBody />}
          {isTBM && <TBMBody />}
  
          {!isTalibnotes && !isTBM && (
            <>
              {project.shortDescription && (
                <Section title="Overview">{project.shortDescription}</Section>
              )}
              {project.impact && <Section title="Impact">{project.impact}</Section>}
            </>
          )}
        </DialogBody>
  
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)} data-autofocus>
            Close
          </Button>
          {project.url && (
            <a href={project.url} target="_blank" rel="noreferrer">
              <Button>Visit site</Button>
            </a>
          )}
        </DialogFooter>
      </Dialog>
    );
  }
  
  function Section({ title, children }) {
    return (
      <div>
        <h4 className="font-semibold text-slate-900">{title}</h4>
        <div className="mt-1 text-slate-700">{children}</div>
      </div>
    );
  }
  
  /* --- Project-specific bodies --- */
  
  function TalibnotesBody() {
    return (
      <>
        <Section title="Overview">
          Talibnotes is a modern Qur’an and Hadith reading and note-taking application focused on a fast,
          accessible study workflow across devices. Users can read, annotate, and organize reflections with a
          clean, distraction-free UI.
        </Section>
  
        <Section title="Role & Collaboration">
          I led the <strong>frontend development and UX implementation</strong> and collaborated closely with the backend
          developer on API routes, data flow, and feature integration. I contributed to end-to-end features while
          maintaining a strong focus on performance and accessibility.
        </Section>
  
        <Section title="Technical Highlights">
          Built a <strong>custom rich text editor</strong> (1,000+ lines) replicating and extending Editor.js behavior to meet
          Talibnotes’ standards for cross-browser stability, mobile responsiveness, and rich content handling.
          Implemented responsive layout, keyboard navigation, and accessible semantics for consistent behavior
          across Chrome, Safari, Firefox, and Edge.
        </Section>
  
        <Section title="Results">
          Continuous iteration on performance and accessibility led to <strong>90+ Lighthouse scores</strong> across
          performance, accessibility, and best practices.
        </Section>
      </>
    );
  }
  
  function TBMBody() {
    return (
      <>
        <Section title="Overview">
          The Butterfly Movement - Health is a site for a Shadwell-based community initiative led by Coach H,
          a youth mentor and boxing coach with 15+ years of experience. It showcases <strong>youth boxing</strong> and
          <strong> Brazilian Jiu-Jitsu</strong> (Grapple Hub) programs, tells the story and ethos, and guides parents and
          participants to get involved. The Brawlers Boxing program relaunched in <strong>June 2025</strong> with sessions for ages
          <strong> 5-10</strong> and <strong>11-17</strong>.
        </Section>
  
        <Section title="Role & Collaboration">
          I owned the <strong>frontend build and UI/UX</strong> in React and JavaScript, with a light Node layer for basic
          backend needs. I collaborated closely with the client to structure content around programs, age groups, and
          values, ensuring the site communicates credibility and is simple to navigate on mobile.
        </Section>
  
        <Section title="Highlights">
          Responsive component system, accessible typography and contrasts, optimised images and metadata for
          mobile performance and SEO discoverability, and clear pathways to contact and enrollment. The foundation
          supports future sections like schedules, events, and testimonials.
        </Section>
  
        <Section title="Results">
          Delivered a professional online presence aligned to the <strong>June 2025 relaunch</strong>, helping the
          initiative re-engage the local community and grow sustainably.
        </Section>
      </>
    );
  }
  