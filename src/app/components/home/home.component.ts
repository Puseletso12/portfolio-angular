import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faAngular,
  faHtml5,
  faCss3,
  faGithub,
  faJs,
  faBootstrap
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  
})
export class HomeComponent {
  faGithub = faGithub;
  faAngular = faAngular;
  faHtml5 = faHtml5;
  faCss3 = faCss3;
  faJs = faJs
  faBootstrap = faBootstrap
  imageUrl = 'src/assets/profile.jpg'
  
}
