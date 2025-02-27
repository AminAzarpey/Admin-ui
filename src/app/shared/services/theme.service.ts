import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  storageKey = 'theme-preference';

  constructor() {
    this.loadThemePreference();
  }

  getCurrentThemePreference() {
    return localStorage.getItem(this.storageKey);
  }

  updateCSSVariables(theme: string) {
    if (theme === 'dark-theme') {
      document.documentElement.style.setProperty('--bg-theme', '#1a1a1a'); // Dark theme primary color
      document.documentElement.style.setProperty('--bg-theme-750', '#2C2C2CBF');
      document.documentElement.style.setProperty('--bg-theme-350', '#68686859');
      localStorage.setItem(this.storageKey, 'dark');
    } else {
      document.documentElement.style.setProperty('--bg-theme', '#f6f6f6');
      document.documentElement.style.setProperty('--bg-theme-750', '#F6F6F6BF');
      document.documentElement.style.setProperty('--bg-theme-350', '#F6F6F659');
      localStorage.setItem(this.storageKey, 'light');
      // Light theme primary color
    }
  }

  loadThemePreference() {
    const themePreference = localStorage.getItem(this.storageKey);
    if (themePreference) {
      if (themePreference === 'dark') {
        this.updateCSSVariables('dark-theme');
      } else {
        this.updateCSSVariables('light-theme');
      }
    } else {
      this.setDefaultThemePreference();
    }
  }

  private setDefaultThemePreference() {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      this.updateCSSVariables('dark-theme');
    } else {
      this.updateCSSVariables('light-theme');
    }
  }
}
