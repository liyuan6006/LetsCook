import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
@NgModule({
  imports: [MatButtonModule, MatCheckboxModule,MatTableModule,MatPaginatorModule,MatSortModule],
  exports: [MatButtonModule, MatCheckboxModule,MatTableModule,MatPaginatorModule,MatSortModule],
  declarations: []
})
export class MaterialModule { }
