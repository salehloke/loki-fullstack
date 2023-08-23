import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'loki-fullstack-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  private breakpointObserver = inject(BreakpointObserver);

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          // {
          //   title: 'Stepper Form',
          //   link: `/stepper-registration-form`,
          //   buttonLabel: 'Go to Stepper Form',
          //   cols: 1,
          //   rows: 1,
          // },
          {
            title: 'Cookbooks',
            link: `/cookbooks`,
            buttonLabel: 'Go to Stepper Form',
            cols: 1,
            rows: 1,
          },
          {
            title: 'Number Form',
            link: `/number-form`,
            buttonLabel: 'Go to Number Form',
            cols: 1,
            rows: 1,
          },
          {
            title: 'User List',
            link: `/user-list`,
            buttonLabel: 'Go to User list',
            cols: 1,
            rows: 1,
          },
        ];
      }

      return [
        // {
        //   title: 'Stepper Form',
        //   link: `/stepper-registration-form`,
        //   buttonLabel: 'Sign Me Up! »',
        //   cols: 2,
        //   rows: 1,
        // },
        {
          title: 'Cookbooks',
          link: `/cookbooks`,
          buttonLabel: 'Go to Stepper Form',
          cols: 2,
          rows: 1,
        },
      ];
    })
  );
}
