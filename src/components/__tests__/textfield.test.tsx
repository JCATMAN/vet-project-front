/** @jest-environment jsdom */
import { render, screen, fireEvent } from '@testing-library/react';
import { jest } from '@jest/globals';
import { TextField } from '../textfield/textfield';

describe('TextField', () => {
  it('renders with label', () => {
    render(<TextField label="Test Label" value="" onChange={() => {}} />);
    expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
  });

  it('displays the provided value', () => {
    render(<TextField label="Test" value="Test Value" onChange={() => {}} />);
    expect(screen.getByDisplayValue('Test Value')).toBeInTheDocument();
  });

  it('calls onChange when value changes', () => {
    const handleChange = jest.fn();
    render(<TextField label="Test" value="" onChange={handleChange} />);
    fireEvent.change(screen.getByLabelText('Test'), { target: { value: 'New Value' } });
    expect(handleChange).toHaveBeenCalledWith('New Value');
  });

  it('displays placeholder text', () => {
    render(<TextField label="Test" value="" placeholder="Enter text" onChange={() => {}} />);
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
  });

  it('displays error message when error prop is provided', () => {
    render(<TextField label="Test" value="" error="Error message" onChange={() => {}} />);
    expect(screen.getByText('Error message')).toBeInTheDocument();
  });

  it('displays helper text when helperText prop is provided', () => {
    render(<TextField label="Test" value="" helperText="Helper text" onChange={() => {}} />);
    expect(screen.getByText('Helper text')).toBeInTheDocument();
  });

  it('disables input when disabled prop is true', () => {
    render(<TextField label="Test" value="" disabled onChange={() => {}} />);
    expect(screen.getByLabelText('Test')).toBeDisabled();
  });

  it('renders as read-only when readOnly prop is true', () => {
    render(<TextField label="Test" value="" readOnly onChange={() => {}} />);
    expect(screen.getByLabelText('Test')).toHaveAttribute('readonly');
  });

  it('renders with start adornment', () => {
    render(<TextField label="Test" value="" startAdornment="$" onChange={() => {}} />);
    expect(screen.getByText('$')).toBeInTheDocument();
  });

  it('renders with end adornment', () => {
    render(<TextField label="Test" value="" endAdornment="USD" onChange={() => {}} />);
    expect(screen.getByText('USD')).toBeInTheDocument();
  });

  it('renders as textarea when multiline prop is true', () => {
    render(<TextField label="Test" value="" multiline onChange={() => {}} />);
    expect(screen.getByLabelText('Test').tagName).toBe('TEXTAREA');
  });

  it('applies correct size class', () => {
    render(<TextField label="Test" value="" size="small" onChange={() => {}} />);
    const input = screen.getByLabelText('Test');
    expect(input.className).toContain('text-sm');
  });

  it('applies correct variant class', () => {
    render(<TextField label="Test" value="" variant="filled" onChange={() => {}} />);
    const input = screen.getByLabelText('Test');
    expect(input.className).toContain('bg-gray-100');
  });

  it('applies autoFocus when specified', () => {
    render(<TextField label="Test" value="" autoFocus onChange={() => {}} />);
    expect(screen.getByLabelText('Test')).toHaveFocus();
  });

  it('applies correct autoComplete attribute', () => {
    render(<TextField label="Test" value="" autoComplete="email" onChange={() => {}} />);
    expect(screen.getByLabelText('Test')).toHaveAttribute('autocomplete', 'email');
  });

  it('applies correct autoCapitalize attribute', () => {
    render(<TextField label="Test" value="" autoCapitalize="words" onChange={() => {}} />);
    expect(screen.getByLabelText('Test')).toHaveAttribute('autocapitalize', 'words');
  });

  it('applies correct autoCorrect attribute', () => {
    render(<TextField label="Test" value="" autoCorrect={false} onChange={() => {}} />);
    expect(screen.getByLabelText('Test')).toHaveAttribute('autocorrect', 'off');
  });
});
