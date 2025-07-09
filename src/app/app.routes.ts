import { Routes } from '@angular/router';
import { GuiaComponent } from './components/guia/guia.component';
import { AlinhamentoComponent } from './components/alinhamento/alinhamento.component';

export const routes: Routes = [
    { path: '', component: GuiaComponent },
    { path: 'dec', component: GuiaComponent },
    { path: 'alinhamento', component: AlinhamentoComponent },
];
