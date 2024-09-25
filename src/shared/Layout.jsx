import PropTypes from "prop-types";
import { memo } from "react";
import Sidebar, { SidebarItem } from "./Sidebar";
import { BoxIcon, CirclePlusIcon, ShoppingCartIcon, SmartHomeIcon, StarIcon } from "../utils";

const Layout = memo(function Layout({ children }) {
  // sidebar menus lists
  const _sideNavMenuLists = [
    {
      name: "Main Menu",
      isTitle: true,
    },
    {
      name: "Dashboard",
      active: true,
      icon: SmartHomeIcon
    },
    {
      name: "Order Management",
      icon: ShoppingCartIcon
    },
    {
      name: "Brand",
      active: false,
      icon: StarIcon
    },
    {
      name: "Products",
      isTitle: true,
    },
    {
      name: "Add Products",
      icon: CirclePlusIcon
    },
    {
      name: "Product List",
      icon: BoxIcon
    },
  ]
  return (
    <div className="flex">
      <Sidebar>
        {_sideNavMenuLists?.map(({ name = "", isTitle = false, active = false, icon = "" }, _index) => (
          <SidebarItem icon={icon} text={name} active={active} isTitle={isTitle} key={_index} />
        ))}
      </Sidebar>
      <section className="main-section-wrapper">
        {/* DIfferent routes can be defined here */}
        {/* For now its only dashboard */}
        {children}
      </section>
    </div>
  );
});

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
