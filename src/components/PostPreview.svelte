<script>
    import { formatDate } from '../lib/formatting.js'

    export let title

    export let topics

    export let publishedAt

    export let author

    export let description

    export let slug

    export let image

    const ree = 'ree'
    ree.toLowerCase()

    console.log('reeeeee')
    console.log(topics)
    console.log(image)

    function convertToSlug(text) {
        return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
    }
</script>

<div class="card bordered shadow-2xl mb-20">
    <div class="flex space-x-2 flex-wrap article">
        {#each topics as topic}
            <div class="badge mx-2 my-2 cursor-default" style="background-color: #f7f7e6; color: black;">{topic}</div>
        {/each}
    </div>
    <figure class="flex">
        <img src={image.replace('/public', '')} alt="blog post" class="w-full h-full" />
    </figure>
    <div class="card-body">
        <div class="flex space-x-1 article text-xs">
            <span>Posted on</span>
            <span>{formatDate(publishedAt)}</span>
            <span>by</span>
            <span>{author}</span>
        </div>
        <h2 class="card-title title my-2 text-xl">{title}</h2>
        <p class="flex card-body">{description}</p>
        <div class="card-actions">
            <a href={`/posts/${convertToSlug(title + '-' + description)}`} style="color: #625F54; border-color: #625F54;" class="border-b-2">Read Post</a>
        </div>
    </div>
</div>