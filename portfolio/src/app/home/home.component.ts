import { Component } from '@angular/core';
import { ProjectComponent } from "../project/project.component";
import { AboutmeComponent } from "../aboutme/aboutme.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProjectComponent, AboutmeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
