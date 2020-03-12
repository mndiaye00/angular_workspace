import {Directive, ElementRef, HostListener, Input} from "@angular/core";

@Directive({
    selector: '[pokemonBorderCard]'
})

export class BorderCardDirective{

    private defaultColor: string = "#f5f5f5";
    private defaultHeight: number = 180;

    constructor(private el: ElementRef){
        this.setBorder(this.defaultColor);
        this.setHauteur(this.defaultHeight);
    }

    @Input('pokemonBorderCard') borderColor : string;

    @HostListener('mouseenter') onMouseEnter(){
        this.setBorder(this.borderColor || "#f4f4f4");
    }

    @HostListener('mouseleave') onMouseLeave(){
        this.setBorder(this.defaultColor);
    }

    private setBorder(color: string){
        let border = 'solid 4px' + color;
        this.el.nativeElement.style.border = border;
    }

    private setHauteur(height: number){
        this.el.nativeElement.style.height = height + 'px';
    }
}