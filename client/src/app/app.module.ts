import {  NgModule  } from '@angular/core';  
import {  BrowserModule  } from '@angular/platform-browser';  
import {  FormsModule  } from '@angular/forms';  
import {  HttpModule  } from '@angular/http';  
import {  CompanyComponent  } from './company.component';  
import {  CompanyService } from './components/companyService';  

@NgModule({  
  imports: [BrowserModule, FormsModule, HttpModule],  
  declarations: [CompanyComponent],  
  providers: [CompanyComponent],  
  bootstrap: [CompanyComponent]  
})  
export class AppModule {};  
