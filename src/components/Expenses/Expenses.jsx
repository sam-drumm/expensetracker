import React, { useState } from 'react'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import './Expenses.css'
import ExpensesChart from './ExpensesChart'

function Expenses (props) {
  const [year, setYear] = useState('2020')

  const changeYearDataHandler = (enteredYearData) => {
    setYear(enteredYearData)
  }

  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === year
  })

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={year}
          onChangeYearData={changeYearDataHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  )
}

export default Expenses
