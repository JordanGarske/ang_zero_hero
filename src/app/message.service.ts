import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    if(this.messages.length == 10){
      this.messages.pop()
    }
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}