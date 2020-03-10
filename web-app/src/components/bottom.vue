<template>
  <!-- 公共底部模块 -->
  <div class="footer">
    <div class="footer-top">
      <div class="top-content">
        <div class="text-plate">
          <div class="text-left">
            <a href>
              <img src="@/assets/logo.png" alt />
            </a>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing ejlit, sed do eiusmod tempor incididunt ut labore egtt dolore magna aliqua. Ut enim ad minim veniam, quisgt nostrud exercitation ullamco laboris.</p>
            <div>
              <ul>
                <li><a href="">in</a> </li>
                <li><a href="">@</a></li>
                <li><a href="">T</a></li>
                <li><a href="">G</a></li>
                <li><a href="">f</a></li>
              </ul>
            </div>
          </div>
          <div class="text-middle">
            <h4 class="footer__title">LATEST TWEETS</h4>
            <div class="middle-box">
               <p>Lorem ipsum dolor sit am ectetur adip isicing elit, sed eiusmod ipsum dolo hgtfed</p>
              <a href>https://meili.com</a>
            </div>
            <div class="middle-box">
              <p>Lorem ipsum dolor sit am ectetur adip isicing elit, sed eiusmod ipsum dolo hgtfed</p>
              <a href>https://meili.com</a>
            </div>
          </div>
          <div class="text-right">
            <h4 class="footer__title">TAG</h4>
            <ul>
              <a href="#">Adventure</a>
              <a href="#">Traveling</a>
              <a href="#">Countries</a>
              <a href="#">Beach</a>
              <a href="#">Honeymoon</a>
              <a href="#">Island</a>
              <a href="#">Parks</a>
              <a href="#">Family</a>
              <a href="#">Travel</a>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="bottom-content">
        <span>JOIN THE NEWSLETTER</span>
        <input type="text" placeholder="Enter your E-mail" />
        <button>
          <a href="#">SUBCRIBES</a>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
</script>
<style lang="scss" scope>
*{
  margin: 0;
  padding: 0;
  list-style: none
}
html,body{
  width:100%;
  height: 100%;
}
.footer {
  width: 100vw;
  .footer-top {
    width: 100vw;
    height: 450px;
    background: rgba(0, 0, 0, 0) no-repeat scroll center center / cover;
    background-image: url(../assets/bg1/4.jpg);
    z-index: 999;
  }
  ul>a{
    text-decoration: none;
  }
  .footer-bottom {
    width: 100vw;
    height: 205px;
    background: #090909;
    display: flex;
    justify-content: space-around;
    .bottom-content {
      width: 1044px;
      height: 40px;
      // margin: 0 auto;
       padding-top: 80px;
      span {
        font-size: 30px;
        color: #fff;
        font-weight: 600;
        margin-top: 10px;
        float: left;
      }
      input {
        width: 294px;
        float: left;
        height: 45px;
        border: 0;
        border-bottom: 1px solid #6d6b67;
        color: #6d6b67;
        padding-left: 11px;
        background: 0;
        margin-left: 145px;
        line-height: 45px;
      }
      button {
        width: 130px;
        height: 40px;
        background: 0;
        margin-left: 103px;
        line-height: 40px;
        outline: none;
        border: 0;
        a {
          border-radius: 50px;
          border: 1px solid #bf8703;
          display: block;
          width: 100%;
          height: 100%;
          color: #fff;
          transition: all 1s;
          text-decoration: none;
        }
        a:hover {
          background: #ffa500;
        }
      }
    }
  }
}
.top-content {
  width: 100vw;
  height: 100%;
  background: rgba($color: #000000, $alpha: 0.7);
  padding-top: 70px;
  color: #fff;
  .text-plate {
    width:100%;
    height: 380px;
    display: flex;
    justify-content: space-between
   
  }
}
.text-left {
  width:30%;
  height: 100%;
  float: left;
  margin-left: 100px;
  p {
    margin-top: 40px;
    line-height: 30px;
    // margin: 45px 0;
    width: 379px;
    color: #fff;
  }
  ul {
    margin-top: 30px;
    width:70%;
    height: 80px;
    li{
      width: 30px;;
      height: 30px;
      a {
      display: block;
      float: left;
      width: 30px;
      height: 30px;
      color: #ffa500;
      border: 1px solid #f3f3f3;
      text-align: center;
      line-height: 30px;
      // margin-right: 10px;
      transition: all 0.5s;
      text-decoration: none;
      font-weight: bold;
      font-size: 20px
    }
    }
    
    a:hover {
      background: #ffa500;
      color: #fff;
    }
  }
}
.text-middle {
  width:33%;
  height: 100%;
  float: left;
  margin-left: 100px;
  .middle-box {
    width:89%;
     margin-top: 25px;
     margin-bottom: 60px;
    p {
      width: 100%;
      color: #fff;
    }
    a {
      color: #ffa500;
    }
  }
}
.text-middle>.middle-box:nth-child(2){
  margin-top: 60px;
}
.footer__title {
  font-size: 18px;
  font-weight: 600;
   margin-bottom: 42px;
  text-transform: uppercase;
}
.text-right {
  float: right;
    width:30%;
  height: 50%;
  margin-right: 100px;
  ul {
    width:100%;
    height: 100%;
    // margin-top: 45px;
    display: flex;
    flex-wrap: wrap;
    // margin-right: 50px;
    a {
      // display: block;
      width: 25%;
      height: 40px;
      border-radius: 50px;
      line-height: 40px;
      text-align: center;
      border: 1px solid #fff;
      font-size: 14px;
      color: #fff;
      transition: all 1s;
      // margin-right: 30px;
      // margin-bottom: 20px;
    }
    a:hover {
      background: #ffa500;
    }
  }
}
</style>