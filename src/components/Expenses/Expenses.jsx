import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'

function Expenses (props) {
  const [year, setYear] = useState('2020')

  const changeYearDataHandler = (enteredYearData) => {
    setYear(enteredYearData)
  }

  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === year
  })

  let expensesContent = <p>No expenses found!</p>

  if (filteredExpenses.length > 0) {
    expensesContent =
    filteredExpenses.map(
      (expense) =>
        <ExpenseItem
          key = {expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
    )
  }

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={year}
          onChangeYearData={changeYearDataHandler}
        />
        {expensesContent}
      </Card>
    </div>
  )
}

export default Expenses
