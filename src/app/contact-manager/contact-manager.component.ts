import { Component, OnInit } from '@angular/core';
import { MyContact } from 'src/models/myContacts';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent implements OnInit {

  // declaring a variable alContact with type MyContact(Which is an array)
    alContacts:MyContact[]=[]
    // declaring a variable searchKey with type string
      searchKey:string=''

     constructor(private api:ApiService){ }

     ngOnInit(): void {
   this.getAllContact()
    }
    // get all contact
    getAllContact(){
      this.api.allContacts().subscribe((data:any)=>{
        console.log(data);
  this.alContacts = data
        
      })
    }

// search
// event is just a variable name
    search(event:any){
    this.searchKey=  event.target.value;
      
    }
    deleteContact(contactId:any){
      this.api.deleteContact(contactId).subscribe((data:any)=>{
  this.getAllContact()
      })
    }

     }

