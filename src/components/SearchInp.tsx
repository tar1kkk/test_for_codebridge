import React from 'react';
import TextField from '@mui/material/TextField';

type SearchInpProps = {
	setSearchValue: (e: string) => void;
}

const SearchInp: React.FC<SearchInpProps> = ({ setSearchValue }) => {
	return (
		<div>
			<p>Filter by keywords</p>
			<TextField id="outlined-basic" label="Search" variant="outlined" onChange={(e) => setSearchValue(e.target.value)} />
		</div>
	);
}

export default SearchInp;