import { Component } from "@angular/core";
import { Suggestion } from "../../core/entities/suggestion.entity";
import { IconComponent } from "../icon/icon.component";
import { Conversation } from "../../core/entities/conversation.entity";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss'],
    standalone: true,
    imports: [IconComponent, ReactiveFormsModule],
    providers: [],
})
export class ChatComponent {

    conversation: Conversation[] = [];


    chatForm: FormGroup = this.fb.group({
        message: ['', Validators.required]
    })



    constructor(private fb: FormBuilder) { }

    sendMessage() {
        const text = this.chatForm.get('message')?.value;
        if (text && text.trim()) {
            this.conversation.push({
                text,
                isUser: true,
                isBot: false,
                date: new Date()
            });
            this.chatForm.reset();
        }
    }
    onKeydown(event: KeyboardEvent) {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            this.sendMessage();
        }
    }
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
