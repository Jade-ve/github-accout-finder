import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { environment } from 'src/environments/environment';

@Injectable()
export class ProfileService {

   private username:string;
   private clientid = '89ce624fda7d1d49555c';
   private clientsecret = "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";



  constructor(private httpClient:HttpClient) {
    console.log("service is now ready");
    this.username = 'Ephrao1'
   }

  
   

   getProfileInfo(){
     return this.httpClient.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
     .map((res: any) => {
       return res
      });
    }

    getProfileRepos(){
      return this.httpClient.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
      .map((res: any) => {
        return res
       });
      }
       updateProfile(username:string){
         this.username = username;
       }
     
    }