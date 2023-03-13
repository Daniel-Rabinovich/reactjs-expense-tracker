
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {

    return (
        <div className="new-expense">
            <ExpenseForm onSave={props.onSave}/>
        </div>
    )
}

export default NewExpense
