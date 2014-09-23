/** @jsx React.DOM */

var React = require('react');

var PagedTable = React.createClass({
	getDefaultProps: function(){
		return { pageNumber: 1 };
	},
	render: function(){
		var page = getDataPage(this.props.data, this.props.pageNumber, this.props.pageSize);

		var headers = this.props.columns.map(function(column){
				if(typeof column === 'string'){
					return (<th key={ column }>{ column }</th>);
				}
				else if(typeof column === 'object' && column.name){
					return (<th key={ column.name }>{ column.name }</th>);
				}
		});

		var rows = page.map(function(row, index){
			var cells = this.props.columns.map(function(column, cIndex){
				if(typeof column === 'string'){
					return <td key={ cIndex }>{ row[column] }</td>;	
				}
				else if(typeof column === 'object' && column.prop){
					return <td key={ cIndex }>{ row[column.prop] }</td>;
				}
			});

			return <tr key={ index }>{ cells }</tr>
		}.bind(this));

		return (
			<table className={ this.props.tableClass || '' }>
				<thead>
					<tr>{ headers }</tr>
				</thead>
				<tbody>
					{ rows }
				</tbody>
			</table>
		);
	}
});

function getDataPage(data, pageNumber, pageSize){
	var start = (pageNumber - 1) * pageSize;
	
	var end = start + pageSize;
	
	return data.slice(start, end);
}

module.exports = PagedTable;