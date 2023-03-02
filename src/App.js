import { useState } from "react";
import BootstrapTable from "react-bootstrap-table-next"
import data from './data/nested.json';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import './App.css';
import Dropdown from 'react-bootstrap/Dropdown';
import {DropdownButton} from 'react-bootstrap';
import { properties } from "./properties";
import filterFactory, { textFilter, selectFilter, dateFilter } from "react-bootstrap-table2-filter";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from "react-bootstrap-table2-paginator";
import './custom-table.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavbarComp from './NavbarComp'
function App() {
  const [edgeData ,setEdgeData]= useState(data.map(inp => {
    return inp.data.cloudFoundaryApps.edges;
  }));

  const [columns,setColumns] = useState([
    {
      dataField: "node.name",
      text: "Name",
      filter: textFilter(),
      sort: true,
      headerStyle: { backgroundColor: 'green'}


    },
    {
      dataField: "node.appId",
      text: "AppId",
      filter: textFilter(),
      headerStyle: { backgroundColor: 'green'}

    },
    {
      dataField: "node.application.applicationName",
      text: "ApplicationName",
      filter: textFilter(),
      headerStyle: { backgroundColor: 'green'}
    },
    {
      dataField: "node.buildpacks",
      headerStyle: { backgroundColor: 'green'},
      text: "BuildPacks",
      
      formatter: (cell, row) => (cell ).map(x => (
        <div>
          {x.name+":" +x.version}
        </div>
      ))
      
    },
    {
      dataField: "node.envVars",
      headerStyle: { backgroundColor: 'green'},
      text: "EnvVars",
      
      formatter: (cell, row) => (cell ).map(x => (
        <div>
          {x.key+":" +x.value}
        </div>
      ))
      
    }
  ])
  const paginationOptions = {
    sizePerPage: 5,
    hideSizePerPage: true,
    hidePageListOnlyOnePage: true
  };
  console.log('egdeData', edgeData[0]);
  
 
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

    <div className="App">
      <div>
      <div> <NavbarComp columns={columns} setColumns={setColumns}/></div>
      <div >
       
       <DropdownButton id="dropdown-basic-button" style={headerStyle} title="Add Columns" onSelect={handleSelect}>
       {properties.dropdownList.map(elem => <Dropdown.Item  as="button" eventKey={elem}>{elem}</Dropdown.Item>)}
         
       </DropdownButton>
       </div>
       <div></div>
        <div>
        <BootstrapTable keyField="node.name"
          id="testtable"
          data={edgeData[0]}
          columns={columns}
          filter={filterFactory()}
          pagination={paginationFactory(paginationOptions)}
          hover
          condensed
          bordered
          striped
        />
        </div>
        
      </div>


    </div>
  );
}

export default App;