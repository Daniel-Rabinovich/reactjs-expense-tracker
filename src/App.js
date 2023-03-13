import Expenses from './components/Expenses'
import NewExpense from './components/NewExpense'
import { useState } from 'react'

let DUMMY_EXPENSES = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    {
      id: 'e5',
      title: 'Banana',
      amount: 20,
      date: new Date(2019, 3, 21),
    },
    {
      id: 'e6',
      title: 'Apple',
      amount: 17,
      date: new Date(2019, 2, 1),
    },
    {
      id: 'e7',
      title: 'Laptop',
      amount: 1500,
      date: new Date(2022, 5, 15),
    },
    {
      id: 'e8',
      title: 'Phone',
      amount: 999,
      date: new Date(2022, 0, 29),
    },
  ];

const App = () => {

  const [expenses, setExpenses ] = useState(DUMMY_EXPENSES)

  const newExpanseHandler = newExpense => {
    setExpenses((prevExpenses) => {
      return [
        ...prevExpenses,
        newExpense
      ]
    })
  }

  return (
    <div>
      <NewExpense onSave={newExpanseHandler}/>
      <Expenses items={expenses} />
    </div>
  )
}

export default App;
