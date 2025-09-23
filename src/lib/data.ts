import { Code, Bot, Rocket, BrainCircuit } from "lucide-react";

export const services = [
  {
    slug: "saas",
    title: "SAAS",
    description: "Scalable and robust Software as a Service solutions to grow your business.",
    icon: Rocket,
    details: [
      {
        title: "How It Works",
        description: "Imagine a powerful software tool you can access from anywhere, anytime, without any installation. That's SAAS. We give you a ready-to-use platform that runs in the cloud.",
        points: [
          "No Installation Hassles: Access your software from any device with an internet connection.",
          "Automatic Updates: Always have the latest features and security without lifting a finger.",
          "Subscription-Based: Predictable monthly or annual costs instead of a large upfront investment."
        ]
      },
      {
        title: "How We Create It",
        description: "We architect and build your solution from the ground up, focusing on scalability, security, and user experience.",
        points: [
          "Robust Architecture: We design a multi-tenant architecture that's built to scale with your user base.",
          "Cloud Deployment: We leverage top-tier cloud providers to ensure high availability and performance.",
          "Continuous Maintenance: We handle all updates, security patches, and server management."
        ]
      },
      {
        title: "How It's Useful For You",
        description: "Our SAAS solutions empower you to focus on your core business, not on software management.",
        points: [
          "Faster Time-to-Market: Launch your product or service without a lengthy development cycle.",
          "Lower Total Cost of Ownership: Avoid the high costs of custom development and infrastructure.",
          "Focus on Growth: Let us manage the technology while you focus on acquiring and serving customers."
        ]
      }
    ]
  },
  {
    slug: "ai-automation",
    title: "AI Automation",
    description: "Leverage artificial intelligence to automate and optimize your business processes.",
    icon: Bot,
    details: [
      {
        title: "How It Works",
        description: "We identify repetitive, time-consuming tasks within your workflow and build intelligent bots to handle them automatically, 24/7.",
        points: [
          "Process Analysis: We map out your current workflows to pinpoint the best opportunities for automation.",
          "Task Execution: Our AI agents perform tasks like data entry, report generation, and customer follow-ups.",
          "Seamless Integration: The automation works within your existing software ecosystem."
        ]
      },
      {
        title: "How We Create It",
        description: "We build and train custom AI models that understand and execute your specific business processes with precision.",
        points: [
          "Custom Model Training: We use your data to train AI models that understand your unique operations.",
          "Workflow Integration: We deploy these models as 'digital workers' that integrate with your CRM, ERP, and other tools.",
          "Performance Monitoring: We continuously monitor and refine the automation to ensure optimal performance."
        ]
      },
      {
        title: "How It's Useful For You",
        description: "AI Automation frees up your most valuable asset—your people—to focus on what they do best.",
        points: [
          "Increase Productivity: Let your team focus on strategic, high-impact activities instead of manual tasks.",
          "Reduce Human Error: Ensure perfect accuracy on repetitive tasks, improving data quality and reliability.",
          "Scale Operations: Handle a significant increase in workload without a corresponding increase in headcount."
        ]
      }
    ]
  },
  {
    slug: "ai-agency",
    title: "AI Agency",
    description: "A dedicated team of AI experts to act as your strategic partner for innovation.",
    icon: BrainCircuit,
    details: [
       {
        title: "How It Works",
        description: "Think of us as your on-demand, in-house AI department. We partner with you to embed artificial intelligence into your business strategy.",
        points: [
          "Strategic Partnership: We work with your leadership to align AI initiatives with your core business goals.",
          "End-to-End Project Ownership: From concept to deployment and beyond, we manage the entire AI lifecycle.",
          "Expert Consultation: We provide ongoing guidance to help you navigate the evolving AI landscape."
        ]
      },
      {
        title: "How We Create It",
        description: "Our team designs, builds, and deploys bespoke AI systems tailored to solve your most complex challenges.",
        points: [
          "Solution Design: We architect custom AI solutions, from predictive analytics engines to natural language models.",
          "Data Science & Engineering: Our experts handle data preparation, model development, and system integration.",
          "Ethical AI Framework: We build solutions that are fair, transparent, and responsible."
        ]
      },
      {
        title: "How It's Useful For You",
        description: "Gain a decisive competitive advantage by leveraging the transformative power of artificial intelligence.",
        points: [
          "Unlock Innovation: Access world-class AI expertise without the cost and complexity of building an in-house team.",
          "Data-Driven Decisions: Make smarter, faster decisions based on predictive insights from your data.",
          "Future-Proof Your Business: Create new products, optimize operations, and stay ahead of the curve."
        ]
      }
    ]
  },
  {
    slug: "personal-software",
    title: "Personal Software",
    description: "Custom software solutions tailored to meet your unique personal or business needs.",
    icon: Code,
    details: [
       {
        title: "How It Works",
        description: "Off-the-shelf software doesn't fit your needs? We build a bespoke application from the ground up, designed exclusively for your workflow.",
        points: [
          "In-Depth Discovery: We start with a deep dive into your goals, processes, and vision for the software.",
          "Iterative Development: You'll be involved at every step as we design, build, and refine the application.",
          "Complete Ownership: The final product, including the source code, is 100% yours."
        ]
      },
      {
        title: "How We Create It",
        description: "Our developers act as your personal software artisans, meticulously crafting an application that is both powerful and a joy to use.",
        points: [
          "User-Centric Design (UI/UX): We design an interface that is intuitive and tailored to your specific tasks.",
          "Clean & Scalable Code: We write high-quality code that is easy to maintain and can evolve with your needs.",
          "Rigorous Testing: We ensure your application is reliable, secure, and performs flawlessly."
        ]
      },
      {
        title: "How It's Useful For You",
        description: "Stop trying to fit a square peg in a round hole. Get a tool that is a perfect extension of your own process.",
        points: [
          "Solve Your Exact Problem: Get a solution that does exactly what you need, without bloated features.",
          "Gain a Unique Asset: Own a valuable piece of intellectual property that can grow with your business.",
          "Maximize Productivity: Eliminate workflow friction with software that works the way you do."
        ]
      }
    ]
  },
];

export const testimonials = [
  {
    quote: "The team transformed our vision into a stunning reality. Their creativity and technical expertise are unmatched.",
    name: "Alex Chen",
    company: "CEO of Nova Dynamics",
    image: "testimonial-1"
  },
  {
    quote: "Working with them has been a game-changer for our brand. The 3D animations they produced are simply breathtaking.",
    name: "Samantha Reed",
    company: "Marketing Director at Starlight Inc.",
    image: "testimonial-2"
  },
  {
    quote: "Their UI/UX design process is incredibly thorough. They took the time to understand our users and delivered a product that exceeded all expectations.",
    name: "Michael Brandt",
    company: "Founder of Orbit SaaS",
    image: "testimonial-3"
  }
];

export const pricingPlans = [
  {
    name: "Starter",
    price: "₹1999",
    description: "For individuals and small teams getting started.",
    features: ["2 Core Services", "Basic 3D Asset", "2 Rounds of Revisions", "Email Support"],
    icon: Code,
    popular: false,
  },
  {
    name: "Pro",
    price: "₹2499",
    description: "For growing businesses that need more power.",
    features: ["2 Core Services", "Complex 3D Animation (15s)", "5 Rounds of Revisions", "Priority Email Support", "Source Files"],
    icon: Rocket,
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with custom needs.",
    features: ["All Core Services", "Full-scale 3D Production", "Unlimited Revisions", "Dedicated Project Manager", "24/7 Support"],
    icon: BrainCircuit,
    popular: false,
  }
];

export const faqItems = [
  {
    question: "What is the typical timeline for a project?",
    answer: "Project timelines vary depending on the scope and complexity. A simple website might take 4-6 weeks, while a complex 3D animation project could take several months. We provide a detailed timeline after our initial consultation."
  },
  {
    question: "How do you handle project revisions?",
    answer: "Each of our pricing plans includes a specific number of revision rounds. We work closely with you during the design and development process to gather feedback and make adjustments to ensure the final product meets your expectations."
  },
  {
    question: "Do you offer support after the project is completed?",
    answer: "Yes, we offer various support and maintenance packages to ensure your website or application continues to run smoothly after launch. Our Enterprise plan includes 24/7 support."
  },
  {
    question: "Can you work with our existing brand guidelines?",
    answer: "Absolutely. We can adapt our design process to work with your existing brand identity, or we can help you develop a new one from scratch as part of our UI/UX design service."
  }
];
