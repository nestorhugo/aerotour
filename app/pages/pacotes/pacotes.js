window.prompt('Qual a nota que você daria para o nossa agência?');

// eslint-disable-next-line max-len
let darFeedback = confirm(
  'Você gostaria de enviar seu feedback para nossa equipe?'
);

if (darFeedback) {
  alert('Ótimo, seu feedback foi enviado com sucesso!');
} else {
  alert('Tudo bem, não vamos levar seu feedback em consideração.');
}
