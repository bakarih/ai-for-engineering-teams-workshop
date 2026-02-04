# Feature: Button Component

## Context
- Reusable button component for the Customer Intelligence Dashboard
- Used throughout the dashboard for primary actions (filtering, submitting, confirming)
- Part of the design system that needs consistency across all features
- Foundation UI element for user interactions
- Used by business analysts and administrators for triggering operations

## Requirements

### Functional Requirements
- Accept `label` prop for button text content
- Accept `onClick` handler for click events
- Support three variants: primary, secondary, danger
- Include loading state that disables interaction and shows a spinner
- Prevent multiple submissions during loading state

### User Interface Requirements
- Visual variants:
  - Primary: Main call-to-action (solid blue background, white text)
  - Secondary: Supporting actions (gray background, dark text)
  - Danger: Destructive actions (red background, white text)
- Loading state:
  - Display animated spinner replacing or alongside label
  - Reduce opacity to indicate disabled state
  - Cursor changes to not-allowed
- Interactive states:
  - Hover: Subtle darkening of background
  - Active: Pressed appearance
  - Focus: Visible focus ring for keyboard navigation
  - Disabled/Loading: Reduced opacity, no pointer events

### Data Requirements
- Props interface:
  - `label`: string (required) - Button text
  - `onClick`: () => void (required) - Click handler
  - `variant`: 'primary' | 'secondary' | 'danger' (optional, default: 'primary')
  - `loading`: boolean (optional, default: false)
  - `disabled`: boolean (optional, default: false)
  - `className`: string (optional) - Additional CSS classes
  - `type`: 'button' | 'submit' | 'reset' (optional, default: 'button')

### Integration Requirements
- Used in forms, cards, modals, and action bars throughout the dashboard
- Props interface exported for consumer type safety
- Compatible with form submission workflows

## Constraints

### Technical Stack
- React 19
- TypeScript with strict mode
- Tailwind CSS for styling
- No external UI library dependencies

### Performance Requirements
- Fast rendering (< 16ms for 60fps)
- Minimal bundle size
- Smooth spinner animation without jank

### Design Constraints
- Maximum width: 200px
- Minimum height: 40px for touch accessibility
- Border radius: rounded-md (6px)
- Consistent padding: px-4 py-2
- Font: medium weight, appropriate size for readability

### File Structure and Naming
- Component file: `src/components/ui/Button.tsx`
- Props interface: `ButtonProps` exported from component file
- Named export: `export function Button`

### Accessibility Requirements
- Proper ARIA attributes:
  - `aria-disabled` when loading or disabled
  - `aria-busy="true"` during loading state
  - `aria-label` support for icon-only future use
- Keyboard accessible (Enter and Space to activate)
- Visible focus ring meeting WCAG standards
- Color contrast ratio: at least 4.5:1 for all variants
- Loading state announced to screen readers

### Security Considerations
- Sanitize label content to prevent XSS
- Proper TypeScript types to prevent misuse

## Acceptance Criteria

- [ ] Accepts `label` prop and displays text correctly
- [ ] Accepts `onClick` prop and triggers handler on click
- [ ] Renders primary variant with blue background and white text
- [ ] Renders secondary variant with gray background and dark text
- [ ] Renders danger variant with red background and white text
- [ ] Defaults to primary variant when not specified
- [ ] Loading state displays spinner animation
- [ ] Loading state disables click events
- [ ] Loading state shows visual feedback (opacity, cursor)
- [ ] Disabled state prevents interaction
- [ ] Hover state provides visual feedback
- [ ] Focus ring visible for keyboard navigation
- [ ] `aria-disabled` set when loading or disabled
- [ ] `aria-busy` set to true during loading
- [ ] Keyboard activation works (Enter, Space)
- [ ] Maximum width constraint of 200px applied
- [ ] TypeScript `ButtonProps` interface exported
- [ ] No console errors or warnings
- [ ] Passes TypeScript strict mode checks
