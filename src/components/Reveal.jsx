import useInView from '../hooks/useInView'

/**
 * Wraps children in an element that fades/slides in the first time it
 * scrolls into view. `as` picks the wrapper tag, `variant` picks the CSS
 * animation style (see .reveal / .reveal-fade / .reveal-scale in index.css).
 */
export default function Reveal({
  children,
  as: Tag = 'div',
  variant = 'up',
  delay = 0,
  className = '',
  mobileRootMargin,
  ...rest
}) {
  const [ref, isInView] = useInView({ mobileRootMargin })

  const variantClass =
    variant === 'fade'
      ? 'reveal-fade'
      : variant === 'scale'
        ? 'reveal-scale'
        : variant === 'left'
          ? 'reveal-left'
          : 'reveal'

  return (
    <Tag
      ref={ref}
      className={`${variantClass} ${isInView ? 'is-visible' : ''} ${className}`.trim()}
      style={{ transitionDelay: isInView ? `${delay}ms` : '0ms' }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
