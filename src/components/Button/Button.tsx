import { Link } from 'react-router'
import classNames from 'classnames/bind'
import styles from './Button.module.scss'
import { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'

const cx = classNames.bind(styles)

type ButtonProps = {
  to?: string
  href?: string
  primary?: boolean
  outline?: boolean
  disabled?: boolean
  rounded?: boolean
  text?: boolean
  small?: boolean
  larger?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  children: ReactNode
  className?: string
  onClick?: () => void
} & ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>

function Button({
  to,
  href,
  primary = false,
  outline = false,
  disabled = false,
  rounded = false,
  text = false,
  small = false,
  larger = false,
  leftIcon,
  rightIcon,
  children,
  className,
  onClick,
  ...passProps
}: ButtonProps) {
  let Component: React.ElementType = 'button'
  const classes = cx('wrapper', {
    [className as string]: className,
    primary,
    outline,
    disabled,
    rounded,
    text,
    small,
    larger,
  })

  const props: Partial<ButtonProps & { [key: string]: unknown }> = {
    onClick,
    ...passProps,
  }

  if (to) {
    props.to = to
    Component = Link
  } else if (href) {
    props.href = href
    Component = 'a'
  }

  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (
        key.startsWith('on') &&
        typeof (props as Record<string, unknown>)[key] === 'function'
      ) {
        delete props[key]
      }
    })
  }

  return (
    <Component className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Component>
  )
}

export default Button
