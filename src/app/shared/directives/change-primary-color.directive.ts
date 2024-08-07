import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appChangePrimaryColor]',
  standalone: true,
})
export class ChangePrimaryColorDirective {
  @Input('appChangePrimaryColor') primaryColor: string = '';

  constructor() {}

  @HostListener('click') onClick() {
    this.changePrimaryColor(this.primaryColor);
  }

  private changePrimaryColor(color: string) {
    document.documentElement.style.setProperty('--primary-color', color);
  }
}
