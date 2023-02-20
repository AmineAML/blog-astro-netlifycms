import rss from '@astrojs/rss';

function convertToSlug(text) {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
}

export async function get(context) {
    const posts = Object.values(import.meta.glob('./posts/*.md', { eager: true }))
                    .filter((post) => post.frontmatter.title != "HIDE_DEFAULT_ARTICLE")
                    .map((post) => post.frontmatter)
                    .sort((a, b) => (new Date(b.date)) - (new Date(a.date)));

    return rss({
        title: "EchoSpaceDev Blog",
        description: "I'm reigniting a passion I had stopped doing since many years and one that I've really enjoyed. As a Software Developer, learning is part of the job, while we might retain that knowledge by heart, engineers are problem solvers that understand their craft. Thus as a good practice is blogging and writing documentation about what we've learned which is not just an act of sharing and helping others, actually it's highly recommended we do so as many of us got stuck later on the simelar issues and had to research again resulting in wasted time that could be spent updating what we've already done before and thus becoming effecient with our work",
        // Pull in your project "site" from the endpoint context
        // https://docs.astro.build/en/reference/api-reference/#contextsite
        site: context.site,
        items: posts.map((post) => ({
                // Assumes all RSS feed item properties are in post frontmatter
                title: post.title,
                pubDate: post.date,
                description: post.description,
                // Generate a `url` from each post `slug`
                // This assumes all blog posts are rendered as `/blog/[slug]` routes
                // https://docs.astro.build/en/guides/content-collections/#generating-pages-from-content-collections
                link: `/posts/${convertToSlug(post.title + '-' + post.description)}`,
            })),
    });
}