
console.log("index is connected");

// active task 
function activeTask(){

    const cards = document.querySelectorAll(".card");
    // console.log('Cards:', totalTask); // checking each card
    const totalTask = cards.length;

    let diactiveBtnCount = 0;
    let activeBtnCount = 0;

    cards.forEach(cardItem => {

        const btnItem =  cardItem.querySelectorAll(".btn");

        if(btnItem){
            if(btnItem.disabled){

                diactiveBtnCount++ ;
            }else{
                activeBtnCount++
            }
        };
    });

    if((activeBtnCount + diactiveBtnCount ) === totalTask){

        return activeBtnCount ;

    }else {
        console.log("'Some task has not completed button");

        return false;
    }

    
}

// activetask()calling
// console.log(activeTask());

let totalTask = activeTask();
const task  = document.getElementById("task");

if(totalTask !== false  && task){
    task.textContent = totalTask > 9 ? total : "0" + totalTask;
}

// active the button class

const btn = document.querySelectorAll(".btn");

btn.forEach(btnItem => {
    btnItem.addEventListener("click",() =>{
        alert("Board updated successfully");

        // it will minus the task to :00
        btnItem.disabled = true;
        btnItem.style.backgroundColor = "#c5caeb";
        btnItem.classList.remove("hover:bg-[#03179b]");

        totalTask-- ;

        if(totalTask === 0){
            alert("Congrats! You have completed all the current tasks");
        }

        task.textContent = totalTask > 9 ? totalTask : "0" + totalTask 

        const element  = document.getElementById("done-task");
        element.textContent = parseInt(element.textContent)+1;

        const parent = document.getElementById("Activity");
        const p = document.createElement("p")

        p.className = " bg-white rounded-md  ";
        p.textContent = `You have completed the task ${btnItem.parentElement.parentElement.children[1].textContent}
        at ${new Date().toLocaleTimeString("es-US",{
            hour : "2-digit",
            mintue :" 2-digit",
            secend : "2-digit",
            hour12 :true

        })}
        }`;

        parent.appendChild(p);

    })
});















