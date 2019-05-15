import React from 'react'
import {connect} from 'react-redux'
import {getCardsData, likedCard, rejectedCard} from "../redux/actions";
import CardDetails from './CardDetails'
import {Container, Row} from "reactstrap";
import heart from '../assets/images/heart.svg'
import rejected from '../assets/images/rejected.svg'

function mapStateToProps(state){
    return{
        cards: state.allCards
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getCardsData: url => dispatch(getCardsData(url)),
        likedCard: data => dispatch(likedCard(data)),
        rejectedCard: data => dispatch(rejectedCard(data)),
    }
}

class Card extends React.Component{
    state = {
        count: 0,
        totalCards: 0
    }

    componentDidMount() {
       this.props.getCardsData('https://ycl641scac.execute-api.us-west-2.amazonaws.com/staging/products')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.cards !== this.props.cards){
            this.setState({totalCards: this.props.cards.length})
        }
    }

    handleCardSelection = (type, data) => {
        let cardContainer = document.getElementById('card-container')
        const {totalCards, count} = this.state
        console.log(totalCards, count)
        if(count < totalCards){
            setTimeout(() => this.setState({count: ++this.state.count}), 700)
            if(type === 'liked'){
                this.props.likedCard(data)
                cardContainer.classList.add('yes')
                setTimeout(() => cardContainer.classList.remove('yes'), 700)
            }
            if(type === 'rejected'){
                this.props.rejectedCard(data)
                cardContainer.classList.add('nope')
                setTimeout(() => cardContainer.classList.remove('nope'), 700)
            }
        }
    }

    render() {
        const { state: {count, totalCards} , props: { cards }} = this
        const selectedCard = cards.length && cards.find((card, i) => i === count)
        return (
            <div>
                { count < totalCards ?
                    <Container className="main-container">
                       <CardDetails imageUrl={selectedCard.imageUrl} brand={selectedCard.brand} name={selectedCard.name} />
                       <Row className="justify-content-center">
                           <div className="selection-button" onClick={() => this.handleCardSelection('liked', selectedCard)}>
                               <img src={heart} alt="like" />
                           </div>
                           <div className="selection-button" onClick={() => this.handleCardSelection('rejected', selectedCard)}>
                               <img src={rejected} alt="reject" />
                           </div>
                       </Row>
                    </Container> :
                    <Container className="empty">
                        <h1>No Products</h1>
                    </Container>
                }
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Card)