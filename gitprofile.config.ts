// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'davidmarco13', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 5, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['davidmarco13/Option-Pricing-App', 'davidmarco13/Implied-vs-Realized-Volatility', 'davidmarco13/Understanding-Delta', 'davidmarco13/Jane-Street-Puzzles'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        
      ],
    },
  },
  seo: { title: 'Portfolio of David Marco', description: '', imageURL: '' },
  social: {
    linkedin: 'david-marco-sierra-a3a440235/',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'davidmarco1312@gmail.com',
  },
  resume: {
    fileUrl:
      'https://github.com/davidmarco13/CV-DavidMarco/blob/main/CV%20David%20Marco%20Sierra%2008%3A25.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Matlab',
    'Latex',
    'Excel',
    'R',
  ],
  experiences: [
    {
      company: 'GPTadvisor',
      position: 'Institutional Sales & Business Development ',
      from: 'June 2025',
      to: 'September 2025',
      companyLink: 'https://gptadvisor.com',
    },
    {
      company: 'GPTadvisor',
      position: 'Wealth Management AI Intern ',
      from: 'May 2024',
      to: 'September 2024',
      companyLink: 'https://gptadvisor.com',
    },
    {
      company: 'Crypto Sector',
      position: 'Financial Advisor ',
      from: '2021',
      to: 'September 2023',
      companyLink: '',
    },
    {
      company: 'UPV Investment Club',
      position: 'Member',
      from: 'May 2024',
      to: 'Present',
      companyLink: 'https://www.upvinvestment.es/',
    },
  ],
  certifications: [
    {
      name: 'Quantitative Finance & Algorithmic Trading',
      body: 'Stock Market, Bonds, Markowitz-Portfolio Theory, CAPM, Black-Scholes Model, Value at Risk and Monte-Carlo Simulations',
      year: 'September 2025',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'Universitat Politèncica València',
      degree: 'BSc Mathematics',
      from: '2023',
      to: '2028',
    },
    {
      institution: 'Universitat Politèncica València',
      degree: 'Bachelor Business Administration & Management',
      from: '2023',
      to: '2028',
    },
  ],
  publications: [
    {
      title: 'Implied vs. Realized Volatility',
      conferenceName: '',
      journalName: '',
      authors: 'David Marco Sierra',
      link: 'https://github.com/davidmarco13/Implied-vs-Realized-Volatility/blob/main/Implied_vs__Realized_Volatility.pdf',
      description:
        'When traders talk about volatility, they may mean different things. The key distinction is between realized and implied volatility. This study explores what sets them apart, why they matter in practice, and how their comparison can reveal mispriced options, trading opportunities, and risks.',
    },
    {
      title: 'Understanding Delta Sensitivity Hedging and Nonlinear Realities in Option Pricing',
      conferenceName: '',
      journalName: '',
      authors: 'David Marco Sierra',
      link: 'https://github.com/davidmarco13/Understanding-Delta/blob/main/Understanding_Delta__Sensitivity__Hedging__and_Nonlinear_Realities_in_Option_Pricing.pdf',
      description:
        'This project explores the concept of Delta, a key sensitivity measure in options pricing and risk management. It begins with a formal definition of Delta and an interpretation of its values across different levels of moneyness. The relationship between Delta and the Black Scholes model is examined to understand its theoretical foundation. A detailed analysis is presented on how Delta evolves with changes in the underlying asset price, followed by a discussion of Delta in the context of the Taylor expansion, offering intuition on how small price changes affect option value and how this insight supports dynamic hedging strategies. A practical case study on delta neutral hedging is developed to illustrate the implementation and effectiveness of hedging under real world conditions, including the role of time decay (Theta) and volatility. Theoretical explanations are supported by Python based visualizations and simulations, including Delta approximation graphs and the impact of other Greeks. This work aims to bridge the gap between mathematical theory and trading practice, highlighting Delta’s role in both pricing and hedging.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: '',

  enablePWA: true,
};

export default CONFIG;
