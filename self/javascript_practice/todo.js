let first = prompt("What would you like to do?");
const todolist = [];
while (first !== "quit" && first !== "q") {
    if (first === "list") {
        console.log("***********");
        for (let i = 0; i < todolist.length; i++) {
            console.log("*************")

            console.log(`${i}: ${todolist[i]}`)
            console.log("*************")
        }
    }

    else if (first === "new") {
        const newtodo = prompt("Enter new todo")
        todolist.push(newtodo);
        console.log(`${newtodo} added to the list`)
    }

    else if (first === "delete") {
        const del = parseInt(prompt("What would you delete your todo? insert index"));
        if (!Number.isNaN(del)) {
            const deleted = todolist.splice(del, 1);
            console.log(`ok deleted ${deleted[0]}`)
        }
        else {
            console.log('unknown index')
        }

    }
    else {
        first = prompt("retry");
    }
    first = prompt("What would you like to do?");

}
console.log("You quit editing todo list")