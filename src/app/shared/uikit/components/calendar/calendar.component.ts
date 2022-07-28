import { Component, LOCALE_ID, OnInit } from '@angular/core';
import {
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
  MomentDateAdapter,
} from '@angular/material-moment-adapter';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import {
    DateRange,
  DefaultMatCalendarRangeStrategy,
  MAT_DATE_RANGE_SELECTION_STRATEGY,
} from '@angular/material/datepicker';
import { MatFormField } from '@angular/material/form-field';
import * as moment from 'moment';
import localeIt from '@angular/common/locales/it';

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    {
      provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
      useClass: DefaultMatCalendarRangeStrategy,
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
    {provide: LOCALE_ID, useValue: localeIt}
  ],
})
export class CalendarComponent implements OnInit {
  selected: Date | null | undefined;
  minDate: any = moment();
  selectedDateRange: any | undefined;
 

  constructor(private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('it');
  }

  ngOnInit(): void {
    // console.log(this.minDate._d);
   
  }

  _onSelectedChange(date: Date): void {
    
    if (
      this.selectedDateRange &&
      this.selectedDateRange.start &&
      date > this.selectedDateRange.start &&
      !this.selectedDateRange.end
    ) {
      this.selectedDateRange = new DateRange(
        this.selectedDateRange.start,
        date
        );
        console.log('data inizio ' + this.selectedDateRange.start.format('LLLL'))
        console.log('data fine ' + this.selectedDateRange.end.format('LLLL'))

    } else {
      this.selectedDateRange = new DateRange(date, null);
    }
  }
}
