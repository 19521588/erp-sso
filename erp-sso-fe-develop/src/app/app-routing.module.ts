import { UserListingComponent } from "./features/user-listing/user-listing.component";
import { CreateNewpassComponent } from "./features/forgot-password/components/create-newpass/create-newpass.component";
import { LoginComponent } from "./features/login/components/login.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuardService as Guard } from "./shared/services/auth-guard.service";
import { LogoutComponent } from "./features/log-out/logout/logout.component";
import { CheckComponent } from "./features/check/check.component";
import { ForgotPasswordComponent } from "./features/forgot-password/components/forgot-password/forgot-password.component";
import { ListingUserComponent } from "./features/listing-user/listing-user.component";
import { ListingComponentsComponent } from "./features/listing/listing-components/listing-components.component";

const router: Routes = [
  {
    path: "components",
    component: CheckComponent,
  },
  { path: "logout", component: LogoutComponent },
  {
    path: "login",
    component: LoginComponent,
  },
  { path: "forgot-password", component: ForgotPasswordComponent },
  {
    path: "listing",
    component: ListingComponentsComponent,
    canActivate: [Guard],
  },
  {
    path: "listing/:tagname",
    component: ListingUserComponent,
    canActivate: [Guard],
  },
  { path: "create-newpassword", component: CreateNewpassComponent },
  { path: "", redirectTo: "login", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
