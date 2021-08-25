import React, { useContext, useState } from "react";
import axios from 'axios';
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { AccountContext } from "./accountContext";

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
  
  const initialCredentials = {
    email: '',
    password: ''
  }
  
  const [credentials, setCredentials] = useState(initialCredentials)

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const signIn = e => {
    // UNCOMMENT AND UPDATE WHEN WE HAVE AN API IN PLACE:
      // axios.post('LOGIN API LINK', credentials)
      //   .then( res => {
      //     localStorage.setItem("token", res.data.token);
      //     localStorage.setItem("role", res.data.role);
      //     props.history.push('/classes')
      //   })
      //   .catch(err=> {
      //     console.log(err);
      //   })
    props.history.push('/classes')
  }

  return (
    <BoxContainer>
      <FormContainer>
<<<<<<< HEAD
        <Input name="username" type="text" placeholder="Username" />
        <Input name="password" type="text" placeholder="Password" />
=======
        <Input name="email" type="email" placeholder="Email" onChange={handleChange} />
        <Input name="password" type="password" placeholder="Password" onChange={handleChange} />
>>>>>>> 48568cabfb7a494a2b66bf27d10482ec8c6dddd6
      </FormContainer>
      <MutedLink href="#">Forget your password?</MutedLink>
      <SubmitButton type="submit" onClick={signIn}>Signin</SubmitButton>
      <MutedLink href="#">
        Don't have an account?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
