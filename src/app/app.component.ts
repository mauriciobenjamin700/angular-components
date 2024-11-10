import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TittleComponent } from "./tittle/tittle.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TittleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'here';
}
