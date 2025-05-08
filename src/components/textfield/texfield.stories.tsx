import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from './textfield';

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A versatile text input component that supports various states and configurations.

## Features
- Multiple variants: outlined, filled, and standard
- Different sizes: small, medium, and large
- Support for error states and helper text
- Optional start and end adornments
- Multiline support with configurable rows
- Full keyboard accessibility
- Customizable through various HTML input attributes

## Usage
\`\`\`tsx
import { TextField } from './components/textfield';

// Basic usage
<TextField
  label="Username"
  value={username}
  onChange={setUsername}
/>

// With error state
<TextField
  label="Email"
  value={email}
  error="Please enter a valid email"
  onChange={setEmail}
/>

// With adornments
<TextField
  label="Price"
  value={price}
  startAdornment="$"
  endAdornment="USD"
  onChange={setPrice}
/>

// Multiline
<TextField
  label="Description"
  value={description}
  multiline
  rows={4}
  onChange={setDescription}
/>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    label: {
      description: 'Label for the text field',
      control: { type: 'text' },
    },
    value: {
      description: 'Value of the text field',
      control: { type: 'text' },
    },
    placeholder: {
      description: 'Placeholder text',
      control: { type: 'text' },
    },
    disabled: {
      description: 'Whether the text field is disabled',
      control: { type: 'boolean' },
    },
    error: {
      description: 'Error message to display',
      control: { type: 'text' },
    },
    helperText: {
      description: 'Helper text to display below the input',
      control: { type: 'text' },
    },
    size: {
      description: 'Size of the text field',
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    variant: {
      description: 'Variant of the text field',
      control: { type: 'select' },
      options: ['outlined', 'filled', 'standard'],
    },
    startAdornment: {
      description: 'Text to display at the start of the input',
      control: { type: 'text' },
    },
    endAdornment: {
      description: 'Text to display at the end of the input',
      control: { type: 'text' },
    },
    multiline: {
      description: 'Whether the text field is multiline',
      control: { type: 'boolean' },
    },
    rows: {
      description: 'Number of rows for multiline text field',
      control: { type: 'number' },
    },
    maxRows: {
      description: 'Maximum number of rows for multiline text field',
      control: { type: 'number' },
    },
    readOnly: {
      description: 'Whether the text field is read-only',
      control: { type: 'boolean' },
    },
    autoFocus: {
      description: 'Whether the text field should auto-focus',
      control: { type: 'boolean' },
    },
    autoComplete: {
      description: 'HTML autocomplete attribute',
      control: { type: 'text' },
    },
    autoCapitalize: {
      description: 'HTML autocapitalize attribute',
      control: { type: 'text' },
    },
    autoCorrect: {
      description: 'Whether to enable autocorrect',
      control: { type: 'boolean' },
    },
    onChange: {
      description: 'Callback function triggered when the text field value changes',
      action: 'changed',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Playground: Story = {
  args: {
    label: 'Playground Text Field',
    value: '',
    placeholder: 'Enter text here',
  },
};

export const WithValue: Story = {
  args: {
    label: 'Text Field with Value',
    value: 'Hello World',
  },
};

export const WithError: Story = {
  args: {
    label: 'Text Field with Error',
    value: 'Invalid input',
    error: 'This field is required',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Text Field with Helper Text',
    value: '',
    helperText: 'This is a helper text',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Text Field',
    value: 'Cannot edit this',
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    label: 'Read Only Text Field',
    value: 'Cannot edit this',
    readOnly: true,
  },
};

export const WithAdornments: Story = {
  args: {
    label: 'Text Field with Adornments',
    value: '',
    startAdornment: '$',
    endAdornment: 'USD',
  },
};

export const Multiline: Story = {
  args: {
    label: 'Multiline Text Field',
    value: 'This is a multiline text field.\nIt can contain multiple lines of text.',
    multiline: true,
    rows: 3,
  },
};

export const Small: Story = {
  args: {
    label: 'Small Text Field',
    value: '',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    label: 'Large Text Field',
    value: '',
    size: 'large',
  },
};

export const Filled: Story = {
  args: {
    label: 'Filled Text Field',
    value: '',
    variant: 'filled',
  },
};

export const Standard: Story = {
  args: {
    label: 'Standard Text Field',
    value: '',
    variant: 'standard',
  },
};
