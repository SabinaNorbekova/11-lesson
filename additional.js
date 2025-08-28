// CRUD project
let studentsList = new Map();
function createStudent(name,info){
  if(studentsList.has(name)){
    return `Xatolik: ${name} foydalanuvchisi allaqachon mavjud!`;
  }
  studentsList.set(name, info)
  return studentsList
}
function readStudent(name){
  if(studentsList.has(name)){
    return studentsList.get(name);
  }
  return `${name} foydalanuvchisi topilmadi!`
}
function updateStudent(name, newInfo) {
  if (studentsList.has(name)){
    let oldInfo=studentsList.get(name)
    let updated={...oldInfo,...newInfo}
    studentsList.set(name, updated);
    return updated
  }
  return `${name} foydalanuvchisi topilmadi!`
}
function deleteStudent(name){
  if (studentsList.has(name)){
    studentsList.delete(name);
    return `${name} foydalanuvchisi o'chirildi!`
  }
  return `${name} foydalanuvchisi topilmadi!`
}
console.log(createStudent("Ali", {age:20, course:"Math"}))
// console.log(createStudent("Vali", {age:22, course:"Physics"}))
// console.log(createStudent("Ali", {age:25, course:"IT"})) 
console.log(readStudent("Ali"))
// console.log(readStudent("SN"))
// console.log(updateStudent("Vali", {age:23}))
// console.log(updateStudent("SN", { age:19}))
// console.log(deleteStudent("Vali"))

