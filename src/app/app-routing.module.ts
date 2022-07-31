import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BuyPageComponent } from './buy-page/buy-page.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PlanPageComponent } from './plan-page/plan-page.component';
import { PremiumComponent } from './premium/premium.component';
import { UserComponent } from './profile/user/user.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'premium', component: PremiumComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'buy-page', component: BuyPageComponent },
  { path: 'buy-page/:id/plan-page', component: PlanPageComponent },
  {
    path: 'buy-page/:detail_id/plan-page/:plan_id/checkout',
    component: CheckoutComponent,
  },
  { path: 'profile/user',component:UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
