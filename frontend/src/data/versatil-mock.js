// VERSATIL Mock Data - Company DNA-Powered Marketing Content Engine
// This file contains all the mock data for VERSATIL's RAG and Graph technology showcase

export const versatilData = {
  // Company information
  company: {
    name: "VERSATIL®",
    tagline: "Company DNA-Powered Marketing Engine",
    description: "Transform your company's unique DNA into compelling marketing content using advanced RAG and Graph technology.",
  },

  // Navigation items
  navigation: [
    { name: "Technology", href: "#technology" },
    { name: "Cases", href: "#cases" },
    { name: "Pricing", href: "#pricing" },
    { name: "Platform", href: "#platform" },
  ],

  // Hero section content
  hero: {
    subtitle: "DISCOVER. AMPLIFY. CONVERT.",
    title: "Company DNA-powered content that converts",
    description: "Turn your unique company DNA into compelling marketing narratives using RAG and Graph technology. From ideas to briefs to content - all automatically aligned with your brand essence.",
    primaryCTA: "Explore Technology",
    secondaryCTA: "See Cases",
  },

  // Trusted by companies (AI/Tech focused)
  trustedCompanies: [
    { name: "OpenAI", logo: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=120&h=60&fit=crop" },
    { name: "Anthropic", logo: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=120&h=60&fit=crop" },
    { name: "Midjourney", logo: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=120&h=60&fit=crop" },
    { name: "Perplexity", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=60&fit=crop" },
    { name: "Scale AI", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop" },
    { name: "Cohere", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop" },
    { name: "Hugging Face", logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=120&h=60&fit=crop" },
    { name: "Stability AI", logo: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=120&h=60&fit=crop" },
  ],

  // Company DNA Process - Ideas → Briefs → Content
  dnaProcess: {
    title: "Your Company DNA Engine",
    description: "Transform your unique company essence into high-converting marketing content through our intelligent pipeline.",
    stages: [
      {
        number: "01",
        title: "Ideas Extraction",
        description: "AI analyzes your company's core values, mission, voice, and unique selling propositions to extract your DNA patterns.",
        icon: "brain",
        dnaElements: ["Brand Voice", "Core Values", "USP Patterns", "Tone Analysis"],
      },
      {
        number: "02", 
        title: "Brief Generation",
        description: "RAG technology creates contextually-aware content briefs that align perfectly with your company DNA and campaign objectives.",
        icon: "document",
        dnaElements: ["Content Strategy", "Audience Targeting", "Message Framework", "Brand Guidelines"],
      },
      {
        number: "03",
        title: "Content Creation",
        description: "Graph-powered content generation ensures every piece maintains your brand essence while optimizing for conversion and engagement.",
        icon: "edit",
        dnaElements: ["Brand-Aligned Copy", "Visual Guidelines", "CTA Optimization", "Multi-Channel Adaptation"],
      },
    ],
  },

  // RAG + Graph Technology Features
  technology: {
    subtitle: "ADVANCED TECHNOLOGY STACK",
    title: "RAG meets Graph Intelligence",
    description: "Our proprietary combination of Retrieval Augmented Generation and Graph Neural Networks creates content that's both intelligent and authentically yours.",
    features: [
      {
        title: "Company DNA Mapping",
        subtitle: "Neural Analysis",
        description: "Deep learning algorithms analyze your brand's digital footprint to create comprehensive DNA profiles",
        icon: "dna",
        color: "purple",
        technologies: ["NLP Processing", "Brand Voice Analysis", "Semantic Understanding", "Pattern Recognition"]
      },
      {
        title: "RAG Content Engine", 
        subtitle: "Intelligent Retrieval",
        description: "Context-aware content generation using your company's knowledge base and market intelligence",
        icon: "database",
        color: "blue", 
        technologies: ["Vector Embeddings", "Semantic Search", "Context Injection", "Real-time Updates"]
      },
      {
        title: "Graph Neural Networks",
        subtitle: "Relationship Modeling",
        description: "Complex relationship mapping between brand elements, audience segments, and content performance",
        icon: "network",
        color: "green",
        technologies: ["Node Embeddings", "Link Prediction", "Graph Attention", "Multi-hop Reasoning"]
      },
      {
        title: "Content Optimization",
        subtitle: "Performance Driven",
        description: "Continuous optimization based on engagement metrics and conversion tracking",
        icon: "trending-up",
        color: "orange",
        technologies: ["A/B Testing", "Performance Analytics", "Conversion Tracking", "ROI Optimization"]
      },
    ],
  },

  // Marketing Metrics (VERSATIL specific)
  marketingMetrics: {
    title: "Marketing Performance Engine",
    description: "Real-time insights into your content marketing performance powered by VERSATIL's intelligence.",
    metrics: [
      {
        label: "Brand Consistency Score",
        value: 98,
        unit: "%",
        icon: "shield-check",
        color: "purple",
        description: "DNA alignment across all content"
      },
      {
        label: "Content Velocity", 
        value: 247,
        unit: "/week",
        icon: "zap",
        color: "blue",
        description: "Pieces generated per week"
      },
      {
        label: "Engagement Lift",
        value: 340,
        unit: "%",
        icon: "trending-up", 
        color: "green",
        description: "Improvement over baseline"
      },
      {
        label: "Conversion Rate",
        value: 12.4,
        unit: "%",
        icon: "target",
        color: "orange",
        description: "Average conversion rate"
      },
      {
        label: "Time to Market",
        value: 2.1,
        unit: "hours",
        icon: "clock",
        color: "red",
        description: "From brief to published"
      },
    ],
  },

  // Content Pipeline Workflow
  contentPipeline: [
    {
      id: 'dna-extraction',
      title: 'Company DNA Extraction',
      agent: 'DNA Analyzer',
      icon: 'brain',
      color: 'purple',
      processes: ['Brand Voice Analysis', 'Value Extraction', 'Tone Mapping', 'USP Identification'],
      duration: 3.5,
      priority: 'high',
      outputs: ['DNA Profile', 'Brand Guidelines', 'Voice Patterns']
    },
    {
      id: 'market-intelligence',
      title: 'Market Intelligence RAG',
      agent: 'Intelligence Engine', 
      icon: 'database',
      color: 'blue',
      processes: ['Competitor Analysis', 'Trend Detection', 'Audience Insights', 'Context Building'],
      duration: 2.8,
      priority: 'high',
      outputs: ['Market Context', 'Competitive Landscape', 'Opportunity Map']
    },
    {
      id: 'brief-generation',
      title: 'Smart Brief Generation',
      agent: 'Brief AI',
      icon: 'file-text',
      color: 'green',
      processes: ['Objective Setting', 'Audience Targeting', 'Message Framework', 'Channel Strategy'],
      duration: 1.9,
      priority: 'high',
      outputs: ['Content Brief', 'Creative Direction', 'Success Metrics']
    },
    {
      id: 'content-creation',
      title: 'Graph-Powered Content',
      agent: 'Content Graph',
      icon: 'edit-3',
      color: 'orange',
      processes: ['Copy Generation', 'Visual Direction', 'CTA Optimization', 'Multi-format Adaptation'],
      duration: 4.2,
      priority: 'medium',
      outputs: ['Marketing Copy', 'Visual Assets', 'Campaign Materials']
    },
    {
      id: 'quality-assurance',
      title: 'DNA Consistency Check',
      agent: 'Quality AI',
      icon: 'shield-check',
      color: 'indigo',
      processes: ['Brand Alignment', 'Voice Consistency', 'Fact Checking', 'Compliance Review'],
      duration: 1.7,
      priority: 'high',
      outputs: ['Quality Score', 'Alignment Report', 'Compliance Cert']
    },
    {
      id: 'performance-optimization',
      title: 'Performance Optimization',
      agent: 'Optimization Engine',
      icon: 'trending-up',
      color: 'pink',
      processes: ['A/B Testing Setup', 'Metrics Tracking', 'Performance Analysis', 'Iteration Planning'],
      duration: 2.3,
      priority: 'medium',
      outputs: ['Test Variants', 'Analytics Setup', 'Optimization Plan']
    }
  ],

  // Testimonials (from AI/tech companies)
  testimonials: [
    {
      quote: "VERSATIL's Company DNA technology helped us maintain brand consistency while scaling our content 10x. The RAG system understands our technical voice perfectly.",
      author: "Sarah Chen",
      title: "VP of Marketing · AI Startup",
    },
    {
      quote: "The Graph Neural Networks capture relationships we never knew existed between our brand elements and audience engagement. Revolutionary approach to content marketing.",
      author: "Marcus Rodriguez", 
      title: "CMO · TechScale",
    },
    {
      quote: "From idea to published content in under 3 hours, all while maintaining perfect brand alignment. VERSATIL transformed our marketing operations.",
      author: "Emily Watson",
      title: "Head of Content · InnovateAI",
    },
    {
      quote: "The DNA extraction identified brand patterns we'd never articulated but felt in our gut. Now every piece of content feels authentically us.",
      author: "David Kim",
      title: "Founder · Neural Networks Inc",
    },
    {
      quote: "VERSATIL's technology doesn't just generate content - it understands our company's soul and translates it into marketing that actually converts.",
      author: "Lisa Thompson",
      title: "Marketing Director · DeepTech Solutions",
    },
  ],

  // FAQ items (VERSATIL specific)
  faq: [
    {
      question: "How does Company DNA extraction work?",
      answer: "Our AI analyzes your company's digital presence, communications, values, and unique characteristics to create a comprehensive DNA profile. This includes brand voice patterns, core values, messaging frameworks, and unique selling propositions that make your company distinctive."
    },
    {
      question: "What makes RAG technology different for content marketing?",
      answer: "Our RAG (Retrieval Augmented Generation) system combines your company's knowledge base with real-time market intelligence. Unlike generic AI content, our system retrieves relevant context about your brand, competitors, and audience to generate content that's both intelligent and authentically yours."
    },
    {
      question: "How do Graph Neural Networks improve content quality?",
      answer: "Graph Neural Networks model complex relationships between brand elements, audience segments, content types, and performance metrics. This allows us to optimize content not just for individual pieces, but for how they work together as part of your overall marketing ecosystem."
    },
    {
      question: "How fast can you generate content briefs?",
      answer: "Content briefs are typically generated within 30-60 minutes after receiving your campaign objectives. The RAG system analyzes your DNA profile, current market context, and campaign goals to create comprehensive, actionable briefs."
    },
    {
      question: "Can the system maintain brand consistency across different content types?",
      answer: "Yes, that's the core strength of our Company DNA technology. Whether generating blog posts, social media content, email campaigns, or video scripts, the system ensures every piece maintains your unique brand voice and messaging framework."
    },
    {
      question: "How do you measure content performance and optimization?",
      answer: "Our system tracks engagement, conversion rates, brand sentiment, and consistency scores. The Graph Neural Network learns from this performance data to continuously improve content generation and better predict what will resonate with your audience."
    },
    {
      question: "What if the generated content doesn't match our brand voice?",
      answer: "The DNA extraction process is iterative and improves with feedback. We also provide fine-tuning controls to adjust voice parameters, and our quality assurance system checks every piece for brand alignment before delivery."
    }
  ],

  // Technology showcase for hero animation
  technologyShowcase: [
    {
      id: 1,
      title: "DNA Mapping",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop",
      tech: "Neural Analysis"
    },
    {
      id: 2, 
      title: "RAG Engine",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=300&h=200&fit=crop",
      tech: "Retrieval AI"
    },
    {
      id: 3,
      title: "Graph Networks",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=300&h=200&fit=crop", 
      tech: "Relationship Modeling"
    },
    {
      id: 4,
      title: "Content Generation",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=300&h=200&fit=crop",
      tech: "Brand-Aligned AI"
    },
    {
      id: 5,
      title: "Performance Analytics",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop",
      tech: "Optimization Engine"
    },
  ],
};

export default versatilData;