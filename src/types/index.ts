export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
}

export interface Skill {
  name: string;
  icon: string;
  level: number;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  testimonial: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}