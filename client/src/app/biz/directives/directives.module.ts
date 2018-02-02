import { NgModule } from '@angular/core';
import { HideIonFabDirective } from './hide-ion-fab/hide-ion-fab';
import { HideIonNavbarDirective } from "./hide-ion-navbar/hide-ion-navbar";
@NgModule({
	declarations: [HideIonFabDirective, HideIonNavbarDirective],
	imports: [],
	exports: [HideIonFabDirective, HideIonNavbarDirective]
})
export class DirectivesModule {}
