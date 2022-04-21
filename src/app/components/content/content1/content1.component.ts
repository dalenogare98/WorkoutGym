import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content1',
  templateUrl: './content1.component.html',
  styleUrls: ['./content1.component.css']
})
export class Content1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollTo(section: String){
    const yOffset = -130;
    const element = document.getElementById(String(section))
    if(element != null) {
      let y = element.getBoundingClientRect().top + window.pageYOffset
      if(window.outerWidth > 414) {
        y += yOffset
      }
      window.scrollTo({top: y, behavior: 'smooth'})
      }
    } 

}
