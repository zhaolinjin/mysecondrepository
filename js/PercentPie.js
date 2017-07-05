/**
 * Created by Administrator on 2017/6/27 0027.
 */
function PercentPie(option){
    this.backgroundColor = option.backgroundColor||'#fff';
    this.color           = option.color||['#38a8da','#d4effa'];
    this.fontSize        = option.fontSize||12;
    this.domEle          = option.domEle;
    this.value           = option.value;
    this.title           = option.title;
}

PercentPie.prototype.init = function(){
    var _that = this;
    var option = {
        backgroundColor:_that.backgroundColor,
        color:_that.color,
        title: {
            text: _that.title,
            bottom:'1%',
            x:'center',
            textAlign:'center',
            textStyle:{
                color: '#333',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontFamily: 'sans-serif',
                fontSize: 14,
            }
        },
        grid: {
            left: '4%',
            right: '4%',
            bottom: '1%',
            containLabel: true
        },
        series: [{
            name: '来源',
            type: 'pie',
            center:['47%','50%'],
            radius: ['60%', '75%'],
            avoidLabelOverlap: false,
            hoverAnimation:false,
            label: {
                normal: {
                    show: false,
                    position: 'center',
                    textStyle: {
                        fontSize: _that.fontSize,
                        fontWeight: 'bold'
                    },
                    formatter:'{b}\n{c}%'
                },
            },
            data: [{
                value: _that.value,
                name: _that.name,
                label:{
                    normal:{
                        show:true
                    }
                }
            },
                {
                    value: 100-_that.value,
                    name: ''
                }
            ]
        }]
    };

    echarts.init(_that.domEle).setOption(option);
};
