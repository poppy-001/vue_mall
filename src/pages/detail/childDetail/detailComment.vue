<template>
    <div class="detail_Comment" v-if="detailComment">
        <div class="comment_header">
            <div class="title">用户评价</div>
            <div class="more">更多({{detailComment.cRate}})&gt;</div>
        </div>

        <div class="comment_user">
            <img :src="commentInfo.user.avatar" alt="">
            <span>{{commentInfo.user.uname}}</span>
        </div>

        <div class="comment_info">
            <p>{{commentInfo.content}}</p>
            <div class="info_detail">
                <span class="data">{{createTime}}</span>
                <span class="style">{{commentInfo.style}}</span>
            </div>
            <div class="info_img" v-if="commentInfo.images">
                <img :src="item" alt="" v-for="(item,index) in commentInfo.images" :key="index">
            </div>
        </div>
    </div>
</template>

<script>
import { dataFormat } from '@/utils/tools'
export default {
    name: "detailComment",
    props: {
        detailComment: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    computed: {
        commentInfo() {
            return this.detailComment.list[0]
        },
        createTime() {
            return dataFormat(this.commentInfo.created)
        }
    }
}
</script>

<style lang="less" scoped>
.detail_Comment {
    padding: 5px 12px;
    margin-bottom: 15px;
    color: #333;
    border-bottom: 5px solid #f2f5f8;

}

.comment_header {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #f2f5f8;

    .title {
        float: left;
        font-size: 15px;
    }

    .more {
        float: right;
        font-size: 13px;
        margin-right: 10px;
    }

}

.comment_user {
    margin: 10px 0;

    img {
        width: 42px;
        height: 42px;
        border-radius: 50%;
        vertical-align: middle;
    }

    span {
        font-size: 15px;
        margin-left: 10px;
    }
}

.comment_info {
    p {
        font-size: 14px;
        color: #777;
        line-height: 1.5;
    }

    .info_detail {
        font-size: 12px;
        margin: 10px 0;
        color: #999;

        .data {
            margin-right: 8px;
        }
    }


    .info_img img {
        width: 70px;
        height: 70px;
        margin-right: 5px;
    }
}
</style>