import * as  React from 'react'
import { VisibilityFilters } from '../actions/TodoActions'

interface FooterProps {
	onFilterChange: { (filter: VisibilityFilters): void },
	filter: VisibilityFilters
}

export default class Footer extends React.Component<FooterProps, any> {
	renderFilter(filter: VisibilityFilters, name) {
		if (filter === this.props.filter) {
			return name
		}

		return (
			<a href='#' onClick={e => {
				e.preventDefault()
				this.props.onFilterChange(filter)
			} }>
        {name}
				</a>
		)
	}

	render() {
		return (
			<p>
				Show:
				{' '}
				{this.renderFilter(VisibilityFilters.SHOW_ALL, 'All') }
				{', '}
				{this.renderFilter(VisibilityFilters.SHOW_COMPLETED, 'Completed') }
				{', '}
				{this.renderFilter(VisibilityFilters.SHOW_ACTIVE, 'Active') }
				.
				</p>
		)
	}
}