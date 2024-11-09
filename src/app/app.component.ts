import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PecaExpressComponent } from './components/peca-express/peca-express.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PecaExpressComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pecaexpress';
}
