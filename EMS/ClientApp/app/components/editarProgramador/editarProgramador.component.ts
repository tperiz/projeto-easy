import { Component } from '@angular/core';
import { EmployeeServcies } from '../../Service/services';
import { Response } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'edit-employee',
    templateUrl: './editarProgramador.component.html'
})
export class editarProgramadorComponent {
    private Email: string;
    public ProgramadorDetails: any = {};
    public ProgramadorList = [];
    public formData: FormGroup;

    public constructor(private empService: EmployeeServcies, private activatedRoute: ActivatedRoute) {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.Email = params['Email'];
        });

        this.formData = new FormGroup({
            'ProgramadorId': new FormControl(''),
            'Email': new FormControl(''),
            'Nome': new FormControl(''),
            'Skype': new FormControl(''),
            'Telefone': new FormControl(''),
            'Linkedin': new FormControl(''),
            'Cidade': new FormControl(''),
            'Estado': new FormControl(''),
            'Portifolio': new FormControl(''),
            'Disponibilidade': new FormControl(''),
            'HorarioTrab': new FormControl(''),
            'Salario': new FormControl('')
        });


        this.empService.getProgramadorDetails(this.Email)
            .subscribe((data: Response) => (this.formData.patchValue({ Nome: data.json().nome }),
                this.formData.patchValue({ ProgramadorId: data.json().programadorId }),
                this.formData.patchValue({ Skype: data.json().skype }),
                this.formData.patchValue({ Telefone: data.json().telefone }),
                this.formData.patchValue({ Linkedin: data.json().linkedin }),
                this.formData.patchValue({ Cidade: data.json().cidade }),
                this.formData.patchValue({ Estado: data.json().estado }),
                this.formData.patchValue({ Portifolio: data.json().portifolio }),
                this.formData.patchValue({ Disponibilidade: data.json().disponibilidade }),
                this.formData.patchValue({ Salario: data.json().salario }),
                this.formData.patchValue({ HorarioTrab: data.json().horarioTrab }),
                this.formData.patchValue({ Email: data.json().email })              
            ));
    }

    submitData() {

        var Obj = {
                ProgramadorId: this.formData.value.ProgramadorId,
                Email: this.formData.value.Email,
                Nome: this.formData.value.Nome,
                Skype: this.formData.value.Skype,
                Telefone: this.formData.value.Telefone,
                Linkedin: this.formData.value.Linkedin,
                Cidade: this.formData.value.Cidade,
                Estado: this.formData.value.Estado,
                Portifolio: this.formData.value.Portifolio,
                Disponibilidade: this.formData.value.Disponibilidade,
                HorarioTrab: this.formData.value.HorarioTrab,
                Salario: this.formData.value.Salario,
        };
            this.empService.editProgramadorData(Obj)
                .subscribe((data: Response) => (alert("Programador editado com sucesso!!")));;

    }
}  
