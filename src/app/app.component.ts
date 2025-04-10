import { Component } from '@angular/core';
import { NavigationStart, Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
   standalone: true,
   imports: [ RouterModule]
})
export class AppComponent {
  title = 'E-book-application';
}
