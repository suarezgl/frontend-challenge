import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[randomImg]',
})
export class RandomImgDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.src = this.generateRamdomResourse();
  }

  public generateRamdomResourse(): string {
    const ramdom = Math.floor(Math.random() * 5) + 1;
    return `assets/img/icono${ramdom}.png`;
  }
}
