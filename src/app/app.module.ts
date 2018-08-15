import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialAppModule } from './ngmaterial.module';

import { FontAwesomeAppModule } from './fontawesome.module'
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { environment } from './../environments/environment';
import { ResumeNavbarComponent } from './resume-navbar/resume-navbar.component';
import { ExperienceComponent } from './experience/experience.component';
import { SummaryComponent } from './summary/summary.component';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { ReversePipe } from './reverse.pipe';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ExperienceTlComponent } from './experience-tl/experience-tl.component';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { EducationComponent } from './education/education.component';
import { TagCloudModule } from 'angular-tag-cloud-module';


@NgModule({
  declarations: [
    AppComponent,
    ResumeNavbarComponent,
    ExperienceComponent,
    SummaryComponent,
    RoutingComponents,
    ReversePipe,
    ExperienceTlComponent,
    EducationComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    MaterialAppModule,
    FontAwesomeAppModule,
    AppRoutingModule,
    FlexLayoutModule,
    MglTimelineModule,
    TagCloudModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
