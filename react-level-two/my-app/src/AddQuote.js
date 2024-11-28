import React from "react";
import QuotesForm from "./QuotesForm"

const AddQuote=(props)=>{
    const {addItem} =props
    
    const formSubmission= (formData)=>{
       addItem(formData) //invoke the addItem func by passing formData as arg
    }

    return(
        <div>
                <h2>Add Quote</h2>
                 <QuotesForm formSubmission={formSubmission}/> {/*add quote has access to addItem but wn quoteform rendered fun formSubm declared inside addQuote which inturn
                                                            will be passed here then inside quoteform componenti.e */}
        </div>
    )
}

export default AddQuote