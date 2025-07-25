import * as LucideIcons from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export const getIconComponent = (iconName: string): LucideIcon => {
  const IconComponent = (LucideIcons as unknown as Record<string, LucideIcon>)[iconName];
  if (!IconComponent) {
    console.warn(`Icon "${iconName}" not found in Lucide React icons`);
    return LucideIcons.HelpCircle; // Fallback icon
  }
  return IconComponent;
}; 