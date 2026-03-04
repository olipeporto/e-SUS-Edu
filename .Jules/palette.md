## 2024-03-24 - [Interactive Logo Accessibility]
**Learning:** The primary app logo/home link was implemented as a simple `div` with an `onClick` handler but no keyboard support (`tabIndex`, `onKeyDown`) or semantic meaning (`button`/`a`), making it completely invisible to keyboard-only and screen reader users.
**Action:** Always use native semantic elements like `<button>` or `<a>` for interactive navigation elements to ensure they are naturally focusable and announceable.
