import React from 'react'
import { GridComponent,ColumnDirective,ColumnsDirective,Page,Selection,Inject,Edit,Sort,Filter,Toolbar } from '@syncfusion/ej2-react-grids'

import { customersData,customersGrid } from '../data/dummy'
import { Header } from '../components'

const Customers = () => {
  return (
    <div className='m-2 mt-[4rem] md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header title='Customers' category='Page' />
      <GridComponent 
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={['Delete']}
        editSettings={{allowDeleting:true,allowEditing:true}}
        width="auto"
      >
        <ColumnsDirective>
          {customersGrid.map((item,index) => (
            <ColumnDirective key={index} {...item}/>
          ))}
        </ColumnsDirective>
        <Inject services={[Page,Toolbar,Selection,Edit,Sort,Filter]}/>
      </GridComponent>
    </div>
  )
}

export default Customers