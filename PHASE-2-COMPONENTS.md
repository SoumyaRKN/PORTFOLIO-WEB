# Phase 2 Components Quick Reference

## UI Primitives

### Button (Enhanced)

```tsx
import { Button } from "@/components/ui/button";

// Variants: primary, secondary, outline, ghost, destructive
// Sizes: sm, md, lg, icon

<Button variant="primary" size="md">Click me</Button>
<Button isLoading={loading}>Submit</Button>
<Button variant="outline">Cancel</Button>
```

### Card (Enhanced)

```tsx
import { Card } from "@/components/ui/card";

// Variants: default (shadow-sm), elevated (shadow-md + hover), ghost (borderless)
// Use interactive prop for hover effects

<Card variant="elevated" interactive>
  <div>Hover me</div>
</Card>
```

### Badge (NEW)

```tsx
import { Badge } from "@/components/ui/badge";

// Variants: primary, secondary, outline, muted

<Badge variant="outline">2024</Badge>
<Badge variant="muted">Senior</Badge>
```

### Input & Textarea (NEW)

```tsx
import { Input, Textarea } from "@/components/ui/input";

<Input placeholder="Name" />
<Textarea placeholder="Message" />
```

### SectionHeading (NEW)

```tsx
import { SectionHeading } from "@/components/ui/section-heading";

// level: 2 | 3 (default: 2)

<SectionHeading level={2} subtitle="Optional subtitle">
  Main Title
</SectionHeading>
```

### Container (NEW)

```tsx
import { Container } from "@/components/ui/container";

// size: "sm" | "md" | "lg" | "xl" (default: lg)

<Container size="lg">
  <div>Centered max-width content</div>
</Container>
```

### LoadingDots (NEW)

```tsx
import { LoadingDots } from "@/components/ui/loading-dots";

<LoadingDots />
```

---

## Motion Components

### FadeInSection

```tsx
import { FadeInSection } from "@/components/motion/fade-in-section";

// Appears on scroll, slides up + fades in
// Optional delay prop (multiplied by 0.1s)

<FadeInSection delay={2}>
  <div>Content</div>
</FadeInSection>
```

### StaggerContainer

```tsx
import { StaggerContainer } from "@/components/motion/stagger-container";

// Children animate with 0.1s stagger between each
// Use for lists/grids

<StaggerContainer>
  {items.map(item => <motion.div key={item.id} variants={...}>{item}</motion.div>)}
</StaggerContainer>
```

### ScaleOnHover

```tsx
import { ScaleOnHover } from "@/components/motion/scale-on-hover";

// Scales 1.02x on hover, 0.98x on tap
// Respects prefers-reduced-motion

<ScaleOnHover>
  <Card>Hover me</Card>
</ScaleOnHover>
```

---

## Animation Utilities

```tsx
import {
  slideUpVariants,
  fadeInVariants,
  scaleInVariants,
  staggerContainerVariants,
  hoverScaleVariants,
  buttonHoverVariants,
  useReducedMotion,
} from "@/lib/animations";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

// All variants accept shouldReduce: boolean
const prefersReduced = useReducedMotion();

const variants = slideUpVariants(prefersReduced);
// Result: { hidden: {...}, visible: {...} }
```

---

## Import Patterns

```tsx
// UI Components
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Input, Textarea } from "@/components/ui/input";
import { LoadingDots } from "@/components/ui/loading-dots";

// Motion Components
import { FadeInSection } from "@/components/motion/fade-in-section";
import { StaggerContainer } from "@/components/motion/stagger-container";
import { ScaleOnHover } from "@/components/motion/scale-on-hover";

// Animations & Hooks
import { slideUpVariants, fadeInVariants, ... } from "@/lib/animations";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
```

---

## Common Patterns

### Animated Section with Staggered Cards

```tsx
"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { slideUpVariants, staggerContainerVariants, scaleInVariants } from "@/lib/animations";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function MySection() {
  const prefersReduced = useReducedMotion();
  const items = [/* ... */];

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-14">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={slideUpVariants(prefersReduced)}
      >
        <SectionHeading>Section Title</SectionHeading>
      </motion.div>

      <motion.div
        className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        variants={staggerContainerVariants(prefersReduced)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {items.map((item) => (
          <motion.div key={item.id} variants={scaleInVariants(prefersReduced)}>
            <Card interactive>
              {/* content */}
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
```

### Form with Input Components

```tsx
"use client";

import { Input, Textarea } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function MyForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // submit logic
    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="name">Name</label>
        <Input id="name" type="text" required />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message">Message</label>
        <Textarea id="message" required />
      </div>

      <Button type="submit" isLoading={loading}>
        Send
      </Button>
    </form>
  );
}
```

---

## Accessibility Notes

- ✅ All animations check `prefers-reduced-motion`
- ✅ Button focus rings: `focus-visible:ring-2 focus-visible:ring-ring`
- ✅ Form inputs have `aria-invalid` support
- ✅ Input components have proper labels with `htmlFor`
- ✅ Motion components use `whileInView` (semantic meaning)
- ✅ Keyboard navigation preserved throughout

---

## Browser Support

- ✅ Chrome/Edge 88+
- ✅ Firefox 87+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari 14+, Chrome Android)

---

**For detailed documentation, see**: `PHASE-2-SUMMARY.md`
