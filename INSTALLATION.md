# VaultGlass — Installation & GitHub Publishing Guide

This guide explains how to upload VaultGlass to GitHub, host it on GitHub Pages, install it on mobile devices and use the vault safely.

## 1. Check the files

Upload **all** of the following files/folders together, keeping their relative paths unchanged:

```text
index.html
manifest.webmanifest
service-worker.js
icons/icon-192.png
icons/icon-512.png
icons/apple-touch-icon.png
README.md
INSTALLATION.md
INSTALL.txt
```

Do not upload any private vault export, master password, recovery key or test credentials.

## 2. Create the GitHub repository

1. Sign in to [GitHub](https://github.com).
2. Select **New repository** and enter a name, for example `vaultglass`.
3. Choose your desired repository visibility. **GitHub Pages may still make the deployed website publicly accessible**; do not rely on repository visibility as password protection for a website.
4. Create the repository.
5. Select **Add file → Upload files**, and upload the **contents** of the VaultGlass project directory—not the ZIP itself and not an extra nested `VaultGlass-Mobile-App` folder.
6. Commit the changes to the default branch (usually `main`).

Alternatively, use Git from a terminal inside the project directory:

```bash
git init
git add index.html manifest.webmanifest service-worker.js icons README.md INSTALLATION.md INSTALL.txt
git commit -m "Initial VaultGlass PWA release"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Replace placeholders with your own repository address. The remote repository must already exist; authentication may be required.

## 3. Publish via GitHub Pages

1. In the repository, open **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select branch `main` and folder `/(root)`, then **Save**.
4. Once deployment completes, open the site URL shown in the Pages settings. For a normal project repository, the URL is commonly:

   `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`

5. Confirm that the main app opens and `manifest.webmanifest`, `service-worker.js` and icon files load without 404 errors.

GitHub Pages uses HTTPS for its standard `github.io` sites, which is suitable for PWA features. For a custom domain, set up HTTPS and verify that paths still resolve correctly.

## 4. Create the vault

1. Open the deployed web address.
2. Follow the interactive vault-door introduction.
3. Create a **strong, unique master password** and follow the recovery setup instructions.
4. Store the recovery information **outside the vault** in a safe place.
5. Add a test credential first and verify you can unlock it after refreshing.

The app stores its vault in the local browser profile. It does **not** automatically sync across your phone, laptop and desktop.

## 5. Install on Android

1. Open the **HTTPS** deployment in **Chrome** on Android.
2. Open the browser's menu and select **Install app** or **Add to Home screen** (the wording and availability vary).
3. Confirm the prompt and launch VaultGlass from your home screen.
4. Test Deck mode: swipe **left** for the next card and **right** for the previous card.

## 6. Install on iPhone or iPad

1. Open the **HTTPS** deployment in **Safari**.
2. Tap **Share → Add to Home Screen**.
3. Confirm the name and tap **Add**.
4. Open VaultGlass from the home screen and test swipe navigation in Deck mode.

An installed PWA is a home-screen web app, not an App Store app. iOS feature availability can vary by OS and Safari version.

## 7. Using the three display modes

- **Grid:** Credentials appear as responsive tiles with animated entrances.
- **Deck:** Credentials appear as overlapping, playing-card-style items with a shuffle animation. Use **← / →** on a desktop keyboard, the **Previous/Next** controls or horizontal swipes on your phone.
- **List:** Credentials appear as compact rows, falling into place one by one.

Switch modes with the Grid / Deck / List controls. The chosen view is remembered in the same browser profile.

## 8. Add credentials and organise categories

Open **New / Add Credential**, enter the account name, URL, username and password, and optionally add notes, phone number or a TOTP secret. Save the entry. Use **Manage** in the category toolbar to create/edit categories, select a category to filter, and use search or sorting to locate entries. Open **How to use VaultGlass** for the in-app guide.

## 9. Backup and device migration

**Before switching phones, changing site address or clearing browser data:**

1. In the current vault, open **Import / Export**.
2. Choose **Export encrypted** and set a strong export passphrase.
3. Save the encrypted `.json` backup securely outside the device you are replacing.
4. Open VaultGlass on the new device or origin, create the local vault if necessary, and import the backup by entering its passphrase.
5. Verify a few records before deleting the original vault or backup.

**Warning:** Plain JSON and CSV exports expose credentials in readable form. Never commit them to your GitHub repository or send them through insecure channels.

## 10. Updating VaultGlass

1. Back up your existing vault using encrypted export.
2. Upload updated application files to the same GitHub repository and branch.
3. Wait for GitHub Pages to deploy the new version.
4. Reload the site or installed PWA. If the app appears outdated, close and reopen it; clear the app's static cache only after confirming your backup.

**Do not indiscriminately clear browser site data:** it can erase the locally stored vault. If deploying to a different domain, subdomain or path context, verify data migration before using the new address.

## 11. Troubleshooting

| Issue | What to check |
| --- | --- |
| Website returns 404 | Pages enabled; correct branch/root selected; `index.html` at repository root; deployment completed. |
| Installation option missing | Use HTTPS and a compatible browser; check that manifest and icon files are accessible. iOS uses Safari's Share menu. |
| Deck gestures not responding | Select Deck mode; begin the gesture on the deck card area; use one finger and a horizontal swipe. |
| Keyboard arrows not working | Click outside text fields/dialogs, select Deck mode, then use ← / →. |
| Icons missing | Keep the `icons/` folder alongside `index.html`; check filenames and case. |
| Offline app does not fully render | Service worker caches the app shell, but some fonts/images/visual effects use external network resources. |
| Vault looks empty on another device | Data is local to each browser and website origin; import your encrypted backup. |
| App seems stuck on old version | Try a normal refresh/relaunch and check deployment status. Protect local vault data before clearing storage. |

## 12. Before public release — security checklist

- [ ] Independently audit vault cryptography, authentication, recovery, input handling and storage.
- [ ] Review all third-party fonts, favicon services and CDN scripts; consider self-hosting dependencies.
- [ ] Configure appropriate security headers and Content Security Policy where your host permits.
- [ ] Test all features in fresh browser profiles on desktop, iOS and Android.
- [ ] Test encrypted export/import and recovery with **test-only** credentials.
- [ ] Confirm that repository contents and screenshots contain no secrets.
- [ ] Add a licence if you intend to grant reuse rights.
- [ ] Document any security findings before recommending real-password use.

**Reminder:** A successful deployment or PWA installation is not evidence that the app has passed a security review.
