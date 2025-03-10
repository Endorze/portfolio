import styles from "./container.module.css"

const Container = ({ className, children, ...rest }) => (<div className={[styles.container, className].join(" ")} {...rest}>{children}</div>)

export default Container;