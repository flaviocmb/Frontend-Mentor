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

function calcularIdade(anoNascimento, mesNascimento, diaNascimento) {
  const dataAtual = new Date();

  const anoAtual = dataAtual.getFullYear();
  //const idade = anoAtual - anoNascimento;
  const mesAtual = dataAtual.getMonth() + 1;
  const diaAtual = dataAtual.getDate();

  if (anoAtual === anoNascimento && mesAtual === mesNascimento) {
    const dia = diaAtual 
  }

  if (mesAtual >= 1 && mesAtual <= 12 && diaAtual >= 1 && diaAtual <= 31) {
    const aniversarioOcorreuEsteAno = true;
    console.log(aniversarioOcorreuEsteAno);
    
    // Se o aniversário ainda não ocorreu este ano, subtrai 1 da idade
    const idadeFinal = aniversarioOcorreuEsteAno ? idade : idade - 1;
    return idadeFinal;
  } else {
    console.log('data inválida');
  }
}

// Exemplo de uso
const anoNascimento = 1986;
const mesNascimento = 3;
const diaNascimento = 22;
const idade = calcularIdade(anoNascimento);
console.log("Idade:", idade);
