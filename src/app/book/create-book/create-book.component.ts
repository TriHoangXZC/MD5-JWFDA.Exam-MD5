import {Component, OnInit} from '@angular/core';
import {BookService} from '../../service/book/book.service';
import {Book} from '../../model/book';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {NotificationService} from '../../service/notification/notification.service';


@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  book: Book = {};

  bookForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    title: new FormControl(''),
    author: new FormControl(''),
    description: new FormControl('')
  });

  constructor(private bookService: BookService,
              private router: Router,
              private notificationService: NotificationService) {
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

  ngOnInit() {
  }

  createBook() {
    this.bookService.createBook(this.bookForm.value).subscribe(() => {
      this.bookForm.reset();
      this.router.navigateByUrl('/books');
      this.notificationService.showMessage('success', 'Creat success');
    }, error => {
      this.notificationService.showMessage('error', 'Creat fail!');
    })
  }
}
