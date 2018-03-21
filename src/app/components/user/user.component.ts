import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { Address } from '../../models/User';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit{
user: User;
address:Address;

  //Methods
  constructor(){
   
  }

  ngOnInit(){
    this.user = {
      firstName :'Harriet',
      lastName: 'Tubman',
      email: 'ht@email.com'
      // age: 45,
      // address :{
      //   street: 'string',
      //   city: 'string',
      //   county: 'string'
      // }
    };

    this.address ={
      street: 'string',
      city: 'string',
      county: 'string'
    }
  }

}





