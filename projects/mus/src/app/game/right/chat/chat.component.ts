import { Component, OnInit } from '@angular/core';
import { Message } from './shared/message.model';
import { environment } from 'projects/mus/src/environments/environment';

@Component({
  selector: 'mus-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  chatSocket = new WebSocket(environment.WS_CHAT_URL);
  messages: Message[] = [];
  newMessage: string = null;

  constructor() { }

  ngOnInit() {
    this.chatSocket.onmessage = (messageEvent) => {
      this.messages.push(JSON.parse(messageEvent.data));
      const msgListElt = document.getElementById('message-list');
      msgListElt.scrollTop = msgListElt.scrollHeight;
    };
  }

  addMessage() {
    this.chatSocket.send(JSON.stringify({author: 'iker', content: this.newMessage}));
    this.newMessage = null;
  }
}
