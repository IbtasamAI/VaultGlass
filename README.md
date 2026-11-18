# VaultGlass 🔐

**VaultGlass** is a browser-based personal password vault with a glass-style interface, three animated credential views, category organisation, security utilities and installable Progressive Web App (PWA) support.

> **Security notice:** This project stores sensitive credentials. Its security has **not** been independently audited. Review and test the code before entering real passwords or deploying it for public use. Publishing the app source on GitHub does not publish users' locally stored credentials, but do not commit real vault exports, master passwords or recovery keys.

## Features

- **Encrypted local vault:** Uses the browser's Web Crypto API (PBKDF2-SHA-256 and AES-GCM) and local browser storage. No account server or cross-device synchronisation is included.
- **Three viewing modes:** Grid cards, an overlapping *playing-card Deck* with shuffle effects, and a compact List with staggered falling-row animations.
- **Deck controls:** Previous/Next buttons, **← / →** arrow keys on desktop and **swipe left/right** on touch devices.
- **Categories and search:** Custom category names, colours and icons; category filters, search, sorting and favorites.
- **Credential management:** Add, view, edit, delete and copy stored login details, including optional notes and one-time-password (TOTP) secrets.
- **Security tools:** Password generator, strength/reuse/2FA review, auto-lock after inactivity, recovery information and master-password changes.
- **Backup and import:** Encrypted JSON export; JSON and CSV import/export (plain exports are sensitive).
- **Customisation:** Multiple themes, responsive layout, in-app Help guide and reduced-motion support.
- **Installable PWA:** Web app manifest, home-screen icons and a service worker that caches only the app's static shell files.

## Preview

Add your own screenshots of the Grid, Deck and List screens here after testing the app. Do **not** include real usernames, passwords or one-time codes in public screenshots.

## Quick start

1. Download or clone this repository.
2. Keep `index.html`, `manifest.webmanifest`, `service-worker.js` and the `icons/` folder together.
3. Deploy them to an **HTTPS** website, such as GitHub Pages. See [INSTALLATION.md](INSTALLATION.md) for precise instructions.
4. Open the website and follow the on-screen vault setup. Store your master password and recovery key securely.
5. Add credentials and choose **Grid**, **Deck** or **List**. In Deck mode, use swipe gestures, arrow keys or the Previous/Next controls.

For local testing without a live domain, run a simple HTTP server from the project directory:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/`. Installation, service workers and some browser security features work only in supported secure contexts (such as HTTPS or localhost), not when opening `index.html` directly via `file://`.

## Publish with GitHub Pages

Create a GitHub repository, upload the contents of this folder **at the repository root**, then open **Settings → Pages** and choose **Deploy from a branch**, branch **main**, folder **/(root)**. Save, wait for deployment and open the URL shown in Pages settings.

For a project repository, the site is typically at `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`. GitHub Pages settings show the authoritative URL.

**Important:** GitHub Pages serves your app code publicly. Do not upload credential files, encrypted exports, recovery credentials or private data to the repository. This application is client-side: separate browsers, devices, or site origins do not automatically share the same vault.

## How to use

| Action | How |
| --- | --- |
| Create or unlock a vault | Follow the vault-door intro and enter your master password. |
| Add a login | Choose **New / Add Credential**, complete the form and save. |
| Organise categories | Use **Manage** in the category toolbar. |
| Find a login | Search, select a category/filter or change the sort order. |
| Browse Grid | Select **Grid** for responsive tiles. |
| Browse Deck | Select **Deck**, then use **← / →**, the controls or horizontal swipes. |
| Browse List | Select **List** for compact rows. |
| Copy a login | Use the **User** or **Password** button on a credential. |
| Back up the vault | Open **Import / Export → Export encrypted** and choose a strong backup passphrase. |
| Find more guidance | Open **How to use VaultGlass** inside the app. |

## Install as a mobile app

- **Android:** Open the deployed HTTPS site in Chrome and choose **Install app** or **Add to Home screen** from the browser menu (exact wording depends on device/browser).
- **iPhone/iPad:** Open the deployed HTTPS site in Safari, tap **Share** and select **Add to Home Screen**.

Installation makes VaultGlass launch in a standalone-style window where supported. It does **not** create a native Android APK or iOS App Store package. Some visual effects depend on network-hosted assets and may not be available when offline.

## Files

```text
.
├── index.html                # Application and interface
├── manifest.webmanifest      # PWA metadata
├── service-worker.js         # Static app-shell caching
├── icons/
│   ├── icon-192.png
│   ├── icon-512.png
│   └── apple-touch-icon.png
├── README.md                 # GitHub project overview
├── INSTALLATION.md           # Setup, deployment and troubleshooting
└── INSTALL.txt               # Short installation notes
```

## Security and privacy notes

- The application stores encrypted vault data in the browser's `localStorage`, tied to a specific website origin/browser profile. Clearing site data, changing device or changing domain can make the vault inaccessible without a backup.
- Use a strong, unique master password and safely preserve recovery information. Create regular **encrypted** backups and verify that you can restore them.
- **Plain CSV and JSON exports contain readable secrets.** Keep them out of GitHub, shared folders and untrusted cloud services.
- The app loads some third-party assets (including fonts, favicons and visual-effect code) over the network. Review these dependencies and your Content Security Policy before a production security deployment.
- The service worker caches static app files rather than vault credentials, but browser storage and device security remain important.
- No security audit, penetration test, multi-device sync or hosted backend is supplied by this package.

## Development

This is a static HTML/CSS/JavaScript project. Changes to the interface can be made in `index.html`; PWA details are in `manifest.webmanifest` and `service-worker.js`. Test on desktop, iOS Safari and Android Chrome before publishing a new release. Take an encrypted backup before testing changes with important data.

## License

**No licence is included with this package.** Repository owners should add a `LICENSE` file only after choosing the permissions under which they wish to distribute the source code. A public GitHub repository alone does not automatically grant an open-source licence.
