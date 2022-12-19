import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyContact } from 'src/models/myContacts';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // url of contacts is stored to a variable named baseUrl, string implies the type
 baseUrl:string = 'http://localhost:3000/contacts'
// http is the variable name
  constructor(private http: HttpClient) { }
  
  // api call to get allcontacts, Observable is the type 
  allContacts():Observable<MyContact>{
   return this.http.get(this.baseUrl)
  }

  // function to view a particular contact
  viewContact(contactId:string){
    // in backtic appending contactid with baseurl
   return this.http.get(`${this.baseUrl}/${contactId}`)
  }

  // functio to get a particular groupname
  getGroupName(groupId:string){
  return this.http.get('http://localhost:3000/groups/'+groupId)
  }

  // function to fetch all group names from api//to display as options in add contact page
  getAllGroups(){
  return this.http.get('http://localhost:3000/groups')
  }

  // function for adding new contact into api 
  addContact(contactBody:any){
  return  this.http.post(this.baseUrl,contactBody)
  }
  
}
