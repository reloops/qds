<template>
    <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign" style="max-width: 460px">
        <el-form-item label="Username">
            <el-input v-model="formLabelAlign.username" />
        </el-form-item>
        <el-form-item label="password">
            <el-input v-model="formLabelAlign.password" />
        </el-form-item>


    </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

const labelPosition = ref('right')

const formLabelAlign = reactive({
    username: '',
    password: '',

})
</script>
