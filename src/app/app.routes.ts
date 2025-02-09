import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GuiaComponent } from './components/guia/guia.component';

export const routes: Routes = [
    {path: '', component: GuiaComponent},
    {path: 'guia-de-estudos', component: GuiaComponent}
];
