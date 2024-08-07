import { Component } from '@angular/core';
import { SideBarComponent } from '../../ui/side-bar/side-bar.component';
import { BasicDrawerComponent } from '@admin-ui/shared/components';
import { MatSidenavModule } from '@angular/material/sidenav';
import {
  ChangePrimaryColorDirective,
  DrawerDirective,
  ThemeDirective,
} from '@admin-ui/shared/directives';

@Component({
  selector: 'app-minimal',
  standalone: true,
  imports: [
    SideBarComponent,
    BasicDrawerComponent,
    MatSidenavModule,
    ChangePrimaryColorDirective,
    ThemeDirective,
    DrawerDirective,
  ],
  templateUrl: './minimal.component.html',
  styleUrl: './minimal.component.scss',
})
export class MinimalComponent {
  constructor() {}
}
