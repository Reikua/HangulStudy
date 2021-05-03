/* ------------------------------------------------
* 変数宣言
-------------------------------------------------- */
var rand;
var selected_chinese_num;
var selected_unique_num;
var chinese_numbers = ['', '일', '이', '삼', '사', '오', '육', '칠', '팔', '구', '십'];
var unique_ones_places = ['', '하나', '둘', '셋', '넷', '다섯', '여섯', '일곱', '여덟', '아홉'];
var unique_tens_places = ['', '열', '스물', '서른', '마흔', '쉰', '예순', '일흔', '여든', '아흔'];

/* ------------------------------------------------
* 最初に実行しておくもの
-------------------------------------------------- */
rand_num();


/* ------------------------------------------------
* 数字をランダムで生成する関数
-------------------------------------------------- */
function rand_num() {
  rand = Math.floor(Math.random() * 100);

  /*-- --- 漢数詞に対する分岐 --- -- */
  if (rand === 0) {
    selected_chinese_num = '공';
  } else if (rand <= 10) {
    selected_chinese_num = chinese_numbers[rand];
  } else if (rand >= 11 && rand <= 19) {
    var ones_place = Number(String(rand).substr(-1));
    selected_chinese_num = chinese_numbers[10] + chinese_numbers[ones_place];
  } else if (rand >= 20 && rand <= 99) {
    var tens_place = Number(String(rand).substr(-2, 1));
    var ones_place = Number(String(rand).substr(-1));
    selected_chinese_num = chinese_numbers[tens_place] + chinese_numbers[10] + chinese_numbers[ones_place];
  }

  /*-- --- 固有数詞に対する分岐 --- -- */
  if (rand === 0) {
    selected_unique_num = '공';
  } else if (rand <= 9) {
    selected_unique_num = unique_ones_places[rand];
  } else if (rand >= 10) {
    var unique_tens_place = Number(String(rand).substr(-2, 1));
    var unique_ones_place = Number(String(rand).substr(-1));
    selected_unique_num = unique_tens_places[unique_tens_place] + unique_ones_places[unique_ones_place];
  }
}

/* ------------------------------------------------
* 問題の音声を読み上げる関数
-------------------------------------------------- */
$('.listen_chinese').click(function() {
  let uttearnce = new SpeechSynthesisUtterance();
  uttearnce.text = selected_chinese_num;
  uttearnce.volume = 1;
  uttearnce.rate = $(this).attr('value');
  uttearnce.pitch = 1;
  uttearnce.lang = 'ko-KR'
  window.speechSynthesis.speak(uttearnce);
});


/* ------------------------------------------------
* 問題の音声を読み上げる関数
-------------------------------------------------- */
$('.listen_unique').click(function() {
  let uttearnce = new SpeechSynthesisUtterance();
  uttearnce.text = selected_unique_num;
  uttearnce.volume = 1;
  uttearnce.rate = $(this).attr('value');
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
  $('#text_hangul').text('(' + selected_chinese_num + ',' + selected_unique_num + ')');
});

/* ------------------------------------------------
* 次の問題へ移動する関数
-------------------------------------------------- */
$('#next').click(function() {
  $(this).hide();
  $('#answer').show();
  $('#text').text('???');
  $('#text_hangul').text('');
  rand_num();
});
