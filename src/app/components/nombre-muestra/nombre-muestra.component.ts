import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-nombre-muestra',
  templateUrl: './nombre-muestra.component.html',
  styles: [
  ]
})
export class NombreMuestraComponent implements OnInit, OnChanges {
  ngOnInit(): void {
    console.log('Method not implemented.');
  }

  @Input() nombre!: string;


  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

}
