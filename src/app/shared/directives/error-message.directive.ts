import { ElementRef, Input, OnInit, SimpleChanges } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[error-msg]',
})
export class ErrorMessageDirective implements OnInit {
  htmlElement: ElementRef<HTMLElement>;

  private _color: string = 'red';
  private _mensaje: string = 'Campo requerido';

  @Input() set color(valor: string) {
    this.htmlElement.nativeElement.style.color = valor;
  this._color = valor;
  }

  @Input() set mensaje(valor: string) {
    this.htmlElement.nativeElement.innerText = valor;
    this.htmlElement.nativeElement.style.fontSize = '20px';
    this.htmlElement.nativeElement.style.fontWeight = '700';
    this._mensaje = valor;
  }

  @Input() set valido(valor: boolean) {
    if(valor){
      this.htmlElement.nativeElement.classList.add('hidden');
    }else{
      this.htmlElement.nativeElement.classList.remove('hidden');
    }
  }
  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  //    ngOnChanges(changes: SimpleChanges): void {
  //     console.log(changes);

  //     if(changes['mensaje']){
  //       const mensaje =  changes['mensaje'].currentValue;
  //       this.htmlElement.nativeElement.innerText = mensaje;

  //     }

  //     if(changes['color']){
  //     const color = changes['color'].currentValue
  //      this.htmlElement.nativeElement.style.color = this.color;

  //     }

  //     console.log(changes);

  //  }

  ngOnInit(): void {
    this.setColor();
    this.setMensaje();
    this.setClasse();
  }

  setClasse(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }
  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
    //  this.htmlElement.nativeElement.style.fontWeight = '700';
  }

  setMensaje(): void {
    this.htmlElement.nativeElement.innerText = this._mensaje;
    this.htmlElement.nativeElement.style.fontSize = '20px';
  }
}
