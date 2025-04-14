let boxes=document.querySelectorAll(".boxes");
let winner_msg=document.querySelector(".hide");
let msg=document.querySelector("#msg");
let new_game=document.querySelector("#new_game");
let refresh=document.querySelector("#refresh");
// console.log(boxes);
const winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const wincheck=()=>{
    for (let j of winpatterns){
        // console.log(
        //     j[0],j[1],j[2]);
        let first_num=boxes[j[0]].innerText;
        let sec_num=boxes[j[1]].innerText;
        let thrd_num=boxes[j[2]].innerText;
        if (first_num!="" && first_num==sec_num && sec_num==thrd_num){
            // console.log("winner found");
            let winner=boxes[j[0]].innerText;
            
            winnermsg(winner);
            disableboxes();    
        }
    }
};
const winnermsg=(winner)=>{
    msg.innerText=`congratulations winner is ${winner}`;
    winner_msg.classList.remove("hide");
};
const disableboxes =()=>{
    for (let box of boxes){
        box.disabled=true;
    }
};
const enablesboxes=()=>{
    for (let box of boxes){
        box.disabled=false;
    }
};


const game=()=>{
    let i=0;
    boxes.forEach((box)=>{
        box.addEventListener("click",()=>{
            i++;
            
            if(i%2==0){
                box.innerText="O";
                box.setAttribute("class","boxes O");
            }else{
                box.innerText="X";
                box.setAttribute("class","boxes X");
            }
            box.disabled=true;
            
            wincheck();
            
        })
    })
};
game()
const reset=()=>{
    enablesboxes();
    
    winner_msg.classList.add("hide");
    boxes.forEach((box)=>{
        box.innerText="";
        box.className="boxes";
        
    });
    console.log(boxes);
    game();
};

new_game.addEventListener("click",reset);
refresh.addEventListener("click",reset);


