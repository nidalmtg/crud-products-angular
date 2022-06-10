import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AuthenticationModule } from '../authentication/authentication.module';

import { ProductListComponent } from './product-list.component';
import { EditProductPopupComponent } from './edit-product-popup/edit-product-popup.component';
import { CreateProductPopupComponent } from './create-product-popup/create-product-popup.component';
import { NavbarComponent } from './navbar/navbar.component';

import { ProductListService } from './product-list.service';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ProductListComponent,
    EditProductPopupComponent,
    CreateProductPopupComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
    AuthenticationModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatGridListModule,
    MatSelectModule,
    MatDialogModule,
    MatButtonModule,
  ],
  exports: [
    ProductListComponent,
    EditProductPopupComponent,
    CreateProductPopupComponent,
    NavbarComponent,
  ],
  providers: [ProductListService],
})
export class ProductListModule {}
