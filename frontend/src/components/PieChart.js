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
    <Paper>
      <Chart
        data={data}
      >
        <PieSeries valueField="value" argumentField="argument" />
        <Title text={label} />

        <Legend
        // position="bottom"
        // labelComponent={LegendLabel}
        />
      </Chart>

    </Paper>
  );
}

export default PieChart;
