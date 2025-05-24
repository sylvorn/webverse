import { HelpCircle, FileText, UserCircle, Lock, Settings, Server, Shield } from "lucide-react";

export const faqs = [
  {
    category: "About Sylvorn",
    icon: HelpCircle,
    questions: [
      {
        question: "What is Sylvorn, and what services do you offer?",
        answer: "Sylvorn is a new IT company founded by 2 students, aiming to deliver unique software experiences. We offer enterprise-level software, business-customized solutions, IT services, and SaaS products.",
      },
      {
        question: "What are Sylvorn’s values?",
        answer: "We believe in integrity, innovation, and collaboration, fostering creativity and teamwork to deliver exceptional solutions.",
      },
      {
        question: "What is Sylvorn’s mission and vision?",
        answer: "Our mission is to transform how businesses and individuals interact with technology. Our vision is to become a trusted partner in innovation, empowering clients with success-driven technology.",
      },
    ],
  },
  {
    category: "Blog Section",
    icon: FileText,
    questions: [
      {
        question: "Who writes the blog posts on Sylvorn’s website?",
        answer: "Currently, our internal team writes the blog posts. In the future, we plan to collaborate with professional authors for enhanced content.",
      },
      {
        question: "What topics does the blog cover?",
        answer: "Our blog includes technical tutorials, company updates, and industry insights to keep you informed.",
      },
      {
        question: "Do I need an account to comment on blogs?",
        answer: "Yes, you must create an account to comment on blog posts.",
      },
    ],
  },
  {
    category: "Support and Feedback",
    icon: UserCircle,
    questions: [
      {
        question: "How can I provide feedback or report an issue?",
        answer: "Use our feedback portal to share suggestions or report issues. Our expert team will manage queries via a ticket system with timely updates.",
      },
      {
        question: "What types of issues can the support team handle?",
        answer: "Our team can assist with software bugs and account-related queries. While rare, these issues are resolved promptly.",
      },
      {
        question: "Where can I find additional help if needed?",
        answer: "Visit our FAQ page or contact the support team via the feedback portal for detailed assistance.",
      },
    ],
  },
  {
    category: "Account and Privacy",
    icon: Lock,
    questions: [
      {
        question: "How does Sylvorn protect user data?",
        answer: "We prioritize data security by encrypting and hashing passwords. Payment and user details are securely processed on our servers.",
      },
      {
        question: "Can I delete my account?",
        answer: "No, but you can deactivate your account through a specified process.",
      },
    ],
  },
  {
    category: "Policies and Compliance",
    icon: Shield,
    questions: [
      {
        question: "Does Sylvorn comply with IT standards?",
        answer: "We are in the process of applying for ISO certification to ensure our services meet high standards of quality and security.",
      },
      {
        question: "How does Sylvorn ensure payment security?",
        answer: "All payment details are verified, hashed, and encrypted to ensure secure transactions.",
      },
      {
        question: "Does Sylvorn have a refund policy?",
        answer: "Our refund policy is under development as we finalize our payment infrastructure.",
      },
    ],
  },
];
