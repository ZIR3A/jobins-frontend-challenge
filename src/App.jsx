import Sidebar, { SidebarItem } from './shared/Sidebar'
import { SmartHomeIcon } from './utils'
function App() {

  return (
    <>
      <div className="flex">
        <Sidebar>
          <SidebarItem icon={""} text="Main Menu" active={true} isTitle={true} />
          <SidebarItem icon={SmartHomeIcon} text="Dashboard" active={true} />
          <SidebarItem icon={""} text="hhh" active={true} isTitle={true} />
        </Sidebar>
        <div>asdasdasd</div>
      </div>
    </>
  )
}

export default App
