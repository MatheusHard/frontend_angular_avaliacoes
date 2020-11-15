import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Cidade } from './cidade';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-cidade-list',
  templateUrl: './cidade-list.component.html',
  styleUrls: ['./cidade-list.component.css']
})
export class CidadeListComponent implements OnInit {

  displayedColumns: string[] = ['cidade', 'uf', 'data'];
  cidades: Cidade[] = [

    {id: 'edrre1201', descricao_cidade: 'Cabedelo', uf_id: 15, createAt:'12/11/2020'},
    {id: 'edrre1230', descricao_cidade: 'Recife', uf_id: 16, createAt:'11/11/2020'},
    {id: 'edrre1212', descricao_cidade: 'Paulista', uf_id: 16, createAt:'20/11/2020'},
    {id: 'edrre1221', descricao_cidade: 'Jaboatao', uf_id: 16, createAt:'30/11/2020'},
    {id: 'edrre1225', descricao_cidade: 'Bayeux', uf_id: 15, createAt:'01/11/2020'},
    {id: 'edrre1201', descricao_cidade: 'Taperoa', uf_id: 15, createAt:'12/11/2020'},
    {id: 'edrre1230', descricao_cidade: 'Inga', uf_id: 16, createAt:'11/11/2020'},
    {id: 'edrre1212', descricao_cidade: 'Oros', uf_id: 16, createAt:'20/11/2020'},
    {id: 'edrre1221', descricao_cidade: 'João Camara', uf_id: 16, createAt:'30/11/2020'},
    {id: 'edrre1225', descricao_cidade: 'Rio de Janeiro', uf_id: 21, createAt:'01/11/2020'},
    {id: 'edrre1201', descricao_cidade: 'Nova Friburgo', uf_id: 21, createAt:'12/11/2020'},
    {id: 'edrre1230', descricao_cidade: 'Pirai', uf_id: 21, createAt:'11/11/2020'},
    {id: 'edrre1212', descricao_cidade: 'Franco da Rocha', uf_id: 22, createAt:'20/11/2020'},
    {id: 'edrre1221', descricao_cidade: 'Jundiai', uf_id: 22, createAt:'30/11/2020'},
    {id: 'edrre1225', descricao_cidade: 'Paulista', uf_id: 22, createAt:'01/11/2020'},

  ];

  dataSource: MatTableDataSource<Cidade>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { 
     // Create 100 users
     const citys = this.cidades;

     // Assign the data to the data source for the table to render
     this.dataSource = new MatTableDataSource(citys);
     console.log(this.dataSource);
  }

    /*********ngAfterViewInit**********/

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /*********applyFilter**********/
  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
  ngOnInit(): void {
  }
}


  


