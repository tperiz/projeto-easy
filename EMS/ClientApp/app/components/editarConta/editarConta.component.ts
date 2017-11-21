import { Component } from '@angular/core';
import { EmployeeServcies } from '../../Service/services';
import { Response } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'edit-employee',
    templateUrl: './editarConta.component.html'
})
export class editarContaComponent {
    private EmpId: number;
    public ProgramadorConta: any = {};
    public ProgramadorList = [];
    public formData: FormGroup;

    public constructor(private empService: EmployeeServcies, private activatedRoute: ActivatedRoute) {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.EmpId = params['id'];
        });

        this.formData = new FormGroup({
            'Cpf': new FormControl(''),
            'Banco': new FormControl(''),
            'Agencia': new FormControl(''),
            'tipoConta': new FormControl(''),
            'numConta': new FormControl(''),
            'nomeConta': new FormControl('')
        });


        this.empService.getProgramadorDetailsConta(this.EmpId)
            .subscribe((data: Response) => (
                this.formData.patchValue({ Cpf: data.json().cpf }),
                this.formData.patchValue({ Banco: data.json().banco }),
                this.formData.patchValue({ Agencia: data.json().agencia }),
                this.formData.patchValue({ numConta: data.json().numConta }),                
                this.formData.patchValue({ tipoConta: data.json().tipoConta }),
                this.formData.patchValue({ nomeConta: data.json().nomeConta })
            ));
    }

    submitData() {
        var Obj = {
            CPF: this.formData.value.Cpf,
            Banco: this.formData.value.Banco,
            Agencia: this.formData.value.Agencia,
            tipoConta: this.formData.value.tipoConta,
            numConta: this.formData.value.numConta,
            nomeConta: this.formData.value.nomeConta

        };
        this.empService.editProgramadorContaData(Obj)
            .subscribe((data: Response) => (alert("Conta editada com sucesso!!")));;

    }
}  
