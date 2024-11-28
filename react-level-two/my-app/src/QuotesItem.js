import React, {useState} from 'react'; //Wnver you wanna write react elements code i.e jsx this should be imported
import EditQuote from './EditQuote'; //We need to decide wn to show below blockquote and render the edit so introduce state above first

const QuotesItem=(props)=>{ //this quoteItem will be called in quotesList by looping it to 
    const {id, name, body, removeItem, editItem} = props //will get these 3 from props
    const [toggle, setToggle] = useState(false) //to decide if toggle is true user would have clicked edit button else display the below bloque

    const handleRemove = ()=>{
        const confirmRemove = window.confirm("Are you sure? ")
        if(confirmRemove){
            removeItem(id)
        }
    }

        const handleToggle=()=>{
                const result = !toggle //initially toggle state is false above so here not of flase is true 
                setToggle(result) //or directly in single line setToggle(!toggle)
        }

    return(
        <div>
        {toggle ? 
            <div>
                <EditQuote id={id} name={name} body={body} editItem={editItem} handleToggle={handleToggle}/>
                <button onClick={handleToggle}>Cancel</button>
            </div>:(
        <div>
            <blockquote>{body} ~ {name}</blockquote>
            <button onClick={handleToggle}>edit</button>
            <button onClick={handleRemove}>remove</button>
        </div>
        )}
        </div>
       )

       //below is before enhancing the code above is after enhancing i.e standard
        // <div>
        //         {/*This way of displaying isnt good so use blockquote 
        //         <b>{body}</b><br/>
        //         <b>{name}</b><hr/> */}
        //         <blockquote>{body} ~ {name}</blockquote> {/*this is called working with comp in isolation mode
        //                                                     now will add edit button below*/}
        //         <button>Edit</button>
        //         <button onClick={()=>{ //inline arrow function supposed to remove quote from state value which reside ins quotes container; we know that to update the state value, the method which do that has to be declared in parent(quotesContainer; so create removeItem func in parent and pass it as prop to quotesList then to quotesItem) and it has to passed as a prop to child(quotesItem) component.
        //             const confirmRemove = window.confirm('Are you sure?') //confirm use to remove then if yes remove it
        //             if(confirmRemove){ 
        //                 removeItem(id) //will now call this func by above id which comes from formData
        //         }
        //         }}>Remove</button>
        // </div>
   
}

export default QuotesItem