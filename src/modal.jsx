import React, { Component, useEffect, useRef, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const OpenModal=(props)=> {
    const [showw, setShow] = useState(false);
  
    const handleClose = () => {
        props.setOpen(false);
        setShow(false);
    }
  
    useEffect(() => {
        console.log("in use eff modal",props.open);
        
        setShow(props.open);
    },[props.open] 
    

    );


    return (
      <>

  
        <Modal show={showw} onHide={handleClose}>
          <Modal.Header >
            <Modal.Title style={{textAlign:"center"}}>Wallpaper</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <img src={props.url} width="300px" height="400px"/>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

 export default  OpenModal;