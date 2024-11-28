const promise1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('promise 1 resolved')
    },2000) //resolves in 2 sec
})

const promise2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject('promise 2 rejected')
    }, 8000) //resolves in 8 sec
})

Promise.all([promise1,promise2]) //promise.all promises to execute all promises at once irrespective of their individual time and it executes wn any one promise caugth with error
        .then((values)=>{
            //console.log(values) //or
            const [p1result, p2result] = values
            console.log('promise1', p1result)
            console.log('promise2', p2result)
        })

        .catch((err)=>{
            console.log(err)
        })