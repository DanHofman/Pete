import { trigger, state, animate, transition, style } from '@angular/animations';

export const hoveringAnimationTrigger = trigger("Hovering", [
    state("default", style({
        color: 'white',
        transform: 'scale(1)',
        'box-shadow': '0px 0px 0px rgba(0,0,0,0.5)'
    })),
    state("hovered", style({
        color: 'crimson',
        'font-size': '25px',
        transform: 'scale(1.05)',
        'box-shadow': '0px 15px 10px red',
        
    })),
    transition('default <=> hovered', animate(500))
])

export const hoveringLettersTrigger = trigger("WordsHover", [
    state('default', style({
        'text-decoration': 'none',
        'font-weight': 'bold',
        'font-size': '16px',
        color: 'transparent',
        'list-style': 'none',
        'text-shadow': '0px 0px 0px transparent'
    })),
    state('hovered', style({
        'text-decoration': 'none',
        'font-size': '16px',
        'font-weight': 'bold',
        color: 'black',
        'list-style': 'none',
        'text-shadow': '0.1px 0.1px 0.1px red'
    })),
    transition('default <=> hovered', animate(800))
])