
import React from 'react';
import { 
  Bot, 
  Users, 
  LayoutDashboard, 
  Send, 
  Smartphone, 
  Webhook, 
  Code, 
  Globe, 
  BarChart3, 
  Tag, 
  MessageSquareText, 
  ShieldCheck 
} from 'lucide-react';

const icons = {
  Bot,
  Users,
  LayoutDashboard,
  Send,
  Smartphone,
  Webhook,
  Code,
  Globe,
  BarChart3,
  Tag,
  MessageSquareText,
  ShieldCheck
};

interface IconWrapperProps {
  name: string;
  className?: string;
}

export const IconWrapper: React.FC<IconWrapperProps> = ({ name, className }) => {
  const IconComponent = icons[name as keyof typeof icons];
  if (!IconComponent) return null;
  return <IconComponent className={className || "text-[#E04A1F]"} />;
};