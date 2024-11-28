import React , {useState} from 'react'; //even though stateHook should be maintained only in one comp and used by others
                                        //childs can also have their own stateHook if its data doesnt required outside. so here we maintains its own state
import {v4 as uuidv4 } from 'uuid' //importing uuid and use it with 'v4' below.

const QuotesForm = (props) =>{
    //const {addItem} = props
    const {formSubmission, id:slNo, name:author, body:quote, handleToggle} = props //as name and body already defined below in useState lets do name:not only author any name; same to body
    const [name, setName] = useState(author ? author:'') //name of the person who quoted it. will use empty string //if author is true then author i.e name else empty string same to body below; thus when user click on edit details of quote and body will be visible
    const [body, setBody] = useState(quote ? quote:'') //quote that the person writes .
    const [id, setId] = useState(slNo ? slNo : uuidv4) //We created id here by commenting below id:uuidv4 as while user click on edit to re-update the details and save quote id is overriding and created a new one which shouldnt be done so we create this at constant level so below will use id: id i.e reutilizing the same id without overriding or creating new one 
                    //below will create a form to have the input fileds to type name and body. 

            //declaring event handler
            const handleSubmit=(e)=>{ //so inside this quoteForm has handleSumbit event handler and it has addItem(formData) below will cmment it nd replace it by formSubmission as props above and also below 
                e.preventDefault()

                const formData={ //let us create a formData along with the properties from below
                    //id: Number(new Date()), //id is a must while perfoming crud ope. so here first create new Date obj then convert it to number then it will be unique.
                                            //or generate the unique id by installing 'uuid' package and use it i.e
                    //id:uuidv4(),//first import it above and use it here and let call it as a func for our understanding. so everytime you click on submit a new id will be generated
                    id:id, //re-utilizing the same id
                    name:name, 
                    body: body //this form data that we enter in UI, we need to send this to quotes which is in App comp as it has main stateHook which will be used to store all these info
                } //we have to display details entered byuser on UI for that create other component QuotesItem.js
                    //addItem(formData) 
                    formSubmission(formData) //next pass the
                    if(handleToggle){
                        handleToggle()
                    }
                    //To reset the name and body or entire form
                    setName('')
                    setBody('')
            }

            //declare onChnage event handler
            const handleNameChange=(e)=>{
                setName(e.target.value)
            }

            //same
            const handleBodyChange=(e)=>{
                setBody(e.target.value)

            }

    return(
        <div>
            {/* <h2>Add quote</h2> */}
            <form onSubmit={handleSubmit}>  {/*we for a form submitEvent listener should be there as a form listens to it . this is for form submission once user enter all details and click sumbit/save*/}
                <label>Name: </label><br/>
                <input type='text' value={name} onChange={handleNameChange}/><br/>

                <lable>Body: </lable><br/>
                <textarea value={body} onChange={handleBodyChange}></textarea><br/>

                <input type='submit' value='Save'/> {/*here on click of save button form submitEvent listener get called */}
            </form>
        </div>
    )
}

export default QuotesForm