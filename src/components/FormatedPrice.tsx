import React from 'react'

interface Amount {
    amount:number
}

const FormatedPrice = ({amount}:Amount) => {
    const  formatedAmount =  new Number(amount).toLocaleString("en-US",
   { 
    style:"currency",
    currency:"USD",
    minimumFractionDigits:2     
}
    )
  return (
    <span>
        {formatedAmount}
    </span>
  )
}

export default FormatedPrice