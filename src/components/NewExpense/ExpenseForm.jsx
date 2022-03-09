import React, { useState } from 'react'
import './ExpenseForm.css'

function ExpenseForm (props) {
  const [form, setForm] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: ''
  })

  function handleTitleChange (e) {
    setForm((prevState) => {
      return { ...prevState, enteredTitle: e.target.value }
    })
  }

  function handleAmountChange (e) {
    setForm((prevState) => {
      return { ...prevState, enteredAmount: e.target.value }
    })
  }

  function handleDateChange (e) {
    setForm((prevState) => {
      return { ...prevState, enteredDate: e.target.value }
    })
  }

  function handleSubmit (e) {
    e.preventDefault()

    const expenseData = {
      title: form.enteredTitle,
      amount: form.enteredAmount,
      date: new Date(form.enteredDate)
    }

    props.onSaveExpenseData(expenseData)
    setForm({
      enteredTitle: '',
      enteredAmount: '',
      enteredDate: ''
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='new-expense__controls'>

        <div className='new-expense__control'>
          <label>
            Title
          </label>
          <input type="text" value={form.enteredTitle} onChange={handleTitleChange} />
        </div>

        <div className='new-expense__control'>
          <label>
            Amount
          </label>
          <input type="number" value={form.enteredAmount} min="0.01" step="0.01" onChange={handleAmountChange}/>
        </div>

        <div className='new-expense__control'>
          <label>
            Date
          </label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={handleDateChange}
            value={form.enteredDate}
          />
        </div>

        <div className='new-expense__actions'>
          <button type="submit">
            Add Expense
          </button>
        </div>

      </div>
    </form>
  )
}

export default ExpenseForm
