import {Directive, ElementRef, HostListener} from '@angular/core'

@Directive({
  selector: 'input[numbersOnly]'
})
export class NumbersOnlyDirective {

  constructor(private elem: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event: { stopPropagation: () => void; }) {
    const initialValue = this.elem.nativeElement.value
    this.elem.nativeElement.value = initialValue.replace(/[^0-9]*/g, '')
    if ( initialValue !== this.elem.nativeElement.value) {
      event.stopPropagation()
    }
  }

}
