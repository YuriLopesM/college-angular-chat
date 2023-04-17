import { HostListener, Component } from '@angular/core';

interface Message {
  user: string;
  content: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  messageToSend = '';
  messages: Message[] = [{
    user: 'Atendente',
    content: 'Olá, como posso ajudar?'
  }];

  @HostListener('document:keydown.enter', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    this.sendMessage();
  }

  sendMessage() {
    this.messages.push({
      user: 'Usuário',
      content: this.messageToSend
    });
    this.messageToSend = '';
  }

}
