import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FormsModule } from '@angular/forms';
import { CreateAccountComponent } from './create-account/create-account.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ConformationComponent } from './conformation/conformation.component';

@NgModule({
  declarations: [
    NavbarComponent,
    PageNotFoundComponent,
    SignInComponent,
    CreateAccountComponent,
    ConformationComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogModule
  ],
  exports: [
    NavbarComponent,
    PageNotFoundComponent,
    SignInComponent,
    CreateAccountComponent
  ]
})
export class ComponentsModule {
  constructor(){
    console.log(`Components Loaded`)
  }
}
