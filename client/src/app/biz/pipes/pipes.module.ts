import { NgModule } from '@angular/core';
import { MomentPipe } from './moment/moment';
import { SearchFilterPipe } from "./search-filter/search-filter";
@NgModule({
	declarations: [MomentPipe, SearchFilterPipe],
	imports: [],
	exports: [MomentPipe, SearchFilterPipe]
})
export class PipesModule {}
