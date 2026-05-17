# Portfolio Website – Production-Grade Architecture

A modern, scalable portfolio website built with Next.js, TypeScript, and Tailwind CSS. Designed for senior-level engineers seeking a premium, maintainable online presence.

## 🎯 Stack Overview

| Layer | Technology | Version |
|-------|-----------|---------|
| **Framework** | Next.js | 14.2.3 |
| **Language** | TypeScript | 5.9.3 |
| **Styling** | Tailwind CSS | 3.4.1 |
| **UI Primitives** | React + Lucide Icons | 18.x, 1.16+ |
| **Database** | MongoDB + Mongoose | 8.4.0 |
| **Forms** | React Hook Form | 7.76+ |
| **Validation** | Zod | 4.4.3 |
| **Utilities** | clsx, tailwind-merge | 2.1.1, 3.6+ |
| **Email** | Nodemailer | 6.9.13 |

## 🏗️ Architecture Overview

### Design System – Semantic Tokens

All colors and styling are driven by semantic CSS tokens defined in [`src/styles/tokens.css`](src/styles/tokens.css):

```css
:root {
  --primary: 206 78% 42%;
  --secondary: 22 94% 52%;
  --foreground: 225 35% 10%;
  --background: 0 0% 100%;
  /* ... */
}

[data-theme="dark"] {
  /* dark mode overrides */
}
```

**Why?** Makes theme switching, color consistency, and future dark/light mode support effortless. No hardcoded colors across components.

### Component Architecture

```
src/components/
├── ui/               # Reusable design primitives (Button, Card, etc.)
├── layout/           # App-level layout (Header, Footer, ThemeProvider)
└── sections/         # Page sections (Hero, Projects, Skills, Contact, etc.)
```

Each component is:

- **Type-safe** (TypeScript)
- **Styled with Tailwind** (CSS classes via `cn()` utility)
- **Self-contained** (minimal external dependencies)
- **Composable** (works with multiple parent layouts)

### Content Architecture – Single Source of Truth

All site content lives in [`src/content/site.ts`](src/content/site.ts):

```typescript
export const projects: Project[] = [...]
export const skills: Skill[] = [...]
export const experiences: Experience[] = [...]
export const navigation: NavItem[] = [...]
```

**Why?** Enables:

- Easy content updates without touching components
- Type-safe data structures (via Zod validation)
- Future: MDX integration, CLI-based project generation, headless CMS support

### Database Architecture – Singleton Pattern

MongoDB connection uses a singleton pattern for development + serverless safety:

```typescript
// src/lib/db.ts
export async function dbConnect(): Promise<typeof mongoose> {
  if (cached.conn) return cached.conn;
  cached.promise = mongoose.connect(env.MONGODB_URI);
  cached.conn = await cached.promise;
  return cached.conn;
}
```

**Why?** Prevents connection leaks in serverless environments (Vercel, Netlify).

### Routing – App Router + TypeScript

All routes are TypeScript and use Next.js App Router:

- `/` – Home page (hero + sections)
- `/resume` – Formatted resume
- `/project/[slug]` – Individual project detail
- `/privacypolicy` – Legal
- `/termsofservice` – Legal

**Why?** Type safety, built-in performance (image optimization), server components by default.

### Validation – Zod Schemas

Form inputs are validated with Zod:

```typescript
// src/lib/validations/contact.ts
export const contactInquirySchema = z.object({
  firstName: z.string().trim().min(2).max(60),
  email: z.string().trim().email(),
  message: z.string().trim().min(10).max(2000),
});
```

**Why?** Type-safe runtime validation. Same schema used on client (form validation) and server (API input validation).

### Theme System – React Context + CSS Variables

Theme state is managed via React Context with persistent localStorage:

```typescript
// useTheme() hook
const { theme, toggleTheme } = useTheme();
```

Theme changes update `data-theme` attribute on `<html>`, triggering CSS variable cascades. Fully composable for future theme variations.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone repository
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# Install dependencies
npm install

# Configure environment
cp .env.example .env.local
# Edit .env.local with your MongoDB URI and email settings
```

### Environment Variables

Create `.env.local`:

```env
# Database
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/portfolio

# Email (Nodemailer + Gmail)
EMAIL_FROM=your-email@gmail.com
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-16-char-app-password
```

See [`.env.example`](.env.example) for all available variables.

### Development

```bash
npm run dev
# Open http://localhost:3000
```

### Production Build

```bash
npm run build
npm run start
```

### Validation

```bash
npm run typecheck  # TypeScript checking
npm run lint       # ESLint
npm run build      # Full production build
```

## 📁 Project Structure

```
src/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout (ThemeProvider, Header, Footer)
│   ├── page.tsx             # Home page
│   ├── resume/page.tsx
│   ├── project/[slug]/page.tsx
│   ├── privacypolicy/page.tsx
│   ├── termsofservice/page.tsx
│   ├── providers.tsx        # Client-side providers
│   ├── globals.css          # Global styles (Tailwind + tokens)
│   └── not-found.tsx        # 404 page
│
├── components/               # React components
│   ├── ui/                  # Design primitives
│   │   ├── button.tsx
│   │   └── card.tsx
│   ├── layout/              # App layout
│   │   ├── theme-provider.tsx
│   │   ├── site-header.tsx
│   │   └── site-footer.tsx
│   └── sections/            # Page sections
│       ├── hero-section.tsx
│       ├── projects-section.tsx
│       ├── skills-section.tsx
│       ├── experience-section.tsx
│       └── contact-section.tsx
│
├── config/                   # Configuration
│   ├── site.ts              # Site metadata and identity
│   └── metadata.ts          # SEO metadata
│
├── content/                  # Content (single source of truth)
│   └── site.ts              # Projects, skills, experiences, nav
│
├── lib/                      # Utilities & helpers
│   ├── cn.ts                # Class name merger (clsx + tailwind-merge)
│   ├── db.ts                # MongoDB singleton
│   └── validations/         # Zod schemas
│       └── contact.ts
│
├── models/                   # Mongoose schemas
│   └── contact-inquiry.ts
│
├── actions/                  # Server actions
│   └── contact.ts
│
├── types/                    # TypeScript types
│   └── content.ts
│
├── styles/                   # Global styles
│   └── tokens.css           # Semantic CSS variables (dark/light themes)
│
├── hooks/                    # React hooks
│   └── use-theme.ts
│
└── env.ts                    # Environment validation (Zod)

public/
└── projects/                # Project images

tailwind.config.js          # Tailwind config (semantic colors)
tsconfig.json               # TypeScript config
next.config.mjs             # Next.js config
package.json                # Dependencies
```

## 🎨 Theme System

### How It Works

1. **Semantic Tokens** (`src/styles/tokens.css`):
   - CSS variables define the entire design system
   - Two themes: `:root` (light) and `[data-theme="dark"]` (dark)

2. **Tailwind Integration** (`tailwind.config.js`):
   - Semantic tokens become Tailwind color utilities
   - `bg-primary`, `text-foreground`, `border-border`, etc.

3. **Runtime Switching** (`useTheme()` hook):
   - Updates `data-theme` attribute
   - Persists to localStorage
   - All CSS variables cascade automatically

### Adding New Colors

1. Add to `src/styles/tokens.css`:

   ```css
   --accent: 270 60% 50%;
   [data-theme="dark"] {
     --accent: 270 60% 65%;
   }
   ```

2. Add to `tailwind.config.js`:

   ```javascript
   accent: "hsl(var(--accent))",
   ```

3. Use in components:

   ```tsx
   <div className="bg-accent text-accent-foreground">…</div>
   ```

**No component-level color definitions needed.** Changes theme-wide automatically.

## 📝 Content Management

### Adding Projects

Edit `src/content/site.ts`:

```typescript
export const projects: Project[] = [
  {
    slug: "my-project",
    title: "My Project Title",
    summary: "One-line summary",
    description: "Full description",
    role: "Full Stack Engineer",
    year: "2025",
    technologies: ["Next.js", "TypeScript", "MongoDB"],
    highlights: ["Feature 1", "Feature 2"],
    images: [{ src: "/projects/my-project/1.png", alt: "Screenshot" }],
  },
  // ...
];
```

### Adding Skills

Edit `src/content/site.ts`:

```typescript
export const skills: Skill[] = [
  { name: "TypeScript", category: "Frontend", level: "Advanced" },
  // ...
];
```

### Adding Navigation Items

Edit `src/content/site.ts`:

```typescript
export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  // ...
];
```

## 🔐 Form Handling

Contact form uses:

1. **React Hook Form** – Client-side validation and state
2. **Zod** – Schema validation
3. **Server Actions** – Secure backend processing
4. **Nodemailer** – Email sending (optional)

**Flow:**

1. User fills form
2. `react-hook-form` validates on client (fast feedback)
3. User clicks submit
4. Server Action (`saveContactInquiry`) validates again with Zod
5. Data saved to MongoDB
6. Email sent (if configured)

## 🚀 Scalability & Future Features

### Phase 2 (UI/UX Polish)

- Advanced component animations (Framer Motion)
- Case study pages with rich media
- Blog functionality (MDX)

### Phase 3 (Content Management)

- CLI tool for generating projects
- Headless CMS integration (Contentful, Sanity)
- Auto-generated Open Graph images

### Phase 4 (Advanced Features)

- Search functionality
- Analytics integration
- RSS feeds
- Social media cards

## 🧪 Performance

- **Static Generation**: Routes pre-rendered at build time
- **Image Optimization**: Next.js `<Image>` component
- **CSS**: Tailwind purges unused styles
- **TypeScript**: Type checking prevents runtime errors
- **Semantic Tokens**: Single point of style management

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📜 License

Private (Portfolio Project)

## 📧 Contact

Built by **Soumya Prakash Nayak**  
Email: [nsoumyaprakash@gmail.com](mailto:nsoumyaprakash@gmail.com)  
GitHub: [@SoumyaRKN](https://github.com/SoumyaRKN)  
LinkedIn: [soumya-prakash-nayak](https://www.linkedin.com/in/soumya-prakash-nayak-558151261)

---

**Architecture Philosophy:**
This portfolio prioritizes *maintainability* and *scalability* over complexity. Every decision—from semantic tokens to content architecture—is made to support professional growth and future feature additions without architectural debt.
