import React, {Fragment, useState} from 'react'
import PropTypes from "prop-types"
import Error from "./Error"

const Question = ({setBudget, setRemaining, setShowQuestion}) => {

    // Local Question state
    const [amount, setAmount] = useState(0)
    const [error, setError] = useState(false)

    // Handle Budget change
    const defineBudget = e => {
        setAmount(parseInt(e.target.value, 10))
    }

    // Hanlde Budget Submit
    const handleSubmit = e => {
        e.preventDefault()

        // Validate
        if(amount < 1 || isNaN(amount)) {
            setError(true)
            return
        }

        // Validation passed 
        setError(false)
        setBudget(amount)
        setRemaining(amount)
        setShowQuestion(false)
    }

    return (  
        <Fragment>
            <h2>Define your budget</h2>
            {error ? <Error message="Wrong Budget"/> : null}
            <form
                onSubmit={handleSubmit}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Define your budget"
                    onChange={defineBudget}
                />
                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Submit Budget"
                />
            </form>
        </Fragment>
    )
}

Question.protoTypes = {
    setBudget: PropTypes.func.isRequired,
    setRemaining: PropTypes.func.isRequired,
    setShowQuestion: PropTypes.func.isRequired
}
 
export default Question

