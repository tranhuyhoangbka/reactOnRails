import PropTypes from 'prop-types';
import React from 'react';

const HelloWorld = ({ name, updateName, deleteName }) => (
  <div>
    <h3 className="page-label">
      Hello, {name}!
    </h3>
    <hr />
    <form >
      <label htmlFor="name">
        Let's Say hello to:
      </label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => updateName(e.target.value)}
      />
      <br/>
      <button type="button" onClick={deleteName}>
        Delete
      </button>
    </form>
  </div>
);

HelloWorld.propTypes = {
  name: PropTypes.string.isRequired,
  updateName: PropTypes.func.isRequired,
};

export default HelloWorld;
