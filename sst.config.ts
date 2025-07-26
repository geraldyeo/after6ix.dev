export default $config({
  app(input) {
    return {
      name: "after6ix",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "cloudflare",
      providers: { cloudflare: "6.4.1" },
    };
  },
  async run() {
    // const storage = await import("./infra/storage");
    // await import("./infra/api");
    return {
      //   MyBucket: storage.bucket.name,
    };
  },
});
