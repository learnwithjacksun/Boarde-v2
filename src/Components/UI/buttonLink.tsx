import { Link } from "react-router-dom"

interface ButtonLinkProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    to: string
}

const ButtonLink = ({children, to, ...props}: ButtonLinkProps) => {
  return (
    <Link to={to}>
        <button {...props}>
        {children}
        </button>
    </Link>
  )
}
export default ButtonLink