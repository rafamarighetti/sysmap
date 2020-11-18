import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Users } from '../../models/users.model';
import { FavoriteComponent } from '../../components/favorite/favorite.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: Users[];
  displayedColumns: string[] = ['nome', 'email', 'favorito', 'detalhes'];
  favorite: boolean;
  dataSource;
  term: string;

  searchHeader(term): any {
    this.term = term;
    console.log(term);
  }

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.dataSource = this.users;
    this.usersService.getUsers().subscribe((users: Users[]) => {
      this.users = users;
    });
  }
}
