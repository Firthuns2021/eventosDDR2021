import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  // constructor(
  //   private globalization: Globalization,
  //   private translate: TranslateService
  // ) {
  //   this.translate.setDefaultLang('es');
  //   this.globalization.getPreferredLanguage().then( res => {
  //     console.log(res);
  //
  //     if(res){
  //
  //       if(res.value.includes('-')){
  //         this.translate.use(res.value.split('-')[0]);
  //       }else{
  //         this.translate.use(res.value);
  //       }
  //
  //     }
  //
  //   }).catch(e => console.error(e));
  // }
}
