import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {User} from "../../model/user-interface";
import {Observable} from "rxjs/Rx";
import {UserActionsComponent} from '../user-actions/user-actions.component';
import { FirebaseService} from "../../services/firebase.service";

@Component({
  moduleId: module.id,
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {
  public myForm:FormGroup;
  public submitted:boolean;
  public events:any[] = [];
  public subusers = [];
  public genders = [
    'MALE',
    'FEMALE'
  ];
  public roles = [
    'USER',
    'ADMIN',
    'ROOT'
  ];

  constructor(private _fb:FormBuilder, private firebaseService: FirebaseService) {
  }

  ngOnInit() {
    this.myForm = this._fb.group({
      id: ['777', Validators],
      companyId: ['333', [Validators.required]],
      firstName: ['John', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(15)
      ]],
      lastName: ['Malkovich', [Validators.maxLength(15)]],
      email: ['Malkovich@gmail.com', [
        Validators.required,
        Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
      ]],
      gender: ['MALE', [Validators.required]],
      role: ['', [Validators.required]],
    });

    this.subcribeToFormChanges();
  }

  save(model:User, isValid:boolean) {
    this.submitted = true;
  }

  onSubmit() {
    console.log(this.myForm.value);

    for (let x of this.subusers) {
      if (x.email == this.myForm.value.email) {
        console.log("Email is taken");
        return false;
      }
    }
    this.subusers.push(this.myForm.value);
    console.log(this.subusers);

    this.firebaseService.postUsers(this.myForm.value).subscribe(
      data => console.log(data)
    );
  }

  subcribeToFormChanges() {
    const myFormValueChanges$ = this.myForm.valueChanges;

    myFormValueChanges$.subscribe(x => this.events
      .push({event: 'STATUS CHANGED', object: x}));
  }

  // emailValidator(control: FormControl): Promise<any> | Observable<any> {
  //   let subusers1 = this.subusers;
  //   const promise = new Promise<any>(
  //     (resolve, reject) => {
  //       setTimeout(() => {
  //         for (let x of subusers1) {
  //           if (control.value === x.email) {
  //             resolve({'invalid': true});
  //           } else {
  //             resolve(null);
  //           }
  //         }
  //       }, 500);
  //     }
  //   );
  //   return promise;
  // }
  //
  // Compiles but throws errors

}
