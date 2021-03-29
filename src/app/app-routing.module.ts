import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrialComponent } from './trial/trial.component';
import { SecondComponent } from './second/second.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'trialComponent', component: TrialComponent},
  {path: 'secondComponent', component: SecondComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
