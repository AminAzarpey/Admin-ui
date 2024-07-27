import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
})
export class SideBarComponent implements OnInit {
  @Input('mode') mode: 'compact' | 'comprehensive' | 'minimal' = 'minimal';

  ngOnInit() {}
}
