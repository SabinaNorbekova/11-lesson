// Har bir narsa uchun qo'llaniladigan 6% soliqni hisobga olgan holda,
//  sotib olingan mahsulotlar soniga ko'ra jami narxni hisoblovchi funksiya yarating. 
function checkout(object) {
    const tax = 0.06
    let totalSum = 0
    for (const {prc,qty,taxable} of object){
      const subTotal=prc*qty;
      totalSum += taxable ? subTotal*(1+tax):subTotal;
    }
    return Math.round(totalSum*100)/100
}
  console.log(checkout([
    { desc: "kartoshka chiplari", prc: 2, qty: 2, taxable: false },
    { desc: "gazlangan suv", prc: 3, qty: 2, taxable: false },
    { desc: "qog'oz idishlar", prc: 5, qty: 1, taxable: true }
  ]));
   



