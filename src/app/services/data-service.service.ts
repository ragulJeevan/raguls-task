import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

 getauthors(){
  return["ragul","nawin","maha","gandhi"];
 }
}
