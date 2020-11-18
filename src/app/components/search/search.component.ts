import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() term = new EventEmitter<any>();

  searchTerm(term): any {
    this.term.emit(term);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
