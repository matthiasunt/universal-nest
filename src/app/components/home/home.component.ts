import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `
    <h3>Example</h3>
    <div *ngIf="isBrowser" class="wrapper">
      <p>Homepage (show if browser render)</p>
      <button (click)="toAbout()">To About</button>
    </div>
  `,
  styles: [
      `
          .container {
              margin: 16px;
              padding: 16px;
              border: 1px black solid;
          }
    `
  ]
})
export class HomeComponent implements OnInit {
  public title: string;
  public isBrowser: boolean = isPlatformBrowser(this.platformId);

  constructor(@Inject(PLATFORM_ID) private platformId: Object,
              private router: Router
  ) {
  }

  ngOnInit() {
    this.title = `This is the Homepage!`;
  }

  toAbout() {
    if (this.isBrowser) {
      this.router.navigateByUrl('/about');
    }
  }
}
