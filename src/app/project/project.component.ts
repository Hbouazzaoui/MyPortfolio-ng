import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule], // For *ngFor directive
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent {
  projects: any[] = []; // Type this as an interface if desired (see Step 5)

  constructor(private projectService: ProjectService) {
    this.projects = this.projectService.getProjects();
  }
}
