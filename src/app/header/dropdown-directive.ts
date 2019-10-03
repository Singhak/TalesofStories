import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective {

    @HostBinding('class.open') isOpen = false;
    constructor(private elRef: ElementRef) {
    }
    // @HostListener('click') dropdownToggle() {
    //     this.isOpen = !this.isOpen;
    // }

    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        // console.log(this.elRef.nativeElement);
        // console.log(event.target);
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
      }
}
