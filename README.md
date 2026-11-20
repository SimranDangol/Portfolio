# Simran Dangol - Developer Portfolio

A modern, high-performance personal portfolio showcasing full-stack web applications, engineering experience, technical skills, and projects.

🌐 **Live Demo:** [simran-dangol.vercel.app](https://simran-dangol.vercel.app/)

---

## 🚀 Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) & [shadcn/ui](https://ui.shadcn.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **State & Data Fetching:** [React Query (@tanstack/react-query)](https://tanstack.com/query)
- **Forms & Validation:** [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **Backend / Database:** Next.js Route Handlers, [Mongoose](https://mongoosejs.com/) & [MongoDB](https://www.mongodb.com/)
- **Emailing:** [Nodemailer](https://nodemailer.com/)

---

## ✨ Features

- **Cohesive Obsidian/Cyan Cyber Aesthetic:** Unified, responsive dark-mode UI with subtle neon glows and glassmorphism.
- **Experience Timeline:** Interactive career timeline detailing engineering contributions at **PlayCV.ai**, **Infinity IT Solutions**, and **Metalogic Software**.
- **Interactive Project Showcase:** Filterable by category (Full Stack / Frontend) with direct Live Demo and GitHub links.
- **Dynamic Skills Matrix:** Modular categorization of frontend architecture, backend & microservices, databases, DevOps, and engineering practices.
- **Working Contact Gateway:** Integrated contact form backed by MongoDB storage, instant automated user confirmation, and admin notification emails.
- **Clean Architecture & Performance:** Connection caching for serverless MongoDB, Next.js image optimization, and smooth scroll navigation.

---

## 🛠️ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/SimranDangol/Portfolio.git
cd Portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
Create a `.env.local` file in the root directory:
```env
# Database
MONGO_URI=your_mongodb_connection_string

# Mail Notification
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_gmail_app_password

# Base URL (optional, defaults to /api)
NEXT_PUBLIC_BASE_URL=
```

### 4. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 📦 Build for Production

```bash
npm run build
npm run start
```
