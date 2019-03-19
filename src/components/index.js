import React, { Component } from "react";
import BootstrapTable from 'react-bootstrap-table-next';

    
  class Table extends Component {

    state = {
        products: [
          {
            id: 1,
            name: 'TV',
            'price': 1000
          },
          {
            id: 2,
            name: 'Mobile',
            'price': 500
          },
          {
            id: 3,
            name: 'Book',
            'price': 20
          },
        ],
        columns: [{
          dataField: 'id',
          text: 'Product ID'
        },
        {
          dataField: 'name',
          text: 'Product Name'
        }, {
          dataField: 'price',
          text: 'Product Price',
          sort: true
        }]
      } 

  
  
    render() {
        const expandRow = {
            renderer: row => (
              <div>
                <p>{ `This Expand row is belong to rowKey ${row.id}` }</p>
                <p>You can render anything here, also you can add additional data on every row object</p>
                <p>expandRow.renderer callback will pass the origin row object to you</p>
              </div>
            )
          };
      return (
    
            <BootstrapTable
            keyField='id'
            data={ this.state.products }
            columns={ this.state.columns }
            expandRow={ expandRow }
            />
     
      );
    }
  }

  export default Table;