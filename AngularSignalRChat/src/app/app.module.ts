import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './chat/chat.component';
import { MaterialModule } from './shared/material.module';
import { FormsModule } from '@angular/forms';
import { UserService } from './shared/user.service';
import { ChatService } from './shared/chat.service';
import { AutofocusDirective } from './shared/autofocus.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    LoginComponent,
    AutofocusDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [UserService, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
