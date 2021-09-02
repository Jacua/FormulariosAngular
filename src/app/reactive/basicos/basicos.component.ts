import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  // miFormulario: FormGroup = new FormGroup({
  //   'producto'  : new FormControl ('Mouse Gtech'),
  //   'precio'    : new FormControl (10),
  //   'existencias': new FormControl (0)
  // });

  miFormulario: FormGroup = this._FormBuild.group({

    producto: ['', [Validators.required, Validators.minLength(3)]],
    precio: [10,[Validators.required, Validators.min(1)]],
    existencias: [0,[Validators.min(1), Validators.required]],

  });
  constructor(private readonly _FormBuild: FormBuilder) { }

  campoEsValido(campo: string){
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched
  
  
  }

  guardar(){
    if(this.miFormulario.valid){
      
      console.log(this.miFormulario.value);
    }else{
      this.miFormulario.markAllAsTouched();
    }
  }
}
