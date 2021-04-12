import { Injectable } from '@angular/core';
import { Cidade } from '../cidade/cidade-list/cidade';
import {map, catchError} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders  } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class CidadeService {


  private urlCidadesUfs: string = 'http://localhost:3003/api/cidade/list';
  /*
  cidades: Cidade[] = [

  {_id: 'edrre1201', descricao_cidade: 'Cabedelo', uf_id: 15},
    {_id: 'edrre1230', descricao_cidade: 'Recife', uf_id: 16},
    {_id: 'edrre1212', descricao_cidade: 'Paulista', uf_id: 16},
    {_id: 'edrre1221', descricao_cidade: 'Jaboatao', uf_id: 16,},
  ];*/


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
  return this.http.get(`${this.urlCidadesUfs}`).pipe(catchError(this.handleError));
}



protected handleError(error: any): Observable<any> {
  console.log('ERRO NA REQUISIÇÃO => ', error);
  return throwError(error);
}


}
