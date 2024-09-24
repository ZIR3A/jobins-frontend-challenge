import Sidebar, { SidebarItem } from './shared/Sidebar'
function App() {

  return (
    <>
      <div className="flex">
        <Sidebar>
          <SidebarItem icon={""} text="hhh" active={true} />
        </Sidebar>
        <div>asdasdasd</div>
      </div>
    </>
  )
}

export default App
