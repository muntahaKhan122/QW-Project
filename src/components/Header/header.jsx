/* eslint-disable require-jsdoc */
/* eslint-disable react/prop-types */
import React, {useEffect, useState} from 'react';
import '../../css/signup.css';
import {Nav, Navbar, Form} from 'react-bootstrap';
import {Auth} from 'aws-amplify';

const Header = (props) =>{
  const [activeLink, setActivelink]=useState('/Quotes');
  const [searchData, setSearch]=useState('');
  const getURL=()=> {
    const location = window.location.pathname;
    return location;
  };

  useEffect(()=>{
    setActivelink(getURL());
  }, []);

  const handleKeyDown=(e)=>{
    if (e.key === 'Enter') {
      props.setData(searchData);
    }
  };

  async function signOut() {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }
  return (

    <Navbar expand="lg" >
      <Navbar.Brand href="/"></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Form className="form-center">
      </Form>

      <div className="container-fluid">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {activeLink==='/Quotes'?
            <Nav.Item name="quotes" style={{backgroundColor: '#957575'}}>
              <Nav.Link href="/Quotes" style={{color: 'white'}}>
                Quotes</Nav.Link>
            </Nav.Item> :
            <Nav.Item name="quotes" >
              <Nav.Link href="/Quotes" style={{color: 'white'}}>
                Quotes</Nav.Link>
            </Nav.Item>
            }
            {activeLink==='/Wallpapers' ?
            <Nav.Item name="wallpaper" style={{backgroundColor: '#957575'}}>
              <Nav.Link href="/Wallpapers" style={{color: 'white'}}>
            Wallpapers</Nav.Link>
            </Nav.Item>:
            <Nav.Item name="wallpaper">
              <Nav.Link href="/Wallpapers" style={{color: 'white'}}>
            Wallpapers</Nav.Link>
            </Nav.Item>


            }


          </Nav>


          {activeLink==='/Quotes'?
         <Nav className="justify-content-end">
           <Nav.Item >
             <span style={{color: 'white', marginRight: '5px'}}>Search</span>
             <input type="search" style={{alignSelf: 'right'}}
               value={searchData} onChange={(e) => setSearch(e.target.value)}
               name="searchQuote" onKeyDown={handleKeyDown}/>
           </Nav.Item>
           <Nav.Item name="signout">
             <Nav.Link href="/" onClick={signOut()}
               style={{color: 'white', float: 'inline-end'}}>
            Sign Out</Nav.Link>
           </Nav.Item>

         </Nav>:
         <Nav className="justify-content-end">
           <Nav.Item name="signout" style={{float: 'inline-end'}}>
             <Nav.Link href="/" onClick={signOut()}
               style={{color: 'white'}}>
                   Sign Out</Nav.Link>
           </Nav.Item>
         </Nav>
          }

        </Navbar.Collapse>
      </div>
    </Navbar>
  )
  ;
};

export default Header;
