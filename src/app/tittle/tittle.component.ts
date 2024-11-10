import {
  Component,
  OnInit,
  OnChanges,
  Input,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
} from '@angular/core';


@Component({
  selector: 'app-tittle',
  standalone: true,
  imports: [],
  templateUrl: './tittle.component.html',
  styleUrl: './tittle.component.css'
})
export class TittleComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit
{

  @Input() name: string = "";

  constructor() {
    console.log('Construtor'+`${this.name}`);
  }
  ngAfterContentInit(): void {
    console.log("AfterContentIni");
  }
  ngAfterViewChecked(): void {
    console.log("AfterViewChecked");
  }
  ngAfterViewInit(): void {
    console.log("AfterViewInit");
  }
  ngAfterContentChecked(): void {
    console.log("AfterContentChecked");
  }
  ngDoCheck(): void {
    console.log("DoCheck");
  }

  ngOnChanges(): void {
    console.log('Mudou'+`${this.name}`);
  }

  ngOnInit(): void {
    this.name = `Olá ${this.name}`;
    console.log('Inicializado')+`${this.name}`;
  }

}
