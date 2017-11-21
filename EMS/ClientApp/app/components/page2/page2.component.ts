import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeServcies } from "../../Service/services";
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'page2',
    templateUrl: './page2.component.html',
})


export class page2Component {   
    public formData: FormGroup;
    private Email: string;
    private HoTrab: string = '';
    public constructor(private empService: EmployeeServcies, private activatedRoute: ActivatedRoute, private router: Router) {

        this.activatedRoute.params.subscribe((params: Params) => {
            this.Email = params['Email'];
        });

        this.formData = new FormGroup({
            'Nome': new FormControl('', [Validators.required]),
            'Skype': new FormControl('', [Validators.required]),
            'Telefone': new FormControl('', [Validators.required]),
            'Linkedin': new FormControl(''),
            'Cidade': new FormControl('', [Validators.required]),
            'Estado': new FormControl('', [Validators.required]),
            'Portifolio': new FormControl(''),
            'Disponibilidade': new FormControl('', [Validators.required]),
            'HorarioTrab': new FormControl(''),
            'HorarioTrab2': new FormControl(''),
            'HorarioTrab3': new FormControl(''),
            'HorarioTrab4': new FormControl(''),
            'HorarioTrab5': new FormControl(''),
            'Salario': new FormControl('', [Validators.required])
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

    submitData() {      
        if (this.formData.value.HorarioTrab == true) this.HoTrab = this.HoTrab + 'Manhã (de 08:00 ás 12:00)';
        if (this.formData.value.HorarioTrab2 == true) this.HoTrab = this.HoTrab + '  Tarde (de 13:00 ás 18:00)';
        if (this.formData.value.HorarioTrab3 == true) this.HoTrab = this.HoTrab + '  Noite (de 19:00 as 22:00)';
        if (this.formData.value.HorarioTrab4 == true) this.HoTrab = this.HoTrab + '  Madrugada (de 22:00 em diante)';
        if (this.formData.value.HorarioTrab5 == true) this.HoTrab = this.HoTrab + '  Comercial (de 08:00 as 18:00)';
        var Obj = {
            Email: this.Email,
            Nome: this.formData.value.Nome,
            Skype: this.formData.value.Skype,
            Telefone: this.formData.value.Telefone,
            Linkedin: this.formData.value.Linkedin,
            Cidade: this.formData.value.Cidade,
            Estado: this.formData.value.Estado,
            Portifolio: this.formData.value.Portifolio,
            Disponibilidade: this.formData.value.Disponibilidade,
            HorarioTrab: this.HoTrab,
            Salario: this.formData.value.Salario

        };
        this.empService.postData(Obj).subscribe();
        alert("Dados Salvos!!");
        this.router.navigate(['/conta/',this.Email]);
    }
} 