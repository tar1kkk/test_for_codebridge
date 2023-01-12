import React from 'react';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { setFilters } from '../redux/slices/filterSlice';


const SearchInp: React.FC = () => {
	const dispatch = useDispatch();
	const onChangeSearch = (e) => {
		//@ts-ignore
		dispatch(setFilters(e.target.value));
	}
	return (
		<div>
			<p>Filter by keywords</p>
			<TextField id="outlined-basic" label="Search" variant="outlined" onChange={(e) => onChangeSearch(e)} />
		</div>
	);
}

export default SearchInp;