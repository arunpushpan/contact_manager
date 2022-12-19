import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
// alContacts is the array name,any name can be given
// propName is for name(search is based on name) 
  transform(alContacts:any [], searchKey:string, propName:string): any [] {
    const result:any = []
    if(!alContacts || searchKey=='' || propName==''){
      return alContacts
    }
    alContacts.forEach((contact:any)=>{
      if(contact[propName].trim().toLowerCase().includes(searchKey.toLowerCase())){
        result.push(contact)
      }
    })
    return result;
  }

}
