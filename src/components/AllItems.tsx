import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { fetchItems } from '../redux/slices/itemSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CircularIndeterminate from './Loader'
import Highlighter from "react-highlight-words";
import { RootState } from '../redux/store';

type HomeProps = {
	searchValue: string;
}

const AllItems: React.FC<HomeProps> = ({ searchValue }) => {
	const dispatch = useDispatch();
	const items = useSelector((state: RootState) => state.itemSlice.items);
	const status = useSelector((state: RootState) => state.itemSlice.status);
	async function fetchData() {
		//@ts-ignore
		dispatch(fetchItems());
	}
	useEffect(() => {
		fetchData();
	}, []);
	const filtredOnTitle = items.filter((obj: any) => {
		const filtredTitle = obj.title.toLowerCase().includes(searchValue.toLowerCase());
		if (filtredTitle) {
			return true;
		} else {
			return false;
		}
	})
	const filtredOnDesc = items.filter((obj: any) => {
		const filtredDesc = obj.body.toLowerCase().includes(searchValue.toLowerCase());
		if (filtredDesc) {
			return true;
		}
		else {
			return false;
		}
	})
	const filtred = [...filtredOnTitle, ...filtredOnDesc];
	return (
		<div className='container'>
			{status === 'loading' ? <CircularIndeterminate /> :
				filtred.map((item: any, index: number) => (
					<Card className='card' key={index}>
						<CardContent>
							<Typography gutterBottom variant="h5" component="div" >
								{item.title}
								<Highlighter
									highlightClassName="YourHighlightClass"
									searchWords={[searchValue]}
									autoEscape={true}
									textToHighlight={item.title}
								/>
							</Typography>
							<Typography variant="body2" color="text.secondary">
								{item.body}
								<Highlighter
									highlightClassName="YourHighlightClass"
									searchWords={[searchValue]}
									autoEscape={true}
									textToHighlight={item.body}
								/>
							</Typography>
						</CardContent>
						<CardActions>
							<Link to={`/item/${item.id}`}><Button size="small">Learn More</Button></Link>
						</CardActions>
					</Card>
				))
			}
		</div>
	);
}

export default AllItems;