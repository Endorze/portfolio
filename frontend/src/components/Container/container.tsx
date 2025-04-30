import { ReactNode, HTMLAttributes } from "react";
import styles from "./container.module.css"

type Props = {
    className?: string,
    children: ReactNode,
} & HTMLAttributes<HTMLDivElement>; 

const Container = ({ className, children, ...rest } : Props) => (<div className={[styles.container, className].join(" ")} {...rest}>{children}</div>)

export default Container;