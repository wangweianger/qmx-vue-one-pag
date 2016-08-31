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
   <div class="btn-group but-select-group">
      <button type="button" class="btn btn-default" v-text="titleStr"></button>
      <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span class="caret" ></span>
      </button>
      <ul class="dropdown-menu">
        <li v-for="item in list" class="item"><span class="iconfont green hide">&#xe60a;</span><a v-on:click="selectItem($event,item)" href="javascript:void(0)" v-text="item.name"></a></li>
      </ul>
    </div>
</template>
<script type="es6">
    export default{
        props:{
            title:{
               type:String, 
            },
            list:{
                type:Array,
            },
            choselist:{
               type:Array, 
            }
        },
        data(){
            return {
                titleStr:this.title
            }
        },
        methods: {
            selectItem($event,item){
                $event.stopPropagation();
                var isIn=common.isInArrayAndIndex(this.choselist,item.name,'name')
                if(isIn.isin){
                    $($event.target).parent('li').find('span').removeClass('show').addClass('hide');
                    $($event.target).removeClass('green')
                    this.choselist.splice(isIn.index,1)
                }else{
                    $($event.target).parent('li').find('span').removeClass('hide').addClass('show');
                    $($event.target).addClass('green')
                    this.choselist.push(item)
                }
                if(this.choselist.length){
                    this.titleStr=common.getArrsItems(this.choselist,'name')
                }else{
                    this.titleStr=this.title;
                }
                console.log(JSON.stringify(this.choselist))
            }
        },
        ready(){
           
        },
    }
</script>
