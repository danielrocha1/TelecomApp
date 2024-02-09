export default function signIn() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          nome: "DANIEL ROCHA",
          endereco: "RUA 33 LT 8 QD 56 CS 1 FUNDOS",
          complemento: "ARACATIBA - MARICA - RJ - 24901-515",
          telefone: "97623-3320",
          nascimento: "01/01/1990",
          cpf: "00000000000",
          email: "@GMAIL.COM",
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
          nome: "DANIEL ROCHA",
          endereco: "RUA 33 LT 8 QD 56 CS 1 ",
          complemento: "SÃO JOSÉ - MARICA - RJ - 24910-500",
          telefone: "99999-9999",
          nascimento: "01/01/1990",
          cpf: "13417564751",
          email: "@GMAIL.COM",
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
