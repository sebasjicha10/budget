import React, {useState, useEffect} from 'react'
import Question from "./components/Question"
import Form from "./components/Form"
import Listing from "./components/Listing"
import BudgetControl from "./components/BudgetControl"

function App() {

  // Budget State
  const [budget, setBudget] = useState(0)
  const [remaining, setRemaining] = useState(0)
  const [showQuestion, setShowQuestion] = useState(true)
  const [expenses, setExpenses] = useState([])
  const [expense, setExpense] = useState({})
  const [createExpense, setCreateExpense] = useState(false)
 
  // Handle remaining on change 
  useEffect(() => {
    // Add new budget
    if(createExpense) {
      setExpenses([
        ...expenses,
        expense
      ])

      // Subtract from current budget
      const remainingBudget = remaining - expense.amount
      setRemaining(remainingBudget)

      // Expense created
      setCreateExpense(false)
    }
  }, [expense, createExpense, expenses, remaining])

  return (
    <div className="container">
      <header>
        <h1>Weekly Expenses</h1>
        <div className="main-content content">

        {showQuestion ? 
          (
            <Question 
              setBudget={setBudget}
              setRemaining={setRemaining}
              setShowQuestion={setShowQuestion}
            />
          ) :
          (
            <div className="row"> 
              <div className="one-half column">
                <Form  
                  setExpense={setExpense}
                  setCreateExpense={setCreateExpense}
                />
              </div>
              <div className="one-half column">
                <Listing 
                  expenses={expenses}
                />
                <BudgetControl
                  budget={budget}
                  remaining={remaining}
                />
              </div>
            </div>
          )
        }

        </div>
      </header>
    </div>
  )
}

export default App


