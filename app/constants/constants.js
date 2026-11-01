// `live` is the public URL of the product, `code` is a public repository.
// Leave either as null to hide its button (client codebases are private).
export const projects = [
  {
    title: "Qoryx: AI Shift Management Platform",
    description:
      "AI-powered healthcare staffing platform that predicts staffing risks and matches the right people to shifts. I lead development of the platform at TSoul Consulting, taking LLM-driven workflows from prototype to production.",
    image: "/images/qoryx.jpg",
    tags: ["LLM Integration", "OpenAI API", "Full-Stack", "REST APIs", "Healthcare"],
    live: "https://www.qoryx.ai/",
    code: null,
  },
  {
    title: "Bloods & Beyond: Phlebotomist Booking Platform",
    description:
      "Healthcare platform for finding, booking and scheduling mobile phlebotomists across the UK, serving 5,000+ users on systems supporting ~£300k in annual revenue.",
    image: "/images/bloodsandbeyond.jpg",
    tags: ["Full-Stack", "Scheduling", "REST APIs", "Healthcare"],
    live: "https://finder.bloodsandbeyond.co.uk/finder",
    code: null,
  },
  {
    title: "RL for Cost-Aware Portfolio Rebalancing",
    description:
      "MSc dissertation (University of Chester). Trains PPO agents in a custom Gymnasium environment to rebalance a nine-ETF portfolio with transaction costs embedded in the reward, evaluated across 40 runs with a two-level statistical protocol.",
    image: "/images/rl-portfolio.jpg",
    tags: ["Python", "PyTorch", "Stable-Baselines3", "Gymnasium", "Reinforcement Learning"],
    live: null,
    code: "https://github.com/Babajide777/rl_portfolio",
  },
  {
    title: "Kinderly: AI Parenting Assistant",
    description:
      "AI-powered parenting assistant built at HEX Africa. I built the full backend serving the admin dashboard and mobile app, plus the admin dashboard and landing page, integrating LLM workflows for 1,000+ users.",
    image: "/images/kinderly.png",
    tags: ["NestJS", "GraphQL", "Prisma", "PostgreSQL", "Next.js", "Firebase", "TypeScript"],
    live: null,
    code: null,
  },
  {
    title: "GenSwift: Enterprise Management Platform",
    description:
      "Enterprise application for a pharmaceutical company to manage staff, clients, messaging, memos and notifications. I designed the entire backend architecture from scratch at Kampus360.",
    image: "/images/genswift.png",
    tags: ["Express.js", "Next.js", "MySQL", "Drizzle ORM"],
    live: "https://app.genswift.com",
    code: null,
  },
  {
    title: "RetailCraft: Retail POS Platform",
    description:
      "Point-of-sale SaaS where businesses set up stores, users and products and make sales. I built the backend for high transaction volume at Kampus360.",
    image: "/images/retailcraft.png",
    tags: ["NestJS", "MySQL", "Drizzle ORM", "AWS"],
    live: "https://retailcraft.com.ng/login",
    code: null,
  },
  {
    title: "Babies n Stuffs: E-commerce Platform",
    description:
      "E-commerce platform for baby products with product and order management and a responsive storefront.",
    image: "/images/babiesnstuffs.png",
    tags: ["Next.js", "Node.js", "Styled Components", "SwiperJS"],
    live: "https://www.babiesnstuffs.com/",
    code: null,
  },
  {
    title: "EvenFare: Rider App",
    description:
      "Ride-hailing rider app built as a freelance project for EvenFare Africa.",
    image: "/images/evenfare.png",
    tags: ["NestJS", "MongoDB", "Mongoose", "Firebase", "Cloudinary", "TypeScript"],
    live: null,
    code: null,
  },
  {
    title: "Ever Website",
    description: "Part of the team that built the Ever platform website at Ever Technologies.",
    image: "/images/ever.png",
    tags: ["Next.js", "TypeScript", "Chakra UI", "Styled Components"],
    live: "https://ever.co/",
    code: null,
  },
  {
    title: "Ever Tech Website",
    description: "Part of the team that built the Ever Tech services website from scratch.",
    image: "/images/ever-tech.png",
    tags: ["Next.js", "TypeScript", "Chakra UI", "Styled Components"],
    live: null,
    code: null,
  },
  {
    title: "Tae Lolu Website",
    description: "Full-stack website for an import-export company (freelance).",
    image: "/images/tae-lolu.jpg",
    tags: ["Next.js", "TypeScript", "Nodemailer", "Styled Components"],
    live: null,
    code: null,
  },
  {
    title: "Togao Consults Website",
    description: "Full-stack website for an insurance consultancy (freelance).",
    image: "/images/togao.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    live: null,
    code: null,
  },
  {
    title: "Assured Aim FX Web App",
    description: "Full-stack web app for a forex company (freelance).",
    image: "/images/assured.png",
    tags: ["Next.js", "Express.js", "Node.js", "Redux Toolkit", "MongoDB"],
    live: null,
    code: null,
  },
];

export const TimeLineData = [
  {
    year: 2018,
    text: "Started freelancing as a full-stack developer on Upwork, Codementor and with direct clients",
  },
  { year: 2021, text: "Completed the EdConnect bootcamp; Backend Engineer at Eventis" },
  { year: 2022, text: "Full-Stack Web Developer at Ever Technologies, then Panthers Insights" },
  { year: 2023, text: "Full-Stack Engineer at Kampus360, leading the backend team" },
  { year: 2024, text: "Full-Stack Engineer at HEX Africa and Dormot; MSc Electrical & Electronic Engineering" },
  { year: 2025, text: "Senior Full-Stack Engineer at TSoul Consulting; began MSc Applied AI at Chester" },
  { year: 2026, text: "Completed MSc Applied Artificial Intelligence (awaiting results)" },
];
