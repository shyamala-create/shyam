function faredet(dist){
ditance="323KM"
    if(dist>=500){
    return "invalid"
    }
ticketfare="Rs.420.00"
servicecharge="Rs.22.90"
Totalfare="Rs.442.90"
return servicecharge
}
var accno= faredet(200)
if(accno!=undefined){
document.writeln(servicecharge)  
}

function passeenger(status){
name=["venkatesh "," "," naveen RM"]
	if(name[1]==undefined){
    return "invalid"
    }
age=[27,27,23]
gender=["make","female","female"]
seat=[7,8,9]
return age
}
var PD=passeenger("RLWL")
if(PD!=undefined){
document.writeln(age[0])
}
class flight
   {
     constructor(flightname,flightno)
     {
       this.flightname=flightname
       this.flightno=flightno
       this.info(100038,41150,"1/1/2021","Business Class","Premium")
     }
     info(id,no,date,time,clas,quota)
     {
          this.id=id
          this.no=no
          this.date=date
          this.time=time
          this.clas=clas
          this.quota=quota
          if(this.id==100038)
          {
            document.writeln("Your ticket details are")
            this.details("Adithyan","Male","aj@123","COK","MLB")
          }
          else
          {
            document.writeln("Error in ticket no try again!!")
          }
     }
     details(name,gender,mailid,from,to)
      {
         this.name=name
         this.gender=gender
         this.mailid=mailid
         this.from=from
         this.to=to
         if(mailid=="aj@123")
         {
          //document.writeln("Wish you a happy and safe journey")
          this.display()
        }
        else
        {
          document.writeln("Error try again!!")
        }
        }
      display()
      {
       
       document.writeln(this.flightname)
       document.writeln(this.flightno)
       document.writeln(this.id)
       document.writeln(this.no)
       document.writeln(this.date)
       document.writeln(this.time)
       document.writeln(this.clas)
       document.writeln(this.quota)
       document.writeln(this.name)
       document.writeln(this.gender)
       document.writeln(this.mailid)
       document.writeln(this.from)
       document.writeln(this.to)
       document.writeln("Wish you a happy and safe journey")
      }
    }
    var f=new flight("Air India",3664)
    
========================================================================================================================

let system=
   {
     rating:"4.5",
     processor:"Intelcorei5",
     ram:"4GB",
   spec(type,name,description)
   {
      this.type=type
      this.name=name
      this.description=description
      this.osdetails("Windows",10,8051)
   },
   osdetails(os,version,id)
   {
     this.os=os
     this.version=version
     this.id=id
     this.validate()
   },
   validate()
   {
     if(this.id==8051)
     {
       document.writeln("<br\>Veraion details are:")
       this.display()
     }
       else
       {
         document.writeln("Error in version id")
       }
   },
   display()
   {
    
     document.write(this.rating)
     document.write(this.processor)
     document.write(this.ram)
     document.write(this.type)
     document.write(this.name)
     document.write(this.description)
     document.write(this.os)
     document.write(this.version)
    document.write(this.id)

    }
   }
   system.spec("<br/>64Bit","<br/>hp","<br/>workgroup")

===================================================================================================================

class creditcarddetails
{
      creditcardverification(number)
       {
        this.number = number
         if(this.number == 97465893)
           {
            this.utilization= 3;
            this.balance="571.36,0";
            this.lastpayment="300, 11Jan2021";
            this.creditlimit="18000,17428.64";
            this.balance = this.showlimit="3600,3600";
           document.writeln("Available Cash" + this.balance);
          }
        else
         {
          document.writeln("Invalid Credentials");
         }
       }
    balance(TotalOutstanding , unbilled)
    {  
    this.TotalOutstanding = TotalOutstanding
    this.unbilled = unbilled
    document.writeln("Total Outstanding :"+ this.TotalOutstanding);   
    document.writeln("Unbilled "+ this.unbilled);
   }
    showlastpaymentmade(lastamountmade, PaymentMadeOn )
     {
       this.lastamountmade = lastamountmade
       this.PaymentMadeon = PaymentMadeOn
       document.writeln("Last Payment made on "+this.PaymentMadeon)
       document.writeln("Last Amount Made"+ this.lastamountmade);
     }
     creditlimit(TotalCredit, Availcred)
      {
         this.TotalCredit = TotalCredit
         this.Availcred = Availcred
         if(this.TotalCredit > 20000)
          {
             document.writeln("Credit Limit Exhausted");
          }
        else
         {
           this.rem  = 20000 - this.TotalCredit;
          document.writeln("Left over Credits "+ this.rem);
        }
      }
     limit(totalcash, cashavailable )
      {    
         this.totalcash= totalcash
         this.cashavailable = cashavailable
         return this.cashavailable;
      }
}
let bal = new creditcarddetails()
bal.creditcardverification(97465893)
bal.creditcardverification(97465893)

===================================================================================================

let system=
   {
     rating:"4.5",
     processor:"Intelcorei5",
     ram:"4GB",
   spec(type,name,description)
   {
      this.type=type
      this.name=name
      this.description=description
      this.osdetails("Windows",10,8051)
   },
   osdetails(os,version,id)
   {
     this.os=os
     this.version=version
     this.id=id
     this.validate()
   },
   validate()
   {
     if(this.id==8051)
     {
       document.writeln("<br\>Veraion details are:")
       this.display()
     }
       else
       {
         document.writeln("Error in version id")
       }
   },
   display()
   {
    
     document.write(this.rating)
     document.write(this.processor)
     document.write(this.ram)
     document.write(this.type)
     document.write(this.name)
     document.write(this.description)
     document.write(this.os)
     document.write(this.version)
    document.write(this.id)

    }
   }
   system.spec("<br/>64Bit","<br/>hp","<br/>workgroup")
