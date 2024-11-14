import { Component, Input, input } from '@angular/core';
import { PrimerComponenteComponent } from '../primer-componente/primer-componente.component';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [PrimerComponenteComponent],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
}
