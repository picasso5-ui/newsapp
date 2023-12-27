import {Nav} from "react-bootstrap"

const Sidebar = () => {
    return ( 

        <div>
            <h2>Categories</h2>
           <Nav className="flex-column">
           <Nav.Link href="#action1">World</Nav.Link>
           <Nav.Link href="#action2">Business</Nav.Link>
           <Nav.Link href="#action2">Technology</Nav.Link>
           <Nav.Link href="#action2">Sports</Nav.Link>
           <Nav.Link href="#action2">Entertainment</Nav.Link>
           </Nav>
        </div>
     )
}
 
export default Sidebar;