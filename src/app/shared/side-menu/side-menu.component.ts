import { Component, OnInit } from '@angular/core';

interface MenuItem {
  texto: string;
  ruta: string;
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent  {

  TemplateMenu:MenuItem[] = [
    {
      texto: 'Basicos',
      ruta:'./template/basicos'
    },
    {
      texto: 'Dinamicos',
      ruta:'./template/dinamicos'
    },
    {
      texto: 'switches',
      ruta:'./template/switches'
    }
  ];

  ReactiveMenu:MenuItem[] = [
    {
      texto: 'Basicos',
      ruta:'./reactive/basicos'
    },
    {
      texto: 'Dinamicos',
      ruta:'./reactive/dinamicos'
    },
    {
      texto: 'switches',
      ruta:'./reactive/switches'
    }
  ];

  ValidacionMenu: MenuItem[] =[
    {
      texto: 'Registro',
      ruta:'./auth/registro'
    },
    {
      texto: 'login',
      ruta: './auth/login'
    }
  ]
  

}
