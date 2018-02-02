import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
	selector: '[hide-ion-navbar]', // Attribute selector
	host: {
		'(ionScroll)': 'onContentScroll($event)'
	}
})
export class HideIonNavbarDirective {
	@Input('navbar')
	navbar: HTMLElement;
	navbarHeight;

	// tabs;
	// tabsHeight;
	scrollContent;
	oldScrollTop: number = 0;


	constructor(private renderer: Renderer2, private element: ElementRef) {
	}

	ngOnInit(){
		this.scrollContent = this.element.nativeElement.getElementsByClassName('scroll-content')[0];
		// this.scrollContent = document.getElementsByClassName('scroll-content')[0];
		// this.tabs = document.getElementsByClassName('tabbar')[0];

		this.renderer.setStyle(this.navbar, 'webkitTransition', 'top 300ms');
		// this.renderer.setStyle(this.tabs, 'webkitTransition', 'top 300ms');
		this.renderer.setStyle(this.scrollContent, 'webkitTransition', 'margin-top 300ms');

		this.navbarHeight = this.navbar.clientHeight;
		// this.tabsHeight = this.tabs.clientHeight;
	}

	onContentScroll(e){
		if(e.scrollTop - this.oldScrollTop > 0) {
			this.renderer.setStyle(this.navbar, 'top', `-${this.navbarHeight}px`);
			// this.renderer.removeAttribute(this.tabs, 'style');
			// this.renderer.setStyle(this.scrollContent, 'margin-top', `${this.tabsHeight}px`);
			this.renderer.setStyle(this.scrollContent, 'margin-top', `0px`);
		} else {
			this.renderer.setStyle(this.navbar, 'top', '0px');
			// this.renderer.setStyle(this.tabs, 'top', `${this.navbarHeight}px`);
			// this.renderer.setStyle(this.scrollContent, 'margin-top', `${this.navbarHeight + this.tabsHeight}px`);
			this.renderer.setStyle(this.scrollContent, 'margin-top', `${this.navbarHeight}px`);
		}

		this.oldScrollTop = e.scrollTop;
	}
}
