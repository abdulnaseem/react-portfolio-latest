import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Rocket, Code2, Server, Shield, Wrench, DollarSign, Send, Github, Linkedin, Mail, CheckCircle2, Menu, PoundSterling } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import CaseStudyDialog from "../../components/CaseStudy/CaseStudyDialog";
import TalibnotesHome from "../../assets/images/talibnotes-home1.jpeg";
import BBHome from "../../assets/images/bb-home2.jpeg";
  
const Home = () => {
  const [open, setOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const openCaseStudy = (project) => {
    setSelected(project);
    setDialogOpen(true);
  };

  const projects = [
    {
      id: 1,
      projectTitle: "Talibnotes",
      shortDescription: "A modern Qur’an and Hadith reading and note-taking web application built with React, Node.js, and MariaDB. Designed for intuitive navigation, personalised annotations, and an accessible reading experience across devices.",
      impact: (
        <>
          Led <strong>frontend development, UI/UX, and feature integration</strong> while collaborating closely
          with the backend developer on API routes and data models. Built a <strong>custom rich text editor </strong>
          (1,000+ lines of code) replicating and extending Editor.js to meet <strong>Talibnotes’ standards for
          cross-browser stability, mobile responsiveness, and rich content handling</strong>. 
          Continuously optimised accessibility and performance, achieving consistent 
          <strong> 90+ Lighthouse scores</strong> across performance, accessibility, and best practices.
        </>
      ),
      screenshot: TalibnotesHome,
      url: "https://talibnotes.com/",
      button: "View case study"
    },
    {
      id: 2,
      projectTitle: "The Butterfly Movement - Health",
      shortDescription:
        "A public-facing website for a Shadwell-based community coach showcasing youth boxing and Brazilian Jiu-Jitsu programs. Built with React (plus a small Node layer) to present Coach H’s story, values, age-group sessions (5-10 & 11-17), and how to get involved.",
      impact: (
        <>
          Led the <strong>design and frontend build</strong> with React and JavaScript, adding a light Node layer
          where needed. Structured content to clearly communicate <strong>programs, ethos, and age ranges</strong>,
          with a responsive layout and accessible typography for easy reading on mobile. The site provides a
          professional online presence that supports the <strong>June 2025 relaunch</strong> of youth sessions and
          highlights additional work like The Grapple Hub (BJJ).
        </>
      ),
      screenshot: BBHome,
      url: "https://www.thebutterflymovement.health/",
      button: "View case study",
    },
  ]

  const location = useLocation();
  const navigate = useNavigate();

  // Smooth scroll helper
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // When a pricing button is clicked
  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    // ensure we're on this page; if you're already on Home, this is enough:
    scrollToId("contact");
    // optional: update the URL query so it can be shared/bookmarked
    const params = new URLSearchParams(location.search);
    params.set("plan", plan.toLowerCase());
    navigate({ pathname: location.pathname, search: `?${params.toString()}`, hash: "#contact" }, { replace: true });
  };

  // On load, read ?plan=... and #contact to preselect + scroll
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const planParam = params.get("plan");
    if (planParam) {
      const pretty = planParam.replace(/-/g, " ");
      setSelectedPlan(pretty.charAt(0).toUpperCase() + pretty.slice(1));
    }
    if (location.hash === "#contact") {
      // defer a tick so DOM is ready
      setTimeout(() => scrollToId("contact"), 0);
    }
  }, [location.search, location.hash]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-indigo-200/50 blur-3xl" />
          <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-cyan-200/50 blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 items-center gap-10">
          <div>
            <Badge className="rounded-full px-3 py-1 bg-indigo-600">React • Node • MongoDB</Badge>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight tracking-tight">
              I build fast, scalable web apps for founders & small teams
            </h1>
            <p className="mt-4 text-slate-600 max-w-prose">
              From MVP to launch, I turn ideas into production‑ready products using modern stacks and thoughtful UX.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button className="rounded-2xl"><Rocket className="mr-2 h-4 w-4" /> Start your project</Button>
              <Button variant="outline" className="rounded-2xl">View portfolio</Button>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" />Rapid MVPs</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" />Clean, testable code</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" />Transparent sprints</div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl border bg-white shadow-sm p-4 md:p-6">
              <div className="aspect-video rounded-xl overflow-hidden border bg-gradient-to-br from-slate-100 to-white">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/src/assets/videos/hadith-note-demo.webm" type="video/webm" />
                  {/* Optional fallback text */}
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3">
                {["React.js", "Node", "JavaScript"].map((t) => (
                  <div
                    key={t}
                    className="rounded-xl border bg-white p-3 text-center text-xs text-slate-600"
                  >
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-6xl mx-auto px-4 py-16">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Services</h2>
          <p className="text-slate-600">Clear outcomes. No fluff.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Rocket className="h-5 w-5" /> MVP & Prototypes</CardTitle>
              <CardDescription>Ship a functional product in weeks, not months.</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-slate-600">
              User auth, dashboards, payments, and admin in a tidy baseline.
            </CardContent>
            {/* <CardFooter>
              <Button variant="ghost" className="rounded-2xl">Learn more →</Button>
            </CardFooter> */}
          </Card>

          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Wrench className="h-5 w-5" /> Internal Tools</CardTitle>
              <CardDescription>Optimize workflows with bespoke dashboards.</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-slate-600">
              CRUD apps, analytics, role‑based access, and integrations.
            </CardContent>
            {/* <CardFooter>
              <Button variant="ghost" className="rounded-2xl">See examples →</Button>
            </CardFooter> */}
          </Card>

          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Shield className="h-5 w-5" /> APIs & Integrations</CardTitle>
              <CardDescription>Design, document, and secure your APIs.</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-slate-600">
              RESTful design, auth, testing, and monitoring baked in.
            </CardContent>
            {/* <CardFooter>
              <Button variant="ghost" className="rounded-2xl">Explore →</Button>
            </CardFooter> */}
          </Card>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-4 py-16">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Selected Work</h2>
          <p className="text-slate-600">A few representative builds.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <Card key={i} className="rounded-2xl overflow-hidden">
              <div className="aspect-video bg-slate-100 overflow-hidden">
                <img
                  src={project.screenshot}
                  alt={`${project.projectTitle} preview`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.projectTitle}</CardTitle>
                <CardDescription>{project.shortDescription}</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-slate-600">
                {project.impact}
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="rounded-2xl w-full"
                  onClick={() => openCaseStudy(project)}
                >
                  {project.button}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <CaseStudyDialog open={dialogOpen} onOpenChange={setDialogOpen} project={selected} />
      </section>

      {/* Process */}
      <section id="process" className="max-w-6xl mx-auto px-4 py-16">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Process</h2>
          <p className="text-slate-600">Predictable delivery with weekly demos.</p>
        </div>
        <ol className="grid md:grid-cols-4 gap-6">
          {["Discovery", "Scope & Quote", "Build & Review", "Launch & Support"].map((step, idx) => (
            <li key={step} className="relative">
              <div className="rounded-2xl border bg-white p-5 shadow-sm h-full">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white text-sm font-semibold">
                    {idx + 1}
                  </span>
                  <h3 className="font-medium">{step}</h3>
                </div>
                <p className="mt-3 text-sm text-slate-600">
                  {idx === 0 && "30–45 min call to understand goals and constraints."}
                  {idx === 1 && "Clear deliverables, timeline, and pricing with milestones."}
                  {idx === 2 && "Sprint‑based dev with Loom updates and staging previews."}
                  {idx === 3 && "Deployment, documentation, and optional maintenance."}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Process FAQ */}
      <section id="faq" className="max-w-6xl mx-auto px-4 py-16">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Questions you might have
          </h2>
          <p className="text-slate-600">
            A few notes on how I work with clients and manage progress.
          </p>
        </div>

        <div className="divide-y divide-slate-200">
          {/* 1. Sprint-based Development */}
          <details className="py-4 group">
            <summary className="font-medium text-slate-900 cursor-pointer flex justify-between items-center">
              <span>What does sprint-based development mean?</span>
              <span className="transition-transform group-open:rotate-180">▾</span>
            </summary>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              I work in short, focused 1- or 2-week sprints. Each sprint has a clear
              outcome—such as a feature, workflow, or integration—followed by a demo
              and feedback round. This keeps projects predictable and transparent.
            </p>
          </details>

          {/* 2. Loom updates */}
          <details className="py-4 group">
            <summary className="font-medium text-slate-900 cursor-pointer flex justify-between items-center">
              <span>What are Loom updates?</span>
              <span className="transition-transform group-open:rotate-180">▾</span>
            </summary>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              At the end of each sprint, I record a short 2-5 minute Loom video
              walking through the progress. You’ll see what’s new, how it works, and
              what’s next—without needing a meeting. This makes collaboration async
              and efficient.
            </p>
          </details>

          {/* 3. Staging previews */}
          <details className="py-4 group">
            <summary className="font-medium text-slate-900 cursor-pointer flex justify-between items-center">
              <span>What are staging previews?</span>
              <span className="transition-transform group-open:rotate-180">▾</span>
            </summary>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              Each sprint includes a live staging environment where you can test new
              features before they’re deployed. You’ll receive a private link to
              explore, leave comments, and sign off on updates.
            </p>
          </details>

          {/* 4. Communication & availability */}
          <details className="py-4 group">
            <summary className="font-medium text-slate-900 cursor-pointer flex justify-between items-center">
              <span>How do we communicate during the project?</span>
              <span className="transition-transform group-open:rotate-180">▾</span>
            </summary>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              Most updates happen via email or Notion. For quick clarifications, I’m
              also available on Slack or WhatsApp. All Loom videos, feedback, and
              timelines are kept in one shared project space for easy reference.
            </p>
          </details>
        </div>
      </section>


      {/* Pricing */}
      <section id="pricing" className="max-w-6xl mx-auto px-4 py-16">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Simple Pricing</h2>
          <p className="text-slate-600">Pick what fits your stage.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Starter */}
          <Card className="rounded-2xl border-2 border-slate-200">
            <CardHeader>
              <Badge className="w-fit rounded-full bg-slate-200 text-slate-800">Starter</Badge>
              <CardTitle className="text-3xl font-bold mt-2">£750+</CardTitle>
              <CardDescription>Landing page or small tool</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-slate-600 space-y-2">
              <Feature>Responsive UI</Feature>
              <Feature>Deploy + docs</Feature>
              <Feature>1 revision cycle</Feature>
            </CardContent>
            <CardFooter>
              <Button className="rounded-2xl w-full" onClick={() => handlePlanSelect("Starter")}>
                <PoundSterling className="mr-2 h-4 w-4" /> Get quote
              </Button>
            </CardFooter>
          </Card>

          {/* MVP — Most Popular */}
          <Card className="rounded-2xl border-2 border-indigo-600">
            <CardHeader>
              <Badge className="w-fit rounded-full bg-indigo-600">Most Popular</Badge>
              <CardTitle className="text-3xl font-bold mt-2">£1,500–£3,500</CardTitle>
              <CardDescription>MVP or internal dashboard</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-slate-600 space-y-2">
              <Feature>Auth + roles</Feature>
              <Feature>API + DB setup</Feature>
              <Feature>Weekly demos</Feature>
            </CardContent>
            <CardFooter>
              <Button className="rounded-2xl w-full" onClick={() => handlePlanSelect("MVP")}>Start MVP</Button>
            </CardFooter>
          </Card>

          {/* Growth */}
          <Card className="rounded-2xl border-2 border-slate-200">
            <CardHeader>
              <Badge className="w-fit rounded-full bg-slate-200 text-slate-800">Growth</Badge>
              <CardTitle className="text-3xl font-bold mt-2">£2,000+/mo</CardTitle>
              <CardDescription>Ongoing support & features</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-slate-600 space-y-2">
              <Feature>Roadmap sprints</Feature>
              <Feature>Monitoring & fixes</Feature>
              <Feature>Priority support</Feature>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="rounded-2xl w-full" onClick={() => handlePlanSelect("Growth")}>Join retainer</Button>
            </CardFooter>
          </Card>
        </div>

        {/* Optional small note */}
        <p className="mt-4 text-xs text-slate-500">
          Prices are estimates and depend on scope. Fixed quotes available after a short discovery call.
        </p>
      </section>


      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-16">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Let’s build something</h2>
          <p className="text-slate-600">Tell me about your idea — I’ll reply with next steps within 24 hours.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Project inquiry</CardTitle>
              <CardDescription>Share a few details to get started.</CardDescription>
            </CardHeader>
            <CardContent>
              {/* NEW: Selected plan pill */}
              {selectedPlan && (
                <div className="mb-4">
                  <span className="inline-flex items-center rounded-full bg-indigo-50 text-indigo-700 text-xs font-medium px-3 py-1">
                    Selected plan: {selectedPlan}
                  </span>
                </div>
              )}

              <form className="grid gap-4" onSubmit={(e) => e.preventDefault()}>
                {/* Hidden field so the plan gets submitted */}
                <input type="hidden" name="selectedPlan" value={selectedPlan || ""} />

                <Input placeholder="Your name" name="name" />
                <Input placeholder="Email" type="email" name="email" />
                <Input placeholder="Company (optional)" name="company" />
                <Textarea placeholder="What are you building? What’s the goal?" rows={5} name="message" />
                <Button className="rounded-2xl w-full" type="submit">
                  <Send className="mr-2 h-4 w-4" /> Send
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="font-medium">Contact</h3>
            <div className="mt-4 grid gap-3 text-sm">
              <a href="mailto:you@example.com" className="flex items-center gap-2 hover:underline"><Mail className="h-4 w-4" /> you@example.com</a>
              <a href="#" className="flex items-center gap-2 hover:underline"><Github className="h-4 w-4" /> github.com/yourhandle</a>
              <a href="#" className="flex items-center gap-2 hover:underline"><Linkedin className="h-4 w-4" /> linkedin.com/in/yourhandle</a>
            </div>
            <div className="mt-6 text-xs text-slate-500">
              Built with React • Tailwind
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Abdul Khan. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-slate-600">
            <a href="#services" className="hover:underline">Services</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#process" className="hover:underline">Process</a>
            <a href="#pricing" className="hover:underline">Pricing</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
  
function Feature({ children }) {
  return (
    <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> <span>{children}</span></div>
  );
}
  