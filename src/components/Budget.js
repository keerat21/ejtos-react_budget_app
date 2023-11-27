
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import Currency from './currency';

const Budget = (props) => {
    const {dispatch, budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const { expenses, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleBudgetChange = (event) => {
        if(event.target.value>20000)
        alert("Budget value cannot exceed 20000");
        if(event.target.value<totalExpenses)
        alert("Budget value cannot be less than spending");
    else
      { setNewBudget(event.target.value);
        dispatch({
            type: 'SET_BUDGET',
            payload: event.target.value,
        })}
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;