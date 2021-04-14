import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CidadeService } from 'src/app/services/cidade.service';
import { Cidade } from '../../interfaces/cidade';


@Component({
  selector: 'app-cidade-create',
  templateUrl: './cidade-create.component.html',
  styleUrls: ['./cidade-create.component.css']
})
export class CidadeCreateComponent implements OnInit {

  cidades_uf: Cidade[] = [
    {descricao_cidade: 'Recife', uf_id_: 'PE', uf_id: 16},
    {descricao_cidade: 'Cabedelo', uf_id_: 'PB',  uf_id: 15},
    {descricao_cidade: 'JAboatao', uf_id_: 'PE',  uf_id: 16},
    {descricao_cidade: 'Gurinhem', uf_id_: 'PB',  uf_id: 15},
  ];

  uf: [];

 /* animals: Animal[] = [
    {name: 'Dog', sound: 'Woof!'},
    {name: 'Cat', sound: 'Meow!'},
    {name: 'Cow', sound: 'Moo!'},
    {name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
  ];*/

descricao_cidade_form = new FormControl('Cidade');
selectFormControlDesc = new FormControl('', Validators.required);



constructor(private cidadeService: CidadeService){}

  ngOnInit(): void {
  }

}
