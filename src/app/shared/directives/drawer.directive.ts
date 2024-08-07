import { Directive, HostListener, Injector, Input } from '@angular/core';
import { DrawerService } from '@admin-ui/shared/services';
import {
  BasicBreadcrumbComponent,
  BasicDrawerComponent,
  BasicFormComponent,
} from '@admin-ui/shared/components';

@Directive({
  selector: '[appDrawer]',
  standalone: true,
})
export class DrawerDirective {
  @Input() drawerPosition: 'left' | 'right' = 'left';
  @Input() drawerType: 'form' | 'menu' = 'form';

  constructor(
    private drawerService: DrawerService,
    private injector: Injector,
  ) {}

  @HostListener('click')
  onClick() {
    if (this.drawerType === 'form') {
      this.drawerService.open(BasicDrawerComponent, 'lg', this.drawerPosition, {
        component: BasicFormComponent,
        injector: this.injector,
      });
    } else if (this.drawerType === 'menu') {
      this.drawerService.open(BasicDrawerComponent, 'md', this.drawerPosition, {
        component: BasicBreadcrumbComponent,
        injector: this.injector,
      });
    }
  }
}
