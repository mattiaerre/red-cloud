/* eslint-disable no-unused-vars */
import React from 'react';
import Swipeable from 'react-swipeable'; // see: https://github.com/dogfessional/react-swipeable
import Header from './components/Header';
import Details from './components/Details';
import make from './restaurant-model';
import Footer from './components/Footer';
/* eslint-unable */

const swipeable = () => (false);

class App extends React.Component { // eslint-disable-line arrow-body-style
  constructor(props) {
    super(props);

    this.onSwipedRight = this.onSwipedRight.bind(this);
    this.onSwipedLeft = this.onSwipedLeft.bind(this);
  }

  componentWillMount() {
    this.setState({ model: make() });
  }

  onSwipedRight(e) {
    console.log('onSwipedRight');
    this.setState({ model: make() });
  }

  onSwipedLeft(e) {
    console.log('onSwipedLeft');
    this.setState({ model: make() });
  }

  render() { // eslint-disable-line class-methods-use-this
    return (
      <div className="container">
        <Header />
        <Swipeable
          onSwiping={swipeable}
          onSwipingUp={swipeable}
          onSwipingRight={swipeable}
          onSwipingDown={swipeable}
          onSwipingLeft={swipeable}
          onSwipedUp={swipeable}
          onSwipedRight={this.onSwipedRight}
          onSwipedDown={swipeable}
          onSwipedLeft={this.onSwipedLeft}
          onSwiped={swipeable}>
          <Details data={this.state.model} />
        </Swipeable>
        <Footer />
      </div>
    );
  }
}

export default App;
