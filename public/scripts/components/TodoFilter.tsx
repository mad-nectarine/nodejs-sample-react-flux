import * as  React from 'react'
import { VisibilityFilters } from '../models/ToDoModels'

export interface FooterProps {
	onFilterChange: { (filter: VisibilityFilters): void },
	filter: VisibilityFilters
}

export default class Footer extends React.Component<FooterProps, any> {
	renderFilter(filter: VisibilityFilters, name) {
		if (filter === this.props.filter) {
			return <input type="button" value={name} disabled={true} className="selected" />;
		}
		return <input type="button" value={name} disabled={false} onClick={e => {
			e.preventDefault()
			this.props.onFilterChange(filter)
		} } />;
	}

	render() {
		return (
			<p className="list-operation-area">
				Filter:
				{this.renderFilter(VisibilityFilters.SHOW_ALL, 'All') }
				{this.renderFilter(VisibilityFilters.SHOW_COMPLETED, 'Completed') }
				{this.renderFilter(VisibilityFilters.SHOW_ACTIVE, 'Active') }
				</p>
		)
	}
}