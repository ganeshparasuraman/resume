import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'; 
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})


export class ExperienceComponent implements OnInit {
  experiencesObservable: Observable<any[]>;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.experiencesObservable = this.getExperiences('/experience');
    
  }

  getExperiences(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }
}
