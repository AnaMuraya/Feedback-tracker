<script>
    // import { onMount, onDestroy } from 'svelte'
    import {FeedbackStore} from '../stores'
    import { fade, scale } from 'svelte/transition'
    import FeedbackItem from './FeedbackItem.svelte'
    // let feedbackList = [];

    // const unsubscribe = FeedbackStore.subscribe((data) => feedbackList = data)

    // onDestroy(()=>{
    //     unsubscribe()
    // })
</script>
<!-- looping through the feedback list array -->
{#each $FeedbackStore as feedbackItem (feedbackItem.id)}
    <div in:scale out:fade="{{ duration:500 }}">
        <!-- <FeedbackItem {feedbackItem} on:deleteItem/> -->
        <FeedbackItem {feedbackItem}/>
    </div>
{/each}
