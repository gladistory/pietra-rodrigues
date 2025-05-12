import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-overlay',
  imports: [CommonModule],
  templateUrl: './overlay.component.html',
  styleUrl: './overlay.component.css'
})
export class OverlayComponent {

  
  isVisible: boolean = true;

  closeOverlay() {
    this.isVisible = false;
  }

}
