import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs-compat/add/operator/map'
import { environment } from 'src/environments/environment';


@Injectable()
export class ProfileService {

   private username:string;
   private clientid = '89ce624fda7d1d49555c';
   private clientsecret = "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";



  constructor(private httpClient:HttpClient) {
    console.log("service is now ready");
    this.username = 'Jade-ve'
   }

  
   
   getProfileInfo(){
    return this.httpClient.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
    Object((res: any) => {
      return res
     });
   }

   getProfileRepos(){
     return this.httpClient.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
     Object((res: any) => {
       return res
      });
     }
       updateProfile(username:string){
         this.username = username;
       }
     
    }
   