/** @jsx React.DOM */

var React = require('react');

var PagedTable = React.createClass({displayName: 'PagedTable',
	getDefaultProps: function(){
		return { pageNumber: 1 };
	},
	render: function(){
		var page = getDataPage(this.props.data, this.props.pageNumber, this.props.pageSize);

		var headers = this.props.columns.map(function(column){
				if(typeof column === 'string'){
					return (React.DOM.th({key: column }, column ));
				}
				else if(typeof column === 'object' && column.name){
					return (React.DOM.th({key:  column.name},  column.name));
				}
		});

		var rows = page.map(function(row, index){
			var cells = this.props.columns.map(function(column, cIndex){
				if(typeof column === 'string'){
					return React.DOM.td({key: cIndex },  row[column] );	
				}
				else if(typeof column === 'object' && column.prop){
					return React.DOM.td({key: cIndex },  row[column.prop] );
				}
			});

			return React.DOM.tr({key: index }, cells )
		}.bind(this));

		return (
			React.DOM.table({className:  this.props.tableClass || ''}, 
				React.DOM.thead(null, 
					React.DOM.tr(null, headers )
				), 
				React.DOM.tbody(null, 
					rows 
				)
			)
		);
	}
});

function getDataPage(data, pageNumber, pageSize){
	var start = (pageNumber - 1) * pageSize;
	
	var end = start + pageSize;
	
	return data.slice(start, end);
}

module.exports = PagedTable;