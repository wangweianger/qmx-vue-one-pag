<template>
   <div>
        姓名：<input type="text" v-model="username"><br>
        年龄：<input type="text" v-model="age"><br>
   </div>
</template>
<script type="es6">
    export default{
        props:{
            username:{
                type: String,
                twoWay: true
            },
            age:{
               type: String, 
               twoWay: true
            }
        },
        
    }
</script>
<style>
   
</style>