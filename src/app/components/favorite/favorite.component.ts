import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  favoriteIcon = 'star_border';
  @Input() id;
  @Input() users;

  constructor() { }

  favoritar(id): any {
    this.id = id;
    if(!localStorage.getItem(`favorite${id}`))  {
      this.favoriteIcon = 'star';
      localStorage.setItem(`favorite${id}`, id);
    } else{
      this.favoriteIcon = 'star_border';
      localStorage.removeItem(`favorite${id}`);
    }
  }

  ngOnInit(): void {
    if(localStorage.getItem(`favorite${this.id}`))  {
      this.favoriteIcon = 'star';
    } else{
      this.favoriteIcon = 'star_border';
    }
  }

}
