import { Component } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.css'],
})
export class SkeletonComponent {
  repeat = new Array(3);
  sizes = ['s-small', 's-large', 's-medium'];
}
