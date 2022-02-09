import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRouting } from './login.routing';

@NgModule({
  imports: [CommonModule, LoginRouting],
  exports: [LoginComponent],
  declarations: [LoginComponent],
})
export class LoginModule {}
