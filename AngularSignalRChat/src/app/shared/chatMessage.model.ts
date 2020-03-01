export class ChatMessage {
    public username: string;
    public avatar: string;
    public message: string;

    constructor(username: string, avatar: string, message: string) {
        this.username = username;
        this.avatar = avatar;
        this.message = message;
    }
  }