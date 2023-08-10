import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'loki-fullstack-sidenav-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,

    MatGridListModule,
    MatFormFieldModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatBadgeModule,
    MatTabsModule,
  ],
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss'],
})
export class SidenavListComponent {
  @Output() closeSideNav = new EventEmitter();

  navlist = [
    {
      name: 'Dashboard',
      route: '/',
      icon: 'dashboard',
    },
    {
      name: 'Stepper Registration Form',
      route: '/stepper-registration-form',
      icon: 'assignment',
    },
    {
      name: 'User List',
      route: '/user-list',
      icon: 'list',
    },
  ];

  onToggleClose() {
    this.closeSideNav.emit();
  }
}
