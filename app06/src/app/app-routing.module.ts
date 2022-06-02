import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountHolderFormComponent } from './account-holders/account-holder-form/account-holder-form.component';
import { AccountHoldersModule } from './account-holders/account-holders.module';
import { AccountHoldersComponent } from './account-holders/account-holders/account-holders.component';
import { TxnsModule } from './txns/txns.module';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'/accounts'},
  {path:'accounts',component:AccountHoldersComponent},
  {path:'addAccount',component:AccountHolderFormComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AccountHoldersModule,
    TxnsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
