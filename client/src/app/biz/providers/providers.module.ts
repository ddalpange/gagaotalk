import { NgModule } from '@angular/core';
import { AuthManagerProvider } from './auth-manager/auth-manager';
import { MemoManagerProvider } from './memo-manager/memo-manager';
import { ChatManagerProvider } from './chat-manager/chat-manager';
import { DatabaseManagerProvider } from './database-manager/database-manager';

@NgModule({
  providers: [
    AuthManagerProvider,
    MemoManagerProvider,
    ChatManagerProvider,
    DatabaseManagerProvider
  ]
})

export class ProvidersModule {}
