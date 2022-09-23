import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './onboarding/login/login.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http"
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import en from '@angular/common/locales/en';

//components
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { SignupComponent } from './onboarding/signup/signup.component';
import { RegisterComponent } from './user/register/register.component';
import { CommonComponent } from './onboarding/common/common.component';
import { EducationComponent } from './user/education/education.component';
import { ExperienceComponent } from './user/experience/experience.component';
import { SkillsComponent } from './user/skills/skills.component';
import { EditComponent } from './user/edit/edit.component';
import { AddressComponent } from './address/address.component';
import { registerLocaleData } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

registerLocaleData(en);

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
    EditComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
