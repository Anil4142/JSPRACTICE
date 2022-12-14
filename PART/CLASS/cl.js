//Class is a template, design(or)blueprint.//
                        //Class contains properties and methods// ----> are known as class members.


/*class Account{                  //Always class name starts with upper case(Caps)//                               

}
let a1=new Account()                //"a1" is the reference --> object reference
console.log(a1)    */                     // 





/*class Account{
    min_Bal=1000;
        account_holder_name(){
            
            console.log("Anil Kumar")

        }
    }
let x =new Account()   
console.log(x.min_Bal)

let y = new Account()  ----------->object===>used to create with new statement.
y.account_holder_name()
*/



class Account{
    min_Bal=300;

  
    deposit(){
        console.log("deposited 2000 ₹ ")
    }

    open_account(){
        console.log("account opened")
    }
    get_Bal(){
        console.log("Balance enquiery")

    }
     Total_Balance=20000000000;

     Withdraw_Balance(){
        console.log("Enter the amount")
     }
     recipt(){
        console.log("null")
     }
}

let a1=new Account()

console.log(a1.min_Bal)
a1.deposit()
a1. open_account()
a1. get_Bal()
a1. Withdraw_Balance()
console.log(a1.Total_Balance)
a1.recipt()
