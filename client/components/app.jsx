import React from 'react';
import Axios from 'axios';
import style from './../main.scss';
import Banner from './banner.jsx';
import ListingDisplay from './listingDisplay.jsx';
import ShareModal from './shareModal.jsx';
import Details from './details.jsx';
import BookingFixed from './bookingFixed.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listing: {},
      isSearchSelected: false,
      isShowingShareModal: false
    };

    this.toggleSearchGrow = this.toggleSearchGrow.bind(this);
    this.toggleShareModal = this.toggleShareModal.bind(this);
  }

  toggleSearchGrow() {
    this.setState({
      isSearchSelected: !this.state.isSearchSelected
    });
  }

  toggleShareModal() {
    this.setState({
      isShowingShareModal: !this.state.isShowingShareModal,
      isShareModalSelected: false
    });
  }


  componentDidMount() {
    Axios(`http://localhost:3001/api/listings/header/${Math.floor(Math.random() * 99) + 1}`)
      .then(res => res.data)
      .then(data => {
        this.setState({
          listing: data
        });
      }).catch(error => console.log(error))
  }

  render() {
    return (
      <div className="headerNav">
        <div id="hnApp">
          <div className="hnAppPageContainer">
            <div className="hnModalFixed">
              <ShareModal
                id="shareModal"
                toggleShareModal={this.toggleShareModal}
                isModalShowing={this.state.isShowingShareModal}
              />
            </div>
            <Banner />
            <ListingDisplay
              listingData={this.state.listing}
              toggleShareModal={this.toggleShareModal}
            />
            <Details listingData={this.state.listing} />
            <BookingFixed listingData={this.state.listing} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;