import { useContext, createContext, useState, useEffect } from "react";
import { ChevLeft, ChevRight, COMPANY_NAME, Logo, SIDEBAR_MENU_RESPONSIVE_WIDTH } from "../utils";
import PropTypes from "prop-types";
const SidebarContext = createContext();

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true);
  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth < SIDEBAR_MENU_RESPONSIVE_WIDTH) {
  //       setExpanded(false);
  //     }
  //     if (window.innerWidth > SIDEBAR_MENU_RESPONSIVE_WIDTH) {
  //       setExpanded(true);
  //     }
  //   };
  //   handleResize();
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);
  return (
    // <aside className={`sidebar-component ${expanded ? "expanded" : "collapsed"}`}>
    <aside className={`sidebar-component`}>
      <nav className="h-full flex flex-col bg-white shadow-sm">
        <div className={`flex ${expanded ? "justify-between sidebar-header-wrapper-expand" : "justify-center sidebar-header-wrapper-collapse"} items-center`}>
          {expanded && (
            <div className={`flex gap-[10px] items-center`}>
              <img src={Logo} className={`overflow-hidden transition-all h-[24px] ${expanded ? "w-[28px]" : "w-0"}`} alt="" />
              <span className={`overflow-hidden text-[22px] font-bold ${expanded ? "visible" : "hidden"}`}>{COMPANY_NAME}</span>
            </div>
          )}
          {/* <button onClick={() => (window.innerWidth < 520 ? null : setExpanded((curr) => !curr))} className=""> */}
          <button onClick={() => setExpanded((curr) => !curr)} className="">
            {expanded ? <img src={ChevLeft} /> : <img src={ChevRight} />}
          </button>
        </div>
        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 space-y-[8px]">{children}</ul>
        </SidebarContext.Provider>
      </nav>
    </aside>
  );
}

Sidebar.propTypes = {
  children: PropTypes.node,
};

export function SidebarItem({ icon, text, active, alert, isTitle }) {
  const { expanded } = useContext(SidebarContext);
  if (isTitle) {
    return <li className={`sidebar-menu-title uppercase text-[11px] transition-all text-secondary ${expanded ? "visible" : "hidden"}`}>{text}</li>;
  }
  return (
    <li
      className={`
     relative flex items-center my-1 font-medium cursor-pointer transition-colors group rounded-sm sidebar-menu-list
        ${active ? "bg-tertiary text-primary font-semibold" : "hover:bg-tertiary text-secondary font-normal"}
        ${expanded ? "sidebar-menu-list-expand" : "sidebar-menu-list-collapse"}
    `}
    >
      <img src={icon} alt="icon-sidebar-jobins" />
      <span className={`overflow-hidden transition-all text-[15px] text-nowrap ${expanded ? "w-52" : "w-0"}`}>{text}</span>
      {alert && <div className={`absolute right-2 w-2 h-2 rounded bg-tertiary ${expanded ? "" : "top-2"}`} />}
      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-5
          bg-secondary text-white text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
          max-w-[200px]
      `}
        >
          {text}
        </div>
      )}
    </li>
  );
}
SidebarItem.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
  active: PropTypes.bool,
  alert: PropTypes.bool,
  isTitle: PropTypes.bool,
};
