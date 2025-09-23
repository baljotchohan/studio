import { Code, Bot, PenTool, LifeBuoy, Zap, DollarSign, Award, TestTube, Rocket, BrainCircuit } from "lucide-react";

export const services = [
  {
    slug: "saas",
    title: "SAAS",
    description: "Scalable and robust Software as a Service solutions to grow your business.",
    icon: Rocket,
    details: `
      **How It Works:** Imagine a powerful software tool you can access from anywhere, anytime, without any installation. That's SAAS. We give you a ready-to-use platform that runs in the cloud.

      **How We Create It:**
      - **Blueprint & Build:** We design and develop a robust, multi-tenant architecture using cutting-edge tech.
      - **Cloud Deployment:** We host it on scalable cloud infrastructure, ensuring reliability and speed.
      - **Continuous Care:** We handle all updates, security, and maintenance behind the scenes.

      **How It's Useful For You:**
      - **Launch Faster:** Skip the long development cycles and get to market quickly.
      - **Lower Costs:** Avoid the massive upfront investment in custom software and server hardware.
      - **Focus on What Matters:** You run your business; we'll run the software.
    `
  },
  {
    slug: "ai-automation",
    title: "AI Automation",
    description: "Leverage artificial intelligence to automate and optimize your business processes.",
    icon: Bot,
    details: `
      **How It Works:** We teach robots to do the boring, repetitive parts of your job. Our AI systems can handle tasks from data entry and report generation to complex workflow automations.

      **How We Create It:**
      - **Discovery:** We analyze your daily operations to find the perfect automation opportunities.
      - **Custom AI Models:** We build and train intelligent agents tailored to your specific tasks.
      - **Seamless Integration:** We plug these AI bots directly into your existing software and workflows.

      **How It's Useful For You:**
      - **Boost Efficiency:** Free up your team to focus on high-impact, creative work.
      - **Eliminate Errors:** Let the machines handle the details with perfect accuracy, every time.
      - **Scale with Ease:** Handle a growing workload without a proportional increase in headcount.
    `
  },
  {
    slug: "ai-agency",
    title: "AI Agency",
    description: "A dedicated team of AI experts to act as your strategic partner for innovation.",
    icon: BrainCircuit,
    details: `
      **How It Works:** Think of us as your on-demand AI department. We partner with you to inject artificial intelligence into the core of your business strategy.

      **How We Create It:**
      - **Strategic Alignment:** We start with your business goals and work backward to see where AI can make the biggest impact.
      - **End-to-End Solutions:** From predictive analytics to natural language processing, we design, build, and deploy custom AI systems.
      - **Expert Guidance:** We provide ongoing consultation to ensure you're always ahead of the curve.

      **How It's Useful For You:**
      - **Unlock Innovation:** Leverage the transformative power of AI without hiring an expensive, in-house team.
      - **Gain a Competitive Edge:** Make smarter decisions, create new products, and uncover market insights your competitors can't see.
      - **Future-Proof Your Business:** Stay relevant and adaptable in an increasingly intelligent world.
    `
  },
  {
    slug: "personal-software",
    title: "Personal Software",
    description: "Custom software solutions tailored to meet your unique personal or business needs.",
    icon: Code,
    details: `
      **How It Works:** Off-the-shelf software doesn't fit? We'll build you something that does. This is a bespoke application crafted from scratch, just for you.

      **How We Create It:**
      - **Deep Dive:** It all starts with a conversation. We listen carefully to your vision and requirements.
      - **Artisan Coding:** Our developers meticulously craft your application, ensuring every feature works exactly as you imagined.
      - **You-Centric Design:** The user interface is designed around your specific workflow, making it intuitive and a joy to use.

      **How It's Useful For You:**
      - **Perfect Fit:** Get a tool that solves your exact problem, without the clutter of features you don't need.
      - **Own Your Solution:** You get a unique asset that can grow and adapt with you, without being tied to a third-party vendor's roadmap.
      - **Unleash Productivity:** Stop fighting with your software and get a tool that feels like a natural extension of your own mind.
    `
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
