import React , {Component} from 'react';

import * as ACTIONS_TYPES from '../store/actions/actions_types';
import * as ACTIONS from '../store/actions/actions';

import {connect} from 'react-redux';


class Container1 extends Component {



// state = {
//     value : ""
// }


//     constructor (props){
//         super(props);
       
//     }

//     handleChange= (event) => (
//       this.setState({value : event.target.value}) 
//     )

//     handleSubmit= (event) => {
//         event.preventDefault();
//        console.log( event.target.name.value);
//     }
       
    
    
    render(){

        return(

            <div> 
            <button onClick={ () => console.log(this.props.hamada)}> Get state </button>
            <button onClick={() => this.props.action1()}> Dispatch action 1 </button>
            <button onClick={() => this.props.action2()}> Dispatch action 2 </button>
            </div>
          


                // {/* {this.state.value}
                // <form onSubmit={this.handleSubmit} >
                //     <label> Name</label>
                //     <input id="name" type="text" onChange={this.handleChange}></input>
                //     <button type="submit"> submit </button>
                // </form> */}


            // <div> 
            //     <button onClick={() => this.changeState()}> change it </button>
            //     <button onClick={() => this.changeState2()}> update string </button>
            //   <Component1 prop1= {this.state.stateprop1}/>

            //  </div>
        )

    }


}

function mapStateToProps (state){
   return {
    hamada : state.stateProp1
   }
}

function mapDispatchToProps(dispatch){
    return {
       action1 : () => dispatch(ACTIONS.SUCCESS),
       action2 : () => dispatch(ACTIONS.FAILURE)
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Container1);