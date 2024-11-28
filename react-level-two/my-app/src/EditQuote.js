import React from "react"; //create a editquote to edit the selected quote at same place, so go to QuotesItem
import QuotesForm from "./QuotesForm"; //On click of edit button in QuotesItem it renders EditQuote then QuoteForm
                                //here when quotesForm renders it should render with details i.e same name and body so for this feature
                                //lets observe the quotesItem renders > editquote> quotes form so in similar order pass the data via props

const EditQuote=(props)=>{
  const {id, name, body, editItem, handleToggle} = props

    const formSubmission=(formData)=>{ //to save the re-updated details we should use the same func there in addQuote
        editItem(formData)
    }

    return(
        <div>
            <h2>Edit quote</h2>
            <QuotesForm id={id} name={name} body={body} formSubmission={formSubmission} editItem={editItem} handleToggle={handleToggle}/>
        </div>
    )
}

export default EditQuote