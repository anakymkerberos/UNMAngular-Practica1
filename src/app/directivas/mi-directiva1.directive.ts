import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMiDirectiva1]'
})
export class MiDirectiva1Directive {

  constructor(private element: ElementRef) { }
  @HostListener('mouseenter')
  public onmouseenter() {
    this.element.nativeElement.style.backgroundColor = "red";

  }

  @HostListener('mouseleave')
  public onmouseleave() {
    this.element.nativeElement.style.backgroundColor = "green";
  }



}
