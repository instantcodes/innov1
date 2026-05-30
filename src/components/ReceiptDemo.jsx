// Interactive "Create a Decision Receipt" demo with tab navigation
import { useState } from "react";
import { ArrowRight, Check, Plus, X } from "lucide-react";
import { OutlinePill, SoftActionPill } from "./Pill";
import { categories, moods } from "../data/decisions";

const TABS = [
  { id: "decision", label: "Decision" },
  { id: "alternatives", label: "Alternatives" },
  { id: "emotional", label: "Emotional state" },
  { id: "followup", label: "Follow-up" },
];

function TabBar({ active, onChange, completed }) {
  return (
    <div className="border-b border-gray-200">
      <div className="flex items-center gap-6 overflow-x-auto">
        {TABS.map((t) => {
          const isActive = active === t.id;
          const isDone = completed.includes(t.id);
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => onChange(t.id)}
              className={`pb-3 -mb-[1px] text-sm whitespace-nowrap border-b-2 transition-colors duration-150 inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded-sm ${
                isActive
                  ? "text-gray-900 font-medium border-blue-600"
                  : "text-gray-500 font-normal border-transparent hover:text-gray-700"
              }`}
            >
              {t.label}
              {isDone && !isActive && (
                <Check className="w-3.5 h-3.5 text-green-500" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Field({ label, hint, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-medium text-gray-500">{label}</label>
      {children}
      {hint ? <p className="text-xs text-gray-400">{hint}</p> : null}
    </div>
  );
}

const inputClass =
  "w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:border-transparent transition-colors duration-150";

export default function ReceiptDemo() {
  const [tab, setTab] = useState("decision");
  const [form, setForm] = useState({
    title: "",
    category: "Career",
    reasoning: "",
    alternatives: ["", ""],
    mood: "Calm",
    confidence: 65,
    followUp: "6 months",
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (patch) => setForm((f) => ({ ...f, ...patch }));

  const setAlt = (i, v) => {
    const next = [...form.alternatives];
    next[i] = v;
    update({ alternatives: next });
  };

  const completed = [];
  if (form.title.trim() && form.reasoning.trim()) completed.push("decision");
  if (form.alternatives.some((a) => a.trim())) completed.push("alternatives");
  if (form.mood) completed.push("emotional");
  if (form.followUp) completed.push("followup");

  const nextTab = () => {
    const idx = TABS.findIndex((t) => t.id === tab);
    if (idx < TABS.length - 1) setTab(TABS[idx + 1].id);
    else setSubmitted(true);
  };

  if (submitted) {
    const receiptId = `DR-${String(Math.floor(Math.random() * 90000) + 10000)}`;
    return (
      <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center">
              <Check className="w-4 h-4 text-blue-600" />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-xs font-medium text-gray-500 tracking-tight">
                Receipt issued
              </span>
              <span className="text-base font-semibold text-gray-900">
                {receiptId}
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setTab("decision");
              setForm({
                title: "",
                category: "Career",
                reasoning: "",
                alternatives: ["", ""],
                mood: "Calm",
                confidence: 65,
                followUp: "6 months",
              });
            }}
            className="text-xs font-medium text-gray-500 hover:text-gray-900 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded-sm px-1"
          >
            Start another
          </button>
        </div>

        <div className="border-t border-dashed border-gray-200 pt-5 flex flex-col gap-5">
          <div className="flex flex-wrap items-center gap-2">
            <OutlinePill>{form.category}</OutlinePill>
            <OutlinePill>{form.mood}</OutlinePill>
            <OutlinePill>Confidence {form.confidence}%</OutlinePill>
            <OutlinePill>Revisit in {form.followUp}</OutlinePill>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-xs font-medium text-gray-500">Decision</span>
            <p className="text-base font-semibold text-gray-900 tracking-tight">
              {form.title || "Untitled decision"}
            </p>
            <p className="text-sm text-gray-600 mt-1 leading-relaxed">
              {form.reasoning ||
                "No reasoning captured — add context so future-you understands."}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium text-gray-500">
              Alternatives considered
            </span>
            <ul className="flex flex-col">
              {form.alternatives
                .map((a) => a.trim())
                .filter(Boolean)
                .map((a, i) => (
                  <li key={i} className="text-sm text-gray-600 py-1">
                    <span className="text-gray-400 mr-2">-</span>
                    {a}
                  </li>
                ))}
              {!form.alternatives.some((a) => a.trim()) && (
                <li className="text-sm text-gray-400 py-1">
                  <span className="text-gray-400 mr-2">-</span>None logged
                </li>
              )}
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-medium text-gray-900">
                Follow-up scheduled
              </span>
              <span className="text-sm text-gray-600">
                We'll ping you in {form.followUp} to evaluate this decision and
                update your portfolio.
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8">
      <div className="flex items-center justify-between mb-5">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-medium text-gray-500">
            New decision receipt
          </span>
          <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
            Capture it while it's fresh
          </h3>
        </div>
        <OutlinePill>Draft</OutlinePill>
      </div>

      <TabBar active={tab} onChange={setTab} completed={completed} />

      <div className="pt-6 flex flex-col gap-5 min-h-[280px]">
        {tab === "decision" && (
          <>
            <Field label="What did you decide?">
              <input
                type="text"
                className={inputClass}
                placeholder="e.g. Accept the offer from Lumen"
                value={form.title}
                onChange={(e) => update({ title: e.target.value })}
              />
            </Field>
            <Field label="Category">
              <div className="flex flex-wrap gap-2">
                {categories.map((c) => {
                  const active = form.category === c;
                  return (
                    <button
                      key={c}
                      type="button"
                      onClick={() => update({ category: c })}
                      className={`rounded-full px-3 py-1 text-xs font-medium border transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 ${
                        active
                          ? "bg-blue-50 border-blue-200 text-blue-600"
                          : "bg-white border-gray-200 text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      {c}
                    </button>
                  );
                })}
              </div>
            </Field>
            <Field
              label="Reasoning"
              hint="Future-you needs the 'why', not just the 'what'."
            >
              <textarea
                rows={4}
                className={inputClass + " resize-none"}
                placeholder="What's driving this choice? What do you believe right now?"
                value={form.reasoning}
                onChange={(e) => update({ reasoning: e.target.value })}
              />
            </Field>
          </>
        )}

        {tab === "alternatives" && (
          <>
            <Field
              label="Alternatives you considered"
              hint="Most people log 1.4 — try for at least 3."
            >
              <div className="flex flex-col gap-2">
                {form.alternatives.map((a, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-gray-400 text-sm w-4">-</span>
                    <input
                      type="text"
                      className={inputClass}
                      placeholder={`Alternative ${i + 1}`}
                      value={a}
                      onChange={(e) => setAlt(i, e.target.value)}
                    />
                    {form.alternatives.length > 1 && (
                      <button
                        type="button"
                        onClick={() =>
                          update({
                            alternatives: form.alternatives.filter(
                              (_, idx) => idx !== i,
                            ),
                          })
                        }
                        className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:border-gray-300 transition-colors duration-150"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() =>
                    update({ alternatives: [...form.alternatives, ""] })
                  }
                  className="self-start inline-flex items-center gap-1.5 text-xs font-medium text-gray-700 border border-gray-200 rounded-full px-3 py-1 hover:border-gray-300 hover:bg-gray-50 transition-colors duration-150"
                >
                  <Plus className="w-3 h-3" /> Add alternative
                </button>
              </div>
            </Field>
          </>
        )}

        {tab === "emotional" && (
          <>
            <Field label="How do you feel right now?">
              <div className="flex flex-wrap gap-2">
                {moods.map((m) => {
                  const active = form.mood === m;
                  return (
                    <button
                      key={m}
                      type="button"
                      onClick={() => update({ mood: m })}
                      className={`rounded-full px-3 py-1 text-xs font-medium border transition-colors duration-150 ${
                        active
                          ? "bg-blue-50 border-blue-200 text-blue-600"
                          : "bg-white border-gray-200 text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      {m}
                    </button>
                  );
                })}
              </div>
            </Field>
            <Field
              label={`Confidence — ${form.confidence}%`}
              hint="Be honest. Low confidence is useful data, not a red flag."
            >
              <input
                type="range"
                min={0}
                max={100}
                value={form.confidence}
                onChange={(e) => update({ confidence: Number(e.target.value) })}
                className="w-full accent-blue-600"
              />
            </Field>
          </>
        )}

        {tab === "followup" && (
          <>
            <Field
              label="When should we check back?"
              hint="You'll get a single notification asking how this aged."
            >
              <div className="flex flex-wrap gap-2">
                {["2 weeks", "1 month", "3 months", "6 months", "1 year"].map(
                  (opt) => {
                    const active = form.followUp === opt;
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => update({ followUp: opt })}
                        className={`rounded-full px-3 py-1 text-xs font-medium border transition-colors duration-150 ${
                          active
                            ? "bg-blue-50 border-blue-200 text-blue-600"
                            : "bg-white border-gray-200 text-gray-700 hover:border-gray-300"
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  },
                )}
              </div>
            </Field>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex flex-col gap-2">
              <span className="text-xs font-medium text-gray-500">
                Receipt preview
              </span>
              <p className="text-sm font-semibold text-gray-900 tracking-tight">
                {form.title || "Untitled decision"}
              </p>
              <div className="flex flex-wrap gap-2">
                <OutlinePill>{form.category}</OutlinePill>
                <OutlinePill>{form.mood}</OutlinePill>
                <OutlinePill>{form.confidence}% confident</OutlinePill>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="mt-6 pt-5 border-t border-gray-200 flex items-center justify-between">
        <span className="text-xs text-gray-500">
          Step {TABS.findIndex((t) => t.id === tab) + 1} of {TABS.length}
        </span>
        <button
          type="button"
          onClick={nextTab}
          className="bg-gray-900 text-white rounded-lg px-4 py-2 text-sm font-medium inline-flex items-center gap-1.5 hover:bg-gray-800 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
        >
          {tab === "followup" ? "Issue receipt" : "Continue"}
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
