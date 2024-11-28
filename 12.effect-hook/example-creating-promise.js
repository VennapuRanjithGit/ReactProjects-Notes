//producing code
const promiseObj = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const someTask=false
        if(someTask){
            const data= [{id:1, name:'john', }, {id:2, name:'jack'}]
            resolve(data)
        }else{
            reject(new Error('something went wrong'))
        }
    }, 3000); //here timeout is 3sec so when someTask is false then .catch gets called with error after 3 seconds timeout
})

//consuming code
promiseObj.then((response)=>{console.log(response)}) //.then only called when above resolve gets invoked and .catch is reject
            .catch((err)=>{console.log(err)}) //use this if above someTask is false

//const arr = new Array()
//const obj = new Object()