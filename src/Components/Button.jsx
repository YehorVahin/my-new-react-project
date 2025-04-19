import clsx from "clsx"
const Button = ({variant, children}) => {
    return <button className={clsx("button", variant)}>{children}</button>
}

export const LoginButton = () => {
    return <Button variant="primary">Login</Button>
}
export const FollowButton = () => {
    return <Button variant="secondary">Follow</Button>
}