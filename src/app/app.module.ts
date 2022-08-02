import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PremiumComponent } from './premium/premium.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';
import { BuyPageComponent } from './buy-page/buy-page.component';
import { PlanPageComponent } from './plan-page/plan-page.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { UserComponent } from './profile/user/user.component';
import { RenewComponent } from './checkout/renew/renew.component';
import { ClaimComponent } from './admin/claim/claim.component';
import { PaymentComponent } from './admin/payment/payment.component';
import { PolicyComponent } from './admin/policy/policy.component';
import { UsersComponent } from './admin/users/users.component';
import { ClaimFormComponent } from './claim-form/claim-form.component';
import { ForgetPasswordComponent } from './login/forget-password/forget-password.component';

import { TravelPlanComponent } from './travel-plan/travel-plan.component';
import { PlanComponent } from './admin/plan/plan.component';

import { TravelCheckoutComponent } from './travel-plan/travel-checkout/travel-checkout.component';
import { EditUserComponent } from './profile/edit-user/edit-user.component';
import { EditDetailComponent } from './profile/edit-detail/edit-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    PremiumComponent,
    LoginComponent,
    AboutComponent,
    ContactComponent,
    SignInComponent,
    BuyPageComponent,
    PlanPageComponent,
    CheckoutComponent,
    UserComponent,
    RenewComponent,
    ClaimComponent,
    PaymentComponent,
    PolicyComponent,
    UsersComponent,
    ClaimFormComponent,
    ForgetPasswordComponent,
    TravelPlanComponent,
    PlanComponent,

    TravelCheckoutComponent,
    EditUserComponent,
    EditDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
