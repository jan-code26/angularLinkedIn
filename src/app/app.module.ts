import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './onboarding/login/login.component';
import {FormsModule} from "@angular/forms";
import { WelcomeComponent } from './home/welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { SignupComponent } from './onboarding/signup/signup.component';
import { RegisterComponent } from './user/register/register.component';
import { CommonComponent } from './onboarding/common/common.component';
import { EducationComponent } from './user/education/education.component';
import { ExperienceComponent } from './user/experience/experience.component';
import { SkillsComponent } from './user/skills/skills.component';
import { SchoolComponent } from './school/school.component';
import { OrganisationComponent } from './organisation/organisation.component';
import { EditComponent } from './user/edit/edit.component';
import { AddressComponent } from './address/address.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    SignupComponent,
    RegisterComponent,
    CommonComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    SchoolComponent,
    OrganisationComponent,
    EditComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
