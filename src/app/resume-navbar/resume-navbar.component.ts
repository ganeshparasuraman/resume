import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'; 
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'resume-navbar',
  templateUrl: './resume-navbar.component.html',
  styleUrls: ['./resume-navbar.component.css']
})
export class ResumeNavbarComponent implements OnInit {

  profileObservable : Observable<any[]>;
  imagepath="/assets/images/photo.jpg";
  constructor(private db: AngularFireDatabase) {}
  
  ngOnInit() {
    this.profileObservable = this.getProfile("/profile");
    
   }

  getProfile(listPath) : Observable<any[]> {
    return this.db.list(listPath).valueChanges();
    
  }
  collapsed = true;
     toggleCollapsed(): void {
       this.collapsed = !this.collapsed;
     }
}
