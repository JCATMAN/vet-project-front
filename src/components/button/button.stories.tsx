import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'Visual style of the button that determines its color scheme and appearance',
      control: { type: 'select' },
      options: ['primary', 'secondary', 'accent', 'warning', 'danger'],
      defaultValue: 'primary',
      table: {
        defaultValue: {
          summary: 'primary',
        },
        type: {
          summary: 'primary | secondary | accent | warning | danger',
        },
      },
    },
    size: {
      description: 'Size of the button that affects its padding and text size',
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
      defaultValue: 'medium',
      table: {
        defaultValue: {
          summary: 'medium',
        },
        type: {
          summary: 'small | medium | large',
        },
      },
    },
    children: {
      description: 'Content to be displayed inside the button',
      control: { type: 'text' },
      defaultValue: 'Click me',
    },
    onClick: {
      action: 'clicked',
      description: 'Callback function triggered when the button is clicked',
    },
    outline: {
      description: 'When true, renders the button with a transparent background and colored border',
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        defaultValue: {
          summary: 'false',
        },
        type: {
          summary: 'boolean',
        },
      },
    },
    loading: {
      description: 'When true, displays a loading spinner and disables the button',
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        defaultValue: {
          summary: 'false',
        },
        type: {
          summary: 'boolean',
        },
      },
    },
    disabled: {
      description:
        'When true, prevents the button from being clicked and applies a visual disabled state',
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        defaultValue: {
          summary: 'false',
        },
        type: {
          summary: 'boolean',
        },
      },
    },
    type: {
      description: "HTML button type attribute that determines the button's behavior in forms",
      control: { type: 'select' },
      options: ['button', 'submit', 'reset'],
      defaultValue: 'button',
      table: {
        defaultValue: {
          summary: 'button',
        },
        type: {
          summary: 'button | submit | reset',
        },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
A versatile button component that supports multiple variants, sizes, and states.

## Features
- Multiple visual variants (primary, secondary, accent, warning, danger)
- Three size options (small, medium, large)
- Outline mode for a lighter appearance
- Loading state with spinner animation
- Disabled state
- Form integration with type support (button, submit, reset)
- Accessible with proper ARIA attributes

## Usage
\`\`\`tsx
import { Button } from './components/button';

// Basic usage
<Button>Click me</Button>

// With variant and size
<Button variant="primary" size="large">Large Primary Button</Button>

// Outline mode
<Button variant="secondary" outline>Outline Button</Button>

// Loading state
<Button loading>Loading...</Button>

// Disabled state
<Button disabled>Disabled Button</Button>

// Form submission
<Button type="submit">Submit Form</Button>
\`\`\`
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Playground: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    children: 'Playground Button',
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Accent: Story = {
  args: {
    variant: 'accent',
    children: 'Accent Button',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Warning Button',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Danger Button',
  },
};

export const Outline: Story = {
  args: {
    variant: 'primary',
    outline: true,
    children: 'Outline Button',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    disabled: true,
    children: 'Disabled Button',
  },
};

export const Loading: Story = {
  args: {
    variant: 'primary',
    loading: true,
    children: 'Loading Button',
  },
};

export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'small',
    children: 'Small Button',
  },
};

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'large',
    children: 'Large Button',
  },
};
