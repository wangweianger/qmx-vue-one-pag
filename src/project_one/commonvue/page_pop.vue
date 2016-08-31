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
            min-width: 450px;
            min-height: 200px;
            overflow: hidden;
            max-width: 90%!important;
            transform: translate(-50%,-50%);
            background: #fff;
            z-index: 1000;
            .prop-btn{
                text-align:center;
                margin-bottom: 15px;
        }
            .prop-btn .a-btn{
                cursor: pointer;
                color: #fff;
                background: #fa6a38;
                padding-left: 15px;
                padding-right: 15px;
                border-radius: 5px;
                font-size: 14px;
                height: 35px;
                line-height: 35px;
                display: inline-block;
                text-align: center;
        }
        .btom-close-btn{
            border: 1px solid #999;
            color: #4a4a4a !important;
            background-color: #fff !important;
        }
            .prop-btn .a-btn:last-child{
                margin-left: 10px;
        }
            .prop-title{
                padding:0 20px;
                height: 40px;
                line-height: 40px;
                margin-top: 10px;
                border-bottom:solid 1px #ddd;
        }
            .prop-title .close-btn{
                display: block;
                width: 15px;
                height: 15px;
                cursor: pointer;
                position: absolute;
                right: 20px;
                top: 15px;
                background: url("../assets/common/images/PopLayer-close.png");
                background-size: 100%;
        }
            .prop-title .icon-1{
                background: url("../assets/common/images/icon-1.png");
                background-size: 100%;
        }
            .prop-title .icon-2{
                background: url("../assets/common/images/icon-2.png");
                background-size: 100%;
        }
            .prop-title .icon-3{
                background: url("../assets/common/images/icon-3.png");
                background-size: 100%;
        }
            .prop-title i{
                width: 25px;
                height: 25px;
                display: inline-block;
                position: absolute;
                left: 18px;
                top: 20px;
        }
            .prop-title .prop-title-txt{
                margin-top: 20px;
                font-size: 16px;
        }
            .prop-container{
                margin-right: 40px;
                padding-bottom: 20px;
                min-height: 88px;
                color: #888;
        }
    }
    }
</style>
<template>
    <div class="prop-box" v-if="show">
        <div class="prop-mark" @click.stop="clickMaskClose"></div>
        <div class="prop-mainbox" :style="{ width: defaultData.width + 'px'}">
            <div class="prop-title">
                <i v-if="defaultData.icon" :class="defaultData.icon"></i>
                <span class="prop-title-txt" v-text="options.title"></span>
                <span v-if="defaultData.showCloseBtn" class="close-btn" @click="closeBtn"></span>
            </div>
            <div class="prop-container">
                <slot name="content"></slot>
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
            },
            //回调函数 是父组件传过来的methods函数
            callback: {
                type: Function
            }
        },
        //本组件数据
        data:function(){
            return {
                defaultData:{
                    content:this.options.content || "提示内容" ,
                    title:this.options.title || "提示信息",
                    icon: this.options.icon+''?this.options.icon:'icon-1',//标题图标
                    autoClose:this.options.autoClose || false,//是否自动关闭
                    showTime:this.options.showTime || 2000,//自动关闭时间
                    clickMaskClose :this.options.clickMaskClose || false,//点击遮罩层关闭弹窗
                    showCloseBtn:this.options.showCloseBtn || true, //是否显示关闭按钮
                    width:this.options.width || 200,
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
                    },self.options.showTime || 3000);
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
        },
        created:function () {

        },
        ready :function () {

        }
    }
</script>