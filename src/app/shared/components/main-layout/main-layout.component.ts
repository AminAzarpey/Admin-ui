import { Component } from '@angular/core';
import { MinimalComponent } from './views/minimal/minimal.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [MinimalComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {}
