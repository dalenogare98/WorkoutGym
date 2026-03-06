import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content4',
  templateUrl: './content4.component.html',
  styleUrls: ['./content4.component.css']
})
export class Content4Component implements OnInit {
  plans: any[] = [];
  disclaimers: string[] = [];
  pricesPdfPath: string = 'assets/tabela_de_precos_2026.pdf';

  constructor() { }

  ngOnInit(): void {
  }

}
