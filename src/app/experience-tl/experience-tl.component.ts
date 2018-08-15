import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'; 
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-experience-tl',
  templateUrl: './experience-tl.component.html',
  styleUrls: ['./experience-tl.component.css']
})
export class ExperienceTlComponent implements OnInit {
  alternate: boolean = true;
  toggle: boolean = true;
  color: boolean = false;
  size: number = 60;
  disabled : boolean = false;
  iconName : string = "format_align_justify";
  experiencesObservable: Observable<any[]>;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.experiencesObservable = this.getExperiences('/experience');
    
  }

  getExperiences(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }

  changeIcon() {
     if (this.alternate) {
      this.iconName="format_align_left";
    } else {
      this.iconName="format_align_justify";
    }
  }

}
