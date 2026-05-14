import { Routes } from '@angular/router';
import { GuiaComponent } from './components/guia/guia.component';
import { AlinhamentoComponent } from './components/alinhamento/alinhamento.component';
import { ComboTjscComponent } from './components/combo-tjsc/combo-tjsc.component';

export const routes: Routes = [
    { path: '', component: GuiaComponent },
    { path: 'dec', component: GuiaComponent },
    { path: 'alinhamento', component: AlinhamentoComponent },
    { path: 'combo-tjsc', component: ComboTjscComponent },
];
