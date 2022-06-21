import { createTheme } from '@mui/material';

const theme = createTheme({
	palette: {
		primary: {
			50: '#F7FAFC',
			100: '#EDF2F7',
			200: '#E2E8F0',
			300: '#CBD5E0',
			400: '#A0AEC0',
			500: '#718096',
			600: '#4A5568',
			700: '#2D3748',
			800: '#1A2138',
			900: '#0A0D11',
		},
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					backgroundColor: '#1A2138',
					color: '#E2E8F0',
				},
			},
		},
	},
});

export default theme;
