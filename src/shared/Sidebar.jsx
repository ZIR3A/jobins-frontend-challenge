import { ChevronLast, ChevronFirst } from "lucide-react";
import { useContext, createContext, useState } from "react";
import { company_name, Logo, SmartHome } from "../utils";

const SidebarContext = createContext();

export default function Sidebar({ children }) {
    const [expanded, setExpanded] = useState(true);

    return (
        <aside className="h-screen sidebar-component">
            <nav className="h-full flex flex-col bg-white border-r shadow-sm">
                <div className={`flex ${expanded ? "justify-between sidebar-header-wrapper-expand" : "justify-center sidebar-header-wrapper-collapse"} items-center`}>
                    {expanded && (
                        <div className={`flex gap-[10px] items-center`}>
                            <img src={Logo} className={`overflow-hidden transition-all h-[24px] ${expanded ? "w-[28px]" : "w-0"}`} alt="" />
                            <span className={`overflow-hidden text-[22px] font-bold ${expanded ? "visible" : "hidden"}`}>{company_name}</span>
                        </div>
                    )}
                    <button onClick={() => setExpanded((curr) => !curr)} className="">
                        {expanded ? <ChevronFirst /> : <ChevronLast />}
                    </button>
                </div>

                <SidebarContext.Provider value={{ expanded }}>
                    <ul className="flex-1">{children}</ul>
                </SidebarContext.Provider>
            </nav>
        </aside>
    );
}

export function SidebarItem({ icon, text, active, alert, isTitle }) {
    const { expanded } = useContext(SidebarContext);
    if (isTitle) {
        return <li className={`sidebar-menu-title uppercase text-[11px] transition-all text-secondary ${expanded ? "visible" : "hidden"}`}>MAIN MENU</li>;
    }
    return (
        <li
            className={`
     relative flex items-center my-1 font-medium cursor-pointer transition-colors group rounded-sm sidebar-menu-list
        ${active ? "bg-tertiary text-primary expand" : "hover:bg-tertiary text-secondary collapse"}
        ${expanded ? "" : "!p-2 !mx-2"}
    `}
        >
            <img src={SmartHome} alt="home-icon" />
            {expanded && <span className={`overflow-hidden transition-all text-[15px] font-semibold ${expanded ? "w-52" : "w-0"}`}>{text}</span>}
            {alert && <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? "" : "top-2"}`} />}
            {!expanded && (
                <div
                    className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-primary text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
                >
                    {text}
                </div>
            )}
        </li>
    );
}
