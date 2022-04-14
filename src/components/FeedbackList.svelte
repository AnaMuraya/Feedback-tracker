<script>
    import {FeedbackStore} from '../stores'
    import { fade, scale } from 'svelte/transition'
    import FeedbackItem from './FeedbackItem.svelte'
    
</script>
<!-- looping through the feedback list array -->
{#each $FeedbackStore as feedbackItem (feedbackItem.id)}
    <div in:scale out:fade="{{ duration:500 }}">
        <FeedbackItem {feedbackItem}/>
    </div>
{/each}
