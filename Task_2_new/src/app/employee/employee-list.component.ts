import {Component} from '@angular/core'

@Component({
selector:'pm-employee',
templateUrl:'./employee-list.component.html'
})


export class employeeListComponent{
    usrId:number;
    name:string;
    phone:string;
    city:string;
    addressOne:string;
    addressTwo:string;
    postalCode:number;
    showAddForm:boolean=false;

addNew(){
    // let obj={
        
    // }
    this.showAddForm=true;
    this.employees.push({
        "id":this.usrId,
         "name":this.name,
         "phone":this.phone,
         "address":{
            "city":this.city,
            "address_line1":this.addressOne,
            "address_line2":this.addressTwo,
            "postal_code":this.postalCode
         }

     

    });
    this.usrId;
    this.name='';
    this.phone='';
    this.city='';
    this.addressOne='';
    this.addressTwo='';
    this.postalCode;
   console.log("this.employees",this.employees);
   console.log("function is calling ");
   
}

employees:any[]=[
    {
        
              "id":1,
              "name":"Jhon",
              "phone":"9999999999",
              "address":{
                 "city":"Pune",
                 "address_line1":"ABC road",
                 "address_line2":"XYZ building",
                 "postal_code":"12455"
              }
           },
           {
              "id":2,
              "name":"Jacob",
              "phone":"AZ99A99PQ9",
              "address":{
                 "city":"Pune",
                 "address_line1":"PQR road",
                 "address_line2":"ABC building",
                 "postal_code":"13455"
              }
           },
           {
              "id":3,
              "name":"Ari",
              "phone":"145458522",
              "address":{
                 "city":"Mumbai",
                 "address_line1":"ABC road",
                 "address_line2":"XYZ building",
                 "postal_code":"12455"
              }
           }
        ]
     
}