export const profile = {
  name: 'Adwaith C',
  title: 'Senior Flutter Developer',
  summary:
    'Senior Mobile App Developer with 4+ years of experience building cross-platform applications in the Flutter ecosystem, covering the full development lifecycle from architecture to App Store and Play Store deployment. Delivered 10+ production apps across healthcare, IoT safety, e-commerce, matrimony, and real-time betting/esports platforms.',
  location: 'Bangalore, India',
  phone: '9746543460',
  email: 'adwaithdeva@gmail.com',
  linkedin: 'https://linkedin.com/in/adwaithasok',
  portfolio: 'https://yourportfolio.com',
  languages: ['English', 'Malayalam', 'Tamil'],
  education: 'Diploma in Computer Engineering — Kerala Government Polytechnic College, Kozhikode (2018)',
  certifications: [
    'Android Development — KELTRON Advanced Studies',
    'Android Training — RISS Technologies',
  ],
}

export const experience = [
  {
    role: 'Software Developer',
    company: 'Indo-Sakura Software Pvt Ltd.',
    period: 'Feb 2025 – Present',
    location: 'Bangalore, India',
    subProjects: [
      {
        name: 'Theroheal — Healthcare & E-commerce Platform',
        points: [
          'Architected a dual-app ecosystem (Doctor App & User App) with a shared design system for brand and UX consistency.',
          'Built an e-commerce management system with real-time stock updates, dynamic category filtering, and automated delivery charge calculations.',
        ],
      },
      {
        name: 'MySafety24*7 — IoT & Public Safety Ecosystem',
        points: [
          'Architected a synchronized Flutter Mobile App and Flutter Web Dashboard sharing a single codebase.',
          'Engineered a privacy-first QR-based incident reporting system using WebSockets for accidents, lost items, and parking issues.',
          'Developed a multi-incident reporting engine handling medical emergencies, road accidents, and delivery issues.',
          'Integrated a high-priority SOS alert system that bypasses standard notification delays.',
        ],
      },
      {
        name: 'Face-ING App',
        points: [
          'Integrated the Binah.ai SDK to enable real-time health metric extraction (blood pressure, heart rate) from smartphone camera scans.',
        ],
      },
      {
        name: 'High-Performance Betting & Esports Platform',
        points: [
          'Engineered a high-concurrency platform (similar to Dream11) using WebSockets for sub-second latency on live score updates and odds fluctuations.',
        ],
      },
    ],
  },
  {
    role: 'Flutter Developer',
    company: 'Superior Codelabs',
    period: 'Dec 2022 – Feb 2025',
    location: 'Bangalore, Karnataka, India',
    subProjects: [
      {
        name: 'Matrimony Platform — Lead Engineer',
        points: [
          'Orchestrated end-to-end architecture for a high-traffic matrimony suite, synchronizing a B2C user app with a B2B broker management tool via a unified API gateway.',
          'Developed and evangelized a custom design system with modular components for visual consistency.',
          'Engineered a real-time chat system using WebSockets and Firebase with end-to-end encryption (E2EE).',
        ],
      },
      {
        name: 'Koala Pet E-commerce',
        points: [
          'Built a high-performance shopping experience with Google Maps Platform integration for store-locator features.',
          'Implemented social authentication (OAuth) for Apple, Google, and Facebook logins.',
        ],
      },
      {
        name: 'FX Managers — Performance Optimization',
        points: [
          'Revitalized a financial tracking app using lazy loading and pagination for large market datasets.',
          'Improved user retention by 20% and maintained smooth 60 FPS rendering.',
        ],
      },
      {
        name: 'Platform-wide Contributions',
        points: [
          'Standardized Provider and Riverpod state management patterns across projects.',
          'Managed full release cycles including code signing and deployment to Google Play Store and Apple App Store (TestFlight).',
        ],
      },
    ],
  },
  {
    role: 'Flutter Developer',
    company: 'Stackatech Info Labs Pvt Ltd',
    period: 'Dec 2021 – Nov 2022',
    location: 'Kozhikode, Kerala, India',
    subProjects: [
      {
        name: 'Duka Affiliate App',
        points: ['Developed a shopping application focused on responsive UI and REST API integration.'],
      },
    ],
  },
]

export const skillGroups = [
  {
    category: 'Languages & Frameworks',
    icon: '⚡',
    skills: ['Dart', 'Flutter (Mobile & Web)', 'Kotlin (basic)', 'Swift (basic)', 'Python (Flask)'],
  },
  {
    category: 'State Management',
    icon: '🔄',
    skills: ['Riverpod', 'Provider', 'GetX', 'Bloc/Cubit'],
  },
  {
    category: 'Architecture & APIs',
    icon: '🏗️',
    skills: ['MVVM', 'Clean Architecture', 'Microservices', 'RESTful APIs', 'GraphQL', 'WebSockets'],
  },
  {
    category: 'Testing & Quality',
    icon: '🧪',
    skills: ['Unit Testing', 'Widget Testing', 'Integration Testing', 'Mockito', 'Firebase Crashlytics', 'Sentry'],
  },
  {
    category: 'Native & SDK',
    icon: '📱',
    skills: ['Android SDK', 'iOS Development', 'Native Channel Integration', 'Custom Package Development (pub.dev)'],
  },
  {
    category: 'Backend & Cloud',
    icon: '☁️',
    skills: ['Firebase (FCM, Firestore, Auth, Realtime DB)', 'Google Cloud Platform', 'Push Notifications', 'Deep Linking'],
  },
  {
    category: 'Payments',
    icon: '💳',
    skills: ['Razorpay', 'PayPal', 'Stripe', 'Sadad'],
  },
  {
    category: 'DevOps & Tools',
    icon: '🛠️',
    skills: ['Git', 'GitHub', 'Bitbucket', 'CI/CD', 'Codemagic', 'Fastlane', 'Docker', 'Postman', 'Jira', 'Figma', 'Shorebird'],
  },
  {
    category: 'AI-assisted Dev',
    icon: '🤖',
    skills: ['GitHub Copilot', 'Cursor AI', 'ChatGPT', 'Gemini', 'MCP'],
  },
]

export const projects = [
  {
    title: 'Theroheal',
    company: 'Indo-Sakura Software',
    tags: ['Healthcare', 'E-commerce', 'Flutter'],
    summary: 'Dual-app healthcare & e-commerce ecosystem with real-time stock updates.',
    details: [
      'Architected a dual-app ecosystem (Doctor App & User App) with a shared design system.',
      'Built an e-commerce management system with real-time stock updates and dynamic category filtering.',
      'Automated delivery charge calculations based on location and order weight.',
      'Integrated appointment booking and health record management for the Doctor App.',
    ],
    tech: ['Flutter', 'Firebase', 'WebSockets', 'Riverpod', 'REST APIs'],
  },
  {
    title: 'MySafety24*7',
    company: 'Indo-Sakura Software',
    tags: ['IoT', 'Public Safety', 'Flutter Web'],
    summary: 'Privacy-first public safety ecosystem with QR-based incident reporting and SOS alerts.',
    details: [
      'Synchronized Flutter Mobile App and Flutter Web Dashboard sharing a single codebase.',
      'Engineered a privacy-first QR-based incident reporting system using WebSockets.',
      'Multi-incident engine handling medical emergencies, road accidents, and delivery issues.',
      'High-priority SOS alert system that bypasses standard notification delays.',
      'Real-time IoT device monitoring dashboard on Flutter Web.',
    ],
    tech: ['Flutter', 'Flutter Web', 'WebSockets', 'Firebase FCM', 'QR Integration'],
  },
  {
    title: 'Face-ING App',
    company: 'Indo-Sakura Software',
    tags: ['Health Tech', 'AI/ML', 'SDK Integration'],
    summary: 'Real-time health metric extraction via smartphone camera using Binah.ai SDK.',
    details: [
      'Integrated the Binah.ai SDK for real-time health metric extraction from camera scans.',
      'Metrics include blood pressure, heart rate, SpO2, and stress levels.',
      'Built a smooth camera preview UI with live metric overlays.',
      'Implemented result history and trend visualization.',
    ],
    tech: ['Flutter', 'Binah.ai SDK', 'Native Channels', 'Firebase'],
  },
  {
    title: 'Betting & Esports Platform',
    company: 'Indo-Sakura Software',
    tags: ['Real-time', 'WebSockets', 'High Concurrency'],
    summary: 'Dream11-style platform with sub-second live score updates and odds fluctuations.',
    details: [
      'Engineered a high-concurrency platform using WebSockets for sub-second latency.',
      'Live score updates and real-time odds fluctuation engine.',
      'Team creation and contest management with dynamic scoring.',
      'Wallet integration with Razorpay for deposits and withdrawals.',
    ],
    tech: ['Flutter', 'WebSockets', 'Razorpay', 'Riverpod', 'REST APIs'],
  },
  {
    title: 'Matrimony Platform',
    company: 'Superior Codelabs',
    tags: ['B2C', 'B2B', 'Real-time Chat'],
    summary: 'High-traffic matrimony suite with B2C user app and B2B broker management tool.',
    details: [
      'Orchestrated end-to-end architecture synchronizing B2C and B2B apps via a unified API gateway.',
      'Custom design system with modular components for visual consistency.',
      'Real-time chat with WebSockets and Firebase, implementing end-to-end encryption (E2EE).',
      'Advanced match filtering, profile verification, and horoscope matching.',
    ],
    tech: ['Flutter', 'WebSockets', 'Firebase', 'E2EE', 'Provider'],
  },
  {
    title: 'Koala Pet E-commerce',
    company: 'Superior Codelabs',
    tags: ['E-commerce', 'Maps', 'OAuth'],
    summary: 'High-performance pet shopping app with store locator and social login.',
    details: [
      'Built a high-performance shopping experience with Google Maps Platform for store-locator.',
      'Social authentication (OAuth) for Apple, Google, and Facebook logins.',
      'Product catalog with advanced filtering, wishlist, and cart management.',
      'Order tracking with real-time delivery status updates.',
    ],
    tech: ['Flutter', 'Google Maps', 'OAuth', 'Firebase', 'REST APIs'],
  },
  {
    title: 'FX Managers',
    company: 'Superior Codelabs',
    tags: ['FinTech', 'Performance', 'Optimization'],
    summary: 'Financial tracking app optimized for large datasets with 60 FPS rendering.',
    details: [
      'Revitalized a financial tracking app using lazy loading and pagination for large market datasets.',
      'Improved user retention by 20% through performance optimization.',
      'Maintained smooth 60 FPS rendering across all device tiers.',
      'Standardized Riverpod state management for clean architecture.',
    ],
    tech: ['Flutter', 'Riverpod', 'REST APIs', 'Pagination', 'Lazy Loading'],
  },
  {
    title: 'Duka Affiliate App',
    company: 'Stackatech Info Labs',
    tags: ['E-commerce', 'Affiliate', 'REST API'],
    summary: 'Shopping affiliate app with responsive UI and REST API integration.',
    details: [
      'Developed a shopping application focused on responsive UI across device sizes.',
      'REST API integration for product catalog, affiliate tracking, and commissions.',
      'Deep linking support for affiliate referral campaigns.',
    ],
    tech: ['Flutter', 'REST APIs', 'Deep Linking'],
  },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const heroStats = [
  { label: 'Years Experience', value: '4+' },
  { label: 'Production Apps', value: '10+' },
  { label: 'Core Focus', value: 'Flutter' },
]
