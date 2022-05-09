const searchInput= document.querySelector('#search-input');


// searchInput.addEventListener('keydown', (event)=> {
    // if ( event.key === " Enter" ){  
// search();
    // }
// });





searchInput.addEventListener("keydown",function(event) {  
if (event.key === "Enter"){ 
    search();
 }

 });

function search() { 
    const input = searchInput.value;

window.location.href=" https://www.google.com/search?q=" + input +"&oq="+ input +"&aqs=chrome..69i57j46i433i512j0i512j46i131i199i433i465i512j46i175i199i512j0i131i433j46i175i199i512j0i131i433l2j0i131i433i512.5394j0j15&sourceid=chrome&ie=UTF-8 "
}



