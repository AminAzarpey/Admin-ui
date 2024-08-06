import { Component, Injector } from '@angular/core';
import { SideBarComponent } from '../../ui/side-bar/side-bar.component';
import { DrawerService } from '../../../../services/drawer.service';
import {
  BasicBreadcrumbComponent,
  BasicDrawerComponent,
  BasicFormComponent,
} from '@admin-ui/shared/components';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ThemeService } from '../../../../services/theme.service';

@Component({
  selector: 'app-minimal',
  standalone: true,
  imports: [SideBarComponent, BasicDrawerComponent, MatSidenavModule],
  templateUrl: './minimal.component.html',
  styleUrl: './minimal.component.scss',
})
export class MinimalComponent {
  constructor(
    private drawerService: DrawerService,
    private themeService: ThemeService,
    private injector: Injector,
  ) {}

  openDrawerWithForm(position: 'left' | 'right') {
    this.drawerService.open(BasicDrawerComponent, 'lg', position, {
      component: BasicFormComponent,
      injector: this.injector,
    });
  }

  openDrawerWithMenu(position: 'left' | 'right') {
    this.drawerService.open(BasicDrawerComponent, 'md', position, {
      component: BasicBreadcrumbComponent,
      injector: this.injector,
    });
  }

  toggleTheme() {
    const newTheme =
      this.themeService.getCurrentThemePreference() === 'light'
        ? 'dark-theme'
        : 'light-theme';
    this.themeService.updateCSSVariables(newTheme);
  }

  changePrimaryColor(color: string) {
    document.documentElement.style.setProperty(
      '--primary-color',
      `var(--${color})`,
    );
  }
}
