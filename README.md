# Alt-FIFA Rankings — Setup

## 1. Deploy to GitHub Pages
1. Create a repo (or use your existing one).
2. Add `index.html` to the root (or `/docs` if that's how your Pages is configured).
3. Commit and push.
4. In repo Settings → Pages, set the source branch/folder, save.
5. Your site is live at `https://<username>.github.io/<repo>/`.

## 2. Set your admin password
Open `index.html`, find this line near the top of the `<script>` block:

```js
const ADMIN_KEY = "changeme123";
```

Change `"changeme123"` to whatever you want your admin key to be, then commit.

**Important:** this is a *soft* lock only — anyone who views the page source can read the key. It keeps casual visitors from poking at Admin, but don't reuse a real password and don't rely on it for anything sensitive.

## 3. How data is stored
This site uses the built-in `window.storage` API (shared/public mode), so once you publish results from the Admin tab, **everyone who visits the page sees the same leaderboard** — no server or database setup needed. Data persists across sessions automatically.

## 4. Using the Admin page
Go to the **Admin** tab, enter your key, and type one line per team that played at least one match this update cycle:
