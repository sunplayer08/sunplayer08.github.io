$(document).ready(function () {
  var maxCount = 5;
  var itemCount = 1;

  $('#add-btn').on('click', function () {
    var element = $('#hidden-element').html();
    if (itemCount < 5) {
      $('.employee-item-list').append(element);
      itemCount += 1;
    }
    if (itemCount === 5) {
      $('.employee-add-container').addClass('hidden');
    }
  });

  $('.main-container').on('click', '.close-btn', function () {
    $(this).parent('.employee-item-container').remove();
    itemCount -= 1;
    if ($('.employee-add-container').hasClass('hidden')) {
      $('.employee-add-container').removeClass('hidden')
    }
  });

  var dom = document.getElementById("chart1");
  var chart1 = echarts.init(dom);
  var app = {};
  option1 = null;
  option1 = {
    title: {
      text: 'DPS对比'
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
        data:['物理DPS','法术DPS']
    },
    toolbox: {
      show: true,
      feature: {
        dataView: {
          show: true,
          readOnly: false
        },
        restore: {
          show: true
        },
        saveAsImage: {
          show: true
        }
      }
    },
    calculable: true,
    xAxis: [
      {
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        }
    ],
    yAxis: [
      {
        type: 'value'
        }
    ],
    series: [
      {
        name: '物理DPS',
        type: 'bar',
        data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
        markPoint: {
          data: [
            {
              name: '最高值',
              value: 182.2,
              xAxis: 7,
              yAxis: 183
            },
            {
              name: '最低值',
              value: 2.3,
              xAxis: 11,
              yAxis: 3
            }
          ]
        },
        markLine: {
          data: [
            {
              type: 'average',
              name: '平均值'
            }
          ]
        }
      },
      {
        name: '法术DPS',
        type: 'bar',
        data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
        markPoint: {
          data: [
            {
              name: '最高值',
              value: 182.2,
              xAxis: 7,
              yAxis: 183
            },
            {
              name: '最低值',
              value: 2.3,
              xAxis: 11,
              yAxis: 3
            }
          ]
        },
        markLine: {
          data: [
            {
              type: 'average',
              name: '平均值'
            }
          ]
        }
      }
    ]
  };

  if (option1 && typeof option1 === "object") {
    chart1.setOption(option1, true);
  }
  
  var dom = document.getElementById("chart2");
  var chart2 = echarts.init(dom);
  var app = {};
  option2 = null;
  option2 = {
    title: {
      text: '击杀时间对比（s）'
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
        data:['物理击杀时间','法术击杀时间']
    },
    toolbox: {
      show: true,
      feature: {
        dataView: {
          show: true,
          readOnly: false
        },
        restore: {
          show: true
        },
        saveAsImage: {
          show: true
        }
      }
    },
    calculable: true,
    xAxis: [
      {
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '物理击杀时间',
        type: 'bar',
        data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
        markPoint: {
          data: [
            {
              name: '最高值',
              value: 182.2,
              xAxis: 7,
              yAxis: 183
            },
            {
              name: '最低值',
              value: 2.3,
              xAxis: 11,
              yAxis: 3
            }
          ]
        },
        markLine: {
          data: [
            {
              type: 'average',
              name: '平均值'
            }
          ]
        }
      },
      {
        name: '法术击杀时间',
        type: 'bar',
        data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
        markPoint: {
          data: [
            {
              name: '最高值',
              value: 182.2,
              xAxis: 7,
              yAxis: 183
            },
            {
              name: '最低值',
              value: 2.3,
              xAxis: 11,
              yAxis: 3
            }
          ]
        },
        markLine: {
          data: [
            {
              type: 'average',
              name: '平均值'
            }
          ]
        }
      }
    ]
  };

  if (option2 && typeof option2 === "object") {
    chart2.setOption(option2, true);
  }
  
  $('#calculator-btn').on('click', function () {
    //计算过程
    var itemCount = $('.employee-item-list .employee-item-container').length;
    var xAxisData = [];
    for(var i = 1; i <= itemCount; i++){
      xAxisData.push("干员" + i);
    }
    var chart1Option = option1;
    var chart2Option = option2;
    var seriesChart1Data1 = [];
    var seriesChart1Data2 = [];
    var seriesChart2Data1 = [];
    var seriesChart2Data2 = [];
      
      var targetLife = $('.target-container').find('.target-life').val();
      targetLife = parseFloat(targetLife);
      targetLife = isNaN(targetLife) ? 0 : targetLife;
      var targetDef = $('.target-container').find('.target-def').val();
      targetDef = parseFloat(targetDef);
      targetDef = isNaN(targetDef) ? 0 : targetDef;
      var targetResistance = $('.target-container').find('.target-resistance').val();
      targetResistance = parseFloat(targetResistance);
      targetResistance = isNaN(targetResistance) ? 0 : targetResistance;
      var reduceDef = $('.target-container').find('.reduce-def').val();
      reduceDef = parseFloat(reduceDef);
      reduceDef = isNaN(reduceDef) ? 0 : reduceDef;
      var lessDef = $('.target-container').find('.less-def').val();
      lessDef = parseFloat(lessDef);
      lessDef = isNaN(lessDef) ? 0 : parseFloat((lessDef/100).toFixed(2));
      var lessResistance = $('.target-container').find('.less-resistance').val();
      lessResistance = parseFloat(lessResistance);
      lessResistance = isNaN(lessResistance) ? 0 : parseFloat((lessResistance/100).toFixed(2));
    
    $('.employee-item-list .employee-item-container').each(function(index) {
      var baseAttack = parseFloat($(this).find('.base-attack').val());
      baseAttack = isNaN(baseAttack) ? 0 : baseAttack;
      var baseAttackSpeed = $(this).find('.base-attack-speed').val();
      baseAttackSpeed = parseFloat(baseAttackSpeed);
      baseAttackSpeed = isNaN(baseAttackSpeed) ? 0 : baseAttackSpeed;
      var attackAddPercent = $(this).find('.attack-add-percent').val();
      attackAddPercent = parseFloat(attackAddPercent);
      attackAddPercent = isNaN(attackAddPercent) ? 0 : parseFloat((attackAddPercent/100).toFixed(2));
      var attackMultiplyPercent = $(this).find('.attack-multiply-percent').val();
      attackMultiplyPercent = parseFloat(attackMultiplyPercent);
      attackMultiplyPercent = isNaN(attackMultiplyPercent) ? 1 : parseFloat((attackMultiplyPercent/100).toFixed(2));
      var baseAttackPlus = $(this).find('.base-attack-plus').val();
      baseAttackPlus = parseFloat(baseAttackPlus);
      baseAttackPlus = isNaN(baseAttackPlus) ? 0 : baseAttackPlus;
      var targetCount = $(this).find('.target-count').val();
      targetCount = parseFloat(targetCount);
      targetCount = isNaN(targetCount) ? 0 : targetCount;
      
      var dph = (baseAttack * (1 + attackAddPercent) + baseAttackPlus) * attackMultiplyPercent;
      var phEffectiveDps = (dph - targetDef * (1 - lessDef) - reduceDef) * baseAttackSpeed;
      var mgEffectiveDps = dph * (100 - (targetResistance * (1 - lessResistance)))/100 * attackMultiplyPercent * baseAttackSpeed;
      seriesChart1Data1.push(phEffectiveDps);
      seriesChart1Data2.push(mgEffectiveDps);
      var phKillTime = parseFloat((targetLife / phEffectiveDps).toFixed(2));
      var mgKillTime = parseFloat((targetLife / mgEffectiveDps).toFixed(2));
      seriesChart2Data1.push(phKillTime);
      seriesChart2Data2.push(mgKillTime);
    });
    
    var ph1MaxIndex = 0;
    var ph1MaxDps = 0;
    var ph1MinIndex = 0;
    var ph1MinDps = 0;
    var mg1MaxIndex = 0;
    var mg1MaxDps = 0;
    var mg1MinIndex = 0;
    var mg1MinDps = 0;
    var ph2MaxIndex = 0;
    var ph2MaxDps = 0;
    var ph2MinIndex = 0;
    var ph2MinDps = 0;
    var mg2MaxIndex = 0;
    var mg2MaxDps = 0;
    var mg2MinIndex = 0;
    var mg2MinDps = 0;
    for(var i = 0; i< itemCount; i++){
      if(i === 0){
         ph1MaxDps = seriesChart1Data1[0]
      }
      if(ph1MaxDps < seriesChart1Data1[i]){
        ph1MaxDps = seriesChart1Data1[i];
        ph1MaxIndex = i;
      }
      if(i === 0){
         ph1MinDps = seriesChart1Data1[0]
      }
      if(ph1MinDps > seriesChart1Data1[i]){
        ph1MinDps = seriesChart1Data1[i];
        ph1MinIndex = i;
      }
      if(i === 0){
         mg1MaxDps = seriesChart1Data2[0]
      }
      if(mg1MaxDps < seriesChart1Data2[i]){
        mg1MaxDps = seriesChart1Data2[i];
        mg1MaxIndex = i;
      }
      if(i === 0){
         mg1MinDps = seriesChart1Data2[0]
      }
      if(mg1MinDps > seriesChart1Data2[i]){
        mg1MinDps = seriesChart1Data2[i];
        mg1MinIndex = i;
      }
      
      if(i === 0){
         ph2MaxDps = seriesChart2Data1[0]
      }
      if(ph2MaxDps < seriesChart2Data1[i]){
        ph2MaxDps = seriesChart2Data1[i];
        ph2MaxIndex = i;
      }
      if(i === 0){
         ph2MinDps = seriesChart2Data1[0]
      }
      if(ph2MinDps > seriesChart2Data1[i]){
        ph2MinDps = seriesChart2Data1[i];
        ph2MinIndex = i;
      }
      if(i === 0){
         mg2MaxDps = seriesChart2Data2[0]
      }
      if(mg2MaxDps < seriesChart2Data2[i]){
        mg2MaxDps = seriesChart2Data2[i];
        mg2MaxIndex = i;
      }
      if(i === 0){
         mg2MinDps = seriesChart2Data2[0]
      }
      if(mg2MinDps > seriesChart2Data2[i]){
        mg2MinDps = seriesChart2Data2[i];
        mg2MinIndex = i;
      }
    }
    debugger;
    chart1Option['xAxis'] = [{
      type: 'category',
      data: xAxisData
    }];
    chart1Option['series'] = [{
          name: '物理DPS',
          type: 'bar',
          data:seriesChart1Data1,
          markPoint: {
            data: [
              {
                name: '最高值',
                value: ph1MaxDps + '',
                xAxis: ph1MaxIndex,
                yAxis: ph1MaxDps
              },
              {
                name: '最低值',
                value: ph1MinDps + '',
                xAxis: ph1MinIndex,
                yAxis: ph1MinDps
              }
            ]
          },
          markLine: {
            data: [{type: 'average',name: '平均值'}]
          }
        },{
          name: '法术DPS',
          type: 'bar',
          data:seriesChart1Data2,
          markPoint: {
            data: [
              {
                name: '最高值',
                value: mg1MaxDps + '',
                xAxis: mg1MaxIndex,
                yAxis: mg1MaxDps
              },
              {
                name: '最低值',
                value: mg1MinDps + '',
                xAxis: mg1MinIndex,
                yAxis: mg1MinDps
              }
            ]
          },
          markLine: {
            data: [{type: 'average',name: '平均值'}]
          }
        }];
    
    chart2Option['xAxis'] = [{
      type: 'category',
      data: xAxisData
    }];
    chart2Option['series'] = [{
          name: '物理击杀时间',
          type: 'bar',
          data:seriesChart2Data1,
          markPoint: {
            data: [
              {
                name: '最高值',
                value: ph2MaxDps + '',
                xAxis: ph2MaxIndex,
                yAxis: ph2MaxDps
              },
              {
                name: '最低值',
                value: ph2MinDps + '',
                xAxis: ph2MinIndex,
                yAxis: ph2MinDps
              }
            ]
          },
          markLine: {
            data: [{type: 'average',name: '平均值'}]
          }
        },{
          name: '法术击杀时间',
          type: 'bar',
          data:seriesChart2Data2,
          markPoint: {
            data: [
              {
                name: '最高值',
                value: mg2MaxDps + '',
                xAxis: mg2MaxIndex,
                yAxis: mg2MaxDps
              },
              {
                name: '最低值',
                value: mg2MinDps + '',
                xAxis: mg2MinIndex,
                yAxis: mg2MinDps
              }
            ]
          },
          markLine: {
            data: [{type: 'average',name: '平均值'}]
          }
        }];
    
    chart1.setOption(chart1Option, true);
    chart2.setOption(chart2Option, true);
    
    if($('#chart1').hasClass('hidden')){
       $('#chart1').removeClass('hidden')
    }
    if($('#chart2').hasClass('hidden')){
       $('#chart2').removeClass('hidden')
    }
  });
});
