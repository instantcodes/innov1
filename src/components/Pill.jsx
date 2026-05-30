// Pill components following the design system's pill taxonomy

export function OutlinePill({ children, className = "" }) {
  return (
    <span
      className={`bg-white border border-gray-200 rounded-full px-3 py-1 text-xs font-medium text-gray-700 inline-flex items-center gap-1.5 ${className}`}
    >
      {children}
    </span>
  );
}

export function SoftActionPill({
  children,
  className = "",
  as: As = "span",
  ...props
}) {
  return (
    <As
      className={`bg-blue-50 text-blue-600 rounded-full px-3 py-1.5 text-sm font-medium inline-flex items-center gap-1.5 hover:bg-blue-100 transition-colors duration-150 ${className}`}
      {...props}
    >
      {children}
    </As>
  );
}

const toneDotClass = {
  green: "bg-green-500",
  orange: "bg-orange-500",
  blue: "bg-blue-600",
  gray: "bg-gray-400",
  red: "bg-red-500",
};

export function StatusPill({ tone = "green", children, className = "" }) {
  const dot = toneDotClass[tone] || toneDotClass.gray;
  return (
    <span
      className={`bg-white border border-gray-200 rounded-full px-3 py-1 text-xs font-medium text-gray-700 inline-flex items-center gap-1.5 ${className}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${dot}`} aria-hidden="true" />
      {children}
    </span>
  );
}
