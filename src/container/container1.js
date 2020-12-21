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

            const text_input = 'text 1';
        return(

            <div> 
            <button onClick={ () => console.log(this.props.hamada)}> Get state </button>
            <button onClick={() => this.props.action1()}> Dispatch action 1 </button>
            <button onClick={() => this.props.action2()}> Dispatch action 2 </button>
            <button onClick={() => this.props.action_creator1()}> Dispatch action creator 1 </button>
            <button onClick={() => this.props.action_creator2()}> Dispatch action creator 2 </button>
            <button onClick={() => this.props.action_creator3(text_input)}> Dispatch action creator 3 </button>
            {this.props.mona
            ? <h1>{this.props.mona}</h1>
            : <h1>no value in mona</h1>}
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
    hamada : state.reducer1.stateProp1,
    mona: state.user_reducer.user_input
   }
}

function mapDispatchToProps(dispatch){
    return {
       action1 : () => dispatch(ACTIONS.SUCCESS),
       action2 : () => dispatch(ACTIONS.FAILURE),
       action_creator1 : () => dispatch(ACTIONS.success()),
       action_creator2 : () => dispatch(ACTIONS.failure()),
       action_creator3 : (text) => dispatch(ACTIONS.user_input(text))
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Container1);