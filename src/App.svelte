<script>
	import FeedbackList from "./components/FeedbackList.svelte"
	import FeedbackStats from './components/FeedbackStats.svelte'
	import FeedbackForm from './components/FeedbackForm.svelte'
	
	// $: count = feedbackList.length
	// $: average = feedbackList.reduce((a, {rating}) => a + rating , 0) / count
	
	// const handleFeedback = (e) => {
	// 	const newFeedbackList = e.detail
	// 	feedbackList = [newFeedbackList, ...feedbackList]
	// }
	// delete feedback dispatcher function
	// const deleteItem = (e) => {
	// 	const ItemID = e.detail
	// 	feedbackList = feedbackList.filter((item) => item.id != ItemID)
	// }

</script>
<main class="container">
	<!-- <FeedbackForm on:addFeedback={handleFeedback}/> -->
	<FeedbackForm/>
	<FeedbackStats/>
	<!-- <FeedbackList on:deleteItem={deleteItem}/> -->
	<FeedbackList/>
</main>