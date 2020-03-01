import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { ChatService } from '../shared/chat.service';
import { ChatMessage } from '../shared/chatMessage.model';
import { Router } from '@angular/router';

const AVATAR_URL = 'https://robohash.org';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  nick = '';
  avatar = '';
  message = '';
  chatMessages: ChatMessage[] = [];

  constructor(private userService: UserService,
              private router: Router,
              private chatService: ChatService) { }

  ngOnInit() {
    if (!this.userService.isLoggedIn) {
      this.router.navigate(['/login']);
    }
    const randomId = this.getRandomId();
    this.nick = this.userService.username;
    this.avatar = `${AVATAR_URL}/${randomId}.png`
    this.subscribeToEvents();
  }

  private subscribeToEvents(): void {
    this.chatService.messageSent.subscribe((msg: ChatMessage) => {
      this.chatMessages.push(msg);
    });
  }

  sendMessage() {
    this.chatService.sendMessage(this.nick, this.avatar, this.message);
    this.message = '';
  }

  private getRandomId(): number {
    return Math.floor(Math.random() * (1000000)) + 1;
  }
}
