import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'accent' | 'warning' | 'danger';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  outline?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Spinner = () => (
  <div
    className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
    aria-hidden="true"
  />
);

export const Button = ({
  variant = 'primary',
  size = 'medium',
  children,
  disabled = false,
  loading = false,
  outline = false,
  onClick,
  type = 'button',
}: ButtonProps) => {
  const getButtonClasses = (
    variant: string,
    outline: boolean,
    disabled: boolean,
    loading: boolean
  ) => {
    const base = disabled || loading ? 'opacity-50 cursor-not-allowed' : '';
    const filled = `bg-${variant}-500 hover:bg-${variant}-600 text-white ${base}`;
    const bordered = `border border-${variant}-500 text-${variant}-500 hover:bg-${variant}-500 hover:text-white ${base}`;
    return outline ? bordered : filled;
  };

  const setSize = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-md',
    large: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={`${getButtonClasses(variant, outline, disabled, loading)} ${setSize[size]} relative flex items-center justify-center rounded-[5%] shadow-sm`}
      disabled={disabled || loading}
      onClick={onClick}
      aria-disabled={disabled || loading}
      aria-busy={loading}
      type={type}
    >
      {loading && (
        <div className="absolute left-1/2 -translate-x-1/2">
          <Spinner />
        </div>
      )}
      <span className={loading ? 'invisible' : ''}>{children}</span>
    </button>
  );
};
