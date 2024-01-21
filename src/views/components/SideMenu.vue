<template>
    <div class="nk-sidebar nk-sidebar-fixed is-light " data-content="sidebarMenu">
                <div class="nk-sidebar-element nk-sidebar-head">
                    <div class="nk-sidebar-brand">
                        <a href="html/index.html" class="logo-link nk-sidebar-logo">
                            <img class="logo-light logo-img" src="./images/logo.png" srcset="./images/logo2x.png 2x" alt="logo">
                            <img class="logo-dark logo-img" src="./images/logo-dark.png" srcset="./images/logo-dark2x.png 2x" alt="logo-dark">
                            <img class="logo-small logo-img logo-img-small" src="./images/logo-small.png" srcset="./images/logo-small2x.png 2x" alt="logo-small">
                        </a>
                    </div>
                    <div class="nk-menu-trigger me-n2">
                        <a href="#" class="nk-nav-toggle nk-quick-nav-icon d-xl-none" data-target="sidebarMenu"><em class="icon ni ni-arrow-left"></em></a>
                        <a href="#" class="nk-nav-compact nk-quick-nav-icon d-none d-xl-inline-flex" data-target="sidebarMenu"><em class="icon ni ni-menu"></em></a>
                    </div>
                </div><!-- .nk-sidebar-element -->
                <div class="nk-sidebar-element">
                    <div class="nk-sidebar-content">
                        <div class="nk-sidebar-menu" data-simplebar="init"><div class="simplebar-wrapper" style="margin: -16px 0px -40px;"><div class="simplebar-height-auto-observer-wrapper"><div class="simplebar-height-auto-observer"></div></div><div class="simplebar-mask"><div class="simplebar-offset" style="right: 0px; bottom: 0px;"><div class="simplebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content" style="height: 100%; overflow: hidden scroll;"><div class="simplebar-content" style="padding: 16px 0px 40px;">
                            <ul class="nk-menu">
                                <li class="nk-menu-item">
                                    <router-link to="/dash">
                                        <a href="html/lms/index.html" class="nk-menu-link">
                                            <span class="nk-menu-icon"><em class="icon ni ni-dashboard-fill"></em></span>
                                            <span class="nk-menu-text">Dashboard</span>
                                        </a>
                                    </router-link>
                                </li><!-- .nk-menu-item -->
                                <!-- .nk-menu-item -->
                                <li class="nk-menu-item has-sub">
                                    <a href="#" class="nk-menu-link nk-menu-toggle">
                                        <span class="nk-menu-icon"><em class="icon ni ni-user-fill"></em></span>
                                        <span class="nk-menu-text">Staffs</span>
                                    </a>
                                    <ul class="nk-menu-sub">
                                        <li class="nk-menu-item">
                                            <a href="html/lms/instructor-dashborad.html" class="nk-menu-link"><span class="nk-menu-text">List of Staffs</span></a>
                                        </li>
                                        <li class="nk-menu-item">
                                            <a href="html/lms/instructor-list.html" class="nk-menu-link"><span class="nk-menu-text">Staff Profile</span></a>
                                        </li>
                                        <li class="nk-menu-item">
                                            <a href="html/lms/instructor-details.html" class="nk-menu-link"><span class="nk-menu-text">Add Staff</span></a>
                                        </li>
                                    </ul><!-- .nk-menu-sub -->
                                </li><!-- .nk-menu-item -->
                                <li class="nk-menu-item has-sub">
                                    <a href="html/lms/students.html" class="nk-menu-link nk-menu-toggle">
                                        <span class="nk-menu-icon"><em class="icon ni ni-users-fill"></em></span>
                                        <span class="nk-menu-text">Students</span>
                                    </a>
                                    <ul class="nk-menu-sub">
                                        <li class="nk-menu-item">
                                            <router-link to="/index">
                                                <a href="C:\Users\USER\Desktop\BioAttendance\src\views\students\StudentsIndex.vue" class="nk-menu-link"><span class="nk-menu-text">List of Students</span></a>
                                            </router-link>
                                        </li>
                                        <li class="nk-menu-item">
                                            <a href="html/lms/enroll-student.html" class="nk-menu-link"><span class="nk-menu-text">Student's Profile</span></a>
                                        </li>
                                        <li class="nk-menu-item">
                                            <a href="html/lms/enroll-student.html" class="nk-menu-link"><span class="nk-menu-text">Add Student</span></a>
                                        </li>
                                    </ul>
                                </li><!-- .nk-menu-item -->
                                <li class="nk-menu-item">
                                    <a href="html/lms/settings.html" class="nk-menu-link">
                                        <span class="nk-menu-icon"><em class="icon ni ni-setting-alt-fill"></em></span>
                                        <span class="nk-menu-text">Settings</span>
                                    </a>
                                </li>
                                
                                <li class="nk-menu-item">
                                    <a href="html/lms/admin-profile.html" class="nk-menu-link">
                                        <span class="nk-menu-icon"><em class="icon ni ni-account-setting-fill"></em></span>
                                        <span class="nk-menu-text">Logout</span>
                                    </a>
                                </li><!-- .nk-menu-item -->
                            </ul><!-- .nk-menu -->
                        </div></div></div></div><div class="simplebar-placeholder" style="width: auto; height: 761px;"></div></div><div class="simplebar-track simplebar-horizontal" style="visibility: hidden;"><div class="simplebar-scrollbar" style="width: 0px; display: none;"></div></div><div class="simplebar-track simplebar-vertical" style="visibility: visible;"><div class="simplebar-scrollbar" style="height: 563px; transform: translate3d(0px, 0px, 0px); display: block;"></div></div></div><!-- .nk-sidebar-menu -->
                    </div><!-- .nk-sidebar-content -->
                </div><!-- .nk-sidebar-element -->
        </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>