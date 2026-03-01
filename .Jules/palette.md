## 2024-05-18 - Missing ARIA label on modal close button
**Learning:** Icon-only close buttons (like X from lucide-react) inside modals lack accessible names by default, which is an accessibility issue for screen readers.
**Action:** Always add an explicit `aria-label` to icon-only buttons, ensuring the language matches the application UI (e.g., `aria-label="Fechar"` for Portuguese).
