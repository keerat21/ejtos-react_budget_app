import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = (props) => {
    const {dispatch, currency } = useContext(AppContext);
    

    return(   
        <div>

        <select className="custom-select"  style={{ fontweight:"bold", color: "white", padding:"8px",backgroundColor: "lightgreen", borderRadius: "10px", marginRight: '2rem' , size: 10}} id="inputGroupSelect01" onChange={(event) => { dispatch ({type:"CHG_CURRENCY", payload:event.target.value,})}}>
      

    <option style={{ color: "black"}} defaultValue="£" name="pound">    currency (£ Pound)</option>
    <option style={{ color: "black"}} value="$" name="dollar">    currency ($ Dollar)</option>
    <option style={{ color: "black"}} value="₹" name="ruppee">    currency (₹ Ruppee)</option>
    <option style={{ color: "black"}} value="€" name="euro">    currency (€ Euro)</option>
</select></div>);



}

export default Currency;