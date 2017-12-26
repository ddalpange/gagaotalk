import { NgModule } from '@angular/core';
import { AuthManagerProvider } from './auth-manager/auth-manager';
import { MemoManagerProvider } from './memo-manager/memo-manager';

@NgModule({
  providers: [
    AuthManagerProvider,
    MemoManagerProvider
  ]
})

export class ProvidersModule {}
