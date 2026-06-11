import type { Profile } from "@/types/profile";

import { contactEntries, resumeDocumentHref } from "@/data/contact";

const location = "Quezon City, Philippines";
const emailContact = contactEntries.find((link) => link.icon === "email");

export const profile: Profile = {
  name: "Erwin Gamaliel Gamalong",
  role: "Full Stack Developer",
  title: "Erwin Gamaliel Gamalong - Full Stack Developer",
  description:
    "Erwin Gamaliel Gamalong - Goal-oriented full stack developer with experience across web, mobile, CMS, and academic publishing platforms.",
  keywords: "Erwin Gamalong, Full Stack Developer, React, Node.js, PHP, Flutter, portfolio",
  ogDescription:
    "Goal-oriented full stack developer with experience leading web, mobile, and internship-based software projects.",
  location,
  hero: {
    availabilityLabel: "Available for opportunities",
    heading: [
      { text: "Building software" },
      { text: "that ships", emphasis: true },
      { text: "and scales.", emphasis: true },
    ],
    subcopy:
      "Goal-oriented and adaptable full stack developer with hands-on experience in web, mobile, CMS, and various technical projects. Based in Quezon City, Philippines.",
    stackLabel: "Core stack",
    actions: [
      { label: "View projects", href: "#projects", variant: "primary", icon: "folder" },
      { label: "Download resume", href: resumeDocumentHref, variant: "outline", icon: "download", download: true },
      { label: "Contact me", href: "#contact", variant: "outline" },
    ],
  },
  about: {
    section: {
      id: "about-heading",
      eyebrow: "About",
      title: "Engineering with intention.",
    },
    paragraphs: [
      "I'm a goal-oriented and adaptable developer who has built a diverse skill set through academic, internship, and project leadership roles. My work has ranged from web platforms and content systems to mobile applications and immersive digital experiences.",
      "I enjoy working across the full stack and adapting to changing requirements. My experience includes React, PHP, Python, .NET MVC, Flutter, Node.js, Firebase, and Oracle, along with the development tools that help teams collaborate and ship reliably.",
      "Beyond writing code, I've also led teams in building standalone, web, and mobile applications. I value coordination, clear communication, and delivering high-quality results ahead of deadlines whenever possible.",
    ],
    meta: [
      { label: "Location", value: [location] },
      { label: "Degree", value: ["B.S. Information Technology", "Quezon City University", "Graduation Date: June 2026"] },
      { label: "Status", value: ["Open to full-time roles"] },
      { label: "Email", value: emailContact ? [emailContact.value] : [] },
    ],
    interests: [
      "Web Development",
      "Mobile Applications",
      "Content Management Systems",
      "API Integration",
      "Team Leadership",
      "Software Quality",
    ],
    avatar: {
      kind: "placeholder",
      label: "Photo of Erwin Gamaliel Gamalong",
      initials: "EG",
      todo: "TODO: replace with a professional portrait image in public/images/.",
    },
  },
  coreStack: [
    "React",
    "PHP",
    "Python",
    ".NET",
    "Flutter",
    "Node.js",
    "Firebase",
    "Oracle Database",
    "MongoDB",
    "MySQL",
  ],
  learning: {
    label: "Currently learning",
    items: ["Introduction to APIs", "Cloud Networking", "Relational vs NoSQL Databases", "Cloud Security"],
  },
  resume: {
    section: {
      id: "resume-heading",
      eyebrow: "Resume",
      title: "Available for download.",
      lead:
        "My resume covers education, leadership roles, internship experience, and selected technical projects.",
    },
    preview: {
      kind: "placeholder",
      label: "Resume preview placeholder",
      text: "Resume preview",
      todo: "TODO: replace with a resume thumbnail or embedded preview image.",
    },
    download: {
      label: "Download PDF",
      href: resumeDocumentHref,
      variant: "primary",
      icon: "download",
      download: true,
    },
    open: {
      label: "Open in browser",
      href: resumeDocumentHref,
      variant: "outline",
      target: "_blank",
      rel: "noreferrer",
    },
  },
};
