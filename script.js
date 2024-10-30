let btn = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newGame =  document.querySelector("#newbtn");
let msgcont =  document.querySelector(".message");
let msg =  document.querySelector("#msg");

let turnO = true;
const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame=() =>{
    turnO = true;
    enableboxes();
    msgcont.classList.add("hide");
}


btn.forEach((box)=>{
    box.addEventListener("click", ()=>{
       if(turnO === true){
        box.innerText= "O"
        turnO= false; 
       }
       else{
        box.innerText= "X"
        turnO= true; 
       }
       box.disabled= true; 
       checkWinner();
    })
});



const showWinner=(winner) => {
    msg.innerText = `Congrats! Winner is ${winner} `;
    msgcont.classList.remove("hide");
    disableboxes();
}

const disableboxes = () => {
    for(let box of btn){
        box.disabled = true;
    }
}

const enableboxes = () => {
    for(let box of btn){
        box.disabled = true;
        box.innerText="";
    }
}

const checkWinner = () => {
    for(let pattern of winpatterns){
        let pos1 = btn[pattern[0]].innerText;
        let pos2 = btn[pattern[1]].innerText;
        let pos3 = btn[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("Winner!",pos1);
                showWinner(pos1);
            }
        }
    }
}    
resetbtn.addEventListener("click", resetGame);
newGame.addEventListener("click", resetGame);
