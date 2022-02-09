import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { DetailRouting } from './detail.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailPresenter } from './detail.presenter';

@NgModule({
  imports: [CommonModule, DetailRouting, ReactiveFormsModule, FormsModule],
  providers: [DetailPresenter],
  exports: [DetailComponent],
  declarations: [DetailComponent],
})
export class DetailModule {}
