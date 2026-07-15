// ────────────────────────────────────────────────────────────
//  All site copy lives here. Edit this file to update content
//  without touching any component code.
// ────────────────────────────────────────────────────────────

export const profile = {
  name: 'Ahsan',
  role: 'MERN Stack Developer',
  tagline:
    'I build scalable full-stack web applications using React, Node.js, Express, MongoDB, and modern web technologies.',
  email: 'ahsanilahi865@gmail.com',
  phone: '+92 325-7402671',
  location: 'Lahore, Pakistan',
  github: 'https://www.github.com/AhsanIlahi0',
  linkedin: 'https://www.linkedin.com/in/ahsanilahi0/',
  resumeUrl: 'D:\\Ahsan ilahi\\work\\projects\\portfolio\\src\\data\\Resume.pdf',
}

export const about = `I'm a Computer Science graduate with a specialization in the MERN
stack (React, Node.js, Express, and MongoDB). My internship experience gave me a
practical look at how production applications are actually built: real APIs, real
bugs, real deadlines, and real code review. I'm drawn to problems that sit at the
intersection of backend architecture and frontend UI, the kind where a clean data
model on one end has to show up as a fast, intuitive interface on the other. I care
about writing code that the next developer often future me can read without a
walkthrough. Outside of assigned work, I spend time picking apart how larger
full-stack products are structured, then rebuilding small versions of the pieces
that interest me most. I'm currently looking for a team where I can keep doing
that, with more scale and more stakes.`

export const skills = [
  {
    id: 'frontend',
    label: 'Frontend',
    accent: 'copper',
    items: [
      { name: 'React', note: 'Component architecture, hooks, context' },
      { name: 'JavaScript', note: 'ES6+, async patterns' },
      { name: 'HTML5', note: 'Semantic, accessible markup' },
      { name: 'CSS3', note: 'Flexbox, grid, animations' },
      { name: 'Tailwind CSS', note: 'Utility-first styling' },
      { name: 'Responsive Design', note: 'Mobile-first layouts' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    accent: 'slate',
    items: [
      { name: 'Node.js', note: 'Event-driven runtime' },
      { name: 'Express.js', note: 'Routing & middleware' },
      { name: 'REST APIs', note: 'Resource-based design' },
      { name: 'Authentication', note: 'Sessions & token flows' },
      { name: 'JWT', note: 'Stateless auth tokens' },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    accent: 'moss',
    items: [
      { name: 'MongoDB', note: 'Document modelling' },
      { name: 'Mongoose', note: 'Schemas & validation' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    accent: 'bone',
    items: [
      { name: 'Git', note: 'Version control' },
      { name: 'GitHub', note: 'Collaboration & CI' },
      { name: 'Postman', note: 'API testing' },
      { name: 'VS Code', note: 'Daily driver editor' },
      { name: 'Linux', note: 'Shell-first workflow' },
      { name: 'npm', note: 'Package management' },
      {name: 'sqlserver', note: 'Database management'},
    ],
  },
]

export const experience = [
  {
    role: 'MERN Stack Developer',
    company: 'ViralSquare',
    duration: 'Jan 2026 – present',
    points: [
      'Built React interfaces for internal and client-facing products',
      'Developed REST APIs consumed by multiple frontend clients',
      'Integrated MongoDB for persistent application data',
      'Collaborated daily with senior developers in code review',
      'Diagnosed and fixed production bugs across the stack',
      'Worked in Git across feature branches and pull requests',
    ],
  },
]

export const projects = [
  {
    id: 'chatly',
    name: 'Chatly',
    tagline: 'Enterprise Real-Time Chat Application',
    description:
      'A real-time messaging platform built for teams, with secure auth, media sharing, and live presence.',
    tech: ['React', 'Node', 'Express', 'MongoDB', 'Socket.io', 'Cloudinary', 'JWT'],
    features: [
      'Real-time messaging',
      'Authentication',
      'Online users',
      'Image sharing',
      'Responsive UI',
      'Secure APIs',
    ],
    github: 'https://github.com/AhsanIlahi0/Chatly',
    demo: 'https://chat-ly.dev',
    featured: true,
  },
  {
    id: 'Moseeqify',
    name: 'Moseeqify',
    tagline: 'Personal music streaming app',
    description:
      'A full-stack app for discovering and streaming music, built to practice API integration and state management.',
    tech: ['React', 'Python', 'Flask', 'SQLServer', 'Flask-CORS', 'JWT'],
    features: [
      'Music discovery',
      'Playlist management',
      'User authentication',
      'Responsive dashboard',
    ],
    github: 'https://github.com/AhsanIlahi0/Moseeqify',
    featured: false,
  },
]

export const caseStudy = {
  project: 'chatly',
  problem:
    'Teams needed a lightweight chat tool that felt instant — most existing options were either too heavy to self-host or too slow for real conversation.',
  planning:
    'Scoped the core loop first: one-to-one messaging, presence, and auth. Media sharing and group chat were deliberately deferred to a second milestone.',
  architecture:
    'A React client talks to an Express API over REST for auth and history, while Socket.io handles the live event layer — messages, typing state, and presence — over a single persistent connection per user.',
  challenges:
    'Keeping message order consistent when a user reconnects after a dropped socket was the hardest part — messages sent while offline needed to arrive in the right place, not just at the end.',
  solutions:
    'Each message got a server-assigned timestamp and a per-conversation sequence number, so the client could always reconcile its local state against the server\'s source of truth on reconnect.',
  result:
    'A chat app that holds up under flaky connections, with sub-second delivery on a stable network and no duplicated or out-of-order messages after reconnect.',
}

export const education = {
  degree: 'BS Computer Science',
  university: 'Lahore garrison University',
  year: '2026',
  coursework: ['Data Structures & Algorithms','object oriented programming', 'Database Systems', 'Web Engineering', 'Operating Systems'],
}

export const achievements = [
  'Completed a 6-month MERN stack internship at ViralSquare',
  'Built and shipped a full-stack real-time chat application',
  'Designed and developed REST APIs used by multiple frontend clients',
  'Created responsive, mobile-first web applications from scratch',
]

export const services = [
  {
    title: 'Frontend Development',
    description: 'React interfaces that are fast, accessible, and easy to extend.',
  },
  {
    title: 'Backend Development',
    description: 'Express services with clear routing, middleware, and error handling.',
  },
  {
    title: 'API Development',
    description: 'REST APIs designed around resources, not endpoints of convenience.',
  },
  {
    title: 'Responsive Design',
    description: 'Layouts that hold up from a small phone to a wide monitor.',
  },
  {
    title: 'Database Design',
    description: 'MongoDB schemas modelled around how the data is actually queried.',
  },
]

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]
