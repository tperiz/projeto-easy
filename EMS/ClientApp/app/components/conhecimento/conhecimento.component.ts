import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeServcies } from "../../Service/services";
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'conhecimento',
    templateUrl: './conhecimento.component.html',
    styleUrls: ['./conhecimento.component.css'],
})


export class conhecimentoComponent {
    router: any;
    public formData: FormGroup;
    private Email: string;
    public ProgramadorDetails: any = {};
    public id: number;
    public constructor(private empService: EmployeeServcies, private activatedRoute: ActivatedRoute) {
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
            'ionic': new FormControl('', [Validators.required]),
            'android': new FormControl('', [Validators.required]),
            'ios': new FormControl('', [Validators.required]),
            'html': new FormControl(''),
            'css': new FormControl(''),
            'trap': new FormControl('', [Validators.required]),
            'jquery': new FormControl('', [Validators.required]),
            'angular': new FormControl('', [Validators.required]),
            'java': new FormControl(''),
            'asp': new FormControl('', [Validators.required]),
            'c': new FormControl(''),
            'cmais': new FormControl(''),
            'cake': new FormControl(''),
            'django': new FormControl(''),
            'majento': new FormControl(''),
            'php': new FormControl('', [Validators.required]),
            'word': new FormControl('', [Validators.required]),
            'python': new FormControl(''),
            'ruby': new FormControl(''),
            'server': new FormControl(''),
            'mysql': new FormControl(''),
            'salesforce': new FormControl(''),
            'photoshop': new FormControl(''),
            'illustrator': new FormControl(''),
            'seo': new FormControl(''),
            'Crud': new FormControl(''),
            'Outra': new FormControl('')
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

    submitData3() {
        var Obj = {
            ProgramadorId: this.ProgramadorDetails["ProgramadorId"],
            Ionic: this.formData.value.ionic,
            Android: this.formData.value.android,
            IOS: this.formData.value.ios,
            HTML: this.formData.value.html,
            CSS: this.formData.value.css,
            Bootstrap: this.formData.value.trap,
            Jquery: this.formData.value.jquery,
            Angular: this.formData.value.angular,
            Java: this.formData.value.java,
            AspNet: this.formData.value.asp,
            C: this.formData.value.c,
            Cmais: this.formData.value.cmais,
            Cake: this.formData.value.cake,
            Django: this.formData.value.django,
            Majento: this.formData.value.majento,
            PHP: this.formData.value.php,
            Wordpress: this.formData.value.word,
            Python: this.formData.value.python,
            Ruby: this.formData.value.ruby,
            SQLServer: this.formData.value.server,
            MySQL: this.formData.value.mysql,
            Salesforce: this.formData.value.salesforce,
            Photoshop: this.formData.value.photoshop,
            Illustrator: this.formData.value.illustrator,
            SEO: this.formData.value.seo,
            Outra: this.formData.value.outra,
            Crud: this.formData.value.crud


            

        };
        this.empService.postData3(Obj).subscribe();
        alert("Cadastro efetuado com sucesso!!");

    }
} 