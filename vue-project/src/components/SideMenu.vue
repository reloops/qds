<template>
    <el-row class="tac">
        <el-menu class="el-menu-vertical-demo">
            <el-menu-item @click="logme" index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
            <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu>
    </el-row>
</template>

<script lang="ts" setup>

const logme=()=>{
    console.log("000000");
};

</script>
