import { LogoutModule } from "./features/log-out/logout/logout.module";
import { ForgotpasswordModule } from "./features/forgot-password/forgotpassword.module";
import { LoginModule } from "./features/login/login.module";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Sharedmodule } from "./shared/shared.module";
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from "@ngx-translate/core";
import { HttpClient } from "@angular/common/http";
import { HttpClientModule } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { NotFoundComponent } from "./features/not-found/component/not-found/not-found.component";
import { SsoRootComponent } from "./core/components/sso-root/sso-root.component";
import { CheckComponent } from "./features/check/check.component";
import { ListingUserComponent } from "./features/listing-user/listing-user.component";
import { ListingModule } from "./features/listing/listing.module";
import { AuthGuardService } from "./shared/services/auth-guard.service";
import { DialogModule } from "@syncfusion/ej2-angular-popups";
import { ProfileUserComponent } from "./features/profile-user/profile-user.component";
import { UserListingComponent } from "./features/user-listing/user-listing.component";
import { NgxPaginationModule } from "ngx-pagination";
import { ForgotPasswordCpComponent } from './intern-batch37/forgot-password-cp/forgot-password-cp.component';

function httpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    SsoRootComponent,
    CheckComponent,
    ListingUserComponent,
    ProfileUserComponent,
    UserListingComponent,
    ForgotPasswordCpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    Sharedmodule,
    LogoutModule,
    LoginModule,
    ListingModule,
    DialogModule,
    ForgotpasswordModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: "registerWhenStable:30000",
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    HttpClientModule,
    ListingModule,
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private translate: TranslateService) {
    this.initI18n();
  }
  private initI18n() {
    this.translate.addLangs(["en", "vi"]);
    this.translate.setDefaultLang("en");
    const browserLang = this.translate.getBrowserLang();
    if (browserLang && browserLang.match(/en|vi/)) {
      this.translate.use(browserLang);
    }
  }
}
