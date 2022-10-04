<template>
    <NavBar style="background-color: #fff;">
        <template v-slot:left>
            <span @click="toBack"> &lt; </span>
        </template>
        <template v-slot:center>
            <ul class="detail_nav_bar">
                <li v-for="(title,index) in titles" :key="index" :class="{active:currentIdx===index}"
                    @click="navbarClick(index)">{{title}}</li>
            </ul>
        </template>
    </NavBar>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'

export default {
    name: "detailNavbar",
    components: { NavBar },
    props: {
        titles: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {
            currentIdx: 0
        }
    },
    methods: {
        toBack() {
            this.$router.back()
        },
        navbarClick(index) {
            this.currentIdx = index;
            this.$emit("navbarClick", index)
        }
    }
}
</script>

<style lang="less" scoped>
.detail_nav_bar {
    display: flex;

    li {
        flex: 1;
        font-size: 15px;
    }
}

.active {
    color: var(--color-high-text)
}
</style>