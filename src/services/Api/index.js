export default function signIn() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          nome: "DANIEL ROCHA TAVARES DA SILVA",
          endereco: "RUA 33 LT 8 QD 56 CS 1 FUNDOS",
          complemento: "ARACATIBA - MARICA - RJ - 24901-515",
          telefone: "97623-3320",
          nascimento: "23/06/1995",
          cpf: "13417564751",
          email: "DANIEL.ROCHATS@GMAIL.COM",
          obs: " OLT BQR07 C 10",
          plano: "PLANO-100-PF-WIFI-SERVDIG-",
          valor: "R$ 69,90",
          fatura: [
            {
              vencimento: "15/11"
            },
            {
              vencimento: "15/12",
            },
          ],
        },
        {
          nome: "DANIEL ROCHA TAVARES DA SILVA",
          endereco: "RUA DOS GERANIOS LOTE 11 QUADRA 09",
          complemento: "SÃO JOSÉ - MARICA - RJ - 24930-516",
          telefone: "97623-3320",
          nascimento: "23/06/1995",
          cpf: "13417564751",
          email: "DANIEL.ROCHATS@GMAIL.COM",
          obs: "  BQR07 C 10",
          plano: "PLANO-60-PF-WIFI-SERVDIG-",
          valor: "R$ 79,00",
          fatura: [
            {
              vencimento: "15/11",
            },
          ],
        },
      ]);
    }, 2000);
  });
}
