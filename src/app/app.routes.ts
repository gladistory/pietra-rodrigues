import { Routes } from '@angular/router';
import { DecComponent } from './dec/dec.component';
import { GuiaComponent } from './components/guia/guia.component';

export const routes: Routes = [
    {path: '', component: GuiaComponent},
    {path: 'dec', component: DecComponent}
];
