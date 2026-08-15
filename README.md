# VerityAI landing page

Premium static landing page for VerityAI.

## Production URLs

- Landing page: `https://saasai.veritypack.cloud/`
- Create account: `https://saasai.veritypack.cloud/verityai/signup`
- Sign in: `https://saasai.veritypack.cloud/verityai/signin`

## Deployment

Upload the tracked files to the document root for `saasai.veritypack.cloud`.
The Apache configuration redirects obsolete template routes to the canonical
home page and enforces HTTPS.

After deployment, submit `https://saasai.veritypack.cloud/sitemap.xml` in
Google Search Console and request indexing for the canonical home page.
