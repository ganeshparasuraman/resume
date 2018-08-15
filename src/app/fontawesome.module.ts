import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from  '@fortawesome/fontawesome-svg-core';
import { faHome,faAsterisk,faEnvelope, faAddressBook, faMobile,faPhoneSquare,faCalendar,faMapMarker, faArrowRight,faUserCircle, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin} from '@fortawesome/fontawesome-free-brands'



library.add(faEnvelope,faHome,faAsterisk,faCalendar,faMapMarker,faArrowRight);
library.add(faAddressBook);
library.add(faLinkedin);
library.add(faPhoneSquare);
library.add(faUserCircle);

@NgModule({
 imports: [FontAwesomeModule],
 exports: [FontAwesomeModule]
})
export class FontAwesomeAppModule { }