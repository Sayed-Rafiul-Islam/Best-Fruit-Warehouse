import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Founders'

const Founders = () => {
    return (
        <div>
            <CardGroup>
                <Card className='border border-success'>
                    <Card.Img variant="top" src="https://i.ibb.co/Z20Fy6N/avatar-1.jpg" />
                    <Card.Body className='bg-color'>
                        <Card.Title><span className='text-success'><i>Arup Ghatak</i></span></Card.Title>
                        <Card.Text>
                            <i className='text-success'>Born in 1990 at Dinajpur, Bangladesh. Graduated from Bangladesh Agricultural University in Food Engineering. Currently lives in Shanghai, China.</i>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted"><span className='text-success'>Contact Email : arupghatak948@gmail.com</span></small>
                    </Card.Footer>
                </Card>
                <Card className='border border-success'>
                    <Card.Img variant="top" src="https://i.ibb.co/jHHKh8D/avatar-2.jpg" />
                    <Card.Body className='bg-color'>
                        <Card.Title><span className='text-success'><i>Eera Khan</i></span></Card.Title>
                        <Card.Text>
                            <i className='text-success'>Born in 1992 at Dhaka, Bangladesh. Graduated from Shahjalal University of Science and Technology in public administration . Currently lives in AmsterDam, Netherlands.</i>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted"><span className='text-success'>Contact Email : eerakhan228@yahoo.com</span></small>
                    </Card.Footer>
                </Card>
                <Card className='border border-success'>
                    <Card.Img variant="top" src="https://i.ibb.co/DDzLJrp/avatar-3.jpg" />
                    <Card.Body className='bg-color'>
                        <Card.Title><span className='text-success'><i>Araf Shahriar</i></span></Card.Title>
                        <Card.Text>
                            <i className='text-success'>Born in 1993 at Chittagong, Bangladesh. Graduated from Shahjalal University of Science and Technology in physics. Currently lives in New York, USA.</i>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted"><span className='text-success'>Contact Email : shahriararaf35@yahoo.com</span></small>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Founders;