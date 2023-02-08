import { Component, OnInit } from '@angular/core';
import { VaultService } from 'src/vault.service';
import { App } from '@capacitor/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';

  constructor(private vault: VaultService) {
  }

  ngOnInit() {
    App.addListener('appStateChange', ({ isActive }) => {
      if (!isActive) {
        setTimeout(async () => {
          const value = await this.vault.get('stuff');
          // This line should fail because the app is inactive for 5 seconds and should
          // have locked after 2 seconds
          console.log(`Oh No! Got value ${value} after being background for 5 seconds`)
        }, 5000);
      }
    });
  }



  setData() {
    this.vault.set('stuff', 'things');
  }

  getData() {
    this.vault.get('stuff');
  }

  lock() {
    this.vault.lock();
  }
}
