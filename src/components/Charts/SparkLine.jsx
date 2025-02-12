import React from 'react'
import {SparklineComponent,Inject,SparklineTooltip} from '@syncfusion/ej2-react-charts'

import { Header } from '../../components'

const SparkLine = ({id,height,width,color,data,type,currentColor}) => {
  return (
    <div>
      <Header category="" title=""/>
      <SparklineComponent
        id={id}
        height={height}
        width={width}
        lineWidth={1}
        valueType="Numeric"
        fill={color}
        border={{color:currentColor,width:2}}
        dataSource={data}
        xName='x'
        yName='y'
        type={type}
        markerSettings={{ visible: ['All'], size: 2.5, fill: currentColor }}
        tooltipSettings={{
          visible:true,
          format:"${x} : data ${y}",
          trackLineSettings:{
            visible:true
          }
        }}
      >
        <Inject services={[SparklineTooltip]}/>
      </SparklineComponent>
    </div>
  )
}

export default SparkLine