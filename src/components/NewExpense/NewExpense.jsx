import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

function NewExpense (props) {
  const [toggle, setToggle] = useState(false)

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData)
  }

  function handleNewExpense () {
    setToggle(current => !current)
  }

  return (
    <div className='new-expense'>
      {!toggle &&
      <div className='new-expense__add'>
        <button type="button" onClick={handleNewExpense}>
              Add New Expense
        </button>
      </div>
      }
      {toggle &&
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onSetToggle={setToggle} onHandleNewExpense={handleNewExpense}/>
      }
    </div>
  )
}

export default NewExpense
