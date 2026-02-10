"use client";

import React, { memo, useCallback, useState } from "react";

// Helper components with refined icons
const ChevronDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const Code = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m16 18 6-6-6-6" />
    <path d="m8 6-6 6 6 6" />
  </svg>
);
export const Palette = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
    <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
    <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
    <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
  </svg>
);

// Shadcn-style Badge component
const Badge = ({
  children,
  className = "",
  variant = "default",
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "secondary" | "outline";
}) => {
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "bg-primary/20 text-foreground hover:bg-primary/30",
    outline: "border border-border bg-transparent hover:bg-primary/10",
  };

  return (
    <span
      className={`inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold transition-colors ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

// --- TYPES ---
export type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

export interface TimelineItemData {
  id: string;
  title: string;
  type: string;
  duration: string;
  icon: IconType;
  responsibilities: string[];
  skills: string[];
}

type ExpandMode = "multi" | "single";

interface ProfessionalTimelineProps {
  data: TimelineItemData[];
  defaultExpandedIds?: string[];
  expandMode?: ExpandMode;
}

// --- MOCK DATA ---
const timelineData: TimelineItemData[] = [
  {
    id: "prof-exp-1",
    title: "Senior Frontend Developer",
    type: "Full-time",
    duration: "10.2022—Present",
    icon: Code,
    responsibilities: [
      "Lead development of complex React applications with TypeScript.",
      "Architect scalable frontend solutions using Next.js and modern tooling.",
      "Mentor junior developers and conduct code reviews.",
      "Collaborate with design and backend teams to deliver high-quality products.",
    ],
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "GraphQL"],
  },
  {
    id: "prof-exp-2",
    title: "UI Design Lead",
    type: "Full-time",
    duration: "10.2022—Present",
    icon: Palette,
    responsibilities: [
      "Ensure UI/UX consistency and high-quality standards.",
      "Design intuitive, user-focused interfaces aligned with business goals.",
      "Define and establish a cohesive UI style for the company.",
    ],
    skills: ["Creativity", "UI/UX Design", "Figma"],
  },
  {
    id: "prof-exp-3",
    title: "Frontend Developer",
    type: "Full-time",
    duration: "03.2021—09.2022",
    icon: Code,
    responsibilities: [
      "Developed responsive web applications using React and Vue.js.",
      "Implemented pixel-perfect designs from Figma mockups.",
      "Optimized application performance and user experience.",
      "Collaborated in an agile development environment.",
    ],
    skills: ["React", "Vue.js", "JavaScript", "CSS", "HTML"],
  },
];

// --- COMPONENTS ---
interface TimelineItemContentProps {
  item: TimelineItemData;
}

const TimelineItemContent = memo(function TimelineItemContent({
  item,
}: TimelineItemContentProps) {
  return (
    <div className="mt-6 space-y-6 animate-in slide-in-from-top-1 duration-200">
      <div className="space-y-3">
        {item.responsibilities.map((responsibility, idx) => (
          <div
            key={`${item.id}-resp-${idx}`}
            className="group flex items-start gap-3"
          >
            <div className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground/70 transition-colors duration-200 group-hover:bg-foreground" />
            <p className="text-sm leading-relaxed text-foreground">
              {responsibility}
            </p>
          </div>
        ))}
      </div>

      {item.skills.length > 0 && (
        <div className="flex flex-wrap gap-2 border-t border-border/60 pt-2">
          {item.skills.map((skill, skillIdx) => (
            <Badge
              key={`${item.id}-skill-${skillIdx}`}
              className="bg-primary/30 text-foreground hover:bg-primary/50"
            >
              {skill}
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
});
TimelineItemContent.displayName = "TimelineItemContent";

interface TimelineItemProps {
  item: TimelineItemData;
  expanded: boolean;
  onToggle: (id: string) => void;
  index: number;
}

const TimelineItem = memo(function TimelineItem({
  item,
  expanded,
  onToggle,
}: TimelineItemProps) {
  const Icon = item.icon;
  const headerId = `timeline-header-${item.id}`;
  const contentId = `timeline-content-${item.id}`;

  return (
    <div className="relative group">
      {/* Connecting line */}
      <div className="absolute left-6 top-14 bottom-0 w-[2px] bg-foreground/20" />

      {/* Timeline node */}
      <div className="absolute left-4 top-6 z-10 flex size-4 items-center justify-center rounded-full border-2 border-foreground/50 bg-background transition-all duration-200">
        <div className="size-2 rounded-full bg-foreground/80 transition-opacity duration-200 group-hover:opacity-100" />
      </div>

      {/* Main content card */}
      <div className="ml-12 mb-8">
        <div
          className={`
          rounded-lg border border-border/60 bg-primary/20
          transition-all duration-200
          ${expanded ? "shadow-sm" : "shadow-none hover:shadow-sm"}
        `}
        >
          <button
            id={headerId}
            className="group/button w-full cursor-pointer rounded-t-lg p-6 text-left transition-colors duration-200 hover:bg-primary/30"
            onClick={() => onToggle(item.id)}
            aria-expanded={expanded}
            aria-controls={contentId}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-3">
                  <div className="rounded-md bg-primary/50 p-2">
                    <Icon className="size-4 text-foreground" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                </div>

                <div className="ml-11 flex items-center gap-3">
                  {item.type ? (
                    <Badge variant="outline" className="text-xs">
                      {item.type}
                    </Badge>
                  ) : null}
                  <span className="text-xs text-foreground/80">
                    {item.duration}
                  </span>
                </div>
              </div>

              <div
                className={`text-foreground/70 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
              >
                <ChevronDown className="size-4" />
              </div>
            </div>
          </button>

          {expanded && (
            <div
              id={contentId}
              role="region"
              aria-labelledby={headerId}
              className="border-t border-border/60 px-6 pb-6"
            >
              <TimelineItemContent item={item} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
});
TimelineItem.displayName = "TimelineItem";

// --- MAIN TIMELINE ---
export function ProfessionalTimeline({
  data,
  defaultExpandedIds,
  expandMode = "multi",
}: ProfessionalTimelineProps) {
  const initial = defaultExpandedIds ?? data.map((item) => item.id);
  const [expanded, setExpanded] = useState<Set<string>>(() => new Set(initial));

  const onToggle = useCallback(
    (id: string) => {
      setExpanded((prev) => {
        const next = new Set(prev);
        if (expandMode === "single") {
          return prev.has(id) ? new Set() : new Set([id]);
        }
        if (next.has(id)) {
          next.delete(id);
        } else {
          next.add(id);
        }
        return next;
      });
    },
    [expandMode]
  );

  return (
    <div className="relative">
      {data.map((item, index) => (
        <TimelineItem
          key={item.id}
          item={item}
          expanded={expanded.has(item.id)}
          onToggle={onToggle}
          index={index}
        />
      ))}
    </div>
  );
}

// --- APP ENTRY POINT ---
export default function TimelinePage2() {
  return (
    <div className="transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 mb-3">
            Professional Experience
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            A comprehensive overview of my career journey and professional
            achievements.
          </p>
        </header>

        <ProfessionalTimeline data={timelineData} expandMode="multi" />
      </div>
    </div>
  );
}