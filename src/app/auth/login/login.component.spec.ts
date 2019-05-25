import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { LoginModule } from './login.module';
import {AppModule} from '../../app.module';
import {AuthenticationService} from '../../shared/services/authentication.service';
import {HttpTestingController,HttpClientTestingModule} from '@angular/common/http/testing';
import {HttpService} from '../../shared/services/http.service';


describe('Component: Login', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthenticationService;
  let httpTestingController: HttpTestingController;


  beforeEach(()=> {
    TestBed.configureTestingModule({
      imports:[
        LoginModule,
        AppModule,
        HttpClientTestingModule
      ],
      providers:[AuthenticationService
      ]
    });

    fixture = TestBed.createComponent((LoginComponent));
    component = fixture.componentInstance;
    authService = TestBed.get(AuthenticationService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(()=> {
    httpTestingController.verify();
  });

  //
  // it('Login form invalid when empty ',  () => {
  //     expect(component.loginForm.valid).toBeFalsy();
  // });
  //
  // it('Login username field validity',  () => {
  //   let username = component.loginForm.controls['username'];
  //   expect(username.valid).toBeFalsy();
  //
  //   let errors = {};
  //   errors = username.errors || {};
  //   expect(errors['required']).toBeTruthy();
  //
  //   username.setValue("testUsername");
  //   errors = username.errors || {};
  //   expect(errors['required']).toBeFalsy();
  // });
  //
  // it('password field validity',  () => {
  //   let password = component.loginForm.controls['password'];
  //   expect(password.valid).toBeFalsy();
  //
  //   let errors = {};
  //   errors = password.errors || {};
  //   expect(errors['required']).toBeTruthy();
  //
  //   password.setValue("testPas");
  //   errors = password.errors || {};
  //   expect(errors['minlength']).toBeTruthy();
  // });
  //

});
