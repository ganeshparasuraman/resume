import { Component, OnInit, TemplateRef } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { CloudData, CloudOptions, ZoomOnHoverOptions } from 'angular-tag-cloud-module';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  summaryObservable: Observable<any[]>;
  profileObservable: Observable<any[]>;
  tagObservable: Observable<any[]>;
  images: Array<string>;
  collapsed: boolean = false;
  iconName = "keyboard_arrow_down"
  constructor(private db: AngularFireDatabase) { }


  options: CloudOptions = {
    // if width is between 0 and 1 it will be set to the size of the upper element multiplied by the value 
    width: 0.5,
    height: 400,
    overflow: false,
  }
  cloudData: CloudData[] = [{ text: "tags", weight: 1 }];

  zoomOnHoverOptions: ZoomOnHoverOptions = {
    scale: 1.3, // Elements will become 130 % of current zize on hover
    transitionTime: 1.2, // it will take 1.2 seconds until the zoom level defined in scale property has been reached
    delay: 0.8 // Zoom will take affect after 0.8 seconds
  };


  ngOnInit() {
    this.summaryObservable = this.getSummary('/professionalsummary');
    this.profileObservable = this.getProfile("/profile");
    this.tagObservable = this.getHeadingTag("/headingtags")
    const changedData$: Observable<any[]> = this.getHeadingTag("/headingtags")
    changedData$.subscribe(res => {
      console.log(res);
      let newData: CloudData[] = [];
      for (let text in res) {
        console.log(res[text]);
        var onedata = <CloudData>{};
        onedata.text = res[text];
        onedata.weight = 10;
        onedata.color = this.getRandomColor();
        console.log(onedata);
        newData[text] = onedata;
      }
      this.cloudData = newData;
    });
  }

  getSummary(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }
  getProfile(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }

  getHeadingTag(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }

  changeIcon() {
    if (this.collapsed) {
      this.iconName = "keyboard_arrow_up"
    } else {
      this.iconName = "keyboard_arrow_down"
    }
  }

  getRandomColor(): string {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

}
