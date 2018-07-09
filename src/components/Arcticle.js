import React, {PureComponent} from 'react';


class Article extends PureComponent{

	constructor(props){
		super(props)

		this.state = {
			count: 0
		}
	}

	componentWillMount(){
	}

	// componentWillReceiveProps(nextProps) {
	// 	if(nextProps.defaultOpen !== this.props.defaultOpen) this.setState({
	// 		isOpen: nextProps.defaultOpen
	// 	})
	// }

	componentWillUpdate(){
	}

	render () {

		const {article, isOpen, onButtonClick} = this.props;
		const style = {width: '80%'};
		const body = isOpen && <section className="card-text">{article.text}</section>

		return (
			<div className="card mx-auto" style={style}>
				<div className="card-header">
					<h2>
						{article.title}
						<button onClick={onButtonClick} className="btn btn-primary btn-lg float-right">
							{isOpen ? 'Close' : 'Open'}
						</button>
					</h2>
				</div>
				<div className="card-body">
					<h6
						className="card-subtitle text-muted">creation date: {(new Date( article.date )).toDateString() }
					</h6>
					{ body }
				</div>
			</div>
		)
	}

	// incrementCounter = () => {
	// 	this.setState({
	// 		count: this.state.count +1
	// 	})
	// }
}

export default Article;
