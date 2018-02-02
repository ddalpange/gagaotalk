import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[hide-ion-fab]', // Attribute selector
	host: {
		'(ionScroll)': 'onContentScroll($event)'
	}
})
export class HideIonFabDirective {
	fabToHide: HTMLElement;
	oldScrollTop: number = 0;

	constructor(private renderer: Renderer2, private element: ElementRef) {
	}

	ngAfterViewInit(){
		this.fabToHide = this.element.nativeElement.getElementsByClassName("fab")[0];
		this.renderer.setStyle(this.fabToHide, 'webkitTransition', 'transform 500ms, opacity 500ms');
	}

	onContentScroll(e){
		if(e.scrollTop - this.oldScrollTop > 10){
			this.renderer.setStyle(this.fabToHide, 'opacity', '0');
			this.renderer.setStyle(this.fabToHide, 'webkitTransform', 'scale3d(.1,.1,.1)');
		} else if(e.scrollTop - this.oldScrollTop < 0){
			this.renderer.setStyle(this.fabToHide, 'opacity', '1');
			this.renderer.setStyle(this.fabToHide, 'webkitTransform', 'scale3d(1,1,1)');
		}

		this.oldScrollTop = e.scrollTop;
	}
}
