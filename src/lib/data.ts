import { Code, Bot, PenTool, LifeBuoy, Zap, DollarSign, Award, TestTube, Rocket, BrainCircuit } from "lucide-react";

export const services = [
  {
    slug: "saas",
    title: "SAAS",
    description: "Scalable and robust Software as a Service solutions to grow your business.",
    icon: Rocket,
    details: "We build custom SAAS platforms from the ground up, focusing on user experience, scalability, and security. Our team works with you to bring your vision to life and support your growth."
  },
  {
    slug: "ai-automation",
    title: "AI Automation",
    description: "Leverage artificial intelligence to automate and optimize your business processes.",
    icon: Bot,
    details: "Our AI automation services help you streamline operations, reduce costs, and improve efficiency. We specialize in developing custom AI models and integrating them into your existing workflows."
  },
  {
    slug: "ai-agency",
    title: "AI Agency",
    description: "A dedicated team of AI experts to act as your strategic partner for innovation.",
    icon: BrainCircuit,
    details: "Partner with our AI agency to unlock the full potential of artificial intelligence. We provide strategic consulting, development, and implementation services to help you stay ahead of the curve."
  },
  {
    slug: "personal-software",
    title: "Personal Software",
    description: "Custom software solutions tailored to meet your unique personal or business needs.",
    icon: Code,
    details: "From custom productivity tools to specialized applications, we create personal software that works exactly the way you want. Tell us your idea, and we'll build it for you."
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
