import React, { useEffect, useState } from 'react';
import '../../css/signup.css';
import { Nav, Navbar, Form } from 'react-bootstrap';

const Header = (props) =>{

  const [activeLink,setActivelink]=useState("/Quotes");
  const [linkColor,setLinkColor]=useState("");
  const [searchData,setSearch]=useState("");
  function GetURL() {
    const location = window.location.pathname;
    
    return location;
   }

  useEffect(()=>{
    setActivelink(GetURL());
  },[]); 

  const handleKeyDown=(e)=>{
    console.log("down");
    if (e.key === 'Enter'){
      console.log("enter",searchData);
      props.setData(searchData);      
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
            {activeLink==="/Quotes"?
            <Nav.Item name="quotes"  style={{backgroundColor:"#957575"}}>
            <Nav.Link  href="/Quotes"  style={{color:"white"}}>Quotes</Nav.Link>
            </Nav.Item> :            
            <Nav.Item name="quotes" >
              <Nav.Link  href="/Quotes"  style={{color:"white"}}>Quotes</Nav.Link>
              </Nav.Item>           
            }
            {activeLink==="/Wallpapers" ?
            <Nav.Item name="wallpaper" style={{backgroundColor:"#957575"}}>
              <Nav.Link href="/Wallpapers" style={{color:"white"}}>
            Wallpapers</Nav.Link>
            </Nav.Item>:
            <Nav.Item name="wallpaper"><Nav.Link href="/Wallpapers" style={{color:"white"}}>
            Wallpapers</Nav.Link>
            </Nav.Item>


            }
   
            
            

          </Nav>


         {activeLink==="/Quotes"?
         <Nav className="me-auto">
       
          <Nav.Item style={{marginLeft:"900px"}}>  
            <span style={{color:"white",marginRight:"5px"}}>Search</span>
            <input type="search" style={{alignSelf:"right"}} 
            value={searchData} onChange={e => setSearch(e.target.value)} 
            name="searchQuote" onKeyDown={handleKeyDown}/>
            </Nav.Item>
         </Nav>:""
         }

        </Navbar.Collapse>
        </div>
      </Navbar>
      )
      ;
}

export default Header;