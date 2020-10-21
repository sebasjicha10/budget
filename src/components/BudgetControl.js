import React, {Fragment} from 'react'
import PropTypes from "prop-types"
import {handleBudget} from "../helpers"

const BudgetControl = ({budget, remaining}) => {
    return (
        <Fragment>
            <div className="alert alert-primary">
                Budget: $ {budget}
            </div>

            <div className={handleBudget(budget, remaining)}>
                Remaining: $ {remaining}
            </div>
        </Fragment>
    )
}

BudgetControl.protoTypes = {
    budget: PropTypes.number.isRequired,
    remaining: PropTypes.number.isRequired
}
 
export default BudgetControl