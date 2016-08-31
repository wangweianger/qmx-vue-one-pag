<style lang="sass" scoped>
    .container select.form-control{
        width: 150px; }
        input[type='checkbox']{
            width:13px;
            height: 13px;
            vertical-align:middle;
    }
        .allcheck{
            display:inline-block;
    }
        a {
            margin-right: 10px;
    }
        .form-group.block{
            display:block;
    }
        .hidebox{
            width: 500px;
            margin: 30px;
            background-color: #f5f5f5;
            border-radius:4px;
            padding:18px;
            position:relative;
    }
        .copot-page{
            width: 100%;
    }

</style>
<template>
    <div class="container-fluid">
        <div class="row table-responsive">
            <div class="col-sm-12 mb20">
                <div class="form-group">
                    <slot name="order_btn_list"></slot>
                </div>
            </div>
            <div class="col-md-12 clear">
                <slot name="table_list"></slot>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        //父组件传递过来的参数
        props: {
            list: {
                type: Array,
                twoWay: true
            }
        },
        //本组件数据
        data: function () {
            return {
                check: true
            }
        },
        methods: {
            //确认回调
            checkAll: function () {
                var check = this.check;
                var data = this.list;
                for (var i = 0; i < data.length; i++) {
                    if (check) {
                        this.check = false;
                        data[i].isChecked = true;
                    } else {
                        this.check = true;
                        data[i].isChecked = false;
                    }
                }
            }
        },
        //计算属性
        computed: {},
        //数据观察
        watch: {},
        created: function () {

        },
        ready: function () {

        }
    }

</script>