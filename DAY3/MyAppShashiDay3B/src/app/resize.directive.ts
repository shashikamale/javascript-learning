import { Directive, ElementRef, Renderer2, OnInit, Input, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appResize]'
})
export class ResizeDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) { }
 @HostBinding('class.img.thumbnail') showBorder = true;

  @HostListener('mouseover') onmouseenter() {
    this.renderer.setStyle(this.element.nativeElement, 'width', '300px');
    this.renderer.setStyle(this.element.nativeElement, 'transition', 'width 2s');
  }

}
