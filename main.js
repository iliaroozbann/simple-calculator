const displayBox = document.querySelector(".display");
const list =document.querySelectorAll(".show-diaplay")
const cal = document.querySelector("#equal");
const clear = document.querySelector("#C");
allClear = document.querySelector("#ac")
list.forEach(item => {
    item.addEventListener("click" , function(event){
        let x = event.target.innerText ;
        if (displayBox.innerHTML == 0){
            return displayBox.innerHTML = x;
        }
        return displayBox.innerHTML += x;
    })    
    
});

cal.addEventListener("click" , function(event){
    let result = displayBox.innerText ;
    displayBox.innerText= eval(result);
})

clear.addEventListener("click" , function(event){
    let text = displayBox.innerText;
    if(text.length == 1){
        displayBox.innerText = 0;
    }
    else{
        displayBox.innerText = text.substring (0,text.length -1)
    }
})
allClear.addEventListener("click" , function(event){
    displayBox.innerText = 0;
})



