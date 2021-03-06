import * as React from 'react';

import ReactMarkdown from 'react-markdown';

import {
	Post,
	getTitle,
	loadMarkdown,
	getPostType,
	getDate,
} from 'src/models';

import {
	ArtworkImageComponent,
} from '../components';

import {
	styles,
} from '../styles/ArtworkComponentStyle';

interface ComponentProps {
	post: Post;
	postNumber: number;
}

interface ComponentState {
	markdownText: string;
	isOpen: boolean;
}

export class ArtworkComponent extends React.Component<ComponentProps, ComponentState> {
	constructor(props: ComponentProps) {
		super(props);
		this.state = {
			markdownText: '',
			isOpen: false,
		};
		this.handleClick = this.handleClick.bind(this);
	}

	public handleClick() {
		const {
			post,
		} = this.props;

		this.setState({ isOpen: !this.state.isOpen });
		if (!this.state.isOpen) {
			loadMarkdown(post).then((response) => {
				return response.text().then((text) => {
					this.setState({
						markdownText: text,
					});
				});
			});
		}
	}

	public render() {
		const {
			post,
			postNumber,
		} = this.props;

		return (
			<div style={styles.artwork}>
				<div
					style={styles.contract}
					onClick={this.handleClick}
				>
					<div
						style={styles.title}
					>
						<p style={styles.title_p}>
							{getTitle(post)}
						</p>
						<p style={styles.title_p}>
							{this.state.isOpen ? '▲' : '▼'}
						</p>
					</div>
					<div
						style={styles.summary}
					>
						<p style={styles.summary_p}>
							{`#${postNumber} / 분류: ${getPostType(post)}`}
						</p>
						<p style={styles.summary_p}>
							{getDate(post)}
						</p>
					</div>
				</div>
				{this.state.isOpen ?
					<div style={styles.content}>
						<ArtworkImageComponent
							{...this.props}
						/>
						<div style={styles.markdown}>
							<ReactMarkdown source={this.state.markdownText} />
						</div>
					</div>
					:
					null
				}
				<div style={styles.division} />
			</div>
		);
	}
}
