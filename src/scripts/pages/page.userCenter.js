$(function(){
    /**
     * 点击隐藏钱
     */
    $('#m-eyes').click(function(){
        var eyesVal = $(".eye-val");
        eyesVal.each(function(){
            if($(this).html() == "***"){
                $(this).html($(this).data('account'));
                $("#m-eyes i").removeClass("icon-close-eye");
                $("#m-eyes i").addClass("icon-look ");
            } else{
                $(this).html("***");
                $("#m-eyes i").addClass("icon-close-eye");
                $("#m-eyes i").removeClass("icon-look ");
            }
        })
        // console.log(eyesVal);
    });

    //收益统计图表js
    var testData1 = {
            name:'合计',
            type:'line',
            stack: '总量',
            data:[120, 132, 101, 134, 90, 230, 210, 190, 300],
            smooth: true,
            lineStyle: {
                color: 'rgb(92, 184, 92)',
                width: 4,
                shadowColor: 'rgba(92, 184, 92, .53)',
                shadowBlur: 9,
                shadowOffsetY: 4
            },
            itemStyle: {
                color: 'rgb(92, 184, 92)',
                borderWidth: 2
            },
            symbolSize: 10,
            areaStyle: {
                normal: {
                    //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ 
                        offset: 0,
                        color: 'rgba(92, 184, 92,0.5)'
                    }, {
                        offset: 1,
                        color: 'rgba(92, 184, 92,0.00)'
                    }])
                }
            }
        };
        var testData2 = {
            name:'利息',
            type:'line',
            stack: '总量',
            data:[150, 232, 201, 154, 190, 330, 410, 898, 799],
            smooth: true,
            lineStyle: {
                color: 'rgb(92, 184, 92)',
                width: 4,
                shadowColor: 'rgba(92, 184, 92, .53)',
                shadowBlur: 9,
                shadowOffsetY: 4
            },
            itemStyle: {
                color: 'rgb(92, 184, 92)',
                borderWidth: 2
            },
            symbolSize: 10,
            areaStyle: {
                normal: {
                    //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ 
                        offset: 0,
                        color: 'rgba(92, 184, 92,0.39)'
                    }, {
                        offset: 1,
                        color: 'rgba(92, 184, 92,0.00)'
                    }])
                }
            },
        };
        var seriesItem = {
            profit1: testData1,
            profit2: testData2,
            profit3: testData1,
            date1: testData2,
            date2: testData1,
            date3: testData2
        };
        var option = {
            backgroundColor: 'rgba(255, 255, 255, 0)',
            /*title : {
                text: '收益类型：',
            },*/
            tooltip : {
                trigger: 'axis',
                /*formatter: function (params) {
                    var data = params.data || [0, 0];
                    return data[0].toFixed(2) + ', ' + data[1].toFixed(2);
                }*/
            },
            grid: {
                show: true,
                left: '7%',
                right: '5%'
            },
            /*legend: {
                x: 'left',
                data:['合计','本金','利息']
            },*/
            toolbox: {
                show : false,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : [
                        '2018-04-02',
                        '2018-04-03',
                        '2018-04-04',
                        '2018-04-05',
                        '2018-04-06',
                        '2018-04-07',
                        '2018-04-08',
                        '2018-04-09',
                        '2018-04-10'
                    ],
                    axisLabel: {
                        color: '#333',
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#666'
                        }
                    },
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    axisLabel: {
                        color: '#333',
                        formatter: '{value} 元'
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#666'
                        }
                    }
                }
            ],
            series : [
                seriesItem['profit1']
            ]
        };
        //var eChartWrap = document.getElementById('j-echart-wrap');
        var eChartCont = document.getElementById('j-echart-cont');

        var hdType = document.getElementById('j-hd-type');
        var profitType = document.getElementById('j-profit-type');
        var dateType = document.getElementById('j-date-type');
        
        hdType.onclick = function(e){
            e = e || window.event;
            var target = e.target || e.srcElement;
            if(target){
                var nodeName = target.nodeName.toLowerCase();
                if(nodeName === 'a'){
                    var key = target.getAttribute('key');
                    var childs = target.parentNode.children;
                    if(childs){
                        var i = 0, len = childs.length, item, clas;
                        for(;i<len;i++){
                            item = childs[i];
                            clas = (item.getAttribute('class') || item.className).replace(' active', '');
                            item.setAttribute('class', clas);
                        }
                        target.setAttribute('class', (target.getAttribute('class') || target.className) + ' active');
                        renderChart(key);
                    }
                }
            }
        };

        var renderChart = function(key){
            console.info(key);
            option.series = seriesItem[key];
            myChart.setOption(option);
        };

        var myChart = echarts.init(eChartCont);

        myChart.setOption(option);


});