var React = require('react');

var NameField = require('./NameField.jsx');
var EmailField = require('./EmailField.jsx');

var Reflux = require('reflux');
var Actions = require('../../reflux/Actions.jsx');
var EmailStore = require('../../reflux/EmailStore.jsx');

var LeadCapture = React.createClass({
    mixins: [Reflux.listenTo(EmailStore, 'onChange')],
    getInitialState: function () {
        return { submitted: false };
    },
        
    clear: function () {
        this.refs.fieldEmail.clear();
        this.refs.fieldName.clear();
    },
    
    onSubmit: function (e) {
        if (!this.refs.fieldEmail.state.valid){
            alert("Email inválido");            
        }        
        else{
            var httpRequestBody = {
              email: this.refs.fieldEmail.state.value,
              firtsName: this.refs.fieldName.state.value
            };
            
            this.clear();
            
            Actions.submitEmail(httpRequestBody);
            this.setState({ submitted: true });
        }
    },
    
    
    
    render: function () {   
        
        var sucessStyle = {
            color: "green",
            visibility: this.state.submitted ? "visible" : "hidden"  
        };
                    
        return (
          <div>
             <div className="panel panel-default" >
                <div className="panel-heading" >
                    <h4>Get free!</h4>
                </div>
                
                <div className="panel-body" >
                
                    <NameField ref="fieldName" type="First" />
                    <EmailField ref="fieldEmail" />
                    
                    <div className="row" >
                        <div className="col-sm-6" >
                            <button className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
                        </div>
                        <div className="col-sm-2" >
                            <h5 style={ sucessStyle } >Sucess!</h5>
                        </div>
                    </div>
                </div>
             </div>
          </div>  
        );     
    }
});

module.exports = LeadCapture;