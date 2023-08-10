import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from '../topbar/topbar.component';
import { SidenavListComponent } from '../sidenav-list/sidenav-list.component';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'loki-fullstack-universal-layout',
  standalone: true,
  imports: [
    CommonModule,
    TopbarComponent,
    SidenavListComponent,
    MatSidenavModule,
  ],
  templateUrl: './universal-layout.component.html',
  styleUrls: ['./universal-layout.component.scss'],
})
export class UniversalLayoutComponent {}
