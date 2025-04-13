// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-skills',
//   imports: [],
//   templateUrl: './skills.component.html',
//   styleUrl: './skills.component.css'
// })
// export class SkillsComponent {

// }


import {
  Component,
  AfterViewInit,
  ViewChildren,
  QueryList,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements AfterViewInit {
  @ViewChildren('progressBar') progressBars!: QueryList<
    ElementRef<HTMLDivElement>
  >;

  ngAfterViewInit(): void {
    this.progressBars.forEach((progressBar) => {
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const target = entry.target as HTMLDivElement;
              const progressValue = target.getAttribute('data-progress');
              if (progressValue) {
                target.style.width = `${progressValue}%`;
              }
              observer.unobserve(target);
            }
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(progressBar.nativeElement);
    });
  }
}
