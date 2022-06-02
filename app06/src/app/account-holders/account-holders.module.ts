import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'

import { AccountHoldersComponent } from './account-holders/account-holders.component';
import { AccountHolderFormComponent } from './account-holder-form/account-holder-form.component';

@NgModule({
  declarations: [
    AccountHoldersComponent,
    AccountHolderFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[
    AccountHoldersComponent,
    AccountHolderFormComponent
  ]
})
export class AccountHoldersModule { }
