import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styles: [
  ]
})
export class HeroCardComponent implements OnInit {

  @Input() hero: any = {}; // Send info to the heroes.component
  @Input() index: number;

  @Output() selectedHero: EventEmitter<number> // retrieve info from the heroes.component

  constructor(private router: Router) {
    this.selectedHero = new EventEmitter<number>();
  }

  ngOnInit(): void {
  }

  showHero() {
    this.router.navigate( ['/hero', this.index] );
    // Sample of event emitter an @output
    //this.selectedHero.emit(this.index);
  }
}
