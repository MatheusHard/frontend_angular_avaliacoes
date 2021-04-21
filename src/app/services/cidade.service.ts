import { Injectable } from '@angular/core';
import { Cidade } from '../interfaces/cidade';
import {map, catchError} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders  } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class CidadeService {
  private url: string = 'http://localhost:3003/'; 
  private urlCidadesUfs: string = 'api/cidade/list';
  private urlUfs: string = 'api/uf/list';
  private urlCreateCidade: string = 'api/cidade/add';


  constructor(private http: HttpClient) { }

  private headers: HttpHeaders = new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin',
  });



/*getCidades(): Observable<Cidade[]>{
  return this.http.get(this.urlCidadesUfs).pipe(
    map((response) => response as Cidade[])
  );
}
getCidades(): Observable<Cidade[]>{
  return this.http.get<Cidade[]>(this.urlCidadesUfs);
}*/

public getCidades(): Observable<any> {
  return this.http.get(`${this.url}${this.urlCidadesUfs}`).pipe(catchError(this.handleError));
}


public getEstados(): Observable<any> {
  return this.http.get(`${this.url}${this.urlUfs}`).pipe(catchError(this.handleError));
}

public createCidade(cidade: Cidade): Observable<any> {
  return this.http.post(`${this.url}${this.urlCreateCidade}`, cidade).pipe(catchError(this.handleError));
}





protected handleError(error: any): Observable<any> {
  console.log('ERRO NA REQUISIÇÃO => ', error);
  return throwError(error);
}


}
