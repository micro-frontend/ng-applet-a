import { Component, OnInit } from '@angular/core';
import { isUndefined } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-applet-a';

  constructor() {
  }

  ngOnInit(): void {
    if (!isUndefined(window)) {
      window.addEventListener('message', (msg: MessageEvent) => {
        const data = msg.data as { channel: string, message: string };
        if (data.channel === 'mf-master') {
          msg.source.postMessage({ channel: 'mf-slave', message: 'Hi' }, '*');
          alert(`${data.message} @ ng-applet-a`);
        }
      });
    }
  }
}
