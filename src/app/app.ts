import { Component } from '@angular/core';
import { UploadComponent } from './components/upload/upload';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UploadComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})

export class App {
  protected title = 'frontend';
}
