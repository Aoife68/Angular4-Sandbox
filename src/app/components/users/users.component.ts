import { Component, OnInit, ViewChild } from "@angular/core";
import { UserService } from '../../services/user.service'
import { User } from "../../models/User";


@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  };
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  @ViewChild('userForm') form: any;
  
  constructor(private userService: UserService) {}

  ngOnInit() {
    //Getting users through observable 
    this.userService.getUsers().subscribe(users =>{
      this.users = users;
      this.loaded = true;      
    });
    
  } //end OnInit


  toggleHide(user: User) {
    user.hide = !user.hide;
  }

  onSubmit({value, valid}:{value:User, valid:boolean}) {  
    if(!valid){
      console.log('Form is not valid');
      
    } else {
      //set additional values for user
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;
      //assign user using custom user service method
      this.userService.addUser(value);

      this.form.reset();
    }
  }

}
