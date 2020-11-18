import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserInfo } from '../../models/users.model';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  user;

  zoom = 12
  center: google.maps.LatLngLiteral
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  }

  constructor(private usersService: UsersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.usersService.getUserById(this.route.snapshot.params[`id`]).subscribe((user: UserInfo[]) => {
      this.user = user;
      console.log(this.user)
    });
    this.center = {
      lat: this.user.address.geo.lat,
      lng: this.user.address.geo.lng,
    };
  }

  zoomIn(): any {
    if (this.zoom < this.options.maxZoom) {this.zoom++}
  }

  zoomOut(): any {
    if (this.zoom > this.options.minZoom) {this.zoom--}
  }
}
