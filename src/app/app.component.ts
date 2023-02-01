import { Component } from '@angular/core';
import { AuthService } from 'src/app/features/@auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Chat App';
  constructor(public auth: AuthService) {}
}
