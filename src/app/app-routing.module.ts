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
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [

  {path:"",component:HomeComponent},
  {path:"premium",component:PremiumComponent},
  {path:"about",component:AboutComponent},
  {path:"login",component:LoginComponent},
  {path:"sign-in",component:SignInComponent},
  {path:"buy-page",component:BuyPageComponent},
  {path:"plan-page",component:PlanPageComponent},
  {path:"checkout",component:CheckoutComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
