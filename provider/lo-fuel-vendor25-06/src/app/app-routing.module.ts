import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "folder/Inbox",
    pathMatch: "full",
  },
  {
    path: "folder/:id",
    loadChildren: () =>
      import("./folder/folder.module").then((m) => m.FolderPageModule),
  },
  {
    path: "signin",
    loadChildren: () =>
      import("./pages/signin/signin.module").then((m) => m.SigninPageModule),
  },
  {
    path: "signup",
    loadChildren: () =>
      import("./pages/signup/signup.module").then((m) => m.SignupPageModule),
  },
  {
    path: "forgot",
    loadChildren: () =>
      import("./pages/forgot/forgot.module").then((m) => m.ForgotPageModule),
  },
  {
    path: "verify-number",
    loadChildren: () =>
      import("./pages/verify-number/verify-number.module").then(
        (m) => m.VerifyNumberPageModule
      ),
  },
  {
    path: "otp",
    loadChildren: () =>
      import("./pages/otp/otp.module").then((m) => m.OtpPageModule),
  },
  {
    path: "onboarding",
    loadChildren: () =>
      import("./pages/onboarding/onboarding.module").then(
        (m) => m.OnboardingPageModule
      ),
  },
  {
    path: "home",
    loadChildren: () =>
      import("./pages/home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "track",
    loadChildren: () =>
      import("./pages/track/track.module").then((m) => m.TrackPageModule),
  },
  {
    path: "complete-order",
    loadChildren: () =>
      import("./pages/complete-order/complete-order.module").then(
        (m) => m.CompleteOrderPageModule
      ),
  },
  {
    path: "earning",
    loadChildren: () =>
      import("./pages/earning/earning.module").then((m) => m.EarningPageModule),
  },
  {
    path: "review",
    loadChildren: () =>
      import("./pages/review/review.module").then((m) => m.ReviewPageModule),
  },
  {
    path: "history",
    loadChildren: () =>
      import("./pages/history/history.module").then((m) => m.HistoryPageModule),
  },
  {
    path: "profile",
    loadChildren: () =>
      import("./pages/profile/profile.module").then((m) => m.ProfilePageModule),
  },
  {
    path: "setting",
    loadChildren: () =>
      import("./pages/setting/setting.module").then((m) => m.SettingPageModule),
  },

  {
    path: "change-password",
    loadChildren: () =>
      import("./pages/change-password/change-password.module").then(
        (m) => m.ChangePasswordPageModule
      ),
  },
  {
    path: 'popover',
    loadChildren: () => import('./pages/popover/popover.module').then( m => m.PopoverPageModule)
  },
  {
    path: 'policy',
    loadChildren: () => import('./pages/policy/policy.module').then( m => m.PolicyPageModule)
  },
  {
    path: 'price',
    loadChildren: () => import('./pages/price/price.module').then( m => m.PricePageModule)
  },
  {
    path: 'addcategory',
    loadChildren: () => import('./pages/addcategory/addcategory.module').then( m => m.AddcategoryPageModule)
  },
  {
    path: 'password-otp',
    loadChildren: () => import('./pages/password-otp/password-otp.module').then( m => m.PasswordOtpPageModule)
  },
  {
    path: 'change-password2',
    loadChildren: () => import('./pages/change-password2/change-password2.module').then( m => m.ChangePassword2PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
