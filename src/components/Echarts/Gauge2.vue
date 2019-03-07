<template>
    <div ref="myChart"></div>
</template>

<script>
    export default {
        name: "Gauge2",
        data(){
            return{

            }
        },
        props:['run'],
        watch:{
            run(){
                this.resizes()
            }
        },
        methods:{
            getOption(){
                return{

                    grid:{
                        left: '0',
                        right: '0',
                        bottom: '0',
                        top:'20%'
                    },
                    series: [
                        {
                            name: '业务指标',
                            type: 'gauge',
                            detail: {formatter:'{value}%',offsetCenter:['0','80%'],color:'#6EFEEC',textStyle:{fontSize:10}},
                            data: [{value:this.run}],
                             itemStyle: {
                                color: '#294CBD',
                            },

                            splitLine:{
                                show:false
                            },
                            splitNumber:{
                                show:false
                            },
                            pointer:{
                                length:'50%',
                                offsetCenter:['40%','80%']
                            },
                            radius: '100%',

                            title:{
                                offsetCenter:['-120%','-100%'],
                                fontSize:18,
                                color:'#5BB7B7'
                            },
                            axisTick:{
                                length:0
                            },
                            axisLine:{
                                lineStyle:{
                                    color:[[0.35, '#098894'], [0.65, '#1BC7B9'], [1, '#6EFEEC']],
                                    width:5,
                                }
                            },
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

<style scoped>
    div{
        width: 100%;
        height: 100%;
    }
</style>