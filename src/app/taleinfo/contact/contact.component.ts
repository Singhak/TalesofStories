import { configuration } from './../../configuration';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostDataStorageService } from 'src/app/posts/post-data-storage.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact = configuration.contactus;
  msgSent = false;
  userMsg = 'Thanks for reaching to us. :)';
  constructor(private postservice: PostDataStorageService) { }

  ngOnInit() {
  }

  onSubmit(userForm: NgForm) {
    if (!userForm.value.name && !userForm.value.email) {
      this.msgSent = true;
      this.userMsg = 'Please Enter Email and Name. Both are required';
    } else {
      this.postservice.sendUserMsg(userForm.value);
      this.msgSent = true;
      setTimeout(() => {
        this.msgSent = false;
      }, 2000);
    }
    // console.log(userForm);

  }
}
