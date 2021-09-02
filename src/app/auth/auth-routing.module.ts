import { NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { RegistroComponent } from './page/registro/registro.component';

const routes: Routes = [

    {
        path: '',
        children:[
            {path:'registro', component: RegistroComponent},
            {path:'login',component: LoginComponent},
            {path:'**', redirectTo:'registro'}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class authRoutingModule{}
