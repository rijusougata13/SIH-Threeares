import React from "react";
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  PieSeries,
  Title,
  Legend
} from '@devexpress/dx-react-chart-material-ui';


const PieChart = ({ data, label }) => {

  const PREFIX = 'Demo';

  const LegendLabel = props => (
    <Legend.Label {...props} sx={{ pt: 1 }} />
  );


  return (
    <Paper elevation={0}
    >
      <Chart
        style={{
          height: "400px",
          padding: "40px",
          
        }}
        data={data}
      >
        <Title text={label} />
        <PieSeries valueField="value" argumentField="argument" />
       

        <Legend
        // position="bottom"
        // labelComponent={LegendLabel}
        />
      </Chart>

    </Paper>
  );
}

export default PieChart;
