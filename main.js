let open = document.getElementById('open');
let ul = document.getElementById('ul');
let close = document.getElementById('close');


// open.addEventListener('click' , () =>{
//     ul.style.display = 'block';
// })

open.onclick = function(){
    ul.style.display = 'block';
    close.style.display = 'block';
    this.style.display = 'none';
}

close.onclick= function(){
    ul.style.display = 'none';
    open.style.display = 'block';
    this.style.display = 'none';
}
