import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-content4',
  templateUrl: './content4.component.html',
  styleUrls: ['./content4.component.css']
})
export class Content4Component implements OnInit {
  plans: any[] = [];
  disclaimers: string[] = [];
  pricesPdfPath: string = 'assets/tabela_de_precos_2026.pdf';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('assets/planos.json').subscribe((data) => {
      this.plans = data?.plans ?? [];
      this.disclaimers = data?.disclaimers ?? [];
      this.pricesPdfPath = data?.pricesPdfPath ?? this.pricesPdfPath;
    });
  }
}
