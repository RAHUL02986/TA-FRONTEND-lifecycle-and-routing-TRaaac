import React from 'react';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      profile: null,
      title: 'my name is',
      value: ' ',
    };
  }
  componentDidMount() {
    fetch('https://randomuser.me/api/')
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          profile: data,
          value: data.results[0].name.first + ' ' + data.results[0].name.last,
        });
      });
  }

  getRandomProfile = () => {
    fetch('https://randomuser.me/api/')
      .then((res) => res.json())
      .then((profile) => {
        this.setState({
          profile,
          title: 'My name is ',
          value:
            profile.results[0].name.first + ' ' + profile.results[0].name.last,
        });
      });
  };

  render() {
    if (this.state.profile != null) {
      let profile = this.state.profile.results[0];

      return (
        <>
          <div className="profile-container">
            <div className="empty-container"></div>
            <finger>
              <img alt="profile.id" src={profile.picture.large} />
            </finger>
            <div className="profileInfo-container">
              <h4>{this.state.title}</h4>
              <h2>{this.state.value}</h2>
              <div className="button-container">
                <button
                  onClick={() => {
                    this.setState({
                      title: 'my email is ',
                      value: profile.email,
                    });
                  }}
                >
                  <i className="fa-solid fa-envelope"></i>
                </button>

                <button
                  onClick={() => {
                    this.setState({
                      title: 'my age is ',
                      value: profile.dob.age,
                    });
                  }}
                >
                  <i className="fa-solid fa-user-clock"></i>
                </button>
                <button
                  onClick={() => {
                    this.setState({
                      title: 'my location  is ',
                      value: profile.location.street.name,
                    });
                  }}
                >
                  <i className="fa-solid fa-location-dot"></i>
                </button>
                <button
                  onClick={() => {
                    this.setState({
                      title: 'my phone number  is ',
                      value: profile.phone,
                    });
                  }}
                >
                  <i className="fa-solid fa-phone"></i>
                </button>
                <button
                  onClick={() => {
                    this.setState({
                      title: 'my password  is ',
                      value: profile.login.password,
                    });
                  }}
                >
                  <i className="fa-solid fa-unlock"></i>
                </button>
              </div>
              <div className="random-button-container">
                <button onClick={this.getRandomProfile}>random profile</button>
              </div>
            </div>
          </div>
        </>
      );
    }
    <h1>Data is Loading......</h1>;
  }
}

export default App;
