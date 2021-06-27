import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-usercreate',
  templateUrl: './usercreate.component.html',
  styleUrls: ['./usercreate.component.css']
})
export class UsercreateComponent implements OnInit {
  fb:FormBuilder=new FormBuilder;
  userForm:any;

  constructor(private userService:UserService,private route:Router) { }

  ngOnInit(): void {
    this.userForm=this.fb.group({
      "username":this.fb.control("",Validators.required),
      "mobile":this.fb.control("",Validators.required),
      "email":this.fb.control("",Validators.required),
      "address":this.fb.control("",Validators.required)
    })
  }
  submitForm(){
    this.userService.addUser(this.userForm.value).subscribe((res)=>{
      this.route.navigate(["/userlist"])
    })
  }

}
