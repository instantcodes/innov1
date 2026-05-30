// Decision Receipts — landing page
import { useState } from "react";
import {
  ArrowRight,
  Sparkles,
  Receipt,
  CalendarClock,
  LineChart,
  ShieldCheck,
  Github,
  Twitter,
  Mail,
} from "lucide-react";
import { OutlinePill, SoftActionPill, StatusPill } from "../components/Pill";
import CircularRing from "../components/CircularRing";
import ReceiptDemo from "../components/ReceiptDemo";
import { sampleReceipts, patterns } from "../data/decisions";

function Nav() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-5 md:px-8 h-14 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md border border-gray-200 flex items-center justify-center">
            <Receipt className="w-3.5 h-3.5 text-gray-900" />
          </div>
          <span className="text-sm font-semibold text-gray-900 tracking-tight">
            Receipts
          </span>
          <OutlinePill className="hidden sm:inline-flex ml-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
            Beta
          </OutlinePill>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-gray-500">
          <a
            href="#how"
            className="hover:text-gray-900 transition-colors duration-150"
          >
            How it works
          </a>
          <a
            href="#demo"
            className="hover:text-gray-900 transition-colors duration-150"
          >
            Try it
          </a>
          <a
            href="#portfolio"
            className="hover:text-gray-900 transition-colors duration-150"
          >
            Portfolio
          </a>
          <a
            href="#pricing"
            className="hover:text-gray-900 transition-colors duration-150"
          >
            Pricing
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="#access"
            className="hidden sm:inline-flex text-sm font-medium text-gray-700 hover:text-gray-900 px-3 py-2 rounded-lg transition-colors duration-150"
          >
            Sign in
          </a>
          <a
            href="#access"
            className="bg-gray-900 text-white rounded-lg px-3.5 py-2 text-sm font-medium hover:bg-gray-800 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            Get early access
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-5 md:px-8 pt-16 md:pt-24 pb-16 md:pb-24">
        <div className="flex flex-col items-start md:items-center gap-6 md:text-center">
          <SoftActionPill>
            <Sparkles className="w-3.5 h-3.5" />
            New — pattern detection v0.4 is live
          </SoftActionPill>
          <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 tracking-tight max-w-3xl leading-[1.1]">
            Every important decision deserves a receipt.
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl leading-relaxed">
            Log the choices that actually matter — jobs, moves, money, people.
            We hand you back a structured record, then ping you months later to
            evaluate how it aged. Hindsight, finally on your side.
          </p>
          <div className="flex flex-wrap items-center gap-3 mt-2">
            <a
              href="#demo"
              className="bg-gray-900 text-white rounded-lg px-4 py-2.5 text-sm font-medium inline-flex items-center gap-1.5 hover:bg-gray-800 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              Try the live demo
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="#how"
              className="bg-white border border-gray-200 text-gray-700 rounded-lg px-4 py-2.5 text-sm font-medium hover:border-gray-300 hover:bg-gray-50 transition-colors duration-150"
            >
              See how it works
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-2 mt-4 justify-start md:justify-center">
            <OutlinePill>No account to try</OutlinePill>
            <OutlinePill>Export anytime</OutlinePill>
            <OutlinePill>Private by default</OutlinePill>
          </div>
        </div>
      </div>
    </section>
  );
}

const HOW_STEPS = [
  {
    icon: Receipt,
    title: "Log the decision",
    desc: "Capture what you chose, why, and what you didn't choose — in under 90 seconds.",
    bullets: [
      "Plain-language reasoning",
      "Up to 5 alternatives",
      "Mood and confidence at the moment",
    ],
  },
  {
    icon: CalendarClock,
    title: "Receive a follow-up",
    desc: "Weeks or months later, a single quiet ping asks how the decision actually aged.",
    bullets: [
      "One question, not a survey",
      "Compares past-you to present-you",
      "Skip or snooze with one tap",
    ],
  },
  {
    icon: LineChart,
    title: "Spot your patterns",
    desc: "Your portfolio surfaces blind spots you'd never notice from a single choice.",
    bullets: [
      "Hit-rate by category",
      "Time-of-day and mood correlations",
      "Exportable as PDF or CSV",
    ],
  },
];

function HowItWorks() {
  return (
    <section id="how" className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="flex flex-col gap-2 mb-10 md:mb-12 max-w-2xl">
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
            How it works
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight">
            Three steps. Years of compounding clarity.
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            Most journaling apps capture feelings. Most planners capture tasks.
            Nothing captures the reasoning behind the choices that shape your
            decade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {HOW_STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:border-gray-300 transition-colors duration-150 flex flex-col gap-4"
              >
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-gray-900" />
                  </div>
                  <span className="text-xs font-medium text-gray-400 tabular-nums">
                    0{i + 1}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-semibold text-gray-900 tracking-tight">
                    {s.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
                <ul className="flex flex-col mt-1">
                  {s.bullets.map((b) => (
                    <li key={b} className="text-sm text-gray-600 py-1">
                      <span className="text-gray-400 mr-2">-</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function DemoSection() {
  return (
    <section id="demo" className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-2 flex flex-col gap-3 lg:sticky lg:top-20">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
              Try it now
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight">
              Issue your first receipt.
            </h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              No account, no email. Type a real decision you're sitting with and
              walk through the four steps. The receipt stays on your device
              unless you choose to save it.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <OutlinePill>~90 seconds</OutlinePill>
              <OutlinePill>4 steps</OutlinePill>
              <OutlinePill>Local only</OutlinePill>
            </div>
          </div>
          <div className="lg:col-span-3">
            <ReceiptDemo />
          </div>
        </div>
      </div>
    </section>
  );
}

function PortfolioSection() {
  const stats = [
    { label: "Hit rate", value: 68, color: "stroke-blue-600" },
    { label: "Regret rate", value: 22, color: "stroke-orange-600" },
    { label: "Clarity score", value: 81, color: "stroke-green-500" },
  ];
  return (
    <section id="portfolio" className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div className="flex flex-col gap-2 max-w-2xl">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
              Your portfolio
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight">
              A quiet ledger of how you actually decide.
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              A glimpse at what your dashboard looks like after a year of
              receipts.
            </p>
          </div>
          <SoftActionPill>
            <Sparkles className="w-3.5 h-3.5" />
            Sample data
          </SoftActionPill>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white rounded-xl border border-gray-200 p-6 flex items-center justify-between"
            >
              <div className="flex flex-col gap-1">
                <span className="text-xs font-medium text-gray-500">
                  {s.label}
                </span>
                <span className="text-2xl font-semibold text-gray-900 tracking-tight tabular-nums">
                  {s.value}%
                </span>
                <span className="text-xs text-gray-500">
                  across 47 receipts
                </span>
              </div>
              <CircularRing value={s.value} size={72} progressClass={s.color} />
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
            <div className="flex flex-col gap-0.5">
              <h3 className="text-base font-semibold text-gray-900 tracking-tight">
                Recent receipts
              </h3>
              <span className="text-xs text-gray-500">
                Sorted by follow-up date
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <OutlinePill>All categories</OutlinePill>
              <OutlinePill>Last 6 months</OutlinePill>
            </div>
          </div>
          <ul className="divide-y divide-gray-200">
            {sampleReceipts.map((r) => (
              <li
                key={r.id}
                className="px-6 py-5 hover:bg-gray-50 transition-colors duration-150 flex flex-col md:flex-row md:items-center gap-4 md:gap-6"
              >
                <div className="flex flex-col gap-1 md:flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-medium text-gray-400 tabular-nums">
                      {r.id}
                    </span>
                    <span className="text-gray-300">·</span>
                    <span className="text-xs font-medium text-gray-500">
                      {r.decidedAt}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-gray-900 tracking-tight truncate">
                    {r.title}
                  </p>
                  <p className="text-sm text-gray-600 line-clamp-1">
                    {r.summary}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2 md:gap-3 md:shrink-0">
                  <OutlinePill>{r.category}</OutlinePill>
                  <OutlinePill>{r.mood}</OutlinePill>
                  <StatusPill tone={r.statusTone}>{r.status}</StatusPill>
                  <div className="flex items-center gap-2 pl-1">
                    <CircularRing
                      value={r.confidence}
                      size={36}
                      stroke={3}
                      progressClass="stroke-orange-600"
                      label={`${r.confidence}`}
                    />
                    <span className="text-xs text-gray-500 hidden lg:inline">
                      confidence
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="px-6 py-3 border-t border-gray-200 flex items-center justify-between">
            <span className="text-xs text-gray-500">
              Showing 5 of 47 receipts
            </span>
            <button
              type="button"
              className="text-xs font-medium text-gray-700 hover:text-gray-900 transition-colors duration-150"
            >
              View all →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

const PATTERN_TONE_CLASS = {
  orange: "bg-orange-500",
  green: "bg-green-500",
  blue: "bg-blue-600",
  gray: "bg-gray-400",
};

function PatternsSection() {
  return (
    <section className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
              Pattern detection
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight">
              The patterns are the product.
            </h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Individual receipts are useful. But the real value shows up after
              30 or 40 of them — when the system can tell you things about how
              you decide that you'd never spot yourself.
            </p>
            <ul className="flex flex-col mt-2">
              {[
                "Time-of-day, weekday, and seasonal correlations",
                "Mood-to-outcome regression across categories",
                "Comparison to anonymized peer baselines",
                "Personal heuristics surfaced from your own language",
              ].map((b) => (
                <li key={b} className="text-sm text-gray-600 py-1">
                  <span className="text-gray-400 mr-2">-</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-7">
            <div className="flex items-center justify-between mb-5">
              <div className="flex flex-col gap-0.5">
                <span className="text-xs font-medium text-gray-500">
                  Detected this month
                </span>
                <h3 className="text-base font-semibold text-gray-900 tracking-tight">
                  6 new patterns
                </h3>
              </div>
              <OutlinePill>Updated daily</OutlinePill>
            </div>
            <div className="flex flex-col gap-2.5">
              {patterns.map((p) => (
                <div
                  key={p.label}
                  className="border border-gray-200 rounded-lg px-3.5 py-3 flex items-start gap-3 hover:border-gray-300 transition-colors duration-150"
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${
                      PATTERN_TONE_CLASS[p.tone] || PATTERN_TONE_CLASS.gray
                    }`}
                  />
                  <span className="text-sm text-gray-700 leading-relaxed">
                    {p.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const PLANS = [
  {
    name: "Personal",
    price: "Free",
    cadence: "forever",
    desc: "For anyone who wants to start keeping receipts.",
    features: [
      "Up to 20 active receipts",
      "Follow-up reminders",
      "Basic portfolio dashboard",
      "Export to PDF",
    ],
    cta: "Start free",
    featured: false,
  },
  {
    name: "Practitioner",
    price: "$6",
    cadence: "per month",
    desc: "For the curious ones who plan to do this for years.",
    features: [
      "Unlimited receipts",
      "Full pattern detection engine",
      "Peer-baseline comparisons",
      "CSV + Notion export",
      "End-to-end encryption",
    ],
    cta: "Start 14-day trial",
    featured: true,
  },
  {
    name: "Teams",
    price: "$24",
    cadence: "per seat / month",
    desc: "For founders and ops teams logging business decisions together.",
    features: [
      "Shared decision logs",
      "Role-based access",
      "Quarterly retro reports",
      "API access",
    ],
    cta: "Talk to us",
    featured: false,
  },
];

function PricingSection() {
  return (
    <section id="pricing" className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="flex flex-col gap-2 mb-10 md:mb-12 max-w-2xl">
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
            Pricing
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight">
            Start free. Stay as long as it's useful.
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            We charge once you've issued enough receipts to know whether this
            actually changes how you decide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className={`bg-white rounded-xl border p-6 flex flex-col gap-5 transition-colors duration-150 ${
                p.featured
                  ? "border-gray-900"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-900 tracking-tight">
                  {p.name}
                </span>
                {p.featured ? (
                  <SoftActionPill>Most chosen</SoftActionPill>
                ) : (
                  <OutlinePill>Plan</OutlinePill>
                )}
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl font-semibold text-gray-900 tracking-tight">
                  {p.price}
                </span>
                <span className="text-sm text-gray-500">{p.cadence}</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
              <ul className="flex flex-col">
                {p.features.map((f) => (
                  <li key={f} className="text-sm text-gray-600 py-1">
                    <span className="text-gray-400 mr-2">-</span>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className={`mt-auto rounded-lg px-4 py-2.5 text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 ${
                  p.featured
                    ? "bg-gray-900 text-white hover:bg-gray-800"
                    : "bg-white border border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                {p.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EarlyAccess() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="access" className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-col gap-2 max-w-xl">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-gray-500" />
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                Private beta
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight">
              Be the first to keep receipts.
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              We're rolling out access in small cohorts so the pattern engine
              gets calibrated carefully. ~2,300 people ahead of you.
            </p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email.trim()) setSubmitted(true);
            }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full md:w-auto md:min-w-[360px]"
          >
            {submitted ? (
              <div className="flex-1 bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                You're on the list — we'll be in touch.
              </div>
            ) : (
              <>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 bg-white border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 transition-colors duration-150"
                />
                <button
                  type="submit"
                  className="bg-gray-900 text-white rounded-lg px-4 py-2.5 text-sm font-medium hover:bg-gray-800 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 whitespace-nowrap"
                >
                  Request access
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md border border-gray-200 flex items-center justify-center">
            <Receipt className="w-3.5 h-3.5 text-gray-900" />
          </div>
          <span className="text-sm font-semibold text-gray-900 tracking-tight">
            Receipts
          </span>
          <span className="text-xs text-gray-500 ml-2">
            © 2026 · Made for clearer thinkers
          </span>
        </div>
        <div className="flex items-center gap-5 text-sm text-gray-500">
          <a
            href="#"
            className="hover:text-gray-900 transition-colors duration-150"
          >
            Privacy
          </a>
          <a
            href="#"
            className="hover:text-gray-900 transition-colors duration-150"
          >
            Terms
          </a>
          <a
            href="#"
            className="hover:text-gray-900 transition-colors duration-150"
          >
            Changelog
          </a>
          <div className="flex items-center gap-3 pl-2 border-l border-gray-200">
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-500 hover:text-gray-900 transition-colors duration-150"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="#"
              aria-label="GitHub"
              className="text-gray-500 hover:text-gray-900 transition-colors duration-150"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="#"
              aria-label="Email"
              className="text-gray-500 hover:text-gray-900 transition-colors duration-150"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white font-inter text-gray-900 antialiased">
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <DemoSection />
        <PortfolioSection />
        <PatternsSection />
        <PricingSection />
        <EarlyAccess />
      </main>
      <Footer />
    </div>
  );
}
