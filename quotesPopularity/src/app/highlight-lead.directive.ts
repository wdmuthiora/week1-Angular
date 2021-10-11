import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightLead]'
})
export class HighlightLeadDirective {
  
  constructor(private elem: ElementRef) {
    this.elem.nativeElement.style.backgroundColor='rgba(0, 128, 0, 0.3)';
   }

}
