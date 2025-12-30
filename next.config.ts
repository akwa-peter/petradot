/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // If deploying to a custom domain, leave basePath empty
  // If deploying to username.github.io/repository-name, use the repository name
  basePath: process.env.NODE_ENV === "production" ? "/petradot" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/petradot/" : "",

  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,

  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,

  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
};

module.exports = nextConfig;
