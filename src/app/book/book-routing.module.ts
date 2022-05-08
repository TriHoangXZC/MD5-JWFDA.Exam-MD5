import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListBookComponent} from './list-book/list-book.component';
import {CreateBookComponent} from './create-book/create-book.component';
import {EditBookComponent} from './edit-book/edit-book.component';
import {DeleteBookComponent} from './delete-book/delete-book.component';
import {DetailBookComponent} from './detail-book/detail-book.component';


const routes: Routes = [
  {
    path: '',
    component: ListBookComponent
  },
  {
    path: 'create',
    component: CreateBookComponent
  },
  {
    path: `edit/:id`,
    component: EditBookComponent
  },
  {
    path: `delete/:id`,
    component: DeleteBookComponent
  },
  {
    path: `detail/:id`,
    component: DetailBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
