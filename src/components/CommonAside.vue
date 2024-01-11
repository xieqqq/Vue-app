<template>
    <el-menu 
    default-active="1-4-1" 
    class="el-menu-vertical-demo" 
    @open="handleOpen" 
    @close="handleClose"
    :collapse="isCollapse" 
    background-color="#545c64" 
    text-color="#fff" 
    active-text-color="#ffd04b"
    >
        <h3>{{ isCollapse ? '后台' : 'AI在线标注平台' }}</h3>
        <el-menu-item @click="clickMenu(item)" v-for="item in noChildren" :key="item.name" :index="item.name">
            <i :class="`el-icon-${item.icon}`"></i>
            <span slot="title">{{ item.label }}</span>
        </el-menu-item>
        <el-submenu v-for="item in hasChildren" :key="item.label" :index="item.label">
            <template slot="title">
                <i :class="`el-icon-${item.icon}`"></i>
                <span slot="title">{{ item.label }}</span>
            </template>
            <el-menu-item-group v-for="subItem in item.children" :key="subItem.path">
                <el-menu-item @click="clickMenu(subItem)" :index="subItem.path">{{ subItem.label }}</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
    
</template>
<script>
export default(){
    
}
</script>