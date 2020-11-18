import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() term = new EventEmitter<any>();

  searchHeader(term): any {
    this.term.emit(term);
  }


  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
