import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Img1 from './img/cardImg1.png';
import Img1Thumb2 from './img/img2_thumb2.png';
import Img1Thumb3 from './img/img2_thumb3.png';
import { Container, Row, Col, Card } from "react-bootstrap";


class ImageGallaryComponent extends React.Component {
    render() {
        return (
            
            <Row>
            <Col>
           <Card style={{ width:'18rem'}} className="border-0 bg-transparent rounded-0">
           <div className="itemTitle themeColor">PCC</div>
           <div>
               
               <Carousel interval="500" transitionTime="500">
                   <div>
                       
                       <img src={Img1} className="img-fluid" />
                      
                   </div>
                   <div>
                   <img src={Img1Thumb2}  className="img-fluid"/>
                   </div>
                   <div>
                   <img src={Img1Thumb3} className="img-fluid" />
                   </div>
               </Carousel>
           </div>
           

            
          </Card>
           </Col>
           <Col>
           
           </Col>
           <Col>
           
           </Col>

           <Col>
           <Card style={{ width:'18rem'}} className="border-0 bg-transparent rounded-0">
           <div className="itemTitle themeColor">PCC</div>
           <div>
               
               <Carousel interval="500" transitionTime="500">
                   <div>
                       <img src={Img1} />
                      
                   </div>
                   <div>
                   <img src={Img1} />
                   </div>
                   <div>
                   <img src={Img1} />
                   </div>
               </Carousel>
           </div>
           

            
          </Card>
           </Col>
           <Col>
           
           </Col>
           <Col>
           
           </Col>

           <Col>
           <Card style={{ width:'18rem'}} className="border-0 bg-transparent rounded-0">
           <div className="itemTitle themeColor">PCC</div>
           <div>
               
               <Carousel interval="500" transitionTime="500">
                   <div>
                       <img src={Img1} />
                      
                   </div>
                   <div>
                   <img src={Img1} />
                   </div>
                   <div>
                   <img src={Img1} />
                   </div>
               </Carousel>
           </div>
           

            
          </Card>
          
           
          
          
           
           </Col>

           </Row>
           
        )
    };
}

export default ImageGallaryComponent; 

