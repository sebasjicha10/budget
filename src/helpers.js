// Return a class according to amount remaining 
export const handleBudget = (budget, remaining) => {
    let resultingClass

    if ( (budget / 4) > remaining) {
        resultingClass = "alert alert-danger"
    } else if ((budget / 2) > remaining) {
        resultingClass = "alert alert-warning"
    } else {
        resultingClass = "alert alert-success"
    }

    return resultingClass

}



