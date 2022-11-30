import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.scss']
})
export class DialogContentComponent implements OnInit {

  id: string = '';
  usr: any;
  name : string = '';
  photoUrl : string = '';
  backgroundUrl : string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router, 
    private auth: AuthService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.id = '' + sessionStorage.getItem('id');

    this.auth.getUsers().subscribe(
      users => {
        this.usr = users.find((usr:any) => usr.id === this.id);
        if(users.find((usr:any) => usr.id === this.id)) console.log('true');
        this.name = this.usr.name;
        this.photoUrl = this.usr.photoUrl;
        this.backgroundUrl = this.usr.backgroundUrl;
      }
    );
  }

  editUser(){
    let obj = {
      name : this.name,
      photoUrl : this.photoUrl,
      backgroundUrl : this.backgroundUrl,
      id: this.id
    }
    this.auth.putUser(obj).subscribe(
      res=>{
        // this.router.navigate(['/profile/' + this.id])
        // .then(() => {
        //   window.location.reload();
        // });
        console.log(res);
      }
    )
  }

}
