<template>
    <div ref="myChart"></div>
</template>

<script>
    export default {
        name: "Bar",
        data(){
            return{

            }
        },
        props:['status'],
        watch:{
          status(){
              this.resizes()
          }
        },
        methods:{
            getOption(){
                return{
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    legend: {
                        data: ['空闲', '运行', '保养', '维修'],
                        textStyle:{
                            color:['#ccc','red'],
                            fontSize:'10'
                        },
                    },
                    grid: {
                        top: 0,
                        bottom: 20,
                        left:40,
                        right:40
                    },
                    xAxis: [
                        {
                            type: 'category',
                            axisTick: {show: false},
                            data: ['实01', '实02', '实03', '实04', '实05','实06','实07'],
                            lineStyle: {
                                color: '#ccc',
                                fontSize:'5'
                            },
                            axisLine: {
                                onZero: false,
                                lineStyle: {
                                    color: '#ccc'
                                }
                            },
                        }
                    ],
                    yAxis: [
                        {

                            name :'单位（台）',
                            nameTextStyle:{
                                color:'#ccc'
                            },
                            type: 'value',
                            axisLine:{
                                color:'#273693'
                            },
                            axisLabel:{
                                color:'#273693'
                            },
                            splitLine:{
                                lineStyle:{
                                    color:'#273693'
                                }
                            }
                        }
                    ],
                    series: [
                        {
                            name: '空闲',
                            type: 'bar',
                            barGap: 0.2,
                            barWidth:5,

                            data: this.status[0],
                            color:'#FFC206'},
                        {
                            name: '运行',
                            type: 'bar',
                            barWidth:5,
                            data: this.status[1],
                            color:'#1BD861'
                        },
                        {
                            name: '保养',
                            type: 'bar',
                            barWidth:5,
                            data: this.status[2],
                            color:'#0B8AC4'
                        },
                        {
                            name: '维修',
                            type: 'bar',
                            barWidth:5,
                            data: this.status[3],
                            color:'#BF0D4C'
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