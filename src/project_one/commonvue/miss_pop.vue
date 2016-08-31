<style scoped lang="sass">
    .prop-box {
        width: 100%;
        height: 100%;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 10000;
        animation: popScaleShow 300ms linear;
        -webkit-animation: popScaleShow 300ms linear;
        .prop-mark {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            background: rgba(0,0,0,.6);
            z-index: 999;
    }
        .prop-mainbox {
            position: fixed;
            left: 50%;
            top: 50%;
            min-width: 100px;
            min-height: 50px;
            overflow: hidden;
            border-radius: 4px;
            text-align: center;
            line-height: 50px;
            max-width: 90%!important;
            transform: translate(-50%,-50%);
            background: #fff;
            z-index: 1000;
    }
    }
</style>
<template>
    <div class="prop-box" v-if="show">
        <div class="prop-mark" @click.stop="clickMaskClose"></div>
        <div class="prop-mainbox" v-bind:style="setMiddle">
            <div class="prop-container">
                <span>{{{defaultData.content}}}</span>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        //父组件传递过来的参数
        props: {
            options: {
                type: Object
            },
            show: {
                type: Boolean
            }
        },
        //本组件数据
        data:function(){
            return {
                defaultData:{
                    content:this.options.content || "操作成功" ,
                    autoClose:this.options.autoClose || false,//是否自动关闭
                    showTime:this.options.showTime || 2000,//自动关闭时间
                    clickMaskClose :this.options.clickMaskClose || false,//点击遮罩层关闭弹窗
                },
                timers: []
            }
        },
        methods: {
            //关闭按钮
            closeBtn: function () {
                this.show = false;
                //this.options = {}
            },
            //点击遮罩层关闭弹窗
            clickMaskClose: function () {
                if ( this.options.clickMaskClose) {
                    this.show = false;
                }
            },
            //自动关闭弹窗
            autodown :function () {
                var self=this
                if (self.options.autoClose) {
                    var t=setTimeout(function () {
                        self.closeBtn();
                    },self.options.showTime || 2000);
                    self.timers.push(t);
                }
            }
        },
        //计算属性
        computed: {
            //设置自定义样式 暂时没用
            setStyle () {
                return {
                    color: this.options.textColor || '#fff',
                    background: this.options.backgroundColor || '#2caee2'
                }
            }
        },
        //数据观察
        watch: {
            //观察show参数的变化 启动定时器
            show:function () {
                var self=this;
                for(var i=0;i<self.timers.length;i++){
                    window.clearTimeout( self.timers[i]);
                }
                self.timers = [];
                self.autodown();
            }
        }
    }
</script>