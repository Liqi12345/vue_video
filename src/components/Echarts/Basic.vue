<template>
    <div  ref="myChart">

    </div>
</template>

<script>
    export default {
        name: "Basic",
        data(){
            return{
                colors: ['#16C2B6', '#ccc', '#675bba']
            }
        },

        methods:{
            getOption(){
                const vm =this;
                return{
                    grid: {
                        top: 18,
                        bottom: 15,
                        left:20,
                        right:5
                    },
                    tooltip: {
                        trigger: 'none',
                        axisPointer: {
                            type: 'cross'
                        }
                    },
                    legend: {
                        top:0,
                        data:['设备维修率', '设备保养率'],
                        textStyle:{
                            color:'#ccc',
                            fontSize:'8'
                        },
                    },

                    xAxis: [
                        {
                            type: 'category',
                            axisTick: {
                                alignWithLabel: true
                            },
                            axisLine: {
                                onZero: false,
                                lineStyle: {
                                    color: this.colors[1],

                                }
                            },
                            axisLable:{
                                fontSize:'8'
                            },
                            axisPointer: {
                                label: {
                                    formatter: function (params) {
                                        return '维修率  ' + params.value
                                    }
                                }
                            },
                            data: [ {
                                    value: '8月',
                                    textStyle:
                                        {
                                            fontSize: 8,
                                            color: '#ccc'
                                        }
                                    },
                                {
                                    value: '9月',
                                    textStyle:
                                        {
                                            fontSize: 8,
                                            color: '#ccc'
                                        }
                                },
                                {
                                    value: '10月',
                                    textStyle:
                                        {
                                            fontSize: 8,
                                            color: '#ccc'
                                        }
                                },
                                {
                                    value: '11月',
                                    textStyle:
                                        {
                                            fontSize: 8,
                                            color: '#ccc'
                                        }
                                },
                                {
                                    value: '12月',
                                    textStyle:
                                        {
                                            fontSize: 8,
                                            color: '#ccc'
                                        }
                                },
                                {
                                    value: '1月',
                                    textStyle:
                                        {
                                            fontSize: 8,
                                            color: '#ccc'
                                        }
                                }]
                        },
                        {
                            type: 'category',
                            axisTick: {
                                alignWithLabel: true
                            },
                            axisLine: {
                                onZero: false,
                                lineStyle: {
                                    color: '#273693',
                                },
                            },
                            axisPointer: {
                                label: {
                                    formatter: function (params) {
                                        return '保养率  ' + params.value
                                    }
                                }
                            },


                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            splitLine:{
                                lineStyle:{
                                    color:'#273693'
                                }
                            },
                            axisLine:{
                                color:'#ccc'
                            },
                            axisLabel:{
                                color:'#ccc'
                            }
                        }
                    ],
                    series: [
                        {
                            name:'设备维修率',
                            type:'line',
                            xAxisIndex: 1,
                            smooth: true,
                            areaStyle: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0, color: 'rgba(0,255,255,0.67)'  // 0% 处的颜色
                                    }, {
                                        offset: 1, color: 'rgba(63, 253, 252, 0)' // 100% 处的颜色
                                    }],
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: '#00ffff'
                                }
                            },
                            data: [7.9, 8.2, 8, 9.3, 7.9, 7.5]
                        },
                        {
                            name:'设备保养率',
                            type:'line',
                            smooth: true,
                            areaStyle: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0, color:  'rgba(108, 236, 61, 0.76)'  // 0% 处的颜色
                                    }, {
                                        offset: 1, color:  'rgba(63, 253, 252, 0)' //  // 100% 处的颜色
                                    }],
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: '#00FF54'
                                }
                            },
                            data:  [6.4,4.2, 4.8, 5.7,5.8,5.2]
                        }
                    ]
                }
            },
            resizes(){

                    const vm = this;
                    this.myChart = this.echarts.init(vm.$refs.myChart)
                    this.myChart.setOption(this.getOption())
                    setTimeout(function () {
                        vm.myChart.resize()
                    },0)
                    window.addEventListener('resize',function(){
                        vm.myChart.resize()
                    })
            }
        },
        mounted(){
            this.resizes()
        }
    }
</script>

<style scoped lang="scss">
    div{
        width: 100%;

        height: 100%;
    }
</style>