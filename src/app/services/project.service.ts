import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // Makes the service available app-wide
})
export class ProjectService {
  // Define a method to return a list of projects
  getProjects() {
    return [
      {
        title: 'Project 1',
        description: 'A web application built with Angular and TypeScript.',
        image: '/assets/project1.jpg',
        link: 'https://github.com/yourusername/project1',
      },
      {
        title: 'Project 2',
        description: 'A responsive portfolio website using modern CSS.',
        image: '/assets/project2.jpg',
        link: 'https://github.com/yourusername/project2',
      },
      {
        title: 'Project 3',
        description: 'A small utility app for task management.',
        image: '/assets/project3.jpg',
        link: 'https://github.com/yourusername/project3',
      },
    ];
  }
}
