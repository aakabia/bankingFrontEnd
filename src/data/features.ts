import {
  Shield,
  Zap,
  BarChart3,
  CreditCard,
  type LucideIcon,
} from "lucide-react";

export interface Features {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const features: Features[] = [
  {
    icon: Shield,
    title: "Bank-Level Security",
    description:
      "Military-grade encryption and multi-factor authentication protect your financial data 24/7.",
  },
  {
    icon: Zap,
    title: "Lightning Fast Transfers",
    description:
      "Send money anywhere in the world in seconds, not days. Real-time processing guaranteed.",
  },
  {
    icon: BarChart3,
    title: "Smart Analytics",
    description:
      "AI-powered insights help you make better financial decisions with predictive analytics.",
  },
  {
    icon: CreditCard,
    title: "Seamless Payments",
    description:
      "Accept payments from anywhere with our unified payment processing platform.",
  },
];
