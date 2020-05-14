import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./comps/home/home.component";
import { HttpClientModule } from "@angular/common/http";
import { NavbarComponent } from "./comps/navbar/navbar.component";
import { LoginComponent } from "./comps/login/login.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FavouritesComponent } from "./comps/favourites/favourites.component";
import { AuthguardService } from "./services/authguard.service";
import { RegisterComponent } from './comps/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    FavouritesComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AuthguardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
