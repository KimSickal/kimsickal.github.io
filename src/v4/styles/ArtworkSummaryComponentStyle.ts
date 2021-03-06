import {
	CSSProperties,
} from 'react';

export const styles: { [key: string]: CSSProperties} = {
	artwork: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'stretch',
		backgroundColor: 'white',
	},

	contract: {
		// cursor: 'pointer',
		paddingLeft: '100px',
		paddingRight: '100px',
	},

	title: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: '30px',
	},

	title_p: {
		margin: '0px',
		fontSize: '24px',
		fontWeight: 400,
		maxWidth: '100%',
		color: 'black',
	},

	summary: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: '20px',
	},

	summary_p: {
		margin: '0px',
		fontSize: '16px',
		color: '#868e96',
	},

	division: {
		paddingBottom: '40px',
		borderBottom: '2px solid #ced4da',
		marginLeft: '100px',
		marginRight: '100px',
	},
};
