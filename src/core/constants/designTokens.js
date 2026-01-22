/**
 * Design System Constants (Entities Layer)
 * Pure business rules for design consistency inspired by get.tech
 * No framework dependencies, pure JavaScript objects
 */

export const COLORS = {
  primary: {
    dark: '#0a0a0a',
    darker: '#000000',
    light: '#1a1a1a',
  },
  accent: {
    primary: '#ffffff',
    secondary: '#a0a0a0',
    tertiary: '#606060',
  },
  background: {
    dark: '#0a0a0a',
    section: '#121212',
  },
  text: {
    primary: '#ffffff',
    secondary: '#a0a0a0',
    muted: '#606060',
  }
}

export const TYPOGRAPHY = {
  hero: {
    size: 'clamp(3rem, 12vw, 10rem)',
    weight: '700',
    lineHeight: '1',
    letterSpacing: '-0.02em',
  },
  heading: {
    size: 'clamp(2rem, 5vw, 3.5rem)',
    weight: '700',
    lineHeight: '1.1',
    letterSpacing: '-0.01em',
  },
  subheading: {
    size: 'clamp(1.25rem, 3vw, 2rem)',
    weight: '400',
    lineHeight: '1.4',
    letterSpacing: '0',
  },
  body: {
    size: 'clamp(1rem, 2vw, 1.125rem)',
    weight: '400',
    lineHeight: '1.6',
    letterSpacing: '0',
  }
}

export const SPACING = {
  section: {
    sm: '4rem',
    md: '6rem',
    lg: '8rem',
    xl: '12rem',
  },
  container: {
    maxWidth: '1400px',
    padding: '2rem',
  }
}

export const ANIMATION = {
  duration: {
    fast: '0.2s',
    normal: '0.3s',
    slow: '0.5s',
  },
  easing: {
    default: 'cubic-bezier(0.4, 0, 0.2, 1)',
    smooth: 'cubic-bezier(0.65, 0, 0.35, 1)',
  }
}
