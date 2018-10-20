/* --- Global Dependencies --- */
import { connect } from "react-redux";
import { compose, lifecycle, withState, withStateHandlers } from "recompose";
/* --- Local Dependencies --- */
import ethers from 'store/departments/ethers/actions'

/* --- Module Dependencies --- */
import Component from "./component";

/* ------- React Container ------- */
/* --- Recompose --- */
const QueryLifecycle = lifecycle(
{
  componentDidMount()
  {

  },
  componentDidUpdate(prevProps)
  {

  }
});

/* --- Redux --- */
const mapStateToProps = (state, props) => ({
  data: fromEthers.getDelta(state, 'wallet|sign|message'),
});


const mapDispatchToProps = (dispatch, props) => ({
  signMessage: (ethAddress, ethPermission)=>dispatch(ethers.walletSignMessage('REQUEST')(
    {
      ethAddress,
      ethPermission
    },
    {
      delta: 'wallet|sign|message',
      network: {
        provider: 'infura',
        chain: props.chain || 'rinkeby',
      }
    }
  )),
});

/* --- State Management --- */
const State = withState(
  "example",
  "exampleToggle",
  false
);

const StatHandler = withStateHandlers(
  ({ status = false, list = [] }) => ({
    status,
    list
  }),
  {
    statusToggle: ({ status }) => (value) => ({
      status: !status
    }),
    listAdd: ({ list }) => (value) => ({
      status: list.push(value)
    }),
  }
)

/* --- Export --- */
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  State,
  StateHandler,
  QueryLifecycle,
)(Component);