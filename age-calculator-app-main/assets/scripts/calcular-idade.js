/**
 * 
 * Para determinar o ano, precisa determinar o mês. O mês vem antes ou depois
 * do mês atual?
 * Se antes, então é necessário subtrair 1 do resultado entre (ano atual - ano nascimento).
 * Se no mesmo mês, então é necessário verificar o dia.
 * Se depois, então não é necessário subtrair 1 do resultado entre (ano atual - ano nascimento).
 * 
 * Se depois, saber se é o mesmo mês, sendo mesmo mês, basta contar os dias. Sendo outro mês,
 * 
 * Algumas condições: 
 * - vai ser necessário definir uma regra para a quantidade de dias em um mês. Observe que
 * dia 22 de março, passa a ser o ponto inicial e a contagem começa em dias. Quantos dias depois equivaleria
 * a um mês?
 * 
 * - validar cada mês quando digitar errado o dia, exemplo, abril tem 30 dias. Se digitar 31, estará errado.
 * 
 * Conclusão: quando contabilizar os dias, será necessário verificar qual o mês e a quantidade de dias desse mês.
 * 
 */

function calcularIdade(dataNascimento, dataAtual) {
  // Converte as datas para objetos Date
  const nascimento = new Date(dataNascimento);
  console.log(nascimento);
  const atual = new Date(dataAtual);

  // Calcula a diferença entre as datas em milissegundos
  const diferenca = atual.getTime() - nascimento.getTime();
  console.log(diferenca);

  // Converte a diferença em dias
  const dias = diferenca / (1000 * 60 * 60 * 24);

  // Calcula a idade em anos
  const anos = Math.floor(dias / 365.25);

  // Calcula os meses restantes
  const mesesRestantes = dias % 365.25;

  // Calcula a idade em meses
  const meses = Math.floor(mesesRestantes / 30);

  // Calcula os dias restantes
  const diasRestantes = mesesRestantes % 30;

  // Retorna a idade em anos, meses e dias
  return {
    anos,
    meses,
    dias,
  };
}

// Exemplo de uso
const dataNascimento = "22/03/1986";
const dataAtual = "01/01/2024";

const idade = calcularIdade(dataNascimento, dataAtual);

console.log(idade);