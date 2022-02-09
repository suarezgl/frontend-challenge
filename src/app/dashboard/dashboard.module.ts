import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRouting } from './dashboard.routing';
import { DirectiveModule } from '../commons/directives/directive.module';

@NgModule({
  imports: [CommonModule, DashboardRouting, DirectiveModule],
  exports: [DashboardComponent],
  declarations: [DashboardComponent],
})
export class DashboardModule {}
