# Landing Page Polish & Animation Guidelines

This document outlines modern **polish techniques for marketing-style landing pages**.  
The goal is to create a **premium feel using motion, hierarchy, and micro-interactions** while maintaining strong performance for static sites.

This guide is intended to be used by Cursor or other AI coding agents when building landing pages.

---

# Objectives

Landing pages should:

- Feel modern and high quality
- Guide users through a visual narrative
- Use subtle motion to enhance storytelling
- Maintain excellent performance
- Avoid unnecessary JS complexity

Preferred animation techniques:

- CSS transforms
- opacity animations
- IntersectionObserver
- GPU-accelerated effects

Avoid heavy scroll handlers or layout thrashing.

---

# 1. Hero Section

The hero is the most important section of the page.

## Layout

Typical structure:

---

# Testimonials Page

- Use **Container** with `maxW="container.xl"` and responsive `py`/`px` so the page matches other sectioned pages (e.g. Home).
- Use a **section background** (`bg="gray.50"` or `bg="white"`) for visual continuity.
- Use a **responsive grid** (e.g. Chakra `SimpleGrid` with `columns={{ base: 1, md: 2, lg: 3 }}`) for predictable card layout instead of flex-wrap.
- **Scroll-triggered stagger**: one IntersectionObserver on the section; when in view, add a "visible" class so CSS can run a fade-in-up on the heading and staggered fade-in on each card (animation-delay by index). Reuse or mirror `fadeInUp` keyframes; keep animations GPU-friendly.
- **Shared Testimonial component**: hover lift (`translateY(-2px)`) and stronger box-shadow on hover; use `var(--primary)` as a left-border or quote accent; optional typography tweak (e.g. `lineHeight="tall"`) for long quotes.
