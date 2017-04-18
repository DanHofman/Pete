import { trigger, state, animate, transition, style } from '@angular/animations';

export const hoveringAnimationTrigger = trigger("Hovering", [
    state("default", style({
        color: 'white',
        'box-shadow': '2px 2px 1.5px rgba(0,0,0,0.5)'
    })),
    state("hovered", style({
        color: 'red',
        'box-shadow': '1px 15px 10px red'
    })),
    transition('default <=> hovered', animate(500))
])

export const hoveringLettersTrigger = trigger("WordsHover", [
    state('default', style({
        'text-decoration': 'none',
        'font-weight': 'bold',
        color: 'DARKORANGE',
        'list-style': 'none',
    })),
    state('hovered', style({
        'text-decoration': 'none',
        'font-size': '15px',
        'font-weight': 'bold',
        color: 'red',
        'list-style': 'none',
    })),
    transition('default <=> hovered', animate(1000))
])