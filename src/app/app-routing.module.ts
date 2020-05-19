import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrialComponent } from './trial/trial.component';
import { SecondComponent } from './second/second.component';


const routes: Routes = [
  {path: 'trialComponent', component: TrialComponent},
  {path: 'secondComponent', component: SecondComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
