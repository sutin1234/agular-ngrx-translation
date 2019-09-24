import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-translation';

  param = { value: '@ngrx translation' };
  translate: TranslateService;

  constructor( _translateService: TranslateService){
    this.translate = _translateService;
    this.translate.setDefaultLang('en');
  }

  changeLanguage(lang: string){
    this.translate.use(lang);
  }
}
