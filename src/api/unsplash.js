import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID 48DF-xIT2luSDEViYhgw2QQiscGDOAFjqvcoSjNQpMk',
	},
});
