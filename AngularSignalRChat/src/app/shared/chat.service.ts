import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
//import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { ChatMessage } from './chatMessage.model';

@Injectable()
export class ChatService {
  private hubConnection: HubConnection;
  messageSent = new Subject();
  chatServerUrl = 'http://localhost:5000/chat';

  constructor() {
    this.initHubConnection();
    this.registerOnServerEvents();
    this.startConnection();
  }

  initHubConnection() {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl(this.chatServerUrl)
      .build();
  }
    
  startConnection() {      
    this.hubConnection
      .start()
      .then(() => console.log('Connection started!'))
      .catch(err => console.log('Error while establishing connection :('));
  }

  private registerOnServerEvents(): void {
    this.hubConnection.on('sendToAll', (nick: string, avatar: string, receivedMessage: string) => {
      let data = new ChatMessage(nick, avatar, receivedMessage);      
      this.messageSent.next(data);
    });
  }

  public sendMessage(name, avatar, message): void {
    this.hubConnection
      .invoke('sendToAll', name, avatar, message)
      .catch(err => console.error(err));
  }
}
