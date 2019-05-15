import React from 'react'
import {connect} from "react-redux";
import {Row} from 'reactstrap'

function mapStateToProps(state) {
    return {
        liked: state.likedCards.length,
        rejected: state.rejectedCards.length
    }
}

const Counter = ({liked, rejected}) => {
    return (
      <Row className="justify-content-center counter" >
          <div>Liked: {liked}</div>
          <div>Rejected: {rejected}</div>
      </Row>
    )
}
export default connect(mapStateToProps)(Counter)