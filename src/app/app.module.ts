import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import{HttpClient} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataServiceService } from './services/data-service.service';
import { AuthorsComponent } from './authors/authors.component';
import { TestModule1Module } from './test-module1/test-module1.module';
import { MypipePipe } from './mypipe.pipe';
import { PanelComponent } from './panel/panel.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from './services/users.service';
import { CustomersComponent } from './customers/customers.component';
import { PostComponent } from './post/post.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { Test3RoutingModule } from "./test-3/test-3-routing.module";
import { Test4RoutingModule } from "./test-4/test-4-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    MypipePipe,
    PanelComponent,
    ContactFormComponent,
    CustomersComponent,
    PostComponent,
    HomeComponent
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TestModule1Module,
    RouterModule,
    Test3RoutingModule,
    Test4RoutingModule,
  ],

  providers: [
    HttpClient,
    UsersService,
    DataServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
