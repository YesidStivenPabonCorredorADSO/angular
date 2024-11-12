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
  @Input() nombre ='';
  games=[{
    id:1,
    name:"Counter",
  },
  {
    id:2,
    name:"GTA V",
  },
  {
    id:3,
    name:"PUGB",
  }
]
evento(){
  alert("Skin Daniel")
}
}
