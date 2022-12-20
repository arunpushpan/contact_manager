import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyContact } from 'src/models/myContacts';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit{
  // declaring an array to store all the group names
  allGroups:any[]=[]
  contactName:string=''
  contact:MyContact = {} as MyContact

  constructor(private api:ApiService, private router:Router) {}

  ngOnInit(): void {
    this.api.getAllGroups().subscribe((data:any)=>{
      console.log(data);
      this.allGroups = data
    })
  }
addContact(){
this.api.addContact(this.contact).subscribe((data:any)=>{
  // redirecting page in ts navigateByUrl-to do this add router in constructor,here navigating to admin page
  this.router.navigateByUrl('')
})
}
}
