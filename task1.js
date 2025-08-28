// To-Do List Loyihasi Tavsifi
// Obyekt yondashuvi: Biz to-do ro'yxatini boshqarish uchun obyekt yaratamiz. 
// Bu obyekt ro'yxat elementlarini saqlash, yangi vazifa qo'shish, vazifa o'chirish va ro'yxatni 
// konsol orqali ko'rish kabi metodlarga ega bo'lsin.
let toDoList=[
    {id: 1, task: "Learn JavaScript Objects" },
    {id: 2, task: "Read a book that Atomic Habits"},
    {id: 3, task: "To do morning exercises"},
]
function addTask(task) {
    const newId=toDoList.length > 0 ? toDoList[toDoList.length - 1].id + 1 : 1
    toDoList.push({ id: newId, task: task });
}
function removeTask(id) {
    const index=toDoList.findIndex(item => item.id=== id)
    if (index !== -1){
        toDoList.splice(index, 1)
    } else {
        console.log("Bunday id topilmadi")
    }
}
function printTasks(){
    for (let value of toDoList){
        console.log(value)
    }
}
addTask("go to the course")
removeTask(2)
printTasks()