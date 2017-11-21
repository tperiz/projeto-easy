import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { EmployeeServcies } from "../../Service/services";

@Component({
    selector: 'employee-detail',
    templateUrl: './detalhes.component.html'
})
export class detalhesComponent {
    private Email: string;
    public ProgramadorDetails: any = {};
    public constructor(private empService: EmployeeServcies, private activatedRoute: ActivatedRoute) {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.Email = params['Email'];
        });
        this.empService.getProgramadorDetails(this.Email)
            .subscribe((data: Response) => (this.ProgramadorDetails["Nome"] = data.json().nome,
                this.ProgramadorDetails["Skype"] = data.json().skype,
                this.ProgramadorDetails["Telefone"] = data.json().telefone,
                this.ProgramadorDetails["Linkedin"] = data.json().linkedin,
                this.ProgramadorDetails["Cidade"] = data.json().cidade,
                this.ProgramadorDetails["Estado"] = data.json().estado,
                this.ProgramadorDetails["Portifolio"] = data.json().portifolio,
                this.ProgramadorDetails["Disponibilidade"] = data.json().disponibilidade,
                this.ProgramadorDetails["Salario"] = data.json().salario,
                this.ProgramadorDetails["HorarioTrab"] = data.json().horarioTrab,
                this.ProgramadorDetails["Email"] = data.json().email
            ));

    }

}  
