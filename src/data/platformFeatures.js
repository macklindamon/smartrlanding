export const platformFeatures = [
  {
    id: 1,
    slug: 'smartrconnect',
    title: 'SmartrConnect',
    subtitle: 'Direct access to top lenders',
    description: 'Connect directly with leading lenders through our integrated platform, streamlining your mortgage applications and reducing processing times.',
    heroImage: '/img/product-shot.png',
    features: [
      'Direct lender integration',
      'Real-time application status',
      'Automated document sharing',
      'Streamlined approval process'
    ],
    benefits: [
      {
        title: 'Faster Processing',
        description: 'Reduce application processing time by up to 50% with direct lender connections'
      },
      {
        title: 'Better Rates',
        description: 'Access to exclusive rates and products not available through traditional channels'
      },
      {
        title: 'Complete Transparency',
        description: 'Real-time updates on application status and requirements'
      }
    ]
  },
  {
    id: 2,
    slug: 'smartflow',
    title: 'Smartflow',
    subtitle: 'Automating workflows for faster cases',
    description: 'Intelligent workflow automation that handles routine tasks, allowing you to focus on what matters most - your clients.',
    heroImage: '/img/saas-dashboard.png',
    features: [
      'Automated task management',
      'Intelligent workflow routing',
      'Document processing automation',
      'Progress tracking and reporting'
    ],
    benefits: [
      {
        title: 'Increased Efficiency',
        description: 'Automate up to 70% of routine administrative tasks'
      },
      {
        title: 'Reduced Errors',
        description: 'Eliminate manual data entry errors with intelligent automation'
      },
      {
        title: 'Better Client Experience',
        description: 'Faster turnaround times and more consistent service delivery'
      }
    ]
  },
  {
    id: 3,
    slug: 'homebuyer',
    title: 'HomeBuyer',
    subtitle: 'Fact Find app for clients',
    description: 'Empower your clients with a user-friendly app that guides them through the mortgage process, collecting all necessary information efficiently.',
    heroImage: '/img/placeholder.png',
    features: [
      'Interactive fact-finding forms',
      'Document upload and management',
      'Progress tracking for clients',
      'Automated data validation'
    ],
    benefits: [
      {
        title: 'Client Empowerment',
        description: 'Give clients control over their mortgage journey with self-service tools'
      },
      {
        title: 'Complete Applications',
        description: 'Ensure all necessary information is collected before submission'
      },
      {
        title: 'Reduced Back-and-Forth',
        description: 'Minimize follow-up calls with comprehensive data collection'
      }
    ]
  },
  {
    id: 4,
    slug: 'smartrretain',
    title: 'SmartrRetain',
    subtitle: 'Automated touchpoints with clients',
    description: 'Build lasting relationships with automated client communication that keeps you top-of-mind throughout their mortgage journey and beyond.',
    heroImage: '/img/product-shot.png',
    features: [
      'Automated email campaigns',
      'Personalized client communications',
      'Milestone-based messaging',
      'Performance analytics and reporting'
    ],
    benefits: [
      {
        title: 'Improved Retention',
        description: 'Increase client retention rates by up to 40% with consistent communication'
      },
      {
        title: 'More Referrals',
        description: 'Stay top-of-mind to generate more referral opportunities'
      },
      {
        title: 'Automated Nurturing',
        description: 'Maintain relationships without manual effort'
      }
    ]
  },
  {
    id: 5,
    slug: 'introducer-portal',
    title: 'Introducer Portal',
    subtitle: 'Streamlined lead capture and conversion',
    description: 'A comprehensive portal for introducers to submit leads, track progress, and manage their pipeline efficiently.',
    heroImage: '/img/saas-dashboard.png',
    features: [
      'Lead submission forms',
      'Progress tracking dashboard',
      'Commission management',
      'Performance reporting'
    ],
    benefits: [
      {
        title: 'Faster Lead Processing',
        description: 'Process introducer leads 3x faster with streamlined workflows'
      },
      {
        title: 'Better Relationships',
        description: 'Strengthen partnerships with transparency and efficient communication'
      },
      {
        title: 'Increased Conversions',
        description: 'Convert more leads with optimized processes and follow-up'
      }
    ]
  },
  {
    id: 6,
    slug: 'protection',
    title: 'Protection',
    subtitle: 'Integrated cover within every case',
    description: 'Seamlessly integrate protection products into your mortgage process, ensuring comprehensive cover for your clients.',
    heroImage: '/img/placeholder.png',
    features: [
      'Integrated protection quotes',
      'Automated needs analysis',
      'Product comparison tools',
      'Seamless application process'
    ],
    benefits: [
      {
        title: 'Additional Revenue',
        description: 'Generate additional income with integrated protection sales'
      },
      {
        title: 'Complete Service',
        description: 'Provide comprehensive financial solutions to your clients'
      },
      {
        title: 'Simplified Process',
        description: 'Handle mortgages and protection in one integrated workflow'
      }
    ]
  },
  {
    id: 7,
    slug: 'admin',
    title: 'Admin',
    subtitle: 'Simplify compliance and daily operations',
    description: 'Comprehensive administrative tools that handle compliance, reporting, and day-to-day operational tasks automatically.',
    heroImage: '/img/saas-dashboard.png',
    features: [
      'Compliance monitoring',
      'Automated reporting',
      'Document management',
      'Audit trail maintenance'
    ],
    benefits: [
      {
        title: 'Simplified Compliance',
        description: 'Ensure regulatory compliance with automated monitoring and reporting'
      },
      {
        title: 'Reduced Admin Time',
        description: 'Cut administrative tasks by up to 60% with intelligent automation'
      },
      {
        title: 'Better Organization',
        description: 'Keep all documents and records organized and easily accessible'
      }
    ]
  },
  {
    id: 8,
    slug: 'sourcing',
    title: 'Sourcing',
    subtitle: 'Integrated systems for sourcing',
    description: 'Advanced sourcing tools that help you find the best mortgage products for your clients quickly and efficiently.',
    heroImage: '/img/product-shot.png',
    features: [
      'Intelligent product matching',
      'Real-time rate comparison',
      'Automated sourcing reports',
      'Lender criteria analysis'
    ],
    benefits: [
      {
        title: 'Better Outcomes',
        description: 'Find the best mortgage products for each client with intelligent matching'
      },
      {
        title: 'Faster Sourcing',
        description: 'Reduce sourcing time by up to 80% with automated tools'
      },
      {
        title: 'Increased Accuracy',
        description: 'Minimize declined applications with better lender matching'
      }
    ]
  }
];

export const getPlatformFeatureBySlug = (slug) => {
  return platformFeatures.find(feature => feature.slug === slug);
};