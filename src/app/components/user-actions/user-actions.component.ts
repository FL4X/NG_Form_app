import { Component, OnInit } from '@angular/core';
import { FirebaseService} from "../../services/firebase.service";
import 'rxjs/add/operator/map'

@Component({
  moduleId: module.id,
  selector: 'app-user-actions',
  templateUrl: './user-actions.component.html',
  styleUrls: ['./user-actions.component.css']
})
export class UserActionsComponent implements OnInit {
  public obijects = [];

  constructor(private firebaseService: FirebaseService) { }

  obtainUsers() {
    this.firebaseService.getUsers().subscribe(y => { this.obijects
      .push({object: y})  })
  }

  // obtainUsers() {
  //   this.firebaseService.getUsers().subscribe(user => {
  //     console.log(user);
  //   })
  // }

  ngOnInit() {
    console.log()
  }

}
