import {writable} from 'svelte/store'

export const FeedbackStore = writable([
    {
        id: '1',
        rating: 10,
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aliquam iure voluptatibus distinctio aperiam minus, itaque, reprehenderit quidem autem corrupti ab deserunt nulla, adipisci pariatur quod laudantium quasi possimus est!'
    },
    {
        id: '2',
        rating: 2,
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
])