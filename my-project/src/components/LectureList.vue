<template>
    <div>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.1/css/all.css">
        <div class="title">
            <div class="arrow">
                <i class="fas fa-arrow-left"></i>
            </div>
            <div style="font-size:2.2em"><b>Recommendation</b></div>
            <div class="search"><i class="fas fa-search"></i></div>
        </div>
        <div class="nav">
            <div style="border-bottom: 4px solid #ffffff;">All</div>
            <div>Popular</div>
            <div>New</div>
        </div>
        <div class="list">
            <div class="category" v-for="(item, index) in this.$store.state.list.content" :key="index">
                <div class="categoryName">
                  <div style="font-size: 2em; font-weight: bold;">{{item.category.name}}</div>
                  <div><a href="#">View all</a></div>
                </div>
                <div class="lectureList">
                  <div class="lecture" v-for="(lectureItem, lectureIndex) in item.degrees" :key="lectureIndex">
                      <img v-if="lectureItem.thumbnail===''" src="@/assets/thumnail.png" alt=""/>
                      <img v-if="lectureItem.thumbnail!==''" :src=lectureItem.thumbnail alt=""/>
                    <div class="lectureDetail">
                      <a style="font-size:1.3em; font-weight:bold" @click="goLecture(lectureItem.id)">{{lectureItem.name}}</a>
                        <br/>
                        <p style="color:#a2a2a2;">{{lectureItem.levels[0].text}}</p>
                        <p>by <b>{{ lectureItem.teacher.name.fullName}}</b></p>
                        <br/>
                      <div class="price">
                        <div v-if="lectureItem.goods.paymentPrice===0" style="font-size: 1.5em; font-weight: bold;">FREE</div>
                        <div v-if="lectureItem.goods.paymentPrice!==0" class="priceInfo">
                          <div>{{lectureItem.goods.currency.key}}</div>
                          <div style="font-size:1.5em;">{{lectureItem.goods.paymentPrice}}</div>
                          <div style="text-decoration-line: line-through; text-decoration-color: red; color:#a2a2a2">{{lectureItem.goods.price}}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        created(){
            this.getcontent()
        },
        methods:{
          getcontent(){
            this.$store.dispatch('list/getLectures')
          },
          goLecture(id){
            this.$store.dispatch('list/lectureId', id)
            this.$router.push('/lecturedetail')
          }
        }
    }
</script>

<style scoped>
    .title{
        text-align: center;
        padding-top: 25px;
        padding-bottom:75px;
        background-color: #313d4b;
        color: #ffffff;
    }
    .arrow{
        position: absolute;
        top: 25px;
        left: 25px;
        width: 75px;
        height: 75px;
        cursor: pointer;
        background-color: transparent;
    }
    .search {
        position: absolute;
        top: 25px;
        right: 25px;
        width: 75px;
        height: 75px;
        cursor: pointer;
        background-color: transparent;
    }
    .nav{
        display: flex;
        place-content: space-evenly;
    }
    .nav div{
      padding:20px;
      background-color: #313d4b;
      color: #ffffff;
      width: 100%;
      text-align: center;
    }
    .list{
        margin: 80px;
    }
    .category{
      margin-bottom: 40px;
    }
    .categoryName{
      width:100%;
      margin: 40px 0;
      display: flex;
      place-content: space-between;
    }
    .lectureList{
      display: inline-block;
    }
    .lectureDetail{
      padding: 10px;
    }
    .lecture{
      float: left;
      margin-right: 10px;
      margin-top: 10px;
      margin-bottom: 10px;
      border: 1px solid #a2a2a2;
    }
    .lecture img{
      width: 355.994px;
      height: 200px;
    }
    .price div{
      display: flex;
      align-items: baseline;
    }
    .priceInfo div{
      margin-right: 20px;
    }

</style>
