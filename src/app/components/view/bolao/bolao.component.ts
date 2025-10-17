import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bolao',
  templateUrl: './bolao.component.html',
  styleUrls: ['./bolao.component.css']
})
export class BolaoComponent implements OnInit {
  title: string = '';
  links: { label: string; url: string }[] = [];
  imageSrc: string = '';
  imageAlt: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('assets/bolao.json').subscribe((data) => {
      this.title = data?.title ?? '';
      this.links = data?.links ?? [];
      this.imageSrc = data?.imageSrc ?? '';
      this.imageAlt = data?.imageAlt ?? '';
    });
  }
}
