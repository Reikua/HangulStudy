/* ------------------------------------------------
* 変数宣言
-------------------------------------------------- */
var rand;

/* ------------------------------------------------
* 最初に実行しておくもの
-------------------------------------------------- */
rand = Math.floor(Math.random() * 100);

/* ------------------------------------------------
* 問題の音声を読み上げる関数
-------------------------------------------------- */
$('#listen').click(function() {
  let uttearnce = new SpeechSynthesisUtterance();
  uttearnce.text = rand;
  uttearnce.volume = 1;
  uttearnce.rate = 1;
  uttearnce.pitch = 1;
  uttearnce.lang = 'ko-KR'
  window.speechSynthesis.speak(uttearnce);
});

/* ------------------------------------------------
* 問題の音声をゆっくり読み上げる関数
-------------------------------------------------- */
$('#listen_slow').click(function() {
  let uttearnce = new SpeechSynthesisUtterance();
  uttearnce.text = rand;
  uttearnce.volume = 1;
  uttearnce.rate = 0.3;
  uttearnce.pitch = 1;
  uttearnce.lang = 'ko-KR'
  window.speechSynthesis.speak(uttearnce);
});

/* ------------------------------------------------
* 問題の答えを表示する関数
-------------------------------------------------- */
$('#answer').click(function() {
  $(this).hide();
  $('#next').show();
  $('#text').text(rand);
});

/* ------------------------------------------------
* 次の問題へ移動する関数
-------------------------------------------------- */
$('#next').click(function() {
  $(this).hide();
  $('#answer').show();
  $('#text').text('???');
  rand = Math.floor(Math.random() * 100);
});
