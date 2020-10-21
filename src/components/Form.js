import React, {useState} from 'react'
import PropTypes from "prop-types"
import Error from "./Error"


let id = 1

const Form = ({setExpense, setCreateExpense}) => {

    const [name, setName] = useState("")
    const [amount, setAmount] = useState(0)
    const [error, setError] = useState(false)

    // Handle on Expense submit
    const addExpense = e => {
        e.preventDefault()

        // Validate
        if(amount < 1 || isNaN(amount) || name.trim() === "") {
            setError(true)
            return
        }
 
        // Construct the expense 
        setError(false)
 
        // Send the Expense to App
        const expense = {
            name,
            amount,
            id
        }
        setExpense(expense)
        setCreateExpense(true)

        // Update id
        id = id + 1 

        // Reset form 
        setName("")
        setAmount(0)
    }

    return (
        <form
            onSubmit={addExpense}
        >
            <h2>Add your expenses here</h2>

            { error ? <Error message="Both fields are mandatory or Wrong Amount" /> : null}

            <div className="field">
                <label>Expense Description</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Ex. Transportation"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>
            <div className="field">
                <label>Expense Amount</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ex. 300"
                    value={amount}
                    onChange={e => setAmount(parseInt(e.target.value))}
                />
            </div>
            <input
                type="submit"
                className="button-primary u-full-width"
                value="Add Expense"
            />
        </form>
    )
}

Form.protoTypes = {
    setExpense: PropTypes.func.isRequired,
    setCreateExpense: PropTypes.func.isRequired
}
 
export default Form
