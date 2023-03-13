import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'
import './Expenses.css'
import { useState } from 'react'

const Expenses = (props) => {

    const [ year, setYear ] = useState('2022')

    const onSelectHandler = (event) => {
        setYear(event.target.value)
    }

    const filteredExpenses = props.items.filter(item => {
        return item.date.getFullYear().toString() === year.toString()
    })

    return (
        <div className="expenses">
            <div>
                <ExpensesFilter
                    selected={year}
                    onSelect={onSelectHandler}
                />
            </div>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>
        </div>
    )
}

export default Expenses
