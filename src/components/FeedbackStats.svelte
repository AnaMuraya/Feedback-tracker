<script>
    import {FeedbackStore} from '../stores'
    
    $: count = $FeedbackStore.length
	$: average = $FeedbackStore.reduce((a, {rating}) => a + rating , 0) / count

</script>

<div class="feedbackStats">
    <h4>{count} Reviews</h4>
    <h4>Ratings: {average}</h4>
</div>
<style>
    .feedbackStats{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>