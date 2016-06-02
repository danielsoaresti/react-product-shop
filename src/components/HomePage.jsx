var React = require('react');
var ReacRouter = require('react-router');
var Link = require('react-router').Link;

var HomePage = React.createClass({
   render: function () {
       return (
         <div>
            <h1>Home Page</h1>
            
            <ul>
                <li><Link to="/product/1">Produto 1</Link></li>
                <li><Link to="/product/2">Produto 2</Link></li>
            </ul>
         </div>  
       );
   } 
});

module.exports = HomePage;