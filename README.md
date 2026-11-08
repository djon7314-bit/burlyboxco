# Burly Box Co. — Launch Guide

## What's in this folder

| File | What it is |
|---|---|
| `index.html` | The whole website |
| `products.js` | **Your product list.** The only file you edit to add, remove or change gifts |
| `wood.jpg` | The barn-wood texture |
| `.github/workflows/link-check.yml` | The weekly dead-link checker (runs on GitHub by itself) |
| `README.md` | This guide |

---

## Step 1 — Put the site on GitHub (about 10 minutes)

1. Go to github.com → **New repository**. Name it `burlyboxco`. Leave it Public (needed for free Actions minutes), don't add a README. Click **Create repository**.
2. On the empty repo page, click **uploading an existing file**.
3. Drag in **everything from this folder**, including the `.github` folder.
   - Tip: hidden folders starting with a dot don't always show on a Mac. In Finder press **Cmd + Shift + .** to show them, then drag the `.github` folder in with the rest.
4. Click **Commit changes**.
5. Check it worked: the repo should show `index.html`, `products.js`, `wood.jpg`, `README.md` and a `.github` folder.

## Step 2 — Connect it to Netlify (about 5 minutes)

1. Log in to Netlify → **Add new site** → **Import an existing project** → **GitHub**.
2. Pick the `burlyboxco` repo.
3. Build settings: leave **Build command empty** and set **Publish directory** to `/` (or leave blank). Click **Deploy**.
4. In a minute you'll get a temporary address like `something-random.netlify.app`. Open it and click around:
   - Banner slides change every few seconds
   - Category and "Shop by who he is" filters work
   - Every "Shop" button opens the right product
5. Rename the temporary address if you like: **Site configuration → Change site name** → `burlyboxco` (gives you `burlyboxco.netlify.app`).

## Step 3 — Turn on the box request form (about 5 minutes)

1. In the site's Netlify dashboard go to **Forms**. If you see **Enable form detection**, click it.
2. Go to **Deploys → Trigger deploy → Deploy site** so Netlify finds the form.
3. **Forms → box-request** should now appear.
4. Get emailed for every request: **Site configuration → Notifications → Emails and webhooks → Form submission notifications → Add notification → Email**, choose the `box-request` form, enter your email.
5. Test it: submit a request on the live site with your own email. It should show up under Forms and in your inbox.
   - Check your spam folder the first time.

## Step 3½ — Set up Shopify checkout for the boxes (about 30 minutes)

How a box order works: the customer fills out the questionnaire → the answers go to your inbox through Netlify → the page sends them to Shopify to pay → Shopify emails you the paid order. Match the two by the customer's name and email, then build the box.

1. Sign up for Shopify and pick the **Starter** plan (about $5/month; it includes checkout links for an existing website). Check Shopify's pricing page for current fees.
2. **Products → Add product**, three times:
   - The Stocker, $75
   - The Foreman, $135
   - The Full Haul, $200
   - Add a photo (or the Burly Box logo). Turn off "Track quantity" since you build to order.
3. **Shipping:** Settings → Shipping and delivery. Set your flat rates. To charge a different flat rate per box size, give each product its own shipping profile.
4. **Policies:** Settings → Policies → add a refund policy. Custom boxes usually can't be returned once built; say so plainly.
5. **Get each checkout link:** open each product → look for **Create checkout link** (or "Share" → "Checkout link"). Copy all three.
6. Open `index.html` on GitHub (pencil icon), search for `const BOXES`, and paste each link between the quotes after `checkout:` for that box. If you settle on flat shipping prices, put them after `ship:` (for example `ship:"12.95"`) so the cards show them.
7. Commit. The form button now says **Continue to payment** and sends customers to Shopify after their answers are saved.
8. Test with a real order on the cheapest box, then refund yourself in Shopify.

Until the links are pasted in, the form still works: it sends you the request, and you email the customer a payment link.

## Step 4 — Connect your domain (10 minutes of work, then waiting)

This is the part that took a while with Aeilus. The waiting is normal.

1. Netlify → **Domain management → Add a domain** → type your domain → **Verify** → **Add domain**.
2. Pick **one** of these:
   - **Option A — Let Netlify run the DNS (easiest, same as aeilus.com):** Netlify shows you 4 nameservers (like `dns1.p01.nsone.net`). Log in where you bought the domain, find **Nameservers**, switch to "custom," paste all 4, save.
   - **Option B — Keep DNS where you bought it:** add two records at your registrar:
     - `A` record, host `@`, value `75.2.60.5`
     - `CNAME` record, host `www`, value `burlyboxco.netlify.app` (your Netlify address)
     - Delete any old `A` or `CNAME` records for `@` or `www` that point to a "parked" page.
3. **Wait.** It usually works within a few hours, but can take up to 48. Nothing is broken during this time.
   - Check progress at dnschecker.org (type your domain).
4. Once the domain works, Netlify turns on **HTTPS** by itself (Domain management → HTTPS). If it says "waiting on DNS," give it more time. You can click **Verify DNS configuration** to nudge it.

## Step 5 — Affiliate housekeeping (15 minutes)

1. **Amazon Associates → add the site.** Associates Central → your name (top right) → **Account Settings → Edit Your Website and Mobile App List** → add your Burly Box domain. Amazon requires every site using your links to be listed.
2. **Amazon → make a Burly Box tracking ID.** Associates Central → **Tools → Tracking ID Manager → Add Tracking ID** → something like `burlybox-20`. Then, when you copy links in the Amazon app, pick that ID instead of `aeilus26-20` so you can see which site earned each sale.
   - The current Amazon links in `products.js` use your Aeilus ID. They still pay you. You can swap them for Burly Box links whenever you want.
3. **ShopMy:** if ShopMy asks which sites you post on, add the Burly Box domain there too.
4. **Fix the Stanley bottle link.** It lands on Stanley's home page instead of the product. In ShopMy, set its Destination Link to the exact product page, then paste the new link into `products.js`.

## Step 6 — The weekly link checker

- Runs every Monday automatically. Nothing to set up.
- To run it now: GitHub repo → **Actions** tab → **Weekly link check** → **Run workflow**.
  - If Actions asks you to enable workflows, click the green button to allow it.
- When it finds a dead link, it opens an **Issue** in the repo called "Broken product links found" listing them. GitHub emails you about new issues.
- What it can't catch: products that are "sold out" but whose page still loads, or links that redirect to a store's home page. Spot-check your top sellers now and then.

---

## Everyday editing

**Add a product:** open `products.js` on GitHub → click the pencil icon → copy an existing product block, paste it, change the details → **Commit changes**. The live site updates in about a minute.

**Remove a product:** delete its block (from `{name:` through `},`) → Commit.

**Change the banner's featured product:** change `FEATURED` at the top of `products.js` to the exact product name.

**A sale ended:** remove the `badge:"Sale"` (or similar) from that product.

**A link died:** paste the `backup` link into `url`, or replace both.

**Add a photo of a finished Burly Box:** upload `box.jpg` to the repo, then in `index.html` find the comment that starts with "Slide 1: Burly Box" and follow the instructions there.

---

## Later (not needed to launch)

- **Full Shopify site** — if box orders take off, moving the whole site to Shopify (Basic plan) puts the questionnaire answers on the paid order and adds discount codes and abandoned-cart emails. Good time to decide: spring, before Father's Day.
- **Branded items / premium box** — add them as Shopify products and use checkout links the same way as the boxes.
- **Kohl's affiliate** — apply once the site is live, then add the FLX shirts as Founder's picks.
- **Box prices** — $75 / $135 / $200, set in `index.html` (search for `const BOXES`).
- **Privacy page** — the order form collects names and emails, so a short privacy policy is a good idea before you advertise.
