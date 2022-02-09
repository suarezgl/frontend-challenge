import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DetailComponent } from './detail.component';

const route: Routes = [
  {
    path: '',
    component: DetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class DetailRouting {}
