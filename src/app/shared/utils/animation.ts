import {
  animate,
  animateChild,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
  // Animazioni al ritorno

  transition('linkPage => bachecaPage', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        overflow: 'hidden',
      }),
    ]),
    query(':enter', [style({ left: '-200%' })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('300ms ease-in-out', style({ left: '150%' }))]),
      query(':enter', [animate('300ms ease-in-out', style({ left: '0%' }))]),
    ]),
  ]),

  transition('convenzioniPage => linkPage', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        overflow: 'hidden',

      }),
    ]),
    query(':enter', [style({ left: '-200%' })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('300ms ease-in-out', style({ left: '150%' }))]),
      query(':enter', [animate('300ms ease-in-out', style({ left: '0%' }))]),
    ]),
  ]),

  transition('convenzioniPage => bachecaPage', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        overflow: 'hidden',

      }),
    ]),
    query(':enter', [style({ left: '-200%' })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('300ms ease-in-out', style({ left: '150%' }))]),
      query(':enter', [animate('300ms ease-in-out', style({ left: '0%' }))]),
    ]),
  ]),

  transition('aggiungiPage => *', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        overflow: 'hidden',

      }),
    ]),
    query(':enter', [style({ left: '-200%' })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('300ms ease-in-out', style({ left: '150%' }))]),
      query(':enter', [animate('300ms ease-in-out', style({ left: '0%' }))]),
    ]),
  ]),

// Animazioni all'entrata

transition('* => aggiungiPage', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        overflow: 'hidden',

      }),
    ]),
    query(':enter', [style({ left: '200%' })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('300ms ease-in-out', style({ left: '-150%' }))]),
      query(':enter', [animate('300ms ease-in-out', style({ left: '0%' }))]),
    ]),
  ]),

transition('bachecaPage => linkPage', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        overflow: 'hidden',

      }),
    ]),
    query(':enter', [style({ left: '200%' })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('300ms ease-in-out', style({ left: '-150%' }))]),
      query(':enter', [animate('300ms ease-in-out', style({ left: '0%' }))]),
    ]),
  ]),

  transition('linkPage => convenzioniPage', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        overflow: 'hidden',

      }),
    ]),
    query(':enter', [style({ left: '200%' })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('300ms ease-in-out', style({ left: '-150%' }))]),
      query(':enter', [animate('300ms ease-in-out', style({ left: '0%' }))]),
    ]),
  ]),

  transition('bachecaPage => convenzioniPage', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        overflow: 'hidden',

      }),
    ]),
    query(':enter', [style({ left: '200%' })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('300ms ease-in-out', style({ left: '-150%' }))]),
      query(':enter', [animate('300ms ease-in-out', style({ left: '0%' }))]),
    ]),
  ]),


]);
