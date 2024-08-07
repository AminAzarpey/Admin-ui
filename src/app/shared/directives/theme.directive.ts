import { Directive, HostListener } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Directive({
  selector: '[appTheme]',
  standalone: true,
})
export class ThemeDirective {
  constructor(private themeService: ThemeService) {}

  @HostListener('click')
  onClick() {
    const newTheme =
      this.themeService.getCurrentThemePreference() === 'light'
        ? 'dark-theme'
        : 'light-theme';
    this.themeService.updateCSSVariables(newTheme);
  }
}
