import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularIndeterminate() {
	return (
		<Box className='loader' sx={{ display: 'flex' }}>
			<CircularProgress />
		</Box>
	);
}