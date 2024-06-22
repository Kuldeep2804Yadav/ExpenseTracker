import React from 'react'
import Chart from '../Chart/Chart'

function ExpensesChart(props) {
    
  return (
    <div>
        <div>
           <Chart chartExpenses={props.filteredExpensesChartData} />
        </div>
    </div>
  )
}

export default ExpensesChart