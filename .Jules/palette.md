## 2024-05-15 - Interactive Elements Require Semantic HTML
**Learning:** Replacing an interactive `<div onClick>` with a semantic `<button>` immediately enhances keyboard navigation and screen reader support without extra scripting. Similarly, icon-only interactive elements must have `aria-label`s and visible focus states (e.g., `focus-visible:ring-2`) for accessibility.
**Action:** Always prefer native semantic elements like `<button>` or `<a>` over clickable `<div>`s. Ensure all interactive components have focus indicators and ARIA labels if they lack text context.
