<script setup lang="ts">
  import { reactive, ref } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import type { FormInstance, FormRules } from 'element-plus'
  import userApi from '@/api/user'
  import useSessionStore from '@/stores/session'

  const router = useRouter()
  const route = useRoute()

  const sessionStore = useSessionStore()

  const ruleFormRef = ref<FormInstance>()

  const loginForm = reactive({
    username: '',
    password: '',
  })

  const validateUsername = (rule: any, value: any, callback: any) => {
    if (value === '') {
      callback(new Error('Please input the username'))
    } else {
      callback()
    }
  }

  const validatePassword = (rule: any, value: any, callback: any) => {
    if (value === '') {
      callback(new Error('Please input the password'))
    } else {
      callback()
    }
  }

  const rules = reactive<FormRules>({
    username: [{ validator: validateUsername, trigger: 'blur' }],
    password: [{ validator: validatePassword, trigger: 'blur' }],
  })

  const handleLoginSuccess = (data?: any) => {
    sessionStore.$patch({
      name: loginForm.username,
      email: 'aaa@bbb.com',
      token: 'ccccccc',
    })

    router.push((route.query.redirect as string) || '/')
  }

  const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
      if (valid) {
      router.push('login')
        
      } else {
        alert('请输入用户名和密码')
        return false
      }
    })
  }
</script>

<template>
  <section class="login-form">
    <el-form
      ref="ruleFormRef"
      label-width="80px"
      status-icon
      :model="loginForm"
      :rules="rules"
    >
      <el-form-item label="Username" prop="username">
        <el-input v-model="loginForm.username" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input v-model="loginForm.password" type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)">注册</el-button>
      </el-form-item>
    </el-form>
  </section>
</template>

<style scoped>
  .login-form {
    margin: 100px auto;
    padding: 40px;
    width: 400px;
    border: 1px solid #ccc;
    box-shadow: 1px 5px 5px 5px #ccc;
  }
</style>
