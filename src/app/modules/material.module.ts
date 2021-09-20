import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
<<<<<<< HEAD
import { MatSelectModule } from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
=======
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
>>>>>>> 01b76497380b124bfd392e1180f2a91d6f6a5b6e


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
<<<<<<< HEAD
    MatSelectModule,
    MatToolbarModule,
=======
    MatProgressSpinnerModule,
>>>>>>> 01b76497380b124bfd392e1180f2a91d6f6a5b6e
  ],
  exports: [
    MatSidenavModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
<<<<<<< HEAD
    MatSelectModule,
    MatToolbarModule,
=======
    MatProgressSpinnerModule,
>>>>>>> 01b76497380b124bfd392e1180f2a91d6f6a5b6e
  ],
})
export class MaterialModule { }
