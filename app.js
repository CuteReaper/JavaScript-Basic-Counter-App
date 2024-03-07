
let changeWhenOccurs = false;

let count = 0 ;
function increment () {
    count = document.querySelector("#count").innerHTML;
    document.querySelector("#count").innerHTML= (count = parseInt(count) + 1);
    if (document.querySelector("#warning").innerHTML=="please enter username"){
        document.querySelector("#warning").innerHTML="";
        changeWhenOccurs = false;
    }

}



let user = document.getElementById("user")

user.addEventListener("change" , function(){
    alert(user.value)
    changeWhenOccurs = true;
})

function save (){
    if (changeWhenOccurs){
        let save = document.querySelector("#history")
        save.innerHTML +=user.value + " : " +  count + "<br>" 
        document.querySelector("#count").innerHTML = 0;
        count = 0;
        changeWhenOccurs = false;
        reset()
    }
    else{
        document.querySelector("#warning").innerHTML="please enter username";
    }
}

function reset(){
    user.value = "";
    document.querySelector("#count").innerHTML= 0;
    if (document.querySelector("#warning").innerHTML=="please enter username"){
        document.querySelector("#warning").innerHTML="";
    }

}

// to do 
// if user change counts using inspect elements script conut after that counts.need to fix it