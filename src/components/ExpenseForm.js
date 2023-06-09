import { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {

    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')
    const [show, setShow] = useState(false)

    const titleChangeHandler = (event) => {
        setTitle(event.target.value)
    }

    const amountChangeHandler = (event) => {
        setAmount(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        const newExpense = {
            id: Math.random().toString(),
            title: title,
            amount: +amount,
            date: new Date(date)
        }
        props.onSave(newExpense)
        setTitle('')
        setAmount('')
        setDate('')
        setShow(false)
    }

    const showFormHandler = () => {
        setShow((prev) => { setShow(!prev)})
    }

    if( show === false ){
        return (
            <div className="new_expense__actions">
                <button onClick={showFormHandler}>Add New Expense</button>
            </div>
        )
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={title} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={amount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={date} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button onClick={showFormHandler}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}


export default ExpenseForm
