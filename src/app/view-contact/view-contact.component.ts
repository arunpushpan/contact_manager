import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {

contactId:string = ''
contact:any
groupId:any
groupName:any
  constructor(private activatedRoute:ActivatedRoute, private api:ApiService) {}

  ngOnInit(): void {
    // params is the property of ActivatedRoute which returns the parameter , in our case contactId is the parameter(which is passed in the url)
  this.activatedRoute.params.subscribe((data:any)=>{
    this.contactId=data.contactId
    
  })
  // api call to get contact
 this.api.viewContact(this.contactId).subscribe((data:any)=>{
  this.contact = data
  this.groupId = data.groupId
  console.log(this.groupId);

  // api call to get group name
  // result contains data in group api \\ to get name from it call it as result.name
this.api.getGroupName(this.groupId).subscribe((result:any)=>{
this.groupName=result.name    
console.log(this.groupName);

 })

})

  }

}
