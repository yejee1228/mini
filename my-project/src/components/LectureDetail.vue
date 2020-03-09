<template>
<div>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.1/css/all.css">
  <div class="info">
    <div class="backgroundimg"><img :src="this.$store.state.detail.detail.thumbnail" alt=""></div>
    <div class="lectureDetail">
      <div class="arrow" @click="goBack">
        <i class="fas fa-arrow-left"></i>
      </div>
      <div class="menu">
        <i class="fas fa-ellipsis-v"></i>
      </div>
      <div class="title">
          {{this.$store.state.detail.detail.name}}
      </div>
      <div class="category">
          {{this.$store.state.detail.detail.category.text}}>{{this.$store.state.detail.detail.category.child.text}}<br/>
          {{this.$store.state.detail.detail.levels[0].translate}}
      </div>
      <div class="tag">
          <div v-for="(item, index) in this.$store.state.detail.detail.tags" :key="index">#{{item.name}}</div>
      </div>
      <div class="progress">
        <div>{{this.$store.state.detail.detail.progression}}%</div><br/>
        <div v-if="this.$store.state.detail.detail.learnRemainDays<=30">D-{{this.$store.state.detail.detail.learnRemainDays}}</div>
      </div>
    </div>
  </div>
    <div class="manager">
        <div class="manager_nav">
            <div style="color:#a2a2a2; border-left :1px solid #a2a2a2;">Lesson</div>
            <div>Final Exam</div>
            <div>Assignment</div>
            <div>Question</div>
        </div>
        <div class="alert">
          <div><img src="@/assets/banner_alarm.svg" alt=""></div>
          <div>It's time to take a lesson on Analyzing the Social Media Platforms.</div>
        </div>

    </div>
</div>
</template>
<script>
export default {
  created(){
    this.$store.dispatch('detail/getDetail')
  },
  methods:{
    goBack(){
      this.$router.push('/')
    }
  }
}
</script>
<style scoped>
  .backgroundimg{
    width:100%;
    height:100%;
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
  .menu{
    position: absolute;
    top: 25px;
    right: 25px;
    width: 75px;
    height: 75px;
    cursor: pointer;
    background-color: transparent;
  }
  .lectureDetail{
    padding: 30px 100px;
    width: 40%;
    margin: 0 auto;
  }
  .manager{
    padding: 30px 100px;
    width: 60%;
    margin: 0 auto;
  }
  .lectureDetail div{
    color: #ffffff;
    padding-bottom: 20px;
    padding-right: 10px;
  }
  .info img{
    z-index:-1000;
    position: absolute;
    filter: blur(10px);
    width: 99.5%;
    height: 57%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .title{
    font-size: 2.3em;
    margin:80px auto;
    text-align: center;
  }
  .category{
    font-size: 1em;
  }
  .tag{
    display: flex;
  }
  .tag div{
    padding: 5px;
    margin: 5px;
    float: left;
    border: 1px solid #ffffff;
    border-radius: 15px;
  }
  .progress{
    font-size: 1.7em;
    display: flex;
    place-content: space-between;
  }
  .manager_nav{
    display: flex;
    place-content: space-evenly;
  }
  .manager_nav div{
    padding:20px;
    width: 100%;
    text-align: center;
    border-right :1px solid #a2a2a2;
  }
  .alert{
    margin: 100px auto;
    display: flex;
    width: 60%;
    align-items: center;
    place-content: center;
  }
  .alert div{
    margin: 10px;
  }
</style>
