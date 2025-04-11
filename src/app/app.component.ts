import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms'; // For contact form

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ResumeComponent,
    SkillsComponent,
    ProjectComponent,
    ContactComponent,
    ReactiveFormsModule // Required for form validation
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyPortfolio';
}
