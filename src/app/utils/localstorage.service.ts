import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { User } from '../models/interface/user.interface';

@Injectable({
  providedIn: 'root',
})
export class LocalstorageService {
  private secretKey = 'Test';
  public encryptedMessage: any;
  public decryptedMessage: any;

  constructor() {}

  encryptDataUser(user: User) {
    sessionStorage.clear();
    sessionStorage.setItem(
      'USR',
      CryptoJS.AES.encrypt(JSON.stringify(user), this.secretKey).toString()
    );
  }

  decryptDataUser() {
    let dataUser: any = sessionStorage.getItem('USR')
      ? sessionStorage.getItem('USR')
      : null;
    if (dataUser != null) {
      return JSON.parse(
        CryptoJS.AES.decrypt(dataUser, this.secretKey).toString(
          CryptoJS.enc.Utf8
        )
      );
    } else {
      return undefined;
    }
  }
}
