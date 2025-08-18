/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "after6ix-site",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
      providers: {
        aws: {
          region: "us-east-1",
        },
        cloudflare: {
          // Cloudflare account ID will be required when deploying to Cloudflare
          // Set via environment variable: CLOUDFLARE_API_TOKEN
        },
      },
    };
  },
  async run() {
    // Simple static site deployment for now
    // We'll add more resources as needed

    // Example: Deploy a static site (will be configured later with actual build)
    const site = new sst.aws.StaticSite("Site", {
      path: "dist",
      domain: {
        // Domain configuration will be added when ready
        // name: "after6ix.dev",
        // dns: sst.cloudflare.dns(),
      },
      environment: {
        VITE_APP_NAME: "After6ix",
        VITE_STAGE: $app.stage,
      },
    });

    return {
      url: site.url,
    };
  },
});