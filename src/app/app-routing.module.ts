import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ExperienceComponent } from './experience/experience.component';
import { SummaryComponent } from './summary/summary.component'
import { ExperienceTlComponent } from './experience-tl/experience-tl.component'
import { EducationComponent } from './education/education.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: SummaryComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'timeline', component: ExperienceTlComponent },
  { path: 'education', component : EducationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }

export const RoutingComponents = [SummaryComponent, ExperienceComponent, ExperienceTlComponent];