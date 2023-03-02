import { useState } from "react";
import BootstrapTable from "react-bootstrap-table-next"
import data from './data/nested.json';
import './App.css';
import filterFactory, { textFilter, selectFilter, dateFilter } from "react-bootstrap-table2-filter";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from "react-bootstrap-table2-paginator";
import './custom-table.css';
import React from 'react';
function DataTableJson1(columns) {
    console.log("columns",columns)
  const [edgeData ,setEdgeData]= useState(data.map(inp => {
    return inp.data.cloudFoundaryApps.edges;
  }));

  
  const paginationOptions = {
    sizePerPage: 5,
    hideSizePerPage: true,
    hidePageListOnlyOnePage: true
  };
  console.log('egdeData', edgeData[0]);
  
 

  return (
        <BootstrapTable keyField="node.name"
          id="testtable"
          data={edgeData[0]}
          columns={columns}
        //  filter={filterFactory()}
         // pagination={paginationFactory(paginationOptions)}
          hover
          condensed
          bordered
          striped
        />
      
);
  }
export default DataTableJson1;