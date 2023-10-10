const clock = document.getElementById('clock')
// or
// const clock = document.querySelector('#clock')


setInterval(function(){ // Using setInterval for represing the method every 1s 
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)