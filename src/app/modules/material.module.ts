import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatTabsModule,
  ],
  exports: [
    MatSidenavModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatTabsModule,
  ],
})
export class MaterialModule { }
