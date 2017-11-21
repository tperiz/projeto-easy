import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { EmployeeServcies } from "../../Service/services";

@Component({
    selector: 'employee-detail',
    templateUrl: './detalhesConta.component.html'
})
export class detalhesContaComponent {
    private id: number;
    public ProgramadorDetails: any = {};
    public ProgramadorConta: any = {};
    public constructor(private empService: EmployeeServcies, private activatedRoute: ActivatedRoute) {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.id = params['id'];
        });
        this.empService.getProgramadorDetailsConta(this.id)
            .subscribe((data: Response) => (this.ProgramadorConta["nomeConta"] = data.json().nomeConta,
                this.ProgramadorConta["CPF"] = data.json().cpf,
                this.ProgramadorConta["Banco"] = data.json().banco,
                this.ProgramadorConta["Agencia"] = data.json().agencia,
                this.ProgramadorConta["numConta"] = data.json().numConta,
                this.ProgramadorConta["tipoConta"] = data.json().tipoConta
            ));

    }
}