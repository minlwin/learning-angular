import { animate, group, query, style, transition, trigger } from "@angular/animations";

export const routeAnimation = trigger('routeAnimation', [

    transition('* => *', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ], { optional: true }),
        query(':enter', [
            style({ left: '-100%', opacity: 0 })
        ], { optional: true }),
        group([
            query(':leave', [
                animate('500ms ease-out', style({ left: '100%', opacity: 0 }))
            ], { optional: true }),
            query(':enter', [
                animate('500ms ease-in', style({ left: '0px', opacity: 1 }))
            ], { optional: true }),
        ])
    ])
])