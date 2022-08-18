import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/interface/user.interface';
import { UsersService } from '../service/users.service';
import { DialogService } from '../utils/dialog.service';
import { LocalstorageService } from '../utils/localstorage.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss'],
})
export class AuthorizationComponent implements OnInit {
  isSubmit: boolean = false;
  hide = true;

  loginForm!: FormGroup;
  constructor(
    private _userService: UsersService,
    private _dialogService: DialogService,
    private _localStorageService: LocalstorageService,
    private _router: Router
  ) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {}

  get username() {
    return this.loginForm.get('username');
  }
  get password() {
    return this.loginForm.get('password');
  }

  submitLogin() {
    this.isSubmit = true;
    if (this.loginForm.valid) {
      this._userService.signin().subscribe(
        (res) => {
          let user: User[] = res;
          let filterUser = user.find(
            (x) => x.username === this.loginForm.get('username')?.value
          );
          if (!_.isUndefined(filterUser)) {
            this._localStorageService.encryptDataUser(filterUser);
            this._router.navigate(['v1']);
          } else {
            this._dialogService.alertDialog(
              'sms_failed',
              'Username ' +
                this.loginForm.get('username')?.value +
                ' tidak ditemukan'
            );
          }

          this.isSubmit = false;
        },
        (err) => {
          this.isSubmit = false;
          this._dialogService.alertDialog('sms_failed', err.message);
        }
      );
    } else {
      this.isSubmit = false;
      this._dialogService.alertDialog(
        'sms_failed',
        'Username dan Password masih belum benar'
      );
    }
  }
}
