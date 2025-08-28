let Expenses = {
    water: 0,
    gas: 0,
    electricity: 0,
    addExpense: function(type, amount) {
        if(this.hasOwnProperty(type)){
            this[type]+=amount
            console.log(`${type} uchun ${amount} qo'shildi. Natija: ${this[type]} `)
        }else{
            console.log(`Xatolik! ${type} xarajat turi mavjudmas`)
        }
    },
    removeExpense: function(type, amount) {
        if(this.hasOwnProperty(type)){
            if(this[type]>=amount){
                this[type]-=amount
                console.log(`${this[type]} uchun ${amount} qiymat o'chirildi. Natija: ${this[type]}`)
            }else{
                console.log(`Xatolik! ${type} uchun yetarli mablag' yo'q`)
            }
        }else{
            console.log(`Xatolik! ${type} xarajat turi mavjudmas`)
        }
    },
    printMonthlyReport :function() {
        console.log(`Suv uchun oylik xarajat: ${this.water}`)
        console.log(`Gaz uchun oylik xarajat: ${this.gas}`)
        console.log(`Elektr energiyasi uchun oylik xarajat: ${this.electricity}`)
	}
};
Expenses.addExpense("water", 200000)
Expenses.removeExpense("gas", 100000)
Expenses.printMonthlyReport()

