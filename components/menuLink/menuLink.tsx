"use client"

import { usePathname } from "next/navigation";
import styles from "./menuLink.module.css";
import Link from "next/link";

interface MenuLinkProps {
    item: {
        icon: JSX.Element;
        title: string;
        path: string;
    }
}

const MenuLink = ({item}: MenuLinkProps) => {

    const pathname = usePathname();

    return (
    <Link href={item.path} className={`${styles.container} ${pathname === item.path && styles.active}`}>
        {item.icon} {item.title}
    </Link>
    )
}

export default MenuLink