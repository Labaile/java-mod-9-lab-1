import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { ConversationHistoryComponentComponent } from './conversation-history-component/conversation-history-component.component';
import { ConversationThreadComponentComponent } from './conversation-thread-component/conversation-thread-component.component';
import { ConversationControlComponentComponent } from './conversation-control-component/conversation-control-component.component';
import { ContactListComponentComponent } from './contact-list-component/contact-list-component.component';
import { SendMessageComponentComponent } from './send-message-component/send-message-component.component';
import { SenderMessageComponentComponent } from './sender-message-component/sender-message-component.component';
import { UserMessageComponentComponent } from './user-message-component/user-message-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { ConversationModelComponent } from './conversation.model/conversation.model.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    ConversationHistoryComponentComponent,
    ConversationThreadComponentComponent,
    ConversationControlComponentComponent,
    ContactListComponentComponent,
    SendMessageComponentComponent,
    SenderMessageComponentComponent,
    UserMessageComponentComponent,
    ContactComponentComponent,
    ContactComponentComponent,
    HeaderComponentComponent,
    ConversationModelComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }