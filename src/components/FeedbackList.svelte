<script>
    import { fade, scale } from 'svelte/transition'
    import FeedbackItem from './FeedbackItem.svelte'
    export let feedbackList = [];
</script>
<!-- looping through the feedback list array -->
{#each feedbackList as feedbackItem (feedbackItem.id)}
    <div in:scale out:fade="{{ duration:500 }}">
        <FeedbackItem {feedbackItem} on:deleteItem/>
    </div>
{/each}
