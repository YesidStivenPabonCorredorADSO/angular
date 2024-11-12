import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimerComponenteComponent } from './primer-componente/primer-componente.component';
import { GamesComponent } from "./games/games.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrimerComponenteComponent, GamesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_aprendiendo';
}
