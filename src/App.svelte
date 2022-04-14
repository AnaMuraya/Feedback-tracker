<script>
	import FeedbackList from "./components/FeedbackList.svelte"
	import FeedbackStats from './components/FeedbackStats.svelte'
	import FeedbackForm from './components/FeedbackForm.svelte'
	// FeedbackList data
	let feedbackList = [
		{
			id: '1',
			rating: 10,
			message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aliquam iure voluptatibus distinctio aperiam minus, itaque, reprehenderit quidem autem corrupti ab deserunt nulla, adipisci pariatur quod laudantium quasi possimus est!'
		},
		{
			id: '2',
			rating: 8,
			message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aliquam iure voluptatibus distinctio aperiam minus, itaque, reprehenderit quidem autem corrupti ab deserunt nulla, adipisci pariatur quod laudantium quasi possimus est!'
		},
		{
			id: '3',
			rating: 9,
			message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aliquam iure voluptatibus distinctio aperiam minus, itaque, reprehenderit quidem autem corrupti ab deserunt nulla, adipisci pariatur quod laudantium quasi possimus est!'
		},
		{
			id: '4',
			rating: 7,
			message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aliquam iure voluptatibus distinctio aperiam minus, itaque, reprehenderit quidem autem corrupti ab deserunt nulla, adipisci pariatur quod laudantium quasi possimus est!'
		}
	]

	$: count = feedbackList.length
	$: average = feedbackList.reduce((a, {rating}) => a + rating , 0) / count
		
	// delete feedback dispatcher function
	const deleteItem = (e) => {
		const ItemID = e.detail
		feedbackList = feedbackList.filter((item) => item.id != ItemID)
	}

</script>
<main class="container">
	<FeedbackForm/>
	<FeedbackStats {count} {average}/>
	<FeedbackList {feedbackList} on:deleteItem={deleteItem}/>
</main>