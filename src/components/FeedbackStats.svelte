<script>
    export let count
    export let average
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