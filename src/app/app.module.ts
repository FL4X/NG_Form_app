import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserActionsComponent } from './components/user-actions/user-actions.component';
import { FirebaseService } from './services/firebase.service';

@NgModule({

  declarations: [
    AppComponent,
    UserListComponent,
    UserActionsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: 'add_users',
        component: UserListComponent
      },
      {
        path: '',
        redirectTo: '/add_users',
        pathMatch: 'full'
      },
      {
        path: 'observe_users',
        component: UserActionsComponent
      },
      {
        path: '',
        redirectTo: '/observe_users',
        pathMatch: 'full'
      },
    ])
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
