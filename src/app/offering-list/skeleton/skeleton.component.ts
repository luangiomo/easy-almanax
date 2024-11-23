import { Component } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  template: `
    <div class="skeleton">
      <div class="skeleton-infos" *ngFor="let r of repeat">
        <div class="skeleton-img skeleton-animation"></div>
        <div class="skeleton-list">
          <div class="skeleton-item s-small skeleton-animation"></div>
          <div class="skeleton-item s-large skeleton-animation"></div>
          <div class="skeleton-item s-medium skeleton-animation"></div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./skeleton.component.css'],
})
export class SkeletonComponent {
  repeat = new Array(3);
}
