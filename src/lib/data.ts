import { Code, Bot, PenTool, LifeBuoy, Zap, DollarSign, Award, TestTube, Rocket, BrainCircuit } from "lucide-react";

export const services = [
  {
    slug: "saas",
    title: "SAAS",
    description: "Scalable and robust Software as a Service solutions to grow your business.",
    icon: Rocket,
    details: "Our SAAS (Software as a Service) solution is designed to provide you with a ready-to-use, scalable, and powerful platform. We handle all the complexities of development, hosting, and maintenance, so you can focus on your business. We build our SAAS products using modern, robust technologies, ensuring high performance and security. This service is incredibly useful for you because it gives you access to powerful software without the large upfront investment in custom development or the hassle of managing infrastructure."
  },
  {
    slug: "ai-automation",
    title: "AI Automation",
    description: "Leverage artificial intelligence to automate and optimize your business processes.",
    icon: Bot,
    details: "Our AI Automation service works by identifying repetitive, manual tasks within your business and developing intelligent systems to perform them automatically. We create custom AI models and integrate them seamlessly into your existing workflows. This could involve anything from automating data entry and customer support responses to optimizing your supply chain. This is useful for you because it frees up valuable time for your team, reduces human error, and provides significant cost savings, allowing you to focus on strategic growth."
  },
  {
    slug: "ai-agency",
    title: "AI Agency",
    description: "A dedicated team of AI experts to act as your strategic partner for innovation.",
    icon: BrainCircuit,
    details: "Think of our AI Agency as your in-house team of AI specialists. We work with you to understand your business goals and identify opportunities where AI can create a competitive advantage. We then design, build, and deploy custom AI solutions, from predictive analytics to natural language processing. This partnership is invaluable because it allows you to leverage the transformative power of AI without the need to hire a full team of expensive, specialized talent, ensuring you stay at the forefront of innovation."
  },
  {
    slug: "personal-software",
    title: "Personal Software",
    description: "Custom software solutions tailored to meet your unique personal or business needs.",
    icon: Code,
    details: "Our Personal Software service is all about creating a solution that is perfectly tailored to your individual or business needs. We start with a deep dive into your requirements and design a custom application from the ground up. Whether it's a unique productivity app, a specialized management tool, or a personal project, we build it to your exact specifications. This is incredibly useful as it provides you with a tool that works exactly how you think, improving efficiency and solving problems that off-the-shelf software simply can't address."
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
    name: "Free Trial",
    price: "₹0",
    description: "A preview of our services to get you started.",
    features: ["1 Core Service (Partial)", "Basic Consultation", "1 Round of Revisions", "Email Support"],
    icon: TestTube,
    popular: false,
  },
  {
    name: "Starter",
    price: "₹1999",
    description: "For individuals and small teams getting started.",
    features: ["2 Core Services", "Basic 3D Asset", "2 Rounds of Revisions", "Email Support"],
    icon: Award,
    popular: false,
  },
  {
    name: "Pro",
    price: "₹2499",
    description: "For growing businesses that need more power.",
    features: ["2 Core Services", "Complex 3D Animation (15s)", "5 Rounds of Revisions", "Priority Email Support", "Source Files"],
    icon: Zap,
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with custom needs.",
    features: ["All Core Services", "Full-scale 3D Production", "Unlimited Revisions", "Dedicated Project Manager", "24/7 Support"],
    icon: DollarSign,
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
