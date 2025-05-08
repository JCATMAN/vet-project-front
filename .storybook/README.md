# 🎨 VetCare Component Library

Welcome to our component library documentation! This Storybook instance showcases all the reusable components used in the VetCare Management System.

## 🚀 Getting Started

1. **Start Storybook**

   ```bash
   pnpm storybook
   ```

2. **Build Storybook**
   ```bash
   pnpm build-storybook
   ```

## 📚 Component Categories

### 🧩 Form Components

- TextField
- Button
- Select
- Checkbox
- Radio
- DatePicker

### 📊 Data Display

- Table
- Card
- List
- Badge
- Avatar

### 🎯 Navigation

- Menu
- Tabs
- Breadcrumbs
- Pagination

### 🎨 Layout

- Grid
- Container
- Divider
- Spacer

### 🚨 Feedback

- Alert
- Modal
- Toast
- Progress
- Skeleton

## 🎯 Component Guidelines

### Design Principles

- **Consistency**: Components follow a consistent design language
- **Accessibility**: All components are WCAG 2.1 compliant
- **Responsiveness**: Components adapt to different screen sizes
- **Performance**: Optimized for fast loading and interaction

### Usage Guidelines

1. **Import Components**

   ```tsx
   import { ComponentName } from '@/components/component-name';
   ```

2. **Follow Props Interface**

   ```tsx
   interface ComponentProps {
     // Required props
     requiredProp: string;
     // Optional props
     optionalProp?: string;
   }
   ```

3. **Use Default Props**
   ```tsx
   <ComponentName
     requiredProp="value"
     // Optional props can be omitted
   />
   ```

## 🎨 Theme Customization

Our components use a consistent theme that can be customized:

```tsx
// theme.ts
export const theme = {
  colors: {
    primary: '#...',
    secondary: '#...',
    // ...
  },
  spacing: {
    // ...
  },
  // ...
};
```

## 🧪 Testing Components

Each component includes:

- Unit tests
- Integration tests
- Accessibility tests
- Visual regression tests

Run tests:

```bash
pnpm test
```

## 📝 Contributing

1. **Create a New Component**

   ```bash
   pnpm create-component ComponentName
   ```

2. **Add Stories**

   - Create a `.stories.tsx` file
   - Document all variants
   - Include usage examples

3. **Add Tests**

   - Create a `.test.tsx` file
   - Test all props and interactions

4. **Document**
   - Add JSDoc comments
   - Update README
   - Include usage examples

## 🎯 Best Practices

1. **Component Structure**

   ```
   component-name/
   ├── component-name.tsx
   ├── component-name.stories.tsx
   ├── component-name.test.tsx
   └── index.ts
   ```

2. **Naming Conventions**

   - Use PascalCase for components
   - Use kebab-case for files
   - Use camelCase for props

3. **Code Style**
   - Follow TypeScript best practices
   - Use functional components
   - Implement proper prop types

## 🔍 Accessibility

All components are built with accessibility in mind:

- ARIA labels
- Keyboard navigation
- Screen reader support
- Color contrast compliance

## 📱 Responsive Design

Components are designed to work across all screen sizes:

- Mobile-first approach
- Breakpoint consistency
- Fluid layouts
- Touch-friendly interactions

## 🚀 Performance

Components are optimized for:

- Fast initial load
- Minimal re-renders
- Efficient DOM updates
- Bundle size optimization

## 📚 Additional Resources

- [Design System Documentation](link-to-design-system)
- [Component API Reference](link-to-api-docs)
- [Contributing Guidelines](link-to-contributing)
- [Changelog](link-to-changelog)
