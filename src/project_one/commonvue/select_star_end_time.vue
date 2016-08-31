<style lang="sass" scoped> 
    .btn-group{
        .item{
            position:relative;
            .iconfont{
                position:absolute;
                left:15px;
                top:0px;
            }
            a{
                padding-left:35px;
            }

        }

    }

</style>

<template>
   <div class="input-prepend input-group reservation">
        <div class="add-on input-group-addon"><i class="glyphicon glyphicon-calendar fa fa-calendar"></i></div>
        <input type="text" datatype="*" name="reservation" class="form-control reservation-text" placeholder="{{placeholder}}" />
    </div>
</template>
<script type="es6">
    export default{
        props:{
            //input placeholder 提示
            placeholder:{
                type:String,
                default:'选择时间区间'
            },
            //是否是单选择器
            singledatepicker:{
                type:String,
                default:'false'
            },
            //获得的开始时间
            startime:{
               type:String, 
               towWay:true
            },
            //获得的结束时间
            endtime:{
                type:String,
                towWay:true
            },
            //时间选择器有效时间
            effectiveTime:{
                type:String,
            },
            //时间选择器的可选最小时间 例如 2016-12-15
            minDate:{
                type:String,
                default:false
            },
            //时间选择器的可选最大时间 例如 2016-12-30
            maxDate:{
                type:String,
                default:false
            }
        },
        ready(){
            var This=this;
            var timespace="";
            if(this.effectiveTime){
                timespace=common.time()+parseInt(this.effectiveTime)*86400000
                timespace=new Date(timespace).date('y-m-d')
            };
            
            //时间选择器控件
            var singleDatePicker=this.singledatepicker=='false'?false:true;
            $('div.reservation').daterangepicker({
                format: 'YYYY-MM-DD',
                singleDatePicker: singleDatePicker,
                maxDate:timespace,
                minDate:This.minDate,
                maxDate:This.maxDate
            }, 
            function(start, end, label) {
                console.log(start+'=='+end);
                This.startime=Date.parse(start.toISOString()).toString();
                This.endtime=Date.parse(end.toISOString()).toString();
                This.timeqj=start.format('YYYY-MM-DD')+'/'+end.format('YYYY-MM-DD')
            });
        },
    }
</script>
<style>
   
</style>