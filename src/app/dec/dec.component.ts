import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dec',
  imports: [],
  templateUrl: './dec.component.html',
  styleUrl: './dec.component.css'
})
export class DecComponent {

@ViewChild('sessao') sessao!: ElementRef;

  scrollToSection() {
    this.sessao.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

}
