<script>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';


export default {

    components: {
    TheHeader,
    TheFooter,
},


};
</script>

<template>
    <TheHeader></TheHeader>
    <main>
        <router-view></router-view>
    </main>
    <TheFooter></TheFooter>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;0,800;1,500&display=swap');
main {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    //padding-top: 10rem;
    //margin-bottom: 5rem;
    flex-grow: 1;
}
</style >
