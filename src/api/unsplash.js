import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers:{
		Authorization: 'Client-ID LQw2YJ43LViU3mQ6USiZvMk8XPFJy64-Hhpn6Jazpaw'
	}
});
