import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMessageDirective } from './directives/error-message.directive';
import { CustmoIfDirective } from './directives/custmo-if.directive';



@NgModule({
  declarations: [
    ErrorMessageDirective,
    CustmoIfDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ErrorMessageDirective,
    CustmoIfDirective

  ]
})
export class SharedModule { }
