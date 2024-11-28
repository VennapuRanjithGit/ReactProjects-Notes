import React from 'react';
import QuotesItem from './QuotesItem';

const QuotesList=(props)=>{//comp like these are supposed to return react elements
    const {quotes, removeItem, editItem} = props //as we knw that quotes from QC component passed here as props will do obj restructuring, then we can access the data inside quotes like below

    return(
        <div>
            {/*<h2>Quotes - {quotes.length}</h2>*/}
            { //do conditional rendering if quotes leng 0 then no quotes else display length
             quotes.length === 0 ?( //use terinary operator
                <div>
                    <h1> No quotes found.</h1>
                    <p>Please, Add your first Quote.</p>
                </div>
             )   : (
                <div>
                    <h1>My Quotes - {quotes.length}</h1>
                    {quotes.map((quote)=>{ //loop over quotes array stateVariable and return quotesItem which will have id and all the details of a quote(spread it)
                        return <QuotesItem key={quote.id} {...quote} removeItem={removeItem} editItem={editItem}/> //here ...quotes is spreading the quotes i.e we are passing every quotes as a prop
                    })}
                </div>
             )
            }
        </div>
    )
}


export default QuotesList