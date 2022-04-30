import React, { useState } from 'react';
import { Button, CloseButton } from 'react-bootstrap';


const OffCanvas = () => {
    const [visible, setVisible] = useState(false)
    return (
        <div>
            <>
                <Button onClick={() => setVisible(!visible)}>Toggle offcanvas</Button>
                <div className='position-absolute' style={{ left: visible ? '0' : '-1600px' }} placement="start" visible='false' onHide={() => setVisible(false)}>
                    <offcanvasHeader>
                        <offcanvasTitle>Offcanvas</offcanvasTitle>
                        <CloseButton className="text-reset" onClick={() => setVisible(false)} />
                    </offcanvasHeader>
                    <offcanvasBody>
                        Content for the offcanvas goes here. You can place just about any Bootstrap component or
                        custom elements here.
                    </offcanvasBody>
                </div>
            </>
        </div >
    );
};

export default OffCanvas;