import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RandomImgDirective } from './random-img.directive';

@NgModule({
  imports: [CommonModule],
  exports: [RandomImgDirective],
  declarations: [RandomImgDirective],
})
export class DirectiveModule {}
