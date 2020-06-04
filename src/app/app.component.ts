import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';

import { environment } from '@env/environment';
import { Logger, untilDestroyed } from '@core';

const log = new Logger('App');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) {}

  ngOnInit() {
    if (environment.production) {
      Logger.enableProductionMode();
    }

    log.debug('init');

    const onNavigationEnd = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    );
  }
}
