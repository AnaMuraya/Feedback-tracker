<script>
    import Card from './Card.svelte'
    import Button from './Button.svelte'

    let message = ''
    let btnDisabled = true
    let text
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
</script>

<Card>
    <header>
        <h2>How would you rate us?</h2>
    </header>
    <form action="">
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