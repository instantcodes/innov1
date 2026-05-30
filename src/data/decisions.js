// Mock data for the Decision Receipts demo

export const sampleReceipts = [
  {
    id: "DR-00412",
    title: "Accepted Senior PM role at Lumen",
    category: "Career",
    decidedAt: "Mar 14, 2026",
    followUpAt: "Sep 14, 2026",
    status: "Validated",
    statusTone: "green",
    summary:
      "Chose Lumen over staying at current company for the IC growth track and equity refresh.",
    alternatives: ["Stay at current role", "Take the Figma offer"],
    mood: "Calm",
    confidence: 78,
  },
  {
    id: "DR-00398",
    title: "Bought the Aeron chair (refurbished)",
    category: "Purchase",
    decidedAt: "Feb 02, 2026",
    followUpAt: "Aug 02, 2026",
    status: "On track",
    statusTone: "green",
    summary:
      "Spent $680 on a used Aeron instead of a $300 mesh chair. Back pain was getting worse.",
    alternatives: ["Cheaper $300 chair", "Standing desk converter"],
    mood: "Decisive",
    confidence: 84,
  },
  {
    id: "DR-00377",
    title: "Ended the Brooklyn lease early",
    category: "Life",
    decidedAt: "Jan 19, 2026",
    followUpAt: "Jul 19, 2026",
    status: "Reviewing",
    statusTone: "orange",
    summary:
      "Paid 2 months penalty to break lease and move closer to family during my mom's recovery.",
    alternatives: ["Sublet for 4 months", "Wait until lease ends in May"],
    mood: "Anxious",
    confidence: 52,
  },
  {
    id: "DR-00361",
    title: "Killed the v2 launch scope",
    category: "Work",
    decidedAt: "Dec 08, 2025",
    followUpAt: "Jun 08, 2026",
    status: "Validated",
    statusTone: "green",
    summary:
      "Cut three features from the v2 release to ship on time. Team pushed back hard.",
    alternatives: ["Delay launch 6 weeks", "Ship all features unpolished"],
    mood: "Conflicted",
    confidence: 61,
  },
  {
    id: "DR-00344",
    title: "Said no to the angel investment",
    category: "Finance",
    decidedAt: "Nov 22, 2025",
    followUpAt: "May 22, 2026",
    status: "Regret",
    statusTone: "orange",
    summary:
      "Passed on putting $15k into a friend's seed round. They closed at a $4M valuation.",
    alternatives: ["Invest the full $15k", "Invest a smaller $5k check"],
    mood: "Hesitant",
    confidence: 44,
  },
];

export const patterns = [
  { label: "Decisions after 10pm have a 73% regret rate", tone: "orange" },
  { label: "You're 2.1x more confident on Tuesday mornings", tone: "blue" },
  { label: "Career decisions: 88% validated within 6 months", tone: "green" },
  {
    label: "You consider 1.4 alternatives on average — peers consider 3.2",
    tone: "orange",
  },
  { label: "Purchases under $200 are never revisited", tone: "gray" },
  {
    label: "'Anxious' mood predicts 64% of reversed decisions",
    tone: "orange",
  },
];

export const categories = [
  "Career",
  "Purchase",
  "Finance",
  "Relationship",
  "Health",
  "Life",
  "Work",
];

export const moods = [
  "Calm",
  "Decisive",
  "Anxious",
  "Excited",
  "Conflicted",
  "Hesitant",
  "Frustrated",
];
