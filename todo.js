let todo=[];
let userReq=prompt("Enter your request");

///main logic for todo web

while(true){
    if(userReq == "quit"){
        console.log("exit from app");
        break;
    }
    if(userReq =="add"){
        let task=prompt("Add task in list");
        todo.push(task);
        console.log("task added");
        
    }
    userReq=prompt("Enter your request");
    if(userReq== "list"){
        console.log("--------");
        for(task of todo){
            console.log(task);
        }
        console.log("--------");
    }
    if(userReq =="delete"){
        let idx=prompt("enter the index number");
        todo.splice(idx ,1);
        console.log("task deleted");
    }
    else{
        console.log("Wrong Request!");
    }
}
