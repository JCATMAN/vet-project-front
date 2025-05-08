import React from 'react';

interface TextFieldProps {
  label: string;
  value: string;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  helperText?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'outlined' | 'filled' | 'standard';
  startAdornment?: string;
  endAdornment?: string;
  multiline?: boolean;
  rows?: number;
  maxRows?: number;
  readOnly?: boolean;
  autoFocus?: boolean;
  autoComplete?: string;
  autoCapitalize?: string;
  autoCorrect?: boolean;
  onChange: (value: string) => void;
}

export const TextField: React.FC<TextFieldProps> = ({
  label,
  value,
  onChange,
  placeholder,
  disabled = false,
  error,
  helperText,
  size = 'medium',
  variant = 'outlined',
  startAdornment,
  endAdornment,
  multiline = false,
  rows = 1,
  maxRows,
  readOnly = false,
  autoFocus = false,
  autoComplete,
  autoCapitalize,
  autoCorrect = false,
}) => {
  const sizeClasses = {
    small: 'text-sm py-1 px-2',
    medium: 'text-base py-2 px-3',
    large: 'text-lg py-3 px-4',
  };

  const variantClasses = {
    outlined: 'border border-gray-300 bg-white',
    filled: 'border-0 bg-gray-100',
    standard: 'border-b border-gray-300 bg-transparent rounded-none',
  };

  const baseInputClasses = `
    text-gray-900
    w-full rounded-md shadow-sm
    focus:outline-none focus:ring-0
    focus:shadow-xs focus:shadow-primary-400
    transition-shadow duration-200
    disabled:bg-gray-100 disabled:cursor-not-allowed
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${error ? 'border-red-500 focus:shadow-red-100' : 'focus:shadow-xs focus:shadow-primary-400'}
    ${multiline && maxRows ? `max-h-[${maxRows * 1.5}em] overflow-y-auto` : ''}
  `;

  const InputComponent = multiline ? 'textarea' : 'input';

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={label} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="relative">
        {startAdornment && (
          <div className="absolute top-1/2 left-3 -translate-y-1/2 font-medium text-gray-500">
            {startAdornment}
          </div>
        )}
        <InputComponent
          id={label}
          value={value}
          onChange={e => onChange(e.target.value)}
          className={`${baseInputClasses} ${startAdornment ? 'pl-10' : ''} ${endAdornment ? 'pr-10' : ''}`}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          autoFocus={autoFocus}
          autoComplete={autoComplete}
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect ? 'on' : 'off'}
          rows={multiline ? rows : undefined}
        />
        {endAdornment && (
          <div className="absolute top-1/2 right-3 -translate-y-1/2 font-medium text-gray-500">
            {endAdornment}
          </div>
        )}
      </div>
      {(error || helperText) && (
        <p className={`text-sm ${error ? 'text-red-500' : 'text-gray-500'}`}>
          {error || helperText}
        </p>
      )}
    </div>
  );
};
