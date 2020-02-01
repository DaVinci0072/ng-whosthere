// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// Core Module
import { CoreModule } from '../../../core/core.module';
import { PartialsModule } from '../../partials/partials.module';
import { PresenceboardComponent } from './presenceboard.component';

@NgModule({
	imports: [
		CommonModule,
		PartialsModule,
		CoreModule,
		RouterModule.forChild([
			{
				path: '',
				component: PresenceboardComponent
			},
		]),
	],
	providers: [],
	declarations: [
		PresenceboardComponent,
	]
})
export class PresenceboardModule {
}
