import { Code, Bot, PenTool, LifeBuoy, Zap, DollarSign, Award, TestTube } from "lucide-react";

export const services = [
  {
    slug: "3d-animation",
    title: "3D Animation",
    description: "Bringing your ideas to life with stunning 3D animations, from character design to architectural visualization.",
    icon: Code,
    details: "Our 3D animation service covers the full production pipeline. We start with conceptualization and storyboarding, then move to modeling, texturing, rigging, animation, and final rendering. We use industry-standard software to deliver high-quality results for films, games, advertisements, and more."
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    description: "Crafting intuitive and beautiful user interfaces that provide a seamless user experience.",
    icon: PenTool,
    details: "We believe that great design is not just about aesthetics, but about creating an experience that is both enjoyable and efficient for the user. Our UI/UX process involves user research, wireframing, prototyping, and user testing to ensure the final product is both user-friendly and visually appealing."
  },
  {
    slug: "web-development",
    title: "Web Development",
    description: "Building responsive, high-performance websites and web applications tailored to your needs.",
    icon: Zap,
    details: "Our web development team specializes in modern technologies to build fast, secure, and scalable web solutions. From custom e-commerce platforms to corporate websites and complex web applications, we provide end-to-end development services that align with your business goals."
  },
  {
    slug: "technical-support",
    title: "Technical Support",
    description: "Providing reliable technical support to ensure your digital products run smoothly.",
    icon: LifeBuoy,
    details: "Our dedicated support team is here to help you with any technical issues you may encounter. We offer various levels of support packages, from basic troubleshooting to 24/7 monitoring and maintenance, ensuring your systems are always up and running."
  },
];

export const testimonials = [
  {
    quote: "The team at Elara Tech Labs transformed our vision into a stunning reality. Their creativity and technical expertise are unmatched.",
    name: "Alex Chen",
    company: "CEO of Nova Dynamics",
    image: "testimonial-1"
  },
  {
    quote: "Working with Elara has been a game-changer for our brand. The 3D animations they produced are simply breathtaking.",
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
