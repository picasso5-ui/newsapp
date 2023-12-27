import {Container,Row,Col,Badge} from "react-bootstrap";
import NewsList from "./NewsList";
import Sidebar from "./Sidebar";

const Hero = () =>{
   return(
       <>
       <Container fluid className="mt-4">
         <Row>
           <Col xs={12} md={3}>
              <Sidebar />
           </Col>
           <Col>
             <h3 className="text-center">Latest<span className="badge bg-danger">News</span></h3>
             <NewsList />
           </Col>
         </Row>
       
       </Container>
       </>
   )
}


export default Hero;