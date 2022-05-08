import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BookRoutingModule} from './book-routing.module';
import {ListBookComponent} from './list-book/list-book.component';
import {CreateBookComponent} from './create-book/create-book.component';
import {ReactiveFormsModule} from '@angular/forms';
import {EditBookComponent} from './edit-book/edit-book.component';
import {DeleteBookComponent} from './delete-book/delete-book.component';
import {DetailBookComponent} from './detail-book/detail-book.component';


@NgModule({
  declarations: [ListBookComponent, CreateBookComponent, EditBookComponent, DeleteBookComponent, DetailBookComponent],
  imports: [
    CommonModule,
    BookRoutingModule,
    ReactiveFormsModule
  ]
})
export class BookModule {
}
