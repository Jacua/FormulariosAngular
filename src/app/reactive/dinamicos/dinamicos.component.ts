import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';


@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent{

  miFormulario:FormGroup = this._formBuil.group({

    nombre: ['',[Validators.required, Validators.minLength(3)]],
    favoritos: this._formBuil.array([
      ['Metal Gear',Validators.required],
      ['Death Stranding',Validators.required],
    ],Validators.required)
  });

get favoritosArr(){
  return this.miFormulario.get('favoritos') as FormArray;
}

//CREAMOS UN NUEVO CONTROL INDEPENDIENTE DE MIFORMULARIO
//para hacer referencia a este nuevo control independiente se utiliza formControl en el elemento a utilizar
nuevoFavorito: FormControl = this._formBuil.control('', Validators.required);

  constructor(private readonly _formBuil: FormBuilder) { }

  campoEsValido(campo: string){

    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }

  guardar(){
    if(this.miFormulario.valid){
      console.log(this.miFormulario.value);
    }
    else{
      this.miFormulario.markAllAsTouched();
    }
  }

  agregarFavorito(){
    if(this.nuevoFavorito.invalid){return;}

    //ya que se tiene el get este hace referencia al objecto, por lo tanto podemos usarlo para mutar el objeto
    // le mandamos un nuevo formcontrol le pasamos el valor y las validaciones
    this.favoritosArr.push(new FormControl(this.nuevoFavorito.value, Validators.required));
  }

  borrarFavorito(index: number){

    //los controles se basan en su posicion  indice
    //remueve el control en la posicion indice dada
    this.favoritosArr.removeAt(index);
    
  }
  

}
