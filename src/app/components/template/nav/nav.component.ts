import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  visibility: boolean = false
  orange: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  scrollTo(section: String) {
    if (section == 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    else {
      const yOffset = -130;
      const element = document.getElementById(String(section))
      if (element != null) {
        let y = element.getBoundingClientRect().top + window.pageYOffset
        if (window.outerWidth > 414) {
          y += yOffset
        }
        window.scrollTo({ top: y, behavior: 'smooth' })
      }
    }
  }

  changeVisibility() {
    this.visibility = !this.visibility;
  }
  changeColor(name: String) {
    if(name == 'none') {
      const elements = document.getElementsByClassName((String('nav')))
      const arrayElements = Array.from(elements);
      arrayElements.forEach(element => {
        element.setAttribute("style", "color: white");
      })
    }
    const elements = document.getElementsByClassName((String('nav')))
    const arrayElements = Array.from(elements);
    arrayElements.forEach(element => {
      element.setAttribute("style", "color: white");
    })
    const element = document.getElementsByClassName(String(name))[0]
    element.setAttribute("style", "color:#E26725;");
  }
}