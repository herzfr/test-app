import { Component, OnInit } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';
import { Subscription } from 'rxjs';
import { Posts } from 'src/app/models/interface/posts.interface';
import { User } from 'src/app/models/interface/user.interface';
import { PostsService } from 'src/app/service/posts.service';
import { UsersService } from 'src/app/service/users.service';
import { LocalstorageService } from 'src/app/utils/localstorage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  user: User | undefined;
  userList: User[] = [];
  posts: Posts[] = [];
  size = 10;
  page = 0;
  currentIndex = 0;
  postsDisplay: Posts[] = [];

  userSubsricption!: Subscription;

  constructor(
    private _storageService: LocalstorageService,
    private _userService: UsersService,
    private _postsService: PostsService
  ) {
    this.user = _storageService.decryptDataUser();
  }

  ngOnInit(): void {
    this.getAllUser();
    this.getPosts();
  }

  ngOnDestroy() {
    this.userSubsricption.unsubscribe();
  }

  getAllUser() {
    this._userService.getAllUser().subscribe((res) => {
      this.userList = res;
    });
  }

  getPosts() {
    this.userSubsricption = this._postsService
      .getAllPosts()
      .subscribe((res) => {
        this.posts = res;
        this.generatePosts();
      });
  }

  generatePosts() {
    for (
      this.currentIndex;
      this.currentIndex < this.size;
      ++this.currentIndex
    ) {
      this.postsDisplay.push(this.posts[this.currentIndex]);
    }
    this.currentIndex = +this.size;
  }

  getDisplayName(id: number) {
    return this.userList.find((x) => x.id === id)?.name;
  }

  next() {
    if (this.size >= 10 && !(this.size === this.posts.length)) {
      this.postsDisplay = [];
      this.size += 10;
      this.generatePosts();
    }
  }

  prev() {
    if (this.size > 10) {
      this.postsDisplay = [];
      this.size -= 10;
      this.currentIndex = this.size - 10;
      this.generatePosts();
    }
  }

  getComment(event: MatExpansionPanel, value: Posts, idx: number) {
    if (event.expanded) {
      this._postsService.getAllComment(value.id).subscribe((res) => {
        this.postsDisplay[idx].comments = res;
      });
    }
  }
}
