import { Component } from '@angular/core';
import { VaultService } from 'src/vault.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  constructor(private vault: VaultService) {

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
