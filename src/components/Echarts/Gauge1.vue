<template>
    <div ref="myChart"></div>
</template>

<script>
    export default {
        name: "Gauge1",
        data(){
            return{

            }
        },
        props:['stock'],
        watch:{
            stock(){
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
                  },
                  series: [
                      {
                          name: '业务指标',
                          type: 'gauge',
                          detail: {formatter:'{value}%',offsetCenter:['0','80%'],color:'#FC7CAB',textStyle:{fontSize:10}},
                          data: [{value:this.stock}],
                          itemStyle: {
                              color: '#AD3119',
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
                          textStyle: {
                              fontSize: '10',
                              fontWeight: 'bold',
                              lineHeight:'20'
                          },
                          title:{
                              offsetCenter:['80%','-40%'],
                              fontSize:12
                          },
                          axisTick:{
                              length:0
                          },
                          axisLine:{
                              lineStyle:{
                                  color:[[0.35, '#951247'], [0.65, '#D22A65'], [1, '#FC7CAB']],
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