import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
  
@Injectable()  
export class EmployeeServcies {  
    constructor(private http: Http) {  
         
    }  
    getProgramadorList() {
        return this.http.get('http://localhost:55090/api/Programador');
    } 

    postData(empObj: any) {
        let headers = new Headers({
            'Content-Type':
            'application/json; charset=utf-8'
        });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('http://localhost:55090/api/Programador', JSON.stringify(empObj), options);
    }

    postData2(empObj: any) {
        let headers = new Headers({
            'Content-Type':
            'application/json; charset=utf-8'
        });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('http://localhost:55090/api/Conta', JSON.stringify(empObj), options);
    }

    postData3(empObj: any) {
        let headers = new Headers({
            'Content-Type':
            'application/json; charset=utf-8'
        });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('http://localhost:55090/api/Conhecimento', JSON.stringify(empObj), options);
    }


    getProgramadorDetails(email: any) {

        return this.http.get('http://localhost:55090/api/Programador/' + email);


    }

    getProgramadorDetailsConta(id: any) {

        return this.http.get('http://localhost:55090/api/Conta/' + id);


    }

    removeProgramadorDetails(empId: any) {
        let headers = new Headers({
            'Content-Type':
            'application/json; charset=utf-8'
        });
        return this.http.delete('http://localhost:55090/api/Programador', new RequestOptions({
            headers: headers,
            body: empId
        }));


    } 

    removeContaDetails(empId: any) {
        let headers = new Headers({
            'Content-Type':
            'application/json; charset=utf-8'
        });
        return this.http.delete('http://localhost:55090/api/Conta', new RequestOptions({
            headers: headers,
            body: empId
        }));


    } 

    removeConhecimentosDetails(empId: any) {
        let headers = new Headers({
            'Content-Type':
            'application/json; charset=utf-8'
        });
        return this.http.delete('http://localhost:55090/api/Conhecimento', new RequestOptions({
            headers: headers,
            body: empId
        }));


    } 

    editProgramadorData(empObj: any) {
        let headers = new Headers({
            'Content-Type':
            'application/json; charset=utf-8'
        });
        let options = new RequestOptions({ headers: headers });
        return this.http.put('http://localhost:55090/api/Programador', JSON.stringify(empObj), options);
    } 

    editProgramadorContaData(empObj: any) {
        let headers = new Headers({
            'Content-Type':
            'application/json; charset=utf-8'
        });
        let options = new RequestOptions({ headers: headers });
        return this.http.put('http://localhost:55090/api/Conta', JSON.stringify(empObj), options);
    } 
}
