import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddloanComponent } from './addloan/addloan.component';
import { RemoveLoanComponent } from './remove-loan/remove-loan.component';
import { ListLoanComponent } from './list-loan/list-loan.component';

const routes: Routes = [
  {path:'addloan',component:AddloanComponent},
{path:'remove',component:RemoveLoanComponent},
{path:'list',component:ListLoanComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }