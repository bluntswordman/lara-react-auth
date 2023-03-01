import ComponentInterface from '@/contract/interfaces/ComponentInterface'

interface AlertProps extends ComponentInterface {
  variant: 'success' | 'error' | 'warning' | 'info'
}

enum AlertVariant {
  success = 'bg-green-200 text-green-900 border-green-900',
  error = 'bg-red-200 text-red-900 border-red-900',
  warning = 'bg-yellow-200 text-yellow-900 border-yellow-900',
  info = 'bg-blue-200 text-blue-900 border-blue-900'
}

const Alert: React.FC<AlertProps> = ({
  children,
  variant = 'success'
}) => {
  return (
    <span className={`border rounded-md select-none text-center text-sm font-semibold px-2.5 py-2 ${AlertVariant[variant]}`}>
      {children}
    </span>
  )
}

export default Alert