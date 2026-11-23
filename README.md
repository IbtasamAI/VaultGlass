
# 🔐 VaultGlass — Private Password Manager

<p align="center">
  <strong>A private, browser-based password manager with a beautiful glass interface.</strong>
  <br/>
  <em>Developed by Ibtasam</em>
</p>

---

## ✨ About VaultGlass

VaultGlass is a private password manager that runs entirely in your browser. There is no account and no server. Your vault is encrypted on your own device.

## 🚀 Features

- 🔒 Encrypted local password vault
- 🔑 Master password and recovery key
- 🌐 Automatic website logo detection
- 👤 Username, password and phone storage
- 📱 OTP / TOTP authentication codes
- 📝 Credential remarks and custom categories
- 🎨 Multiple themes and glassmorphism interface
- 🃏 Grid, Deck and List viewing modes
- ✨ Animated card transitions and 3D effects
- 🔍 Search, filters and favourites
- 🛡️ Password security audit
- 🎲 Built-in password generator
- 📥 Import and export credentials
- 📦 Encrypted vault backups
- 📲 Mobile-friendly interface
- 🔐 Optional biometric unlock on supported devices

---

# 📖 User Guide

## 1. Getting Started

1. Open the app. Turn the vault wheel (or press **Skip**) to open the door.
2. Create a **master password** (8+ characters; a long passphrase is best) and confirm it.
3. **Save your recovery key** when it appears. It is the only way back in if you forget the master password.
4. A short tour starts the first time you unlock. Replay it any time from **? → Take the quick tour**.

## 2. Add a Credential

Tap **New**, then fill in what you need (everything except a name is optional):

- **Name / Link** — the site logo is fetched automatically from the link.
- **Username, phone, password, remarks.**
- **Generate** creates a strong password.
- **OTP** — paste the *secret key* shown under the QR code ("can't scan?"). VaultGlass then shows the 6-digit code, refreshed every 30 seconds.
- **Category** — choose one or create your own (**Manage**).

Tap any card to view, edit or delete it. **User** and **Password** buttons copy instantly.

## 3. Find Your Credentials

- Search by name, username, link, remarks, phone or category. Press `/` to jump to search.
- Use the **Categories** row and **Filter** chips (Favorites, With OTP, Weak, Reused).
- **Sort** by recently updated or A–Z.
- **Clear filters** resets everything.

## 4. Layouts: Grid · Deck · List

Use the switch next to **Sort**. Cards shuffle into a stack and deal out into the new layout.

- **Grid** — cards side by side.
- **Deck** — a fanned hand of playing cards. Swipe, use ‹ ›, or press `←` `→`; tap the front card to open it.
- **List** — compact rows that flip in one at a time.

## 5. Side Menu (☰) Tools

- **Vault Filters** — All, Favorites, Flagged Audit and your categories with counts.
- **Security Audit** — health score plus weak, reused, no-2FA and old (180+ days) passwords, with *Fix now*.
- **Password Generator** — length and character options; copy, or use in a new credential.
- **Import / Export**
- **Recovery Credentials**
- **Phone Autofill & Biometrics**
- **Help & Guide**

## 6. Backups

Your vault lives in this browser only. **Clearing browser data erases it.**

- **Export encrypted** is the safe backup (needs your master password to restore).
- **Plain JSON / CSV** contain readable passwords — delete them after use.
- **Import** accepts JSON or CSV (including exports from other password managers with similar columns).
- To move to another device: export encrypted on the first, import on the second.

## 7. Install on Your Phone & Fingerprint

- **Android (Chrome):** menu → *Install app*.
- **iPhone (Safari):** Share → *Add to Home Screen*.
- Open **☰ → Phone Autofill & Biometrics → Enable fingerprint unlock** (fingerprint, face, or phone PIN/pattern). Requires HTTPS and a screen lock set on the phone.
- The **🔐 Fill** button on each credential checks your fingerprint, then lets you open the site and copy the username, password or OTP. The password is cleared from the clipboard after 30 seconds.
- **Limitation:** a web app cannot see or auto-fill into other apps. System-wide autofill needs a native app or browser extension.
- Fingerprint unlock stores your master password encrypted with a key held in the phone's browser, so it is only as safe as the phone itself.

## 8. Forgot Your Master Password?

Login screen → **Forgot master password?** → enter your **recovery key** → set a new master password.

There is no email reset, because nothing is stored on a server. Without the recovery key the only option is to erase the vault and restore from a backup.

## 9. Security Notes

- AES-256-GCM encryption.
- Key derived with PBKDF2 (SHA-256, 250,000 rounds).
- Auto-locks after 5 minutes of inactivity.
- **Lock now** is in the ⋮ menu.
- Use a master password you do not use anywhere else.
- Site logos are requested from public icon services using only the website address.

## 10. Keyboard Shortcuts

| Shortcut | Action |
|---|---|
| `/` | Search |
| `Esc` | Close dialogs / tour |
| `←` `→` | Flip deck cards |

## 11. FAQ

**Is my data uploaded?**

No. Your vault is stored locally in your browser.

**Can I use VaultGlass on two devices?**

Yes. Use encrypted export/import to transfer your vault.

**Why is a website logo showing as a coloured letter?**

The site has no public icon; the letter tile is the fallback.

**Why is the fingerprint option missing?**

Open the app over HTTPS and make sure your phone has a screen lock.

---

## ⚠️ Important

- Keep your recovery key somewhere safe.
- Export encrypted backups regularly.
- Never share your master password.
- Avoid keeping unencrypted JSON or CSV backups.

---

<p align="center">
  <strong>VaultGlass</strong>
  <br/>
  Privacy. Security. Simplicity.
  <br/><br/>
  <strong>Developed by Ibtasam</strong>
</p>
