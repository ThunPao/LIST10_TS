<script lang="ts">
    export let title: String;
    import type { Book } from "@Models/mymodels";

    let books: Book[] = [{ id: 1, title: "Holy Bible", author: "Jesus" }];
</script>

<div class="flex flex-col items-center text-center space-y-4">
    <h1 class="block mt-4 font-bold text-2xl text-red-500">{title}</h1>
</div>
<div class="container mx-auto text-center">
    <div class="font-bold text-2xl text-blue-500">List of Books</div>
    {#each books as data}
        {data.title} -
        {data.author}
    {/each}
</div>
