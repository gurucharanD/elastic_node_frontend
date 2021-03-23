import { AppService } from './app.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  public name: any
  public usersData: any;
  constructor(private appService: AppService) {
    this.appService.fetchUsersData().subscribe((data: any) => {
      this.usersData = data.response;
    });
  }
  public searchByName() {
    this.appService.fetchParticularUser({ name: this.name }).subscribe((data: any) => {
      this.usersData = data.response;
    });
  }
}
