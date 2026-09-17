export default function Button({ children, dark = false, className = '', ...props }) {
  const style = dark ? 'dark-button' : 'outline-button'

  return <button className={`${style} ${className}`} {...props}>{children}</button>
}
