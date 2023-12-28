
const Sidebar = ({setCategory}) => {
    return ( 
        <nav style={{cursor:"pointer"}} className="fw-bold py-5 text-dark  ">
            <ul className="navbar-nav">
            <li className="nav-item mb-3">
            <div onClick={()=>setCategory("technology")}>Technology</div>
            </li>
              <li className="nav-item mb-3">
                <div onClick={()=>setCategory("business")}>Business</div>
                </li>
              <li className="nav-item mb-3">
              <div onClick={()=>setCategory("health")}>Health</div>
              </li>
              <li className="nav-item mb-3">
                <div onClick={()=>setCategory("sports")}>Sports</div>
                </li>
              <li className="nav-item mb-3">
                <div onClick={()=>setCategory("science")}>Science</div>
                </li>
              <li className="nav-item mb-3">
                <div onClick={()=>setCategory("entertainment")}>Entertainment</div>
                </li>
            </ul>
        
      </nav>
    )
}
 
export default Sidebar;