# Design System Architecture

## Overview
Implementasi gaya desain get.tech yang mengikuti prinsip Clean Architecture dari [ai-rules.md](ai-rules.md).

## Layer Architecture

### 1. Entities Layer (Core)
**File**: `src/core/constants/designTokens.js`

Pure business rules untuk design consistency. Tidak ada dependency framework.

```javascript
export const COLORS = { ... }
export const TYPOGRAPHY = { ... }
export const SPACING = { ... }
export const ANIMATION = { ... }
```

**Responsibilities**:
- Mendefinisikan design tokens (colors, typography, spacing, animations)
- Pure JavaScript objects
- No side effects
- Framework agnostic

### 2. Interface Adapters Layer
**File**: `src/assets/main.css`

Mengadaptasi design tokens ke CSS custom properties yang bisa digunakan oleh Vue components.

**Responsibilities**:
- Convert JavaScript constants ke CSS variables
- Global styling dan typography
- Base animations
- Responsive utilities

### 3. Frameworks Layer
**File**: `src/views/HomeView.vue`

Vue component yang menggunakan design system.

**Responsibilities**:
- Presentational logic
- Component state management (fade-in animation)
- Menggunakan CSS variables dari interface layer
- No direct dependency ke design tokens

## Design System Features

### Inspired by get.tech
1. **Bold Typography**: Giant hero headings dengan responsive clamp()
2. **Dark Theme**: Monochrome palette dengan white accents
3. **Minimal Layout**: Clean spacing, generous padding
4. **Subtle Animations**: Fade-in, hover effects
5. **Category Labels**: Uppercase labels dengan slash (/)

### Color Palette
- Background Dark: `#0a0a0a`
- Background Section: `#121212`
- Text Primary: `#ffffff`
- Text Secondary: `#a0a0a0`
- Text Muted: `#606060`

### Typography Scale
- Hero: `clamp(3rem, 12vw, 10rem)` - Massive heading
- Heading: `clamp(2rem, 5vw, 3.5rem)` - Section titles
- Subheading: `clamp(1.25rem, 3vw, 2rem)`
- Body: `clamp(1rem, 2vw, 1.125rem)`

### Spacing System
- Section Padding: `4rem` (sm) to `12rem` (xl)
- Card Gap: `2rem`
- Container Max Width: `1400px`

### Animation System
- Fast: `0.2s` - Hover effects
- Normal: `0.3s` - Transitions
- Slow: `0.5s` - Page load animations
- Easing: `cubic-bezier(0.65, 0, 0.35, 1)` - Smooth

## Component Structure

### HomeView Sections
1. **Hero Section**: Full-screen intro dengan bold typography
2. **Trust Section**: Social proof dengan statistics
3. **Contribute Section**: Call-to-action untuk contributors
4. **Projects Section**: Grid showcase projects
5. **CTA Section**: URL shortener promotion
6. **Footer**: Links dan copyright

### Component State
```javascript
const isVisible = ref(false)  // Animation trigger
onMounted(() => { isVisible.value = true })
```

## Clean Architecture Compliance

✅ **Dependency Rule**: Outer layers depend on inner
- Vue components → CSS variables → Design tokens

✅ **Separation of Concerns**:
- Design tokens: Pure data
- CSS: Adapter layer
- Vue: Presentation logic

✅ **Testability**:
- Design tokens are pure functions/objects
- CSS variables can be tested independently
- Vue components use props/state

✅ **Single Responsibility**:
- Each file has one clear purpose
- Design tokens: Define values
- CSS: Transform to web standards
- Vue: Render UI

## Usage Guidelines

### Adding New Colors
1. Update `designTokens.js` (Entities layer)
2. Update `main.css` CSS variables (Adapter layer)
3. Use CSS variables in components (Framework layer)

### Creating New Components
1. Import design tokens if needed for logic
2. Use CSS variables for styling
3. Follow naming convention: `section-name-element`

### Responsive Design
Use CSS clamp() for fluid typography:
```css
font-size: clamp(MIN, IDEAL, MAX);
```

## Testing Strategy

### Unit Tests (Entities)
```javascript
// Test design tokens
import { COLORS } from '@/core/constants/designTokens'
expect(COLORS.primary.dark).toBe('#0a0a0a')
```

### Integration Tests (Adapters)
- Verify CSS variables are correctly defined
- Check color contrast ratios
- Validate responsive breakpoints

### E2E Tests (Framework)
- Verify animations trigger
- Check hover states
- Test responsive layout

## Future Improvements

1. **Dark/Light Mode**: Extend color system
2. **Component Library**: Extract reusable components
3. **Design Tokens Package**: Publish as npm package
4. **Storybook**: Component documentation
5. **A11y Audit**: WCAG compliance

## References

- [ai-rules.md](ai-rules.md) - Clean Architecture rules
- [get.tech](http://get.tech/) - Design inspiration
- Design Tokens: `src/core/constants/designTokens.js`
- Global Styles: `src/assets/main.css`
- Home Page: `src/views/HomeView.vue`
