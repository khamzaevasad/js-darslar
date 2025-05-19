/*------- dom selectors -------*/


// 1) getElementsByTgaName (elementlarni tag nomi orqali tanlash)

const tagItem = document.getElementsByTagName('body')
// console.log(tagItem)

// 2) // getElementsByClassName (elementlarni class nomi orqali tanlash)

const listItem = document.getElementsByClassName('list-item')
// console.log(listItem[0])

// 3) getElementbyId (elementlarni id nomi orqali tanlash)

const listBtn = document.getElementById('click-btn') 
// console.log(listBtn)

// 4) querySelector / querySelectorAll (querySelectorlar xoxlasa id xoxlasa class xoxlasa atrributelarni tanlab olish mumkib (universal) )
const listItems = document.querySelector('#title')
console.log(listItems)

// listItems.forEach((item)=>{
//     console.log(item)
// })