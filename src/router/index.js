import { createRouter, createWebHistory } from 'vue-router'
import LoginAuth from '@/views/auth/LoginAuth.vue';
import Students from '@/views/students/IndexVue.vue';
import StudentsIndex from '@/views/students/StudentsIndex.vue';
import Staffs from '@/views/staffs/IndexStaffs.vue';
import StaffsListVue from '@/views/staffs/StaffsList.vue';
import CreateStaffVue from '@/views/staffs/CreateStaff.vue';
import StaffsProfile from '@/views/staffs/StaffProfile.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth',
      name: 'login',
      component:  LoginAuth
    },
    {
      //All students routes here
      path: '/students',
      name: 'students',
      component: Students,
      children: [
        {
          path: '',
          name: 'index',
          component: StudentsIndex
        }
      ]
    },
    {
      // All staffs routes here
      path: '/staffs',
      name: 'staffs',
      component: Staffs,
      children: [
        {
          path: '',
          name: 'index',
          component: StaffsListVue
        },
        {
          path: '/create',
          name: 'create',
          component: CreateStaffVue
        },
        {
          path: '/staffslist',
          name: 'staffslist',
          component: StaffsListVue
        },
        {
          path: '/staffsprofile',
          name: 'staffsprofile',
          component: StaffsProfile 
        },

        
      ]
    }
  ]
})

export default router
