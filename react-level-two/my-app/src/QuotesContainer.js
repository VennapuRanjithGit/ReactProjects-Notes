import React, {useState, useEffect } from 'react';//1.
import QuotesList from './QuotesList';
//import QuotesForm from './QuotesForm'; //remove this as arent using this func and use this in AddQuote.js file.
import AddQuote from './AddQuote'; //now render this AddQuote function below and remove QuoteForm as will reuse the form for remove and edit so need not to render here
//import { useState } from "react";  //data should be maintained only at one place and used by all other components so we are maintaining useState hook here and pass data via props to its children they are 1. quotesForm and quotesList. without importing separately we addes useState above while importing React.

const QuotesContainer = (props)=>{//2. funct expression
    const [quotes, setQuotes] = useState([]) //will start with empty array as we dont have any data. wnver created new data which will use this useState to stored changed etc.
                //every time we rerender the ui all the details we entered are vanishing or not stored in useState so to overcome it will use below local storage
    useEffect(()=>{//to store data entered by user as local storage by using this useEffect/ in general we will be storing it using backend api. for now will go with this
       const result = JSON.parse(localStorage.getItem('quotes')) || [] //try to read the items from the quotes state 
        setQuotes(result) //any quote that a user enter it stored inside state variable quote as an object and within local storage we cant store obj as a value inside it because local storage can only store string values hence we stringif it and store it
                           //if its truthy value then will print quotes else empty array 
    },[])
        
    //we need to add a particular value in local storage separately as it wont be available readymade inside our component so will use onother useEffect
    useEffect(()=>{//so here we need to cause a side effect. this useEffect hook gets called only when state variable quotes value get changed or updated
        localStorage.setItem('quotes', JSON.stringify(quotes)) //if you rerender also data in quotes state wont be refreshed or reset
    },[quotes]) //so wnever quotes variable changes run this hook

    const addItem=(quote)=>{//responsible for storing quote added by user into quotes state. will get the quote from child comp quotesForm component by passing this func as prop to it below
        const result = [quote, ...quotes]; //spreading all the quotes and adding new quotes in array at end by this while saving data name will be first displayed then quote but we need reverse of it so swap them i.e 1st quotes then spreading
        setQuotes(result) 
    }

        const removeItem=(id)=>{//id is whatever user selects that id/item gets removed. pass this fun as prop to below quotelist then destructure it in quotesList then quotesItem will use it as we again pass it as prop to it
                const result=   quotes.filter((quote)=>{// to remove particular quote from quotes state we use array filter
                return quote.id!==id //will get each of quote from quotes and will return quote id which isnt equal to id i.e it will
                                    //return a new array without the the quote selected by user
                }) 
                setQuotes(result) //so latest array created that means above state variable gets changed indirectly useEffect hook gets called
                                    //as state got changed i.e updated then updated quotes values return to the local storage 
            }

            const editItem=(quote)=>{ //to save the re-edited details create this fun and pass below as prop to quoteslist compnent
                const result = quotes.map((q)=>{
                    if(q.id===quote.id){
                        return {...q, ...quote}
                    }else{
                        return {...q}
                    }
                })
                setQuotes(result)
            }

        return(
            <div>
                Quotes Container - iam child to App comp quoteBook compnt and parent to QuotesList
                <QuotesList quotes={quotes} removeItem={removeItem} editItem={editItem}/> {/*now pass the quotes as props to this component so that data in this quotesContainer is accessed by quotesList via props*/}
                {/*<QuotesForm addItem={addItem}/>  added as prop so quoteForm comp will receive addItem as prop*/}
                <AddQuote addItem={addItem}/> {/**for addquote func we pass addItem as a prop */}
              
            </div>
        )
}

//to get this container available for all other files inside src we should exprot it i.e
export default QuotesContainer //now u can use it inside other files by importing it like we did in App.js i.e