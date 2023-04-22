
import './App.css';
import './Styles/Contact.css';
import Contact from './Components/Contact';
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";

function App() {
  return (
    <div className="App">



      <Contact
      image="whiskerson"
      name="Mr. Whiskerson"
      icon_phone={<AiFillPhone />}
      number="(212) 555-1234"
      icon_email={<AiOutlineMail />}
      email="mr.whskaz@catnap.meow" 
      />
     <Contact
      image="fluffy"
      name="Mr. Fluffy"
      icon_phone={<AiFillPhone />}
      number="(212) 555-2134"
      icon_email={<AiOutlineMail />}
      email="mr.fluffy@catnap.meow" 
      />
       <Contact
      image="felix"
      name="Mr. Felix"
      icon_phone={<AiFillPhone />}
      number="(212) 555-3412"
      icon_email={<AiOutlineMail />}
      email="mr.felix@catnap.meow" 
      />

<Contact
      image="pumpkin"
      name="Mr. Pumpkin"
      icon_phone={<AiFillPhone />}
      number="(212) 555-1423"
      icon_email={<AiOutlineMail />}
      email="mr.pumpkin@catnap.meow" 
      />



    </div>
  );
}

export default App;
