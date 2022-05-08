import { Component, OnInit } from '@angular/core';
import {BookService} from '../../service/book/book.service';
import {Book} from '../../model/book';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {NotificationService} from '../../service/notification/notification.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  book: Book = {};

  bookForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    title: new FormControl(''),
    author: new FormControl(''),
    description: new FormControl('')
  })

  constructor(private bookService: BookService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private notificationService: NotificationService) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = +paramMap.get('id');
      this.getBookById(id);
    })
  }

  get id() {
    return this.bookForm.get('id');
  }

  get title() {
    return this.bookForm.get('title');
  }

  get author() {
    return this.bookForm.get('author');
  }

  get description() {
    return this.bookForm.get('description');
  }

  getBookById(id) {
    this.bookService.getBookById(id).subscribe(book => {
        this.book = book;
        this.id.setValue(this.book.id);
        this.title.setValue(this.book.title);
        this.author.setValue(this.book.author);
        this.description.setValue(this.book.description);
    })
  }

  ngOnInit() {
  }

  editBook() {
    this.bookService.editBook(this.book.id, this.bookForm.value).subscribe(() => {
      this.router.navigateByUrl('/books');
      this.notificationService.showMessage('success', 'Edit success')
    }, error => {
      this.notificationService.showMessage('error', 'Edit fail!')
    })
  }
}
