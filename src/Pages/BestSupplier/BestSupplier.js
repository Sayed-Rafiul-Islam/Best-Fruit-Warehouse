import React from 'react';
import { Card } from 'react-bootstrap';
import './BestSupplier.css'
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();



const BestSupplier = () => {

    return (
        <div className='row' style={{ overflow: 'hidden' }}>
            <h1 className='text-center'>OUR BEST <span className='text-success'>SUPPLIERS</span></h1>
            <div className='col-12 col-lg-4 my-2' data-aos="fade-up-left" data-aos-duration="1000">
                <Card className="position-relative overflow-hidden box">
                    <Card.Img className='sup-image' src='https://i.ibb.co/LC7zQQ0/avatar-2.jpg' alt="Card image" />
                    <Card.ImgOverlay className='overlay'>

                    </Card.ImgOverlay>
                    <Card.ImgOverlay>
                        <div className='extra-information w-100'>
                            <img className='name-bg' src="https://i.ibb.co/HdDc1cb/menu.png" alt="" />
                            <h5 className='position-absolute name text-success'>Arron Cross</h5> <br />
                            <Card.Text className='text-light position-relative location' >London, England</Card.Text>
                        </div>
                    </Card.ImgOverlay>
                </Card>

            </div >
            <div className='col-12 col-lg-4 my-2' data-aos="flip-up" data-aos-duration="1000">
                <Card className="position-relative overflow-hidden box">

                    <Card.Img className='sup-image' src='https://i.ibb.co/Z20Fy6N/avatar-1.jpg' alt="Card image" />
                    <Card.ImgOverlay className='overlay'>
                        <div></div>
                    </Card.ImgOverlay>
                    <Card.ImgOverlay>
                        <div className='extra-information w-100'>
                            <img className='name-bg' src="https://i.ibb.co/HdDc1cb/menu.png" alt="" />
                            <h5 className='position-absolute name text-success'>Ahmed Sharif</h5> <br />
                            <Card.Text className='text-light position-relative location' >Chittagong, Bangladesh</Card.Text>
                        </div>
                    </Card.ImgOverlay>
                </Card>
            </div>
            <div className='col-12 col-lg-4 my-2' data-aos="fade-up-right" data-aos-duration="1000">
                <Card className="position-relative overflow-hidden box">

                    <Card.Img className='sup-image' src='https://i.ibb.co/x2zj2jF/avatar-3.jpg' alt="Card image" />
                    <Card.ImgOverlay className='overlay'>
                        <div></div>
                    </Card.ImgOverlay>
                    <Card.ImgOverlay>
                        <div className='extra-information w-100'>
                            <img className='name-bg' src="https://i.ibb.co/HdDc1cb/menu.png" alt="" />
                            <h5 className='position-absolute name text-success'>Manish Pandey</h5> <br />
                            <Card.Text className='text-light position-relative location' >Delhi, India</Card.Text>
                        </div>
                    </Card.ImgOverlay>
                </Card>
            </div>
        </div >
    );
};

export default BestSupplier;