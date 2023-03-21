import { Input, ViewContainerRef } from '@angular/core';
import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[custmoIf]'
})
export class CustmoIfDirective {

  @Input() set custmoIf( condicion: boolean){
    if( condicion){
      this.viewContainer.createEmbeddedView(this.templateRef);
    }else{
      this.viewContainer.clear();
    }
  }

  constructor(
    private templateRef: TemplateRef<HTMLElement>,
    private viewContainer: ViewContainerRef ) { 

    console.log('custom-if');
  
  }

}
