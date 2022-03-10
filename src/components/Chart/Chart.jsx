import React from 'react'

import './Chart.css'
import ChartBar from './ChartBar'

function Chart (props) {
  const dataPointValues = props.dataPoints.map(datePoint => datePoint.value)
  const totalMaximum = Math.max(...dataPointValues)

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) =>
        <ChartBar
          value={dataPoint.value}
          key={dataPoint.label}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      )}
    </div>
  )
}

export default Chart
