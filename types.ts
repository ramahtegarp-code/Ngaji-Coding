
export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface MaterialSection {
  title: string;
  items: {
    title: string;
    description: string;
  }[];
}
