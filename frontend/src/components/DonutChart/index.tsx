import React, { Component } from 'react';
import Chart from 'react-apexcharts'
import { render } from 'react-dom';

const DonutChart = () => {
  const mockData = {
    series: [477138, 499928, 444867, 220426, 473088],
    labels: ['Quebra Depósito', ' Uso Depósito', 'Queb no Carreg/Transp', 'Ajuste de Estoque', 'Consumo Mauro']
  }

  const options = {
    legend: {
      show: true
    }
  }

  return (
    <div className="donut">
      <Chart
        options={{ ...options, labels: mockData.labels }}
        series={mockData.series}
        type="donut" width="380"

      />
    </div>
  );
}


export default DonutChart;