$(document).ready(function () {
  $('.ui.dropdown.choose-charater').dropdown({
    onChange: function(value, text, $selectedItem) {
      $('#avatar').attr('style', 'background-image: url(./assets/images/' + value + '.png);');
      var skillDropdwon = $('.character-container .ui.dropdown.choose-skill');
      skillDropdwon.dropdown('clear');
      if(skillDropdwon.hasClass('disabled')){
        skillDropdwon.removeClass('disabled');
      }
      $('.character-container .level').val(NaN);
      $('.character-container .level').attr('disabled', false);
      $('.character-container .trust').val(NaN);
      $('.character-container .trust').attr('disabled', false);
      $('.character-container .choose-elite').dropdown('clear');
      $('.character-container .choose-elite').removeClass('disabled');
      $('.character-container .choose-potential').dropdown('clear');
      $('.character-container .choose-potential').removeClass('disabled');
      $('.character-container .choose-skill-level').dropdown('clear');
      $('.character-container .choose-skill-level').removeClass('disabled');
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
  $('.checkbox').checkbox({
    // check all children
    onChecked: function(e) {
      var partyLine = $(this).parent('.checkbox').parent('.flex-container').parent('.party-buff-one-col');
      partyLine.removeClass('unchecked');
      partyLine.find('.level').attr('disabled', false);
      partyLine.find('.trust').attr('disabled', false);
      partyLine.find('.choose-elite').removeClass('disabled');
      partyLine.find('.choose-potential').removeClass('disabled');
      partyLine.find('.choose-skill-level').removeClass('disabled');
    },
    // uncheck all children
    onUnchecked: function() {
      var partyLine = $(this).parent('.checkbox').parent('.flex-container').parent('.party-buff-one-col');
      partyLine.addClass('unchecked');
      partyLine.find('.level').attr('disabled', true);
      partyLine.find('.trust').attr('disabled', true);
      partyLine.find('.choose-elite').addClass('disabled');
      partyLine.find('.choose-potential').addClass('disabled');
      partyLine.find('.choose-skill-level').addClass('disabled');
    } 
  });
  
  $('.choose-target').dropdown({
    onChange: function(value, text, $selectedItem) {
      //TODO 取得怪物数据
      switch(value){
        case '1':
          $('.target-info').html('耐久：S &nbsp;&nbsp; 攻击力：S &nbsp;&nbsp; 防御力：B &nbsp;&nbsp; 法术抗性：B');
          break;
        case '2':
          $('.target-info').html('耐久：S &nbsp;&nbsp; 攻击力：A+ &nbsp;&nbsp; 防御力：C &nbsp;&nbsp; 法术抗性：B'); 
          break;
        case '3':
          $('.target-info').html('耐久：A &nbsp;&nbsp; 攻击力：B &nbsp;&nbsp; 防御力：D &nbsp;&nbsp; 法术抗性：A'); 
          break;
      }
    }
  });
});
