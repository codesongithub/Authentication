import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  userList:Array<any>=[]

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.fetchUser()
  }
  fetchUser(){
    this.userService.returnUser().subscribe((res:any)=>{
      this.userList=res
    });
  }
  deleteuser(id:any){
    this.userService.deleteById(id).subscribe(()=>{
      this.fetchUser()
    })
}

}
