import ReactOnRails from 'react-on-rails';
import HelloWorldApp from '../bundles/HelloWorld/startup/HelloWorldApp';
import UserPostApp from '../bundles/HelloWorld/startup/UserPostApp';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  HelloWorldApp, UserPostApp
});
