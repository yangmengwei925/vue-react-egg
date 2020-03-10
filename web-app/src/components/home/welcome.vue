<template>
  <div class="welcome">
    <ul>
      <li>
        <img src="@/assets/img/1.jpg" alt />
      </li>
      <li>
           <h3>WELCOME TO<b>RAMBLE</b></h3>
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporincidid</span>
        <span>ut labore et dolore magna aliqua. Utjij enim ad minim veniam, quis nostrud exercitatio</span>
        <span>ullamco laboris nisi utjjij aliquip ex ea commodo consequat.ed do eiusmod tempor</span>
        <span>incididunt ut labore et dolore magna aliqua.</span>
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</span>
        <span>incididunt ut labore.ed do eiusmod tempor incididuenimdunt.</span>
        <span>Fipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempoed doeiumod</span>
        <span>tempoquis</span>
        <span>
          <i>in</i>
          <i>☌</i>
          <i>t</i>
          <i>G</i>
          <i>f</i>
        </span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scope>
*{
  margin: 0;
  padding: 0;
}

.welcome,html,body {
  width: 100vw;
  height: 560px;
  background: #f9f9f9;

  ul {
    width:100%;
    display: flex;
    height: 560px;
    justify-content: space-around;
min-width: 50%;
    li {
     width:50%;
      height: 560px;
      list-style: none;
      float: left;
      img{
        width: 100%;
        height: 100%;
        display: block;
      }
      h3 {
        font-size: 25px;
        width: 90%;
        height: 100px;
        line-height: 100px;
        margin-top: 50px;
        padding-left: 25px;
        display: flex;
        // span:nth-child(1){
        //   width:100%;
        //   height: 100px;
        //   line-height: 100px;
        //   color:#000;
        //   display: inline-block;
           
        // }
       b{
          width: 200px;
          height: 100px;
          line-height: 100px;
          display: block;
          color:yellow;
          margin-left:10px;
         
        }
        span {
          width: 100%;
          height: 100px;
          // line-height: 100px;
          color: orange;
          font-size: 25px;
          font-weight: bold;
          
        }
      }
      span {
        width: 100%;
        height: 50px;
        display: inline-block;
        // margin-top:5px;
        font-size: 14px;
        // text-indent:2em;
        margin-left: 20px;
        i {
          display: inline-block;
          width: 40px;
          height: 40px;
          border: 1px solid #fff;
          color: orange;
          text-align: center;
          line-height: 40px;
          margin-right: 20px;
          font-size: 20px;
          background: #fff;

        }
        i:hover {
          color: #fff;
          background: orange;
          border: 1px solid orange;
        }
      }
    }
  }
}
</style>