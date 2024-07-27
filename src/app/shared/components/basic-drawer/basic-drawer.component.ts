import { Component, Inject } from '@angular/core';
import { CommonModule, NgClass, NgIf } from '@angular/common';
import { DrawerService } from '../../services/drawer.service';

@Component({
  selector: 'app-basic-drawer',
  standalone: true,
  imports: [CommonModule, NgClass, NgIf],
  templateUrl: './basic-drawer.component.html',
  styleUrl: './basic-drawer.component.scss',
})
export class BasicDrawerComponent {
  constructor(
    @Inject('drawerData') public data: any,
    public drawerService: DrawerService,
  ) {}
}
