# Regular Angular App with Identity Vault
This is a sample Angular app without the Ionic Framework that uses Identity Vault.

There are 3 buttons:
- `Set Data` - Stores some data in the vault
- `Lock` - Locks the vault
- `Get Data` - Gets some data from the vault (it will cause an unlock if the vault is locked)

The app also locks the vault 2 seconds after being in the background.git branch -M main

## Install
- `npm install`
- `npx ng build`
- `npx cap sync`
- `npx cap run ios`