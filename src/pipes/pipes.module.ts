import { NgModule } from '@angular/core';
import { MomentjsPipe } from './momentjs/momentjs';
import { SlotjsPipe } from './slotjs/slotjs';

@NgModule({
	declarations: [MomentjsPipe,SlotjsPipe],
	imports: [],
	exports: [MomentjsPipe,SlotjsPipe]
})
export class PipesModule {}
