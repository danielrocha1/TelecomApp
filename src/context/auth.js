import React, { createContext, useState, useMemo } from "react";
import auth from ".././services/Api";


const AuthContext = createContext({
  signed: Boolean,
  nome: String,
  endereco: String,
  complemento: String,
  telefone: String,
  nascimento: String,
  cpf: String,
  email: String,
  obs: String,
  plano: Number,
  valor: String,
  fatura: Object,
  fibra:Boolean,
  signIn:Promise,
});

export const AuthProvider = ({ children }) => {
const [user, setUser] = useState([]);
const [allInfo, setAllInfo] = useState([]);
const userLen = useMemo(() => !!user.email, [user]);

  async function signIn() {
    const response = await auth();
    
    setAllInfo(response)

   if (response[0].obs.indexOf("OLT") > -1) {
     setUser({
       nome: response[0].nome,
       endereco: response[0].endereco,
       complemento: response[0].complemento,
       telefone: response[0].telefone,
       nascimento: response[0].nascimento,
       cpf: response[0].cpf,
       email: response[0].email,
       obs: response[0].obs,
       plano: response[0].plano,
       valor: response[0].valor,
       fatura: response[0].fatura,
       fibra: true,
     });
   } else {
     setUser({
       nome: response[0].nome,
       endereco: response[0].endereco,
       complemento: response[0].complemento,
       telefone: response[0].telefone,
       nascimento: response[0].nascimento,
       cpf: response[0].cpf,
       email: response[0].email,
       obs: response[0].obs,
       plano: response[0].plano,
       valor: response[0].valor,
       fatura: response[0].fatura,
       fibra: false,
     });
   }
}
  

  return (
    <AuthContext.Provider value={{setUser, signed: userLen, user, signIn: signIn, allInfo }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
