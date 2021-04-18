import { animate, query, sequence, stagger, style, transition, trigger } from "@angular/animations";

export const listItemAnimation = trigger('listItemAnimation', [
    transition('* => *', [
        sequence([
            query(':leave', [
                animate('10ms ease-out', style({ opacity: 0 }))
            ], { optional: true }),
            query(':enter', [
                style({ opacity: 0, 'border-style': 'none !important' }),
                stagger('300ms', animate('300ms ease-in'))
            ], { optional: true }),
        ])
    ])
])

export const showAndHide = trigger('showAndHide', [
    transition(':leave', [
        animate('0ms ease-out', style({ opacity: 0 }))
    ]),
    transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in', style({ opacity: 1 }))
    ]),
])