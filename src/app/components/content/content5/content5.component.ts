import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content5',
  templateUrl: './content5.component.html',
  styleUrls: ['./content5.component.css']
})
export class Content5Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


mailMe(){
  document.getElementById("form")?.addEventListener("click", function(event){
    event.preventDefault()
  });
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const message = (document.getElementById('message') as HTMLInputElement).value;
  window.location.href = "mailto:workoutgym@gmail.com?subject=Dúvida sobre a academia"+"&body="+"Nome:  " + name + "%0D%0A"+ "Telefone:  " + phone + "%0D%0A" + "Mensagem:  " + message
  const resetForm = <HTMLFormElement>document.getElementById('form');
  resetForm.reset()
}
}

