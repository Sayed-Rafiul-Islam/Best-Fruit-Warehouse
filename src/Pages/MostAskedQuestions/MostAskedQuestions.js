import React from 'react';
import { Accordion } from 'react-bootstrap';
import './MostAskedQuestions.css'
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const MostAskedQuestions = () => {
    return (
        <div className='width pe-2 mt-lg-0 mt-5' style={{ overflow: 'hidden' }} >
            <div data-aos="fade-up-right" data-aos-duration="1000">
                <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><span className='text-success'>How is the quality of our fruits?</span></Accordion.Header>
                        <Accordion.Body>
                            <i className="text-success">We store the fruits in storages which are highly efficient and thus, the quality of the fruits remain constant. We can provide the most natural taste because no chemicals are used to preserve them but high end technology</i>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header><span className='text-success'>Where do we import our fruits from?</span></Accordion.Header>
                        <Accordion.Body>
                            <i className="text-success">We import our fruits from all over the world. As the weather is not same at every corner of Earth at the same time, we are able to stock almost all kinds of fruits in all seasons, so if our employer asks us to deliver Mangos while the is's summer, we are able to provide</i>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header><span className='text-success'>How do we function?</span></Accordion.Header>
                        <Accordion.Body>
                            <i className='text-success'>Well we have central team, they act as the hub. The are the ones who connect our suppliers from all over the globe. And the suppliers are freelancers basically but we do research our freelancers before we hire them for safety and efficiency purposes</i>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default MostAskedQuestions;