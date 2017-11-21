import { NgModule, ModuleWithProviders} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgControl } from '@angular/forms';
import { FormControl } from '@angular/forms';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { detalhesComponent } from "./components/detalhes/detalhes.component";
import { cadastradosComponent } from "./components/cadastrados/cadastrados.component";
import { editarProgramadorComponent } from "./components/editarProgramador/editarProgramador.component";
import { EmployeeServcies } from "./Service/services";
import { filterSearch } from "./pipes/search";
import { page2Component } from "./components/page2/page2.component";
import { contaComponent } from "./components/conta/conta.component";
import { conhecimentoComponent } from "./components/conhecimento/conhecimento.component";
import { detalhesContaComponent } from "./components/detalhesConta/detalhesConta.component";
import { editarContaComponent } from "./components/editarConta/editarConta.component";


@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,       
        CounterComponent,
        NavMenuComponent,
        FetchDataComponent,
        HomeComponent,
        detalhesComponent,
        detalhesContaComponent,
        cadastradosComponent,
        editarProgramadorComponent, 
        editarContaComponent,
        filterSearch,
        page2Component,
        contaComponent,
        conhecimentoComponent
    ],
    providers: [EmployeeServcies],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'page2/:Email', component: page2Component },
            { path: 'conta/:Email', component: contaComponent },
            { path: 'detalhes/:Email', component: detalhesComponent },
            { path: 'detalhesConta/:id', component: detalhesContaComponent },
            { path: 'cadastrados', component: cadastradosComponent },
            { path: 'conhecimento/:Email', component: conhecimentoComponent },
            { path: 'edit/:Email', component: editarProgramadorComponent },
            { path: 'editConta/:id', component: editarContaComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}
