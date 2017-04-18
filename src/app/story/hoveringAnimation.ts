import { trigger, state, animate, transition, style } from '@angular/animations';

export const hoveringAnimationTrigger = trigger("Hovering", [
    state("default", style({
        color: 'white'
    })),
    state("hovered", style({
        color: 'red',
        'box-shadow': '1px 15px 10px red'
    })),
    transition('default <=> hovered', animate(500))
])

export const hoveringLettersTrigger = trigger("WordsHover", [
    state('default', style({
        'font-weight': 'bold',
        color: 'DARKORANGE',
        'list-style': 'none',
        'margin-right': '15%'
    })),
    state('hovered', style({
        'font-size': '15px',
        'font-weight': 'bold',
        color: 'red',
        'list-style': 'none',
        'margin-right': '15%'
    })),
    transition('default <=> hovered', animate(1000))
])