import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {ToastService} from '../../../services/toast.service';
import {User} from '../../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public user: User;

  constructor(
    private auth: AuthService,
    private toastService: ToastService,
    // private translate: TranslateService
  ) {
    this.user = new User();
  }

  ngOnInit() {
  }

  login(){
    this.auth.login(this.user.email, this.user.password).then( (result) => {
      console.log(result);
      // this.toastService.showToast(this.translate.instant('label.login.success'));
      this.toastService.showToast( 'login success');
    }).catch(e => {
      console.error(e);
      // this.toastService.showToast(this.translate.instant('label.login.error'));
      this.toastService.showToast('login error');
    });
  }

}
