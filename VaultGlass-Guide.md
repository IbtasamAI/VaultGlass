# VaultGlass — User Guide & Publishing Instructions
*Developed by Ibtasam*

VaultGlass is a private password manager that runs entirely in your browser. There is no account and no server. Your vault is encrypted on your own device.

---

## Part 1 — How to use VaultGlass

### 1. Getting started
1. Open the app. Turn the vault wheel (or press **Skip**) to open the door.
2. Create a **master password** (8+ characters; a long passphrase is best) and confirm it.
3. **Save your recovery key** when it appears. It is the only way back in if you forget the master password.
4. A short tour starts the first time you unlock. Replay it any time from **? → Take the quick tour**.

### 2. Add a credential
Tap **New**, then fill in what you need (everything except a name is optional):
- **Name / Link** — the site logo is fetched automatically from the link.
- **Username, phone, password, remarks.**
- **Generate** creates a strong password.
- **OTP** — paste the *secret key* shown under the QR code ("can't scan?"). VaultGlass then shows the 6-digit code, refreshed every 30 s.
- **Category** — choose one or create your own (**Manage**).

Tap any card to view, edit or delete it. **User** and **Password** buttons copy instantly.

### 3. Find things
- Search by name, username, link, remarks, phone or category. Press `/` to jump to search.
- **Categories** row and **Filter** chips (Favorites, With OTP, Weak, Reused).
- **Sort** by recently updated or A–Z. **Clear filters** resets everything.

### 4. Layouts: Grid · Deck · List
Use the switch next to *Sort*. Cards shuffle into a stack and deal out into the new layout.
- **Grid** — cards side by side.
- **Deck** — a fanned hand of playing cards. Swipe, use ‹ ›, or press `←` `→`; tap the front card to open it.
- **List** — compact rows that flip in one at a time.

### 5. Side menu (☰) tools
- **Vault Filters** — All, Favorites, Flagged Audit and your categories with counts.
- **Security Audit** — health score plus weak, reused, no-2FA and old (180+ days) passwords, with *Fix now*.
- **Password Generator** — length and character options; copy, or use in a new credential.
- **Import / Export**, **Recovery Credentials**, **Phone Autofill & Biometrics**, **Help & Guide**.

### 6. Backups (important)
Your vault lives in this browser only. **Clearing browser data erases it.**
- **Export encrypted** is the safe backup (needs your master password to restore).
- **Plain JSON / CSV** contain readable passwords — delete them after use.
- **Import** accepts JSON or CSV (including exports from other password managers with similar columns).
- To move to another device: export encrypted on the first, import on the second.

### 7. Install on your phone & fingerprint
- **Android (Chrome):** menu → *Install app*. **iPhone (Safari):** Share → *Add to Home Screen*.
- Open **☰ → Phone Autofill & Biometrics → Enable fingerprint unlock** (fingerprint, face, or phone PIN/pattern). Requires HTTPS and a screen lock set on the phone.
- The **🔐 Fill** button on each credential checks your fingerprint, then lets you open the site and copy the username, password or OTP. The password is cleared from the clipboard after 30 s.
- **Limitation:** a web app cannot see or auto-fill into other apps. System-wide autofill needs a native app or browser extension.
- Fingerprint unlock stores your master password encrypted with a key held in the phone's browser, so it is only as safe as the phone itself.

### 8. Forgot your master password?
Login screen → **Forgot master password?** → enter your **recovery key** → set a new master password.
There is no email reset, because nothing is stored on a server. Without the recovery key the only option is to erase the vault and restore from a backup.

### 9. Security notes
- AES-256-GCM encryption; key derived with PBKDF2 (SHA-256, 250,000 rounds).
- Auto-locks after 5 minutes of inactivity; **Lock now** is in the ⋮ menu.
- Use a master password you do not use anywhere else.
- Site logos are requested from public icon services using only the website address.

### 10. Shortcuts
`/` search · `Esc` close dialogs / tour · `←` `→` flip deck cards

### 11. FAQ
- **Is my data uploaded?** No.
- **Two devices?** Use encrypted export/import.
- **Logo is a coloured letter?** The site has no public icon; the letter tile is the fallback.
- **Fingerprint option missing?** Open the app over HTTPS and make sure the phone has a screen lock.

---

## Part 2 — Publishing instructions

VaultGlass is a **single file** (`VaultGlass.html`). Any static host works. **Use HTTPS** — fingerprint unlock and "Install app" require it (all hosts below provide it for free).

### Option A — Netlify Drop (fastest, no account needed to try)
1. Rename `VaultGlass.html` to `index.html`.
2. Put it in an empty folder and drag the folder onto <https://app.netlify.com/drop>.
3. You get an `https://….netlify.app` link. Create a free account to keep it permanently and set a custom name.

### Option B — GitHub Pages
1. Create a GitHub repository and upload the file as `index.html`.
2. Repository **Settings → Pages → Deploy from a branch → main / root → Save**.
3. Your site appears at `https://<username>.github.io/<repo>/` after a minute.

### Option C — Cloudflare Pages / Vercel
Create a project, upload the folder containing `index.html` (no build command, output directory `/`).

### After publishing — checklist
- [ ] Open the link on a phone → **Install app / Add to Home Screen**.
- [ ] Enable fingerprint unlock and test unlock and **🔐 Fill**.
- [ ] Create a vault, save the recovery key, export one encrypted backup.
- [ ] Share the link and tell users: *each person's vault is private to their own browser, and they must make their own backups.*

### Good to know before sharing publicly
- Every visitor gets their **own empty vault** stored in their own browser; you never see their data.
- The app loads Three.js and Google-font/icon helpers from public CDNs, so it needs an internet connection the first time it opens. It does not work fully offline.
- If you change the web address later, users' vaults do **not** follow (browser storage is per address). Tell them to export before any move.
- Updates: re-upload the new file to the same host. Existing vaults keep working.

*Developed by Ibtasam · VaultGlass*


---

# What's new (v2)

## Settings (⋮ menu → Settings)
- **Auto-lock** time and **clipboard auto-clear** time (both used to be fixed at 5 min / 30 s).
- Text size, effects on/off, language (English / العربية with right-to-left layout), backup reminders.
- **Change master password**: asks for the current password; the vault is re-encrypted. Repeated wrong attempts at login add a growing waiting time.

## Entries
- **Types**: Login, Card, Wi-Fi, Secure note, ID.
- **Password history**: each change is kept inside the entry; copy or restore an old one.
- **Expiry dates**: the Security Audit warns before something expires.
- **Scan OTP QR**: read an authenticator QR with the camera or from an image (camera needs HTTPS).

## Organising
- **Trash**: deleted items stay 30 days, then are purged. Restore any time.
- **Select mode**: bulk move / favourite / delete.
- **Duplicate finder**: review and merge or remove duplicates.

## Backup & moving data
- **Backup reminder bar** when the last backup is old; **Back up now** saves an encrypted file (you choose a passphrase).
- **Sync to your own file**: on Chrome/Edge desktop, link an encrypted file (e.g. in a cloud-synced folder). Other browsers fall back to download / load.
- **Import presets**: LastPass, Bitwarden, Chrome, 1Password exports.
- **Emergency sheet**: printable page with a fresh recovery key for someone you trust. Store it safely.

## Offline / installable app
Upload **`sw.js` in the same folder as `VaultGlass.html`** when you publish. Open the site once online over HTTPS; afterwards it loads without internet and can be installed to the home screen.

## Known limits
- Web apps cannot autofill other apps; use 🔐 Fill, then paste.
- Camera and fingerprint unlock require HTTPS and a device with a screen lock.
- Linked-file sync works only in Chrome/Edge desktop.
- In Arabic, the interface is translated but the long help text stays English.
- No breach (Have I Been Pwned) check was added.
- Tested in a headless browser; please try fingerprint, camera and offline on your own phone.
