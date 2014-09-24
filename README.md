# Paged Table

React table component with in memory paging

### Usage

```bash
npm install react-paged-table
```

```javascript
var PagedTable = require('react-paged-table');
```

Once you have a reference to the object, you need to give it the following properties

```javascript
<PagedTable
	pageSize={ pageSize }
	pageNumber={ pageNumber }
	columns={ columns }
	data={ records }
	tableClass={ someTableClass }/>
```

`pageSize` is the number of visual records
`pageNumber` is the current page number
`columns` is an array of columns
    * columns should be strings or objects
    * if strings then the name should match the string you want to display in the header
    * if objects then the object should have a `name` property for the string you want to appear in the header and a `prop` property to access that data in the property record
`data` is an array of records representing the table rows
`tableClass` is an optional class string that will be put in `className` on the table tag


### Contributing

1. Fork repository
2. `cd react-paged-table && npm install`
3. Edit `lib/PagedTable.jsx`
4. Run `npm build`
5. Commit, Push, Pull request