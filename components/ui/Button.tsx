import Link from 'next/link'

type ButtonProps = {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'white' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
}

const BASE =
  'inline-flex items-center justify-center font-heading font-semibold rounded-full transition-all'

const VARIANTS = {
  primary: 'bg-bh-blue text-white hover:opacity-90 active:scale-[0.98]',
  secondary: 'border-2 border-bh-blue text-bh-blue hover:bg-bh-blue hover:text-white active:scale-[0.98]',
  white: 'bg-white text-bh-blue hover:opacity-90 active:scale-[0.98]',
  ghost: 'border-2 border-white text-white hover:bg-white hover:text-bh-blue active:scale-[0.98]',
}

const SIZES = {
  sm: 'px-5 py-2 text-sm',
  md: 'px-8 py-3 text-base',
  lg: 'px-10 py-4 text-lg',
}

export function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const classes = [BASE, VARIANTS[variant], SIZES[size], disabled && 'opacity-50 cursor-not-allowed', className]
    .filter(Boolean)
    .join(' ')

  if (href) {
    if (href.startsWith('http') || href.startsWith('https')) {
      return <a href={href} className={classes}>{children}</a>
    }
    return <Link href={href} className={classes}>{children}</Link>
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}
