import {Directive, ElementRef} from '@angular/core';

@Directive({
    selector:'[Highlight]'
})

export class HighlightDirective {

    constructor(el: ElementRef) {
        el.nativeElement.style.backgroungColor = 'gold';
    }

}