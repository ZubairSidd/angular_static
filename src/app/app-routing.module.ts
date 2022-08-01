import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ClaimComponent } from './admin/claim/claim.component';
import { PaymentComponent } from './admin/payment/payment.component';
import { PolicyComponent } from './admin/policy/policy.component';
import { UsersComponent } from './admin/users/users.component';
import { BuyPageComponent } from './buy-page/buy-page.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ClaimFormComponent } from './claim-form/claim-form.component';
import { RenewComponent } from './checkout/renew/renew.component';
import { AdminGuard } from './guard/admin.guard';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PlanPageComponent } from './plan-page/plan-page.component';
import { PremiumComponent } from './premium/premium.component';
import { UserComponent } from './profile/user/user.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { TravelPlanComponent } from './travel-plan/travel-plan.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'premium', component: PremiumComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'buy-page', component: BuyPageComponent, canActivate: [AuthGuard] },
  {
    path: 'buy-page/:detail_id/plan-page',
    component: PlanPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'buy-page/:detail_id/plan-page/:plan_id/checkout',
    component: CheckoutComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'buy-page/:detail_id/plan-page/:plan_id/renew/:purchase_id',
    component: RenewComponent,
    canActivate: [AuthGuard],
  },
  { path: 'profile/user', component: UserComponent, canActivate: [AuthGuard] },
<<<<<<< HEAD
  { path:'admin/claim',component:ClaimComponent},
  { path:'admin/payment',component:PaymentComponent},
  { path:'admin/policy',component:PolicyComponent},
  { path:'admin/users',component:UsersComponent},
  { path:'claim-form',component:ClaimFormComponent},
  { path:'travel-plan',component:TravelPlanComponent}

=======

  { path: 'admin/claim', component: ClaimComponent, canActivate: [AdminGuard] },
  {
    path: 'admin/payment',
    component: PaymentComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'admin/policy',
    component: PolicyComponent,
    canActivate: [AdminGuard],
  },
 
  { path:'claim-form',component:ClaimFormComponent}
  
>>>>>>> 4681c5c9b6a67b92f895dbd71c53cf37630e7ca7
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
