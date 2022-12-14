/* class Account{
    min_Bal=1000;
    acc_Bal=0;
    deposit_Amt(amount){
        this.acc_Bal=this.acc_Bal+amount
    }
}
let a=new Account()
let a1=new Account()
console.log(a)
a.deposit_Amt(5000)
console.log(a)
a1.deposit_Amt(6000)
console.log(a1) */



class Account{
    min_Bal=500;
    acc_Bal=0;
    deposit_Amount(amount){
        this.acc_Bal=this.acc_Bal+amount
    }
    Bal_enq(){
      return ("Account Bal is ")+ this.acc_Bal
    }
    withdraw_Bal(amt){
        this.withdraw_Bal=this.acc_Bal-amt
    }
}
let a =new Account()
console.log(a)
a.deposit_Amount(10000)
console.log(a)
let r1=a.Bal_enq()
console.log(r1)
a.withdraw_Bal(500)
console.log(a)

