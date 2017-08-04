/**
 * Created by 微观 on 2017/7/31.
 */
tabs_takes.init("vgtabs1");
tabs_takes.init("vgtabs2");


//复制
$(".linkbtn").on("click",function () {
    $(this).siblings('p').children().select();
    document.execCommand("Copy");
})
//开关
$(".aaaa").on("click",".layui-form-switch",function () {
    console.log($(this).find("em").html())
})
var myChart = echarts.init(document.getElementById('timeanalysis'));
// 指定图表的配置项和数据
var option = {
    title: {
        text: '观看时长分析'
    },
    tooltip: {},
    legend: {
        data:['观看时长']
    },
    xAxis: {
        data: ["5分钟以内","5-10分钟","10-30分钟","30-60分钟","60分钟以上"]
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    yAxis: {},
    series: [{
        name: '人数',
        type: 'bar',
        data: [5, 20, 36, 110, 10]
    }]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);







var myChart1 = echarts.init(document.getElementById('peoanalysis'));

option1 = {
    title: {
        text: '在线人数分布'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },

    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    // grid: {
    //     left: '3%',
    //     right: '4%',
    //     bottom: '3%',
    //     containLabel: true
    // },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['3.21','3.33','3.69','4.09','4.20','4.30','4.33','4.56','5.02','5.06']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'观看人数',
            type:'line',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            areaStyle: {normal: {}},
            data:[321,33,9,40,20,30,33,56,20,30]
        }
    ]
};


myChart1.setOption(option1);




var myChart2 = echarts.init(document.getElementById('mapanalysis'));

option2 = {
    title : {
        text: '观看地区分布',
        x:'left'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        // data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:3325, name:'河北'},
                {value:310, name:'天津'},
                {value:234, name:'北京'},
                {value:135, name:'上海'},
                {value:1548, name:'深圳'},{value:1548, name:'山西'},{value:1548, name:'东北'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

myChart2.setOption(option2);













