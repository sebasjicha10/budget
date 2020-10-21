import React from 'react'
import Expense from "./Expense"
import PropTypes from "prop-types"

const Listing = ({expenses}) => (
    <div className="done-expenses">
        <h2>List</h2>
        {expenses.map(expense => (
            <Expense
                key={expense.id}
                expense={expense}
            />
        ))}

    </div>
)

Listing.protoTypes = {
    expenses: PropTypes.array.isRequired
}
 
export default Listing