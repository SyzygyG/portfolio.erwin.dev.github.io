import type { ExperienceItem } from "@/types/experience";
import type { SectionIntro } from "@/types/content";
import { sortByNewestRange } from "@/lib/dates";

export const experienceSection: SectionIntro = {
  id: "experience-heading",
  eyebrow: "Experience",
  title: "Where I've worked.",
};

const experienceEntries: ExperienceItem[] = [
  {
    company: "Quezon City University / Hytec Power Inc.",
    role: "Full Stack Developer - Hytec Power Inc. Virtual Tour and CMS",
    range: {
      start: { year: 2026 },
    },
    type: "Photo Sphere Viewer, Angular, and Laravel",
    description:
      "Created the 3D virtual tour for Hytec Power Inc. using Google Model Viewer and Photo Sphere Viewer for 3D tour features, with Laravel supporting the content management system.",
    achievements: [
      "Built interactive 3D tour features for internship deployment",
      "Worked with Photo Sphere Viewer and Google Model Viewer for immersive presentation",
      "Used Laravel in support of content management needs",
    ],
    ariaLabel: "Internship project for Hytec Power Inc. Virtual Tour",
  },
  {
    company: "Quezon City University / Hytec Power Inc.",
    role: "Full Stack Developer - Hytec Power Inc. Website and CMS",
    range: {
      start: { year: 2026 },
    },
    type: "Angular and Laravel",
    description:
      "Designed an improved Hytec Power Inc. website with a content management system to keep data updated, consistent, and aligned with company objectives and current status.",
    achievements: [
      "Worked with Angular and Laravel in an internship environment",
      "Focused on maintainable content updates through CMS functionality",
      "Improved website consistency around business information and status updates",
    ],
    ariaLabel: "Internship website and CMS project for Hytec Power Inc.",
  },
  {
    company: "Quezon City University",
    role: "Full Stack Developer - QCU Journals",
    range: {
      start: { year: 2025 },
    },
    type: "PKP Open Journal Systems",
    description:
      "Developed QCU Journals for managing scholarly, peer-reviewed journals and helped streamline submission, peer review, editing, and indexing workflows.",
    achievements: [
      "Supported journal management through PKP Open Journal Systems",
      "Helped improve process flow for submission, review, and editing",
      "Contributed to indexing readiness for Google and DOI workflows",
    ],
    ariaLabel: "Internship project for QCU Journals",
  },
  {
    company: "QCU Supreme Student Council",
    role: "Grievance Committee - Council of Leader",
    range: {
      start: { year: 2024, month: 9 },
      isCurrent: true,
    },
    type: "Student leadership",
    description:
      "Served in a council leadership role supporting grievance-related committee responsibilities while balancing academic and technical project work.",
    achievements: [
      "Contributed to student leadership and committee coordination",
      "Worked across organizational responsibilities in a council setting",
      "Strengthened communication and coordination experience beyond software projects",
    ],
    ariaLabel: "Grievance Committee council leadership role",
  },
  {
    company: "QCU Supreme Student Council",
    role: "Membership Committee - Council of Leader",
    range: {
      start: { year: 2023, month: 9 },
      end: { year: 2024, month: 9 },
    },
    type: "Student leadership",
    description:
      "Supported membership-related council responsibilities and organizational coordination as part of the student leadership structure.",
    achievements: [
      "Handled committee participation in student council initiatives",
      "Built coordination experience through leadership responsibilities",
      "Balanced organizational duties with technical and academic commitments",
    ],
    ariaLabel: "Membership Committee council leadership role",
  },
];

export const experienceItems = experienceEntries.toSorted((left, right) =>
  sortByNewestRange(left.range, right.range),
);
