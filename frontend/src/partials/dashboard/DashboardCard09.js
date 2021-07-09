import React from 'react';
import Info from '../../utils/Info';
import BarChart from '../../charts/BarChart02';
import Pdf from "react-to-pdf";

// Import utilities
import { tailwindConfig } from '../../utils/Utils';
const ref = React.createRef();

function DashboardCard09() {

  const chartData = {
    labels: [
      '2-01-2021', '03-01-2021', '04-01-2021',
      '05-01-2021', '06-01-2021', '07-01-2021',
    ],
    datasets: [
      // Light blue bars --> CAPEX
      {
        label: 'Stack 1',
        data: [
          6200, 9200, 6600, 8800, 5200, 9200,
        ],
        backgroundColor: tailwindConfig().theme.colors.indigo[500],
        hoverBackgroundColor: tailwindConfig().theme.colors.indigo[600],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
      // Blue bars --> Dividends
      {
        label: 'Stack 2',
        data: [
          4000, 2600, 5350, 4000, 7500, 2000,
        ],
        backgroundColor: tailwindConfig().theme.colors.indigo[200],
        hoverBackgroundColor: tailwindConfig().theme.colors.indigo[300],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
    ],
  };

  return (
    <Pdf targetRef={ref} filename="capex-dividends.pdf">
    {({ toPdf }) =>

    <div ref={ref} onClick={toPdf} className="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
      <header type="Button" style={{ cursor: "pointer" }} className="px-5 py-4 border-b border-gray-100 flex items-center">
        <h2 className="font-semibold text-gray-800">Capex vs Dividends</h2>
        <Info className="ml-2" containerClassName="min-w-80">
         
        </Info>
      </header>
      <div className="px-5 py-3">
        <div className="flex items-start">
          <div className="text-3xl font-bold text-gray-800 mr-2"></div>
          <div className="text-sm font-semibold text-white px-1.5 bg-yellow-500 rounded-full"></div>
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className="flex-grow">
        {/* Change the height attribute to adjust the chart height */}
        <BarChart data={chartData} width={595} height={248} />
      </div>
    </div>
  }
    </Pdf>
  );
}

export default DashboardCard09;