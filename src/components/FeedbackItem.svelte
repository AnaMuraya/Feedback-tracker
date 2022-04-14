<script>
    import {FeedbackStore} from '../stores'
    import Card from './Card.svelte'
    export let feedbackItem;

    const handleDelete = (ItemID) => {
        FeedbackStore.update((currentFeedback) => {
            return currentFeedback.filter(feedbackItem => feedbackItem.id != ItemID)
        })

    } 
</script>

<div class="card">
    <Card>
        <div class="rating-display">
            {feedbackItem.rating}
        </div>
        <button class="close" on:click={()=>handleDelete(feedbackItem.id)}>
            X
        </button>
        <div class="message-display">
            {feedbackItem.message}
        </div>
    </Card>
</div>
<style>
    .rating-display{
        position: absolute;
        top: -10px;
        left: -10px;
        width: 50px;
        height: 50px;
        background: #ff6a95;
        color: #fff;
        border: 1px solid #eee;
        border-radius: 50%;
        padding: 10px;
        text-align: center;
        font-size: 19px;
    }
     .close{
         position: absolute;
         top: 10px;
         right: 20px;
         cursor: pointer;
         background: none;
         border: none;
     }
</style>