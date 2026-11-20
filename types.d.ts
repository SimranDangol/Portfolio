export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  link: string;
  github?: string;
  category?: string;
}

export interface Contact {
  _id: string;
  fullName: string;
  subject: string;
  email: string;
  message: string;
  createdAt: string;
}
