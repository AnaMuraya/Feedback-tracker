<script>
    import FeedbackItem from './FeedbackItem.svelte'
    export let feedbackList = [];
</script>
<!-- looping through the feedback list array -->
{#each feedbackList as feedbackItem (feedbackItem.id)}
    <FeedbackItem {feedbackItem} on:deleteItem/>
    <!-- <h3>{feedbackItem.rating}: {feedbackItem.id}: {feedbackItem.message}</h3> -->
{/each}
