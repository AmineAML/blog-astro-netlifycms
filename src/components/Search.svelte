<script>
    // const search = () => {};

    export let searchByValue = '';
</script>

<div class="form-control py-3 mx-auto w-full article">
    <div class="relative">
        <input
            type="text"
            placeholder="Search posts"
            class="w-full pr-16 input input-bordered"
            bind:value={searchByValue}
        />
        <!-- <button class="absolute top-0 right-0 rounded-l-none btn" on:click={search}>go</button> -->
    </div>
</div>