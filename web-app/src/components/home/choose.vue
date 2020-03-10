<template>
  <div class="choose_us">
    <!-- 头 -->
    <div class="top">
      <h3> WHY<span class="choose">CHOOSE US</span></h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utllaf</p>
      <h1>
        <img src="../../assets/shape/1.png" alt=""/>
      </h1>
    </div>
    <!-- 身体 -->
    <div class="bottom">
      <div class="list-child" v-for="i in [0,1,2,3]" :key="i">
          <div class="icon">
            <span class="el-icon-ice-cream-round"></span> 
            <span class="el-icon-ice-cream-round icon_orange"></span> 
        </div>
         <div class="diverse">Diverse Destination</div>
        <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut laborelorem</div>
      <!-- <div class="list-child"> -->
          <!-- <div class="img">
            <! <img src="../../assets/img/2.png" alt srcset /> -->
          <!-- </div> --> 
       <!-- <div class="diverse">Value Of Money</div> -->
        <!-- <div class="text">
          <p>Lorem ipsum dolor sit amet,</p>
          <p>consectetur adipisicing elit, sed do</p>
          <p>eiusmod tempor incididunt ut</p>
            <p>laborelorem</p>
        </div>  -->
     <!-- </div> -->
     <!-- <div class="list-child"> -->
          <!-- <div class="img"> -->
            <!-- <img src="../../assets/img/2.png" alt srcset /> -->
          <!-- </div>  -->
       <!-- <div class="diverse">Passionate Travel</div> -->
        <!-- <div class="text">
          <p>Lorem ipsum dolor sit amet,</p>
          <p>consectetur adipisicing elit, sed do</p>
          <p>eiusmod tempor incididunt ut</p>
           <p>laborelorem</p>
        </div>  -->
     <!-- </div>  -->
    <!-- <div class="list-child">
          <div class="img">
                <! <img src="../../assets/img/2.png" alt srcset /> -->
          <!-- </div> -->
       <!-- <div class="diverse">Beautiful Places</div>
        <div class="text">
          <p>Lorem ipsum dolor sit amet,</p>
          <p>consectetur adipisicing elit, sed do</p>
          <p>eiusmod tempor incididunt ut</p>
          <p>laborelorem</p>
        </div>
    </div> --> 
    </div>
  </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
*{
margin: 0;
padding: 0;
}
.choose_us,html,body {
     padding: 60px 0;
  width: 100vw;
  min-width: 1000px;
  text-align: center;
}
  // .top {
  //   height: 300px;
  //   padding-top: 80px;
  //   padding-bottom: 40px;
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: center;
  //   align-items: center;
  
  //   h3,
  //   p {
  //     height: 30px;
  //     line-height:30px;
  //     .choose {
  //       color: #f90;
  //     font-size: 30px;
  //       margin-left: 15px;
  //     }
  //   }
  // }
//   h3{
//  font-size: 30px;
//   }
//   p:nth-child(1){
//     margin-top: -20px;
//     color:#000
//   }
  // .bottom {
  //   height: 370px;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   .list-child {
  //     width: 370px;
  //     text-align: center;
  //     height: 370px;
  //     .diverse {
  //       width:100%;
  //       height: 60px;
  //       line-height: 60px;
  //       font-size: 24px;
  //       font-weight: 500;
  //     }
  //     .list-child>.diverse :hover{
  //       color:#f90;
  //       z-index: 999;
  //     }
  //     .text {
  //       width:100%;
  //       height: 50px;
  //       p {
  //         height: 40px;
  //         line-height: 40px;
  //       }
  //     }
  //   }
  // }
  .orange{
  color: orange;
  margin-left: 10px;
}
  .bottom{
  width: 100%;
  padding: 30px 8%;
  box-sizing: border-box;
  overflow: hidden;
}
  .list-child{
  width: 25%;
  float: left;
  padding: 0 2%;
  box-sizing: border-box;
}
  .diverse{
  font-size: 20px;
  margin: 15px 0;
}
.text{
  font-size: 14px;
}
  .icon{
  font-size: 30px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 0 auto;
  background: #f6f6f6;
  position: relative;
}
  .icon span{
  display: block;
  width: 80px;
  height: 80px;
  line-height: 80px;
  border-radius:50% ;
}
  .icon .icon_orange{
  position: absolute;
  background: orange;
  color: #f6f6f6;
  top:0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  width: 0;
  transition: width .3s;
  -moz-transition:width .3s;
  -webkit-transition: width .3s;
  -o-transition:width .3s
}
.icon_orange::before{
  opacity: 0;
  transition: opacity .3s;
}
.icon:hover .icon_orange{
  width: 80px;
}
.icon:hover .icon_orange::before{
  opacity: 0.8;
}
// .img{
//   width:80px;
//   height: 80px;
//   display: block;
// background: #eee;
//   border-radius: 50%;
//   text-align: center;
//   margin-left: 100px;
// }
// .img :hover{
//   background-color:yellow;
//   // transform:translateY(360px) rotate(360deg);
// transform:translate3d(10px,100vh,-10px);
// }
</style>