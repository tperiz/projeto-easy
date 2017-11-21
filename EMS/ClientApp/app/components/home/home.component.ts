import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeServcies } from "../../Service/services";
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
})


export class HomeComponent {
    public Email: string;
    public formData: FormGroup;
    public constructor(private empService: EmployeeServcies, private router: Router) {

        this.formData = new FormGroup({
            'Email': new FormControl('', [Validators.required])
        });

        this.Email = this.formData.value.Email;
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
        this.router.navigate(['/page2/', this.formData.value.Email]);

    }
 

}  
