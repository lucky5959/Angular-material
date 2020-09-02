import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserdataModule } from './userdata/userdata.module';
import { SrvUserService } from './srv-user.service';
import { ReactiveFormsModule, FormGroup, FormsModule } from '@angular/forms';
// import {MatIconModule} from '@angular/material';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UserdataModule,
    ReactiveFormsModule,
    FormsModule,
    // MatIconModule
  ],
  providers: [SrvUserService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
