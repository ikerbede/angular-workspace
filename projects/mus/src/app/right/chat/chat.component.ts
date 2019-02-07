import { Component, OnInit } from '@angular/core';
import { Message } from './shared/message.model';

@Component({
  selector: 'mus-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  messages: Message[] = [];
  newMessage: string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.messages.push({
      author: 'iker',
      content: this.newMessage,
      date: new Date()
    });
    console.log(`Written message: ${this.newMessage}`);
    this.newMessage = null;
  }
}
