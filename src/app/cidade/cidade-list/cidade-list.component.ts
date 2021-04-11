import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Cidade } from './cidade';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { CidadeService } from 'src/app/services/cidade.service';

@Component({
  selector: 'app-cidade-list',
  templateUrl: './cidade-list.component.html',
  styleUrls: ['./cidade-list.component.css']
})
export class CidadeListComponent implements OnInit {

  displayedColumns: string[] = ['cidade', 'uf', 'data'];
  
 cidades: Cidade[];
  dataSource: MatTableDataSource<Cidade>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

    constructor(private cidadeService: CidadeService){
     // Assign the data to the data source for the table to render
    // this.dataSource = new MatTableDataSource(citys);
  }

  ngOnInit():void{
 
  this.cidadeService.getCidades().subscribe(res =>{
    this.cidades = res;
//    console.log(this.cidades);
    this.dataSource = new MatTableDataSource(this.cidades);


  })  
     
  
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
  
 
  
}


  


