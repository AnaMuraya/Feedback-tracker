<script>
    import {v4 as uuidv4} from 'uuid'
    import Card from './Card.svelte'
    import Button from './Button.svelte'
    import RatingSelect from './RatingSelect.svelte'
    import {createEventDispatcher} from 'svelte'

    let message = ''
    let rating = 10
    let btnDisabled = true
    let text
    let dispatch = createEventDispatcher()

    const handleSelect = (e) => {rating = e.detail}

    //Handles the form if the text is less than the minimum characters
    const handleInput = () => {
        if(message.trim().length < 10) {
            text=`Text must be at least 10 characters` 
            btnDisabled = true
        }else{
            text = null
            btnDisabled = false
        }
    }

    const handleSubmit = () => {
        if (message.trim().length >= 10) {
            const newFeedback = {
                id: uuidv4(),
                message,
                rating: +rating
            }
            dispatch('addFeedback',newFeedback)

            message = ''
        }
    }
</script>

<Card>
    <header>
        <h2>How would you rate us?</h2>
    </header>
    <form on:submit|preventDefault={handleSubmit}>
        <RatingSelect on:ratingSelect={handleSelect}/>
        <div class="input-group">
            <input type="text" on:input={handleInput} bind:value= {message} placeholder="Tell us something">
            <Button disabled={btnDisabled} type="submit">Send</Button>
        </div>
        {#if text}
            <div class="text">
                {text}
            </div>
        {/if}        
    </form>
</Card>
<style>
    header{
        max-width: 400px;
        margin: auto;
    }
    header h2{
        font-size: 22px;
    }
</style>