import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from './profile.service';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PersonalComponent } from './personal/personal.component';
import { CapsPipe } from './caps.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component'

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    PersonalComponent,
    CapsPipe,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ ProfileService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
