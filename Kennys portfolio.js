let navlist=document.querySelector('.nav-list')
let hamburger=document.getElementById('hamburgerId')
let isvisible=false

hamburger.addEventListener('click',()=>{
navlist.classList.toggle('active')
})

console.log('ew');
//Make navbar disappear on click
let navItems=document.querySelectorAll('.remove-scroll')


    
  
    for(navItem of navItems){
    
        navItem.addEventListener('click',()=>{
            navlist.classList.toggle('active')
        })
    }
  
   
    
 



//Name writer animation
let namespan=document.getElementById('name-span')

let Myname="Keneil Watson"
let splitted=Myname.split('')
let inc=0;
console.log(splitted);
let myNameInterval=setInterval(()=>{
   
   namespan.innerHTML+=splitted[inc]
   inc++

   if(inc===splitted.length){
    clearInterval(myNameInterval)
   }
},300)
