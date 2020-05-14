import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./comps/home/home.component";
import { LoginComponent } from "./comps/login/login.component";
import { FavouritesComponent } from "./comps/favourites/favourites.component";
import { AuthguardService } from "./services/authguard.service";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "login" },
  { path: "home", component: HomeComponent, canActivate: [AuthguardService] },
  { path: "login", component: LoginComponent },
  {
    path: "favourites",
    component: FavouritesComponent,
    canActivate: [AuthguardService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
