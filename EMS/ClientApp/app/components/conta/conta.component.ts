import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeServcies } from "../../Service/services";
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'conta',
    templateUrl: './conta.component.html',

})
export class contaComponent {
    public formData: FormGroup;
    private Email: string;
    public ProgramadorDetails: any = {};
    public id: number;
    public constructor(private empService: EmployeeServcies, private activatedRoute: ActivatedRoute, private router: Router) {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.Email = params['Email'];          
        });


        this.empService.getProgramadorDetails(this.Email)
            .subscribe((data: Response) => (this.ProgramadorDetails["Nome"] = data.json().nome,
                this.ProgramadorDetails["ProgramadorId"] = data.json().programadorId,
                this.ProgramadorDetails["Skype"] = data.json().skype,
                this.ProgramadorDetails["Telefone"] = data.json().telefone,
                this.ProgramadorDetails["Linkedin"] = data.json().linkedin,
                this.ProgramadorDetails["Cidade"] = data.json().cidade,
                this.ProgramadorDetails["Estado"] = data.json().estado,
                this.ProgramadorDetails["Portifolio"] = data.json().portifolio,
                this.ProgramadorDetails["Disponibilidade"] = data.json().disponibilidade,
                this.ProgramadorDetails["Salario"] = data.json().salario,
                this.ProgramadorDetails["Cpf"] = data.json().cpf,
                this.ProgramadorDetails["Banco"] = data.json().banco,
                this.ProgramadorDetails["Agencia"] = data.json().agencia,
                this.ProgramadorDetails["Conta"] = data.json().conta,
                this.ProgramadorDetails["HorarioTrab"] = data.json().horarioTrab,
                this.ProgramadorDetails["tipoConta"] = data.json().tipoConta,
                this.ProgramadorDetails["Email"] = data.json().email,
                this.ProgramadorDetails["nomeConta"] = data.json().nomeConta
            ));


  
        this.formData = new FormGroup({
            'CPF': new FormControl('', [Validators.required]),
            'Banco': new FormControl('', [Validators.required]),
            'Agencia': new FormControl('', [Validators.required]),
            'tipoConta': new FormControl('', [Validators.required]),
            'numConta': new FormControl('', [Validators.required]),
            'nomeConta': new FormControl('', [Validators.required])
        });

    }

    customValidator(control: FormControl): { [s: string]: boolean } {
        if (control.value == "0") {
            return { data: true };
        }
        else {
            return { data: false };
        }
    }

    submitData2() {
        var Obj = {
            ProgramadorId: this.ProgramadorDetails["ProgramadorId"],
            CPF: this.formData.value.CPF,
            Banco: this.formData.value.Banco,
            Agencia: this.formData.value.Agencia,
            tipoConta: this.formData.value.tipoConta,
            numConta: this.formData.value.numConta,
            nomeConta: this.formData.value.nomeConta

        };
        this.empService.postData2(Obj).subscribe();  
        alert("Dados salvos!!");
        this.router.navigate(['/conhecimento/', this.Email]);

    }

}
    
