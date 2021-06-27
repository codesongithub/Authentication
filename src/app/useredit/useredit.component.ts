import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.css']
})
export class UsereditComponent implements OnInit {
  fb:FormBuilder=new FormBuilder;
  userForm:any;
  currentId:any;
  currentUserData:any;

  constructor(private activeRoute:ActivatedRoute,private userService:UserService,private route:Router) {this.currentId=activeRoute.snapshot.params.id }

  ngOnInit(): void {
    this.userForm=this.fb.group({
      "username":this.fb.control("",Validators.required),
      "mobile":this.fb.control("",Validators.required),
      "email":this.fb.control("",Validators.required),
      "address":this.fb.control("",Validators.required)
    })
    this.userService.returnUserById(this.currentId).subscribe((res)=>{
      this.currentUserData=res
      this.userForm.patchValue(this.currentUserData)
    })
    
  }
  updateForm(){
    this.userService.updateUserById(this.currentId,this.userForm.value).subscribe(()=>{
      this.route.navigate(["/userlist"])
    })
  }

}
