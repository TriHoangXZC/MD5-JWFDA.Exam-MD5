import {Component, OnInit} from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../service/book/book.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {NotificationService} from '../../service/notification/notification.service';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {

  book: Book = {};

  bookForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    title: new FormControl(''),
    author: new FormControl(''),
    description: new FormControl('')
  });

  constructor(private bookService: BookService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private notificationService: NotificationService) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = +paramMap.get('id');
      this.getBookById(id);
    });
  }

  ngOnInit() {
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
    });
  }

  deleteBook() {
    this.bookService.deleteBook(this.book.id).subscribe(() => {
      this.router.navigateByUrl('/books');
      this.notificationService.showMessage('success', 'Delete success')
    }, error => {
      this.notificationService.showMessage('error', 'Delete fail!')
    })
  }

}
