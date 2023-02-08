import { Injectable } from "@angular/core";
import { BrowserVault, DeviceSecurityType, IdentityVaultConfig, Vault, VaultType } from "@ionic-enterprise/identity-vault"
import { Capacitor } from '@capacitor/core';

@Injectable({
    providedIn: 'root'
})
export class VaultService {
    config: IdentityVaultConfig = {
        key: 'io.ionic.test',
        type: VaultType.DeviceSecurity,
        deviceSecurityType: DeviceSecurityType.Biometrics,
        lockAfterBackgrounded: 2000,
        shouldClearVaultAfterTooManyFailedAttempts: true,
        unlockVaultOnLoad: false,
    };
    vault: Vault | BrowserVault;

    constructor() {
        this.vault = Capacitor.getPlatform() === 'web' ? new BrowserVault(this.config) : new Vault(this.config);
        this.vault.onLock(() => {
            console.log('Vault was locked');
          });
          this.vault.onUnlock(() => {
            console.log('Vault was unlocked');
          });
          this.vault.onError((err) => {
            console.error('Vault error', err);            
          });
    }

    public async set(key: string, value: string) {
        await this.vault.setValue(key, value);
    }

    public async get(key: string): Promise<string | null> {
        return await this.vault.getValue<string>(key);
    }

    public async lock() {
        await this.vault.lock();
    }


}