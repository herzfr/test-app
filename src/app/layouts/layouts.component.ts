import { Component, OnInit } from '@angular/core';
import { User } from '../models/interface/user.interface';
import { LocalstorageService } from '../utils/localstorage.service';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.scss'],
})
export class LayoutsComponent implements OnInit {
  user: User | undefined;

  constructor(private _storageService: LocalstorageService) {
    this.user = _storageService.decryptDataUser();
  }

  ngOnInit(): void {}

  logout() {
    sessionStorage.clear();
    window.location.reload();
  }
}
