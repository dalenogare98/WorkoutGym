import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  visibility: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  scrollTo(section: String){
    if(section == 'top') {
      window.scrollTo({top: 0, behavior: 'smooth'})
    }
    else {
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

    changeVisibility() {
      this.visibility = !this.visibility;
    }

}
