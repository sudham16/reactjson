import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { properties } from "./properties";
import {DropdownButton} from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import filterFactory, { textFilter, selectFilter, dateFilter } from "react-bootstrap-table2-filter";



function NavHeader(columns,setColumns) {

    function handleClick(event){
        console.log(event)
    }
    const handleSelect=(e)=>{
        console.log(e);
        const exists = columns.some(item => item.text === e.toUpperCase())
    
        if(!exists){
        const newColumn ={
          dataField: "node."+e,
          text: e.toUpperCase(),
          filter: textFilter(),
          headerStyle: { backgroundColor: 'green'}
        }
        setColumns([...columns,newColumn])
      }else{
        setColumns(columns.filter(col => col.text !== e.toUpperCase()))
      }
      }
    const headerStyle = {
        backgroundColor: 'green'
      };
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand className='navbar-center'>REACT APPLICATION</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className='justify-content-end' style={{ width: "100%" }}>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll >
            
            <DropdownButton id="dropdown-basic-button" style={headerStyle} title="Add Columns" onSelect={handleSelect}>
       {properties.dropdownList.map(elem => <Dropdown.Item  as="button" eventKey={elem}>{elem}</Dropdown.Item>)}
         
       </DropdownButton>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavHeader;