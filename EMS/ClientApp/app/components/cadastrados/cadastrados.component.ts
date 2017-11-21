import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { EmployeeServcies } from "../../Service/services";
@Component({
    selector: 'home',
    templateUrl: './cadastrados.component.html'
})
export class cadastradosComponent {
    public ProgramadorList = [];
    public constructor(private empService: EmployeeServcies) {
        this.empService.getProgramadorList()
            .subscribe(
            (data: Response) => (this.ProgramadorList = data.json())
        );
        

    }
    
    deleteProgramador(empId: number) {


        var status = confirm("Tem certeza que deseja deletar esse programador?");
        if (status == true) {
            this.empService.removeProgramadorDetails(empId)
                .subscribe((data: Response) => (alert("Programador deletado com sucesso!!")));
            this.empService.removeContaDetails(empId)
                .subscribe((data: Response) => null);
            this.empService.removeConhecimentosDetails(empId)
                .subscribe((data: Response) => null);

            //Get new list of employee  
            this.empService.getProgramadorList()
                .subscribe(
                (data: Response) => (this.ProgramadorList = data.json())
                );
        }

    }
}  
