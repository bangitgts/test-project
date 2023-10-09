import { Component } from '@angular/core';
import { authLogin } from './login.service';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { AuthResponse, setLocalStorageLogin } from 'src/app/utils/helpers';
import { Router } from '@angular/router';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  formAuthLogin: FormGroup = new FormGroup({
    username: new FormControl(undefined),
    password: new FormControl(undefined),
  });
  submittedForm = false;
  loadingForm = false;
  dataResponse = {
    error: false,
    data: undefined,
  };

  constructor(private formBuilder: FormBuilder, private route: Router) {}

  ngOnInit(): void {
    this.formAuthLogin = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.formAuthLogin.controls;
  }

  onSubmit(): void {
    this.submittedForm = true;
    this.loadingForm = true;
    this.dataResponse.error = false;
    authLogin(this.formAuthLogin.value)
      .then((res) => {
        this.dataResponse = res?.data;
        setLocalStorageLogin(res?.data as AuthResponse);
        this.route.navigate(['home']);
      })
      .catch((error) => {
        this.dataResponse = error?.data;
      })
      .finally(() => {
        this.loadingForm = false;
        this.submittedForm = false;
      });
  }
}
