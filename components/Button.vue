<template>
  
 <button class="btn header-content__btn">{{text}}</button>
 
</template>

<script>
export default {
    name: 'Button',
    props:{
        text: String
    }
}
</script>