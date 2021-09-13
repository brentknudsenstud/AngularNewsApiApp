import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports: [
    MatSidenavModule,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule
  ],
})
export class MaterialModule { }
