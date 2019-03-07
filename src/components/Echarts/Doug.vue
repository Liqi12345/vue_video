<template>
    <div class="myChart">
        <div class="charts" ref="myChart"></div>
        <div class="span" :style="{color:color}">{{text}}</div>
    </div>
</template>

<script>
    export default {
        name: "Doug",
        data(){
            return{
                color:'',
                text:''
            }
        },
        props:['data'],
        created(){
            this.color = this.data.color
            this.text = this.data.name
        },
        watch:{
          data(){
              this.resizes()
            }
        },
        methods:{
            getOption(){
                return{
                    title:{
                        text:this.data.lab,
                        textStyle:{
                            color:this.data.color,
                            fontSize:'10',
                            fontWeight:400,
                            align:'center'
                        },

                    },
                    grid: {
                        top: 0,
                        left:0,
                        bottom:0,
                        right:5
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        x: 'right',
                        data:['未完成',this.data.progress],
                        textStyle:{
                            color:'#ccc',
                            fontSize:'8'
                        }
                    },
                    series: [
                        {
                            color:[this.data.color,'rgba(255,255,255,0.3)'],
                            name:'this.data.lab',
                            type:'pie',
                            clockwise:false,
                            radius: ['50%', '60%'],
                            avoidLabelOverlap: true,
                            label: {
                                position: 'center',
                                show: false,
                                textStyle: {
                                    fontSize: '10',
                                }

                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data:[

                                {value:this.data.progress.substr(0,this.data.progress.length-1), name:this.data.progress,label:{show:true,name:'50',borderRadius:'40%',}},
                                {value:100 - this.data.progress.substr(0,this.data.progress.length-1),name:'未完成'},

                            ]
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

<style  scoped lang="scss">
    .myChart{
        width: 100%;
        height:100%;
    }
    .span{
        font-size: 0.2rem;
        text-align: center;
    }

    .charts{
        height: 2.5rem;
        width: 100%;
        /deep/ canvas{
            width: 100% !important;
            height:100%  !important;
        }
    }
</style>
<style>

</style>