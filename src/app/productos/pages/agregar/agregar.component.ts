import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  texto1: string = 'Javier';
  color: string = 'red';

  formulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required]],
  });

  campoInvalido(campo: string) {
    return this.formulario.get(campo)?.invalid || false;

  }

  ngOnInit(): void {}

  cambiarNombre() {
    this.texto1 = (Math.random()*1000).toString();
  }

  cambiarColor() {
    const color = "#xxxxxx".replace(/x/g, y=> (Math.random()*16|0).toString(16));

    this.color = color
  }
}
