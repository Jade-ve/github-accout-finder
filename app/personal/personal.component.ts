import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})

export class PersonalComponent implements OnInit {
  profile:any;
  repos:any;
  username!: string;

  constructor(private profileService: ProfileService) { 
    
  }

  ngOnInit(){
    this.username="Ephrao1"
    this.profileService.updateProfile(this.username);
    this.profileService.getProfileInfo().subscribe((profile:any) => {
      console.log(profile);
      this.profile = profile;
      
    });

    this.profileService.getProfileRepos().subscribe((repos: any) => {
      console.log(repos);
      this.repos = repos;
    })
  }

}




