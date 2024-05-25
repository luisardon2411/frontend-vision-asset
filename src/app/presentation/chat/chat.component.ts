import { Component } from "@angular/core";
import { Suggestion } from "../../core/entities/suggestion.entity";
import { IconComponent } from "../icon/icon.component";
import { Conversation } from "../../core/entities/conversation.entity";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  standalone: true,
  imports: [IconComponent],
  providers: [],
})
export class ChatComponent {
  conversation: Conversation[] = [
    
  ];

  message = '';

  suggestions: Suggestion[] = [
    {
      text: '¿Puedes ayudarme a reconocer mi imagen?',
      icon: 'photo'
    },
    {
      text: '¿Puedes ayudarme a reconocer mi texto?',
      icon: 'text'
    },
    {
      text: '¿Puedes ayudarme a reconocer mi audio?',
      icon: 'audio'
    },
    {
      text: '¿Puedes ayudarme a reconocer mi video?',
      icon: 'video'
    }
  ];
}
