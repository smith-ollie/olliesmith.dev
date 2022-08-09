export default {
  cms_manual_init: true,
  backend: {
    name: "github",
    repo: "electricdreammachine/tout-oublier",
    branch: "main",
  },
  media_folder: "public/img",
  public_folder: "img",
  collections: [
    {
      name: "pages",
      label: "Pages",
      files: [
        {
          label: "Site",
          name: "site",
          file: "content/site.md",
          fields: [
            {
              label: "Logo Wordmark",
              name: "logo_wordmark",
              widget: "markdown",
            },
          ],
        },
        {
          label: "Home",
          name: "home",
          file: "content/home.md",
          fields: [
            {
              label: "Hero Title",
              name: "hero_title",
              widget: "string",
            },
            {
              label: "Hero Subtitle",
              name: "hero_subtitle",
              widget: "markdown",
            },
          ],
        },
      ],
    },
  ],
};
