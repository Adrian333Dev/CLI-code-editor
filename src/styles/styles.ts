import { styled, Button } from '@mui/material';

export const EditorContainer = styled('div')(({ theme }) => ({
	height: '100%',
	position: 'relative',
	'&:hover button': {
		opacity: 1,
	},
}));

export const FormatBtn = styled(Button)(({ theme }) => ({
	position: 'absolute',
	top: 5,
	right: 5,
	zIndex: 1,
	opacity: 0,
	transition: 'all 0.2s ease-in-out',
}));
