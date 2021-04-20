import { animate, keyframes, query, stagger, state, style, transition, trigger } from "@angular/animations";

export const btnAnimation = trigger('btnAnimation', [
    transition('* => *', [
        animate('0.6s', keyframes([
            style({ opacity: 0, offset: 0 }),
            style({ opacity: 0.5, offset: 0.5 }),
            style({ opacity: 1, offset: 1 }),
        ]))
    ])
])

export const listAnimation = trigger('listAnimation', [
    transition('* => *', [
        query(':enter', [
            style({ opacity: 0, width: 0 }),
            stagger(300, animate('300ms ease-out', style({ opacity: 1, width: '*' })))
        ], { optional: true }),
        query(':leave', [
            animate('300ms ease-in', style({ opacity: 0, height: 0 }))
        ], { optional: true }),
    ])
])

export const openCloseAnimation = trigger('openClose', [
    state('open', style({
        height: '200px',
        backgroundColor: 'blue',
        color: 'white',
        opacity: 1
    })),
    state('close', style({
        height: '0px',
        backgroundColor: 'yellow',
        opacity: 0
    })),
    transition('open => close', [
        animate('0.5s')
    ]),
    transition('close => open', [
        animate('0.5s')
    ])
])