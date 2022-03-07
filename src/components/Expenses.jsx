import React from 'react'
import './Expenses.css'
import ExpenseItem from './ExpenseItem'

function Expenses (props) {
  return (
    <div>
      <h2>Lets get started!</h2>
      <div className="expenses">
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
      </div>
    </div>
  )
}

export default Expenses
