interface MenuLinkProps {
    item: {
        icon: JSX.Element;
        title: string;
        path: string;
    }
}

const MenuLink = ({item}: MenuLinkProps) => {
  return (
    <div>MenuLink</div>
  )
}

export default MenuLink