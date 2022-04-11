<template>
    <div class="nav-item" >
      <a class="nav-link">{{ item.title }}</a>
      <div class="nav-hover"></div>
    </div>
</template>

<script>
export default {
    props:{
        GetMenu:{
            type: Object,
            default:(()=>{})
        }
    }
}
</script>

<style>

</style>