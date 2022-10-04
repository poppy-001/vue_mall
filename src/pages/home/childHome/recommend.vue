<template>
    <div class="recommend">
        <div v-for="(item,index) in recommend" :key="index">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <p>{{item.title}}</p>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: "recommendMode",
    props: {
        recommend: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style>
.recommend {
    display: flex;
    width: 100%;
    text-align: center;
    justify-content: space-around;

    margin: 10px 0 20px;
    padding-bottom: 10px;

    border-bottom: 10px solid #eee;
}

img {
    width: 70px;
    flex: 1;
}
</style>