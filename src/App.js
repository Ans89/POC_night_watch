 
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import './app.scss';
import { Button } from 'carbon-components-react';

function App() {
  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <RegistrationForm></RegistrationForm>
     </div>
  );
}

export default App;
