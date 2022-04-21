import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content3',
  templateUrl: './content3.component.html',
  styleUrls: ['./content3.component.css']
})
export class Content3Component implements OnInit {

  srcString: String = ''

  constructor() { }

  ngOnInit(): void {
  }

  openFullImg(src: String) {
    var fullImageBox = document.getElementById("fullImageBox");
    var fullImage = document.getElementById("fullImage");
    fullImageBox?.setAttribute("style", "display: flex");
    fullImage?.setAttribute("src", String(src))
  }

  closeFullImg() {
    var fullImageBox = document.getElementById("fullImageBox");
    fullImageBox?.setAttribute("style", "display: none");
  }

  changeImage(nextOrPrev: String) {
    var fullImage = (document.getElementById("fullImage") as HTMLImageElement).src
    var onlyNumbers = fullImage.replace(/\D/g, '');
    var lastNumber = Number(onlyNumbers.substring(onlyNumbers.length - 1));
    var image = document.getElementById("fullImage")
    if(nextOrPrev == 'next') {
      if (fullImage.includes('img6ol')) {
        image?.setAttribute("src", "../../../../assets/img1ol.png")
      }
      else {
        image?.setAttribute("src", `../../../../assets/img${lastNumber + 1}ol.png`)
      }
    }
    else {
      if (fullImage.includes('img1ol')) {
        image?.setAttribute("src", "../../../../assets/img6ol.png")
      }
      else {
        image?.setAttribute("src", `../../../../assets/img${lastNumber - 1}ol.png`)
      }
    }
  }
}
