import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bolao-copa',
  templateUrl: './nav-bolao-copa.component.html',
  styleUrls: ['./nav-bolao-copa.component.css']
})
export class NavBolaoCopaComponent implements OnInit {

  visibility: boolean = false
  orange: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  scrollTo(section: String) {
    setTimeout(()=> {
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
    }, 500)
    }

  changeVisibility() {
    this.visibility = !this.visibility;
  }
  
  changeColor(name: String) {
    setTimeout(()=> {
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
    }, 0)
  }
}
