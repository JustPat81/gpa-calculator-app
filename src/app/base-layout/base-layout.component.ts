/**
 * Title: base-layout.component.ts
 * Author: Professor Krasso
 * Date:  04 December 2022
 * Modified by: Patrick wolff
 * Description: base layout component
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

  assignment: string;

  constructor(private cookieService: CookieService, private router: Router) {
    this.assignment = 'GPA Calculator';
   }

  ngOnInit(): void {
  }

  signOut() {
    this.cookieService.deleteAll();
    this.router.navigate(['/session/sign-in']);
  }

}
