import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  text: string = '';

  constructor() {}

  ngOnInit(): void {
  }

  profilePicture(){
    this.text = 'created';
  }

}
