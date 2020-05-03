console.log('Client side javascript file is loaded!')

// fetch('http://puzzle.mead.io/puzzle').then((response)=>{
//     response.json().then((data)=>{
//         console.log(data)
//     })
// })



const weatherForm = document.querySelector('form')
const searchItem = document.querySelector('input')
const message =  document.querySelector('#display-message')
const message2 =  document.querySelector('#display-message2')

weatherForm.addEventListener('submit', ( e )=>{
    e.preventDefault()
    
    const location = searchItem.value
    // console.log(searchItem)  // this wud display:  <input placeholder="Location">
    // console.log(location)   // this wud give the value inside it.
    
    message.textContent = 'Loading...'
    message2.textContent = ''

        fetch('/weather?address='+location).then((res)=>{
        res.json().then((data)=>{
            if(data.error){
                console.log(data.error)
                message.textContent= data.error
            }
            else{
                console.log(data.location)
                console.log(data.forecast)
                message.textContent = data.location
                message2.textContent = data.forecast
            }
            })
        })
})