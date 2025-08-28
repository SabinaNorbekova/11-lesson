// Biror matn qabul qilib, unda nechta harf va raqam borligini hisoblaydigan funksiya yozing. Natijani obyekt sifatida qaytaring.
function countAll(str){
    let counterLetter=0
    let counterNumber=0
    for (let i=0; i<str.length; i++){
        if(/[a-zA-Z]/.test(str[i])){
            counterLetter++
        }else if(/[0-9]/.test(str[i])){
            counterNumber++
        }
    }
    return {Harflar : counterLetter , Raqamlar: counterNumber}
}
console.log(countAll("Hello World")) 
console.log(countAll("H3ll0 Wor1d")) 
console.log(countAll("149990"))