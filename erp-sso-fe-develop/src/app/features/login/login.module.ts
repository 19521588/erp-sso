import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./components/login.component";
import { Sharedmodule } from "src/app/shared/shared.module";
import { TranslateService, TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    Sharedmodule,
    ReactiveFormsModule,
    TranslateModule,
    RouterModule,
  ],
  exports: [LoginComponent],
})
export class LoginModule {
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
