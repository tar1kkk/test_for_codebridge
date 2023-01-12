import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

const Item: React.FC = () => {
	const [item, setItem] = useState<any>([]);
	const { id } = useParams();
	useEffect(() => {
		async function fetchPizza() {
			try {
				const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id);
				setItem(data);
				console.log(data);
			} catch (e) {
				console.log('Ошибка при получении', e);
			}
		}

		fetchPizza();
	}, []);
	return (
		<div>
			<h2>{item.title}</h2>
			<p>{item.body}</p>
		</div>
	);
}

export default Item;