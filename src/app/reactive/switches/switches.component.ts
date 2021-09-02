import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit  {

  miFormulario: FormGroup = this._formBuil.group({

    genero: ['M',Validators.required],
    notificaciones: [true,Validators.required],
    terminos: [false,Validators.requiredTrue] //validator para que el controls sea true
  });

  persona = {
    genero:'F',
    notificaciones: true
  }


  constructor(private readonly _formBuil: FormBuilder) { }

  ngOnInit(): void {
    
    this.miFormulario.reset(this.persona);
    
    //extraemos las terminos y luego todo el resto del objeto en una variables independiente

    this.miFormulario.valueChanges.subscribe(({terminos, ...rest}) =>{
      this.persona = rest
    });
  }

  guardar(){

    const formValue = {...this.miFormulario.value};
    delete formValue.terminos;

    this.persona = formValue;
  }

 
}
