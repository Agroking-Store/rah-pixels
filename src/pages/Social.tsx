import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import {
  Trophy,
  KeyRound,
  Rocket,
  Eye,
  CheckCircle2,
  Play,
  Briefcase,
  Target,
  ShieldCheck,
  X,
  ArrowUpRight,
  CheckCircle,
  GraduationCap,
  Home,
  Star,
} from "lucide-react";
import WhyChooseUs from "@/components/layout/WhyChooseUs";
import InteractiveDotsLogo from "@/components/layout/InteractiveDotsLogo";

export default function Social() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <div className="min-h-screen bg-white text-[#6B7280] font-['Manrope',sans-serif] overflow-x-hidden">
      {/* <InteractiveDotsLogo /> */}
    </div>
  );
}