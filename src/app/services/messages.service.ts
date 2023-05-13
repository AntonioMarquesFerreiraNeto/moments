import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  mensagem: string = '';
  constructor() { }

  addMessage(mensagem: string){
    this.mensagem = mensagem;
    setTimeout(() => {
      this.closeMensagem();
    }, 2000);
  }

  closeMensagem(){
    this.mensagem = '';
  }
}
