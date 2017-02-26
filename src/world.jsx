import React from 'react';
import ReactDOM from 'react-dom';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const data = [{
    name: 'First Last',
    age: 26,
    friend: {
        name: 'First Last',
        age: 23,
    }
}];

const columns = [{
    id:'A',
    header: 'Name',
    accessor: 'name' // String-based value accessors!
}, {
    id:'B',
    header: 'Age',
    accessor: 'age',
    render: props => <span className='number'>{props.value}</span> // Custom cell components!
}, {
    id:'C',
    header: 'Friend Name',
    accessor: d => d.friend.name // Custom value accessors!
}, {
    id:'D',
    header: props => <span>Friend Age</span>, // Custom header components!
    accessor: 'friend.age'
}];


class World extends React.Component {
    render() {
        return <ReactTable data={data} columns={columns}/>;
    }
}

ReactDOM.render(<World/>, document.getElementById('world'));
