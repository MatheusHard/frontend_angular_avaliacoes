import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Uf } from 'src/app/interfaces/uf';
import { CidadeService } from 'src/app/services/cidade.service';
import { Cidade } from '../../interfaces/cidade';
import {MatDialog} from '@angular/material/dialog';




/***********DIALOG CADASTRAR CIDADE***********/
/**
 * @title Dialog elements
 */
 /*@Component({
  selector: 'dialog-elements-example',
  templateUrl: 'dialog-elements-example.html',
})
export class DialogElementsExample {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(CidadeCreateComponent);
  }
}*/


/***********CADASTRAR CIDADE COMPONENT***********/

@Component({
  selector: 'app-cidade-create',
  templateUrl: './cidade-create.component.html',
  styleUrls: ['./cidade-create.component.css']
})
export class CidadeCreateComponent implements OnInit {

  descricao_cidade: string;
  name: string;
  
  cidades_uf: Cidade[] = [
    {descricao_cidade: 'Recife', uf_id_: 'PE', uf_id: 16},
    {descricao_cidade: 'Cabedelo', uf_id_: 'PB',  uf_id: 15},
    {descricao_cidade: 'JAboatao', uf_id_: 'PE',  uf_id: 16},
    {descricao_cidade: 'Gurinhem', uf_id_: 'PB',  uf_id: 15},
  ];

  ufs: Uf[];
  cidades: Cidade[];

 /* animals: Animal[] = [
    {name: 'Dog', sound: 'Woof!'},
    {name: 'Cat', sound: 'Meow!'},
    {name: 'Cow', sound: 'Moo!'},
    {name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
  ];*/


formCidade = new FormGroup({

descricao_cidade: new FormControl('', Validators.required),
selectFormControlDesc: new FormControl('', Validators.required)
})


constructor(private cidadeService: CidadeService){}

ngOnInit():void{
 
  this.cidadeService.getEstados().subscribe(res =>{
  this.ufs = res;
  console.log(this.ufs);
})  



}
createCidade():void{
const city = this.formCidade.value;

console.log(city);
}


}

