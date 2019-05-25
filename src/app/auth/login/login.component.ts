import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../shared/services/authentication.service';

import {SessionStorage} from 'ngx-webstorage';
import {HttpService} from '../../shared/services/http.service';

/**
 * this component is for handling login related tasks
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  /**
   * @ignore
   */
  loginForm: FormGroup;
  /**
   * @ignore
   */
  email: FormControl;
  /**
   * @ignore
   */
  password: FormControl;

  /**
   * the stored isLoggedIn variable in sessionStorage as an boolean
   */
  @SessionStorage('isLoggedIn') isLoggedIn;
  /**
   * the stored token in sessionStorage
   */
  @SessionStorage('token') token;
  /**
   * the stored refreshToken in sessionStorage
   */
  @SessionStorage('refreshToken') refreshToken;
  /**
   *  the stored userPermissions in sessionStorage
   */
  @SessionStorage('userPermissions')
  public userPermissions;
  /**
   * accountData stored in sessionStorage
   */
  @SessionStorage('accountData')
  accountData;

  /**
   * @ignore
   */
  constructor(
    private translate: TranslateService,
    public router: Router,
    private authService: AuthenticationService,
    private httpService: HttpService) {
    this.createFormControls();
    this.createForm();


  }

  /**
   * @ignore
   */
  ngOnInit() {

  }


  /**
   * This Method is for creating the formControls of our Reactive(model driven) form.
   */

  createFormControls() {
    this.email = new FormControl('', Validators.required);
    this.password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  }

  /**
   * This Method is for creating our Reactive(model driven) form.
   */

  createForm() {
    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password
    });
  }

  /**
   * This Method is for having access to form Validators within the html.
   */

  get getLoginForm() {
    return this.loginForm.controls;
  }
  /**
   * This Method is for calling login API and Saving the result (Token and refreshToken) in session storage.
   */


  onLogin() {
    let body = {
      email: this.loginForm.value.email,
      password:this.loginForm.value.password
    };
    this.authService.login('login', body).subscribe(
      (res: any) => {
        this.isLoggedIn = true;
        localStorage.setItem('token',res.token);
        //this.getAccount();
        this.router.navigateByUrl('/layout/dashboard');
      }
    );
  }




}
