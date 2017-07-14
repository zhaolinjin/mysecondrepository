/**
 * Created by rudy_zhou on 2017/7/11.
 */
//ip
function initServerOverviewChart(){
    var option1 = {
        value:70,//百分比,必填
        title:'CPU',
        backgroundColor:null,
        color:['#4f9ee2','#dcdcdc'],
        fontSize:16,
        domEle:document.getElementById("serverRU_cpuChart")//必填
    };
    var option2 = {
        value:70,//百分比,必填
        title:'内存',
        backgroundColor:null,
        color:['#4f9ee2','#dcdcdc'],
        fontSize:16,
        domEle:document.getElementById("serverRU_memoryChart")//必填
    };
    var option3 = {
        value:70,//百分比,必填
        title:'存储',
        backgroundColor:null,
        color:['#4f9ee2','#dcdcdc'],
        fontSize:16,
        domEle:document.getElementById("serverRU_storageChart")//必填
    };
    var percentPie1 = new PercentPie(option1);
    var percentPie2 = new PercentPie(option2);
    var percentPie3 = new PercentPie(option3);
    percentPie1.init();
    percentPie2.init();
    percentPie3.init();
    var serverRS_cpuChart = echarts.init(document.getElementById('serverRS_cpuChart'));
    var serverRS_memoryChart = echarts.init(document.getElementById('serverRS_memoryChart'));
    var serverRS_storageChart = echarts.init(document.getElementById('serverRS_storageChart'));
    var option21 = {
        title: {
            left:'40%',
            padding: 20,
            textStyle: {
                fontSize: 14,
                color: '#333',
                fontWeight:'lighter'
            }
        },
        grid: {
            left: '4%',
            right: '4%',
            top: '4%',
            containLabel: true
        },
        tooltip : {
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            itemWidth:8,
            itemHeight:8,
            padding:10,
            data:[{name:'总量',icon:'bar'},{name:'已分配',icon:'bar'}],
            bottom:'40',
            textStyle: {color: '#333',fontSize:'12'},
            selected: {
                // 选中'系列1'
                '总量': true,
                // 不选中'系列2'
                '已分配': true,
            },
            selected:'multiple'
        },
        barWidth:'50%',
        calculable : true,
        xAxis : [
            {
                type : 'category',
                // offset:'45',
                nameGap:'middle',
                data : ['1','2'],
                nameGap:'1',
                //设置轴线的属性
                axisLine:{
                    lineStyle:{
                        color:'#ccc',
                        width:1,//这里是为了突出显示加上的
                    }
                },
                axisTick:{
                    show:false,
                    lineStyle:{
                        length:'50',

                    }
                },
                axisLabel:{
                    show:false,

                },
            }
        ],
        yAxis : [
            {
                type : 'value',
                // offset:'-20',
                splitLine:{
                    show:true  ,
                    lineStyle:{
                        color:'#f3f3f3',
                        width: 1
                    }
                },
                axisLine:{
                    lineStyle:{
                        color:'#ccc',
                        width:1,//这里是为了突出显示加上的
                    }
                },
                axisTick:{
                    show:false,

                },
                min:0,
                max:140,
                interval: 20,
                axisLabel: {
                    formatter: '{value}',
                    textStyle:{
                        color:'#333',
                        fontSize:'12',

                    }
                }
            }
        ],
        series : [
            {
                name:'总量',
                type:'bar',
                barGap:"-95%",
                markLine:{
                    silent:'false'
                },
                barCategoryGap:'0',
                itemStyle: {
                    normal: {
                        color: function(params) {
                            // build a color map as your need.
                            var colorList = [
                                '#3db9db','#1bb899'
                            ];
                            return colorList[params.dataIndex]
                        },
                        label: {
                            show: true,//显示柱子上数字显示隐藏
                            position: 'top',
                            formatter:'{c}%',//设置百分比失效
                            textStyle: {
                                color:'#333',
                                fontSize:'12'
                            },
                            formatter:function(params){
                                if(params.value==0){
                                    return '';
                                }else
                                {
                                    return params.value;
                                }
                            }
                        }
                    }
                },
                data:[40, 60],
            },
            {
                name:'已分配',
                type:'bar',
                itemStyle: {
                    normal: {
                        color:'#1bb899'
                    }
                }
            },
        ]
    };
    var option22 = {
        title: {
            left:'40%',
            padding: 20,
            textStyle: {
                fontSize: 14,
                color: '#333',
                fontWeight:'lighter'
            }
        },
        grid: {
            left: '4%',
            right: '4%',
            top: '4%',
            containLabel: true
        },
        tooltip : {
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            itemWidth:8,
            itemHeight:8,
            padding:10,
            data:[{name:'总量',icon:'bar'},{name:'已分配',icon:'bar'}],
            bottom:'40',
            textStyle: {color: '#333',fontSize:'12'},
            selected: {
                // 选中'系列1'
                '总量': true,
                // 不选中'系列2'
                '已分配': true,
            },
            selected:'multiple'
        },
        barWidth:'50%',
        calculable : true,
        xAxis : [
            {
                type : 'category',
                // offset:'45',
                nameGap:'middle',
                data : ['1','2'],
                nameGap:'1',
                //设置轴线的属性
                axisLine:{
                    lineStyle:{
                        color:'#ccc',
                        width:1,//这里是为了突出显示加上的
                    }
                },
                axisTick:{
                    show:false,
                    lineStyle:{
                        length:'50',

                    }
                },
                axisLabel:{
                    show:false,

                },
            }
        ],
        yAxis : [
            {
                type : 'value',
                // offset:'-20',
                splitLine:{
                    show:true  ,
                    lineStyle:{
                        color:'#f3f3f3',
                        width: 1
                    }
                },
                axisLine:{
                    lineStyle:{
                        color:'#ccc',
                        width:1,//这里是为了突出显示加上的
                    }
                },
                axisTick:{
                    show:false,

                },
                min:0,
                max:1050,
                interval: 150,
                axisLabel: {
                    formatter: '{value}',
                    textStyle:{
                        color:'#333',
                        fontSize:'12',

                    }
                }
            }
        ],
        series : [
            {
                name:'总量',
                type:'bar',
                barGap:"-95%",
                markLine:{
                    silent:'false'
                },
                barCategoryGap:'0',
                itemStyle: {
                    normal: {
                        color: function(params) {
                            // build a color map as your need.
                            var colorList = [
                                '#3db9db','#1bb899'
                            ];
                            return colorList[params.dataIndex]
                        },
                        label: {
                            show: true,//显示柱子上数字显示隐藏
                            position: 'top',
                            formatter:'{c}%',//设置百分比失效
                            textStyle: {
                                color:'#333',
                                fontSize:'12'
                            },
                            formatter:function(params){
                                if(params.value==0){
                                    return '';
                                }else
                                {
                                    return params.value;
                                }
                            }
                        }
                    }
                },
                data:[80, 640],
            },
            {
                name:'已分配',
                type:'bar',
                itemStyle: {
                    normal: {
                        color:'#1bb899'
                    }
                }
            },
        ]
    };
    var option23 = {
        title: {
            left:'40%',
            padding: 20,
            textStyle: {
                fontSize: 14,
                color: '#333',
                fontWeight:'lighter'
            }
        },
        grid: {
            left: '4%',
            right: '4%',
            top: '4%',
            containLabel: true
        },
        tooltip : {
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            itemWidth:8,
            itemHeight:8,
            padding:10,
            data:[{name:'总量',icon:'bar'},{name:'已分配',icon:'bar'}],
            bottom:'40',
            textStyle: {color: '#333',fontSize:'12'},
            selected: {
                // 选中'系列1'
                '总量': true,
                // 不选中'系列2'
                '已分配': true,
            },
            selected:'multiple'
        },
        barWidth:'50%',
        calculable : true,
        xAxis : [
            {
                type : 'category',
                // offset:'45',
                nameGap:'middle',
                data : ['1','2'],
                nameGap:'1',
                //设置轴线的属性
                axisLine:{
                    lineStyle:{
                        color:'#ccc',
                        width:1,//这里是为了突出显示加上的
                    }
                },
                axisTick:{
                    show:false,
                    lineStyle:{
                        length:'50',

                    }
                },
                axisLabel:{
                    show:false,

                },
            }
        ],
        yAxis : [
            {
                type : 'value',
                // offset:'-20',
                splitLine:{
                    show:true  ,
                    lineStyle:{
                        color:'#f3f3f3',
                        width: 1
                    }
                },
                axisLine:{
                    lineStyle:{
                        color:'#ccc',
                        width:1,//这里是为了突出显示加上的
                    }
                },
                axisTick:{
                    show:false,

                },
                min:0,
                max:1200,
                interval: 150,
                axisLabel: {
                    formatter: '{value}',
                    textStyle:{
                        color:'#333',
                        fontSize:'12',

                    }
                }
            }
        ],
        series : [
            {
                name:'总量',
                type:'bar',
                barGap:"-95%",
                markLine:{
                    silent:'false'
                },
                barCategoryGap:'0',
                itemStyle: {
                    normal: {
                        color: function(params) {
                            // build a color map as your need.
                            var colorList = [
                                '#3db9db','#1bb899'
                            ];
                            return colorList[params.dataIndex]
                        },
                        label: {
                            show: true,//显示柱子上数字显示隐藏
                            position: 'top',
                            formatter:'{c}%',//设置百分比失效
                            textStyle: {
                                color:'#333',
                                fontSize:'12'
                            },
                            formatter:function(params){
                                if(params.value==0){
                                    return '';
                                }else
                                {
                                    return params.value;
                                }
                            }
                        }
                    }
                },
                data:[1000, 500],
            },
            {
                name:'已分配',
                type:'bar',
                itemStyle: {
                    normal: {
                        color:'#1bb899'
                    }
                }
            },
        ]
    };
    serverRS_cpuChart.setOption(option21,true);
    serverRS_memoryChart.setOption(option22,true);
    serverRS_storageChart.setOption(option23,true);
};