import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightOnHover]'
})
export class HighlightOnHoverDirective {
  constructor(private elementRef: ElementRef, private renderer2: Renderer2) { }

  @HostListener('mouseenter', ['$event'])
  public onMouseEnter(event: MouseEvent) {
    this.highlight('rgb(207, 149, 149)');
  }

  @HostListener('mouseleave')
  public onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    // this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', color);
    this.elementRef.nativeElement.style.background = color;
  }
}
