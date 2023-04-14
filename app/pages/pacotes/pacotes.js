const feedback = prompt('Qual a nota que você daria para o nossa agência?');

const darFeedback = confirm('Você gostaria de enviar seu feedback nota10 para nossa equipe?');

if (darFeedback) {
  alert('Ótimo, seu feedback foi enviado com sucesso!');
} else {
  alert('Tudo bem, não vamos levar seu feedback em consideração.');
}