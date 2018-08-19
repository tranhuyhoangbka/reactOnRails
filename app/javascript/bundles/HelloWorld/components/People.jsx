import React from 'react';
import Home from './Home';

let styles;

const People = (props) => {
  console.log(props);
  const {container, text, button, buttonText} = styles;

  return (
    <div style={container}>
      <Home />
      <div style={text}>Redux Examples</div>
      <div style={button} onClick={() => props.fetchData()}>
        <div style={buttonText}>
          {
            props.appData.isFetching && <div>Loading...</div>
          }
          {
            props.appData.data.length ? (
              props.appData.data.map((person, i) => {
                return <div key={i} >
                  <div>Name: {person.name}</div>
                  <div>Age: {person.age}</div>
                </div>
              })
            ) : null
          }
        </div>
      </div>
    </div>
  );
};

styles = {
  container: {
    marginTop: 100
  },
  text: {
    textAlign: 'center'
  },
  button: {
    display: 'flex',
    minHeight: 60,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b7eff'
  },
  buttonText: {
    color: 'white'
  }
}

export default People;
