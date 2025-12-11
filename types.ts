export interface LorePoint {
  id: string;
  label: string;
  content: string; // Pre-written deep lore text
}

export interface Slide {
  id: number;
  section: string; // New section header
  title: string;
  subtitle?: string;
  content: string; // Brief summary
  imagePlaceholder: string; // URL for picsum
  lorePoints: LorePoint[]; // Clickable items
  themeColor: 'green' | 'amber'; // Vault vs Wasteland/Brotherhood vibes
}

export interface TerminalMessage {
  type: 'user' | 'system' | 'ai';
  text: string;
}
