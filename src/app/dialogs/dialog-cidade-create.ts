import { MatDialog } from "@angular/material/dialog";
import { CidadeCreateComponent } from "../cidade/cidade-create/cidade-create.component";
import { Component, OnInit, Inject } from '@angular/core';

/**
 * @title Dialog elements
 */
 @Component({
    selector: 'dialog-elements-example',
    templateUrl: 'dialog-elements-example.html',
  })
  export class DialogElementsExample {
    constructor(public dialog: MatDialog) {}
  
    openDialog() {
      this.dialog.open(CidadeCreateComponent);
    }
  }
  