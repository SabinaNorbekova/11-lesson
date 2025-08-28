// Bir funksiya yarating, bu funksiya matnlar ro'yxatini qabul qilib, faqatgina ichida raqamlar bo'lgan matnlarni 
// saqlagan yangi ro'yxatni qaytaradi. 
// Agar raqamlar bo'lgan matnlar bo'lmasa, bo'sh ro'yxat qaytariladi. 
function numInStr(arr){
    let newArr=[]
    for(let word of arr){
        if((/\d/).test(word)){
            newArr.push(word)
        }
    }
    return newArr
}
console.log(numInStr(["1a", "a", "2b", "b"]))
console.log(numInStr(["abc", "abc10"]))
console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"])) 
console.log(numInStr(["this is a test", "test1"]))