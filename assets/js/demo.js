$(document).ready(function () {
  $('.ui.dropdown.choose-charater').dropdown({
    onChange: function(value, text, $selectedItem) {
      $('#avatar').attr('style', 'background-image: url(./assets/images/' + value + '.png);');
      var skillDropdwon = $('.ui.dropdown.choose-skill');
      skillDropdwon.dropdown('clear');
      if(skillDropdwon.hasClass('disabled')){
        skillDropdwon.removeClass('disabled');
      }
      $('.character-container .level').val(NaN);
      $('.character-container .level').attr('disabled', false);
      $('.character-container .trust').val(NaN);
      $('.character-container .trust').attr('disabled', false);
      $('.choose-elite').dropdown('clear');
      $('.choose-elite').removeClass('disabled');
      $('.choose-potential').dropdown('clear');
      $('.choose-potential').removeClass('disabled');
      $('.choose-skill-level').dropdown('clear');
      $('.choose-skill-level').removeClass('disabled');
      //TODO 取得技能数据
      switch(value){
        case '001':
          $('.choose-skill .menu').html(
            '<div class="item" data-value="1">攻击力强化·γ型</div>' +
            '<div class="item" data-value="2">天马视域</div>')  
          break;
        case '004':
          $('.choose-skill .menu').html(
            '<div class="item" data-value="1">霰射弹头</div>' +
            '<div class="item" data-value="2">高爆弹头</div>')  
          break;
      }
    }
  });
  $('.ui.dropdown.choose-elite').dropdown();
  $('.ui.dropdown.choose-potential').dropdown();
  $('.ui.dropdown.choose-skill').dropdown();
  $('.ui.dropdown.choose-skill-level').dropdown();
  $('.checkbox').checkbox()
});
