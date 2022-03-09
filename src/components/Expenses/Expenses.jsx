import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'

function Expenses (props) {
  const [year, setYear] = useState('2019')

  const changeYearDataHandler = (enteredYearData) => {
    setYear(enteredYearData)
  }

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={year} onChangeYearData={changeYearDataHandler}/>
        {props.expenses.map((expense) => {
          return (
            <ExpenseItem
              key = {expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          )
        })
        }
      </Card>
    </div>
  )
}

export default Expenses
