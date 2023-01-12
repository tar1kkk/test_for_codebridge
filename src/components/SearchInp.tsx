import React from 'react';

type SearchInpProps = {
	setSearchValue: (e: string) => void;
}

const SearchInp: React.FC<SearchInpProps> = ({ setSearchValue }) => {
	return (
		<div>
			<input onChange={(e) => setSearchValue(e.target.value)} />
		</div>
	);
}

export default SearchInp;