interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  link: string;
}

interface Contact {
  _id: string;
  fullName: string;
  subject: string;
  email: string;
  message: string;
  createdAt: string;
}
