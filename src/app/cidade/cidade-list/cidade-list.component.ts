import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Cidade } from '../../interfaces/cidade';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { CidadeService } from 'src/app/services/cidade.service';
import { CidadeCreateComponent } from '../cidade-create/cidade-create.component';
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'app-cidade-list',
  templateUrl: './cidade-list.component.html',
  styleUrls: ['./cidade-list.component.css']
})
export class CidadeListComponent implements OnInit {

  displayedColumns: string[] = ['cidade_uf', 'editar', 'excluir'];
  
 cidades: Cidade[];
  dataSource: MatTableDataSource<Cidade>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

    constructor(private cidadeService: CidadeService, public dialog: MatDialog){
     // Assign the data to the data source for the table to render
    // this.dataSource = new MatTableDataSource(citys);
  }

  ngOnInit():void{
 
    this.cidadeService.getCidades().subscribe(res =>{
    this.cidades = res;
    this.dataSource = new MatTableDataSource(this.cidades);

    this.ngAfterViewInit();
  })  
  
  }


    /*********ngAfterViewInit**********/

  ngAfterViewInit() {
    console.log(this.dataSource.paginator);
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
  
 /*************OPEN ADD CIDADE*************/

 openDialogAddCidade(){
  this.dialog.open(CidadeCreateComponent);

 }
  
}


  


