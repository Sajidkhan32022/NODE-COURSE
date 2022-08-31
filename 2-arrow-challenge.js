const tasks = {
    Tasks : [
        {
            test : " shopping ",
            completed : true
        },
        {
            test : " clean yard ",
            completed : false
        },
        {
            test : "node course",
            completed : false
        }
    ],
    getTaskToDo() {
        return this.Tasks.filter((task) => task.completed == false)
    
    }
}

console.log(tasks.getTaskToDo())