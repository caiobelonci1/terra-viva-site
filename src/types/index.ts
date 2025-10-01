// Tipos do projeto
export interface Project {
  id: string;
  title: string;
  location: string;
  status: 'completed' | 'ongoing';
  year?: string;
  description: string;
  image: string;
  featured?: boolean;
  features?: string[];
  lotSize?: string;
  lotsCount?: number;
}

export interface Company {
  name: string;
  description: string;
  features: string[];
  yearsActive: string;
  projects?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
}

export interface NavLink {
  label: string;
  path: string;
}

export interface Stats {
  value: string;
  label: string;
}

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}
