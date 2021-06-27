import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.css']
})
export class UserviewComponent implements OnInit {
  currentId:any;
  currentUserData:any;
  constructor(private activatedRoute:ActivatedRoute,private userService:UserService) {
    this.currentId=activatedRoute.snapshot.params.id }

  ngOnInit(): void {

    
    this.userService.returnUserById(this.currentId).subscribe((res)=>{
      this.currentUserData=res
      
    })

  }

}
