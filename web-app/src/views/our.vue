<!--  -->
<template>
    <div class="our">
        <!-- 登录也 -->
        <div class="our_login">
                <div class="our_left">
                    <img src="../assets/contact/1.jpg" alt="" srcset="">
                </div>
                <div class="our_right">
                    <div class="right_login">
                        <h3>CONTACT <span>FORM</span></h3>
                         <div class="right_input">
                              <input type="text" name="name" placeholder="Your Name*">
                              <input type="text" name="email" placeholder="Mail*">
                         </div>
                        <div class="right_subject">
                            <input type="text" name="subject" placeholder="Subject*">
                        </div>
                        <div class="right_message">
                            <input type="text" name="message" placeholder="Type Your Massage...">
                        </div>
                        <div class="right_button">
                            <button type="submit">SEAND MESSAGE</button>
                        </div>
                       
                    </div>
                        
                </div>
        </div>
        <div class="our_main">
             <div class="our_main_head">
                 <h3>GET <span>INFORMED</span></h3>
             </div>
             <div class="our_main_p">
                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utllaf</p>
             </div>
             <div class="our_img">
                 <img src="../assets/shape/1.png" alt="">
             </div>
             <div class="our_work">
                <div class="left">
                    <img src="../assets/contact-info-img/1.png" alt="">
                      <div class="left_title">
                          <h3>KOLINCE JON</h3>
                          <p>MANAGER OF RAMBLE</p>
                            <span>Phone :<a href="">+660 256444 24857</a></span>
                            <span>meili@outlook.com</span>
                      </div>
                </div>
                <div class="center">
                    <img src="../assets/contact-info-img/2.png" alt="">
                         <div class="left_title">
                          <h3>KOLINCE JON</h3>
                          <p>MANAGER OF RAMBLE</p>
                            <span>Phone :<a href="">+660 256444 24857</a></span>
                            <span>meili@outlook.com</span>
                      </div>
                </div>
                <div class="right">
                    <img src="../assets/contact-info-img/3.png" alt="">
                         <div class="left_title">
                          <h3>KOLINCE JON</h3>
                          <p>MANAGER OF RAMBLE</p>
                            <span>Phone :<a href="">+660 256444 24857</a></span>
                            <span>meili@outlook.com</span>
                      </div>
                </div>
             </div>
             <div class="our_foot">
                        <div class="our_foot_title">
                            <div class="title_h3">
                                 <h3>HOW TO <span>FIND US</span></h3>
                            </div>
                           <span>RAMBLE TRAVEL AGENCY</span>
                           <p>House No 08, Road No 08,</p>
                           <p>Mah Hya, Dhaka, Bangladesh</p>
                          <p>
                              <a href="">meili@outlook.com</a>
                          </p>
                          <p>
                                <a href="">meili@outlook.com</a>
                          </p>
                          <p>
                                <a href="">+660 256444 24857</a>
                          </p>
                           <p>
                                <a href="">+660 256444 24857</a>
                          </p>
                        </div>
             </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {

    };
  },

//   components: {},

//   computed: {},

//   mounted: {},

//   methods: {}
}

</script>
<style  scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html,body{
    width:100%;
    height: 100%;
}
.our{
    width:100%;
    height: 1450px;
    overflow: auto;
    /* background: #ccc; */
}
.our_login{
    width: 1110px;
    height: 630px;;
    /* background: olive; */
    margin: 100px 0 0  auto;
    display: flex;
}
.our_left{
    width:570px;
    height: 100%;
    position: relative;
}
.our_left>img{
    width:100%;
    height: 100%;
    display: block;
}
.our_right{
    width:570px;
    height: 520px;
    background:#eee;
    margin-top: 40px;
    margin-left: 444px;
    z-index: 999;
    position: absolute;
}
.our_right>.right_login{
    width:440px;
    height: 400px;
 margin:62px 72px ;
 /* background:rgb(246, 246,246); */
}
h3>span{
    color:rgb(255, 179, 0)
}
.right_input{
    width:440px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    margin-top: 35px;
}
.right_input>input{
    width: 200px;
    /* height: 36px; */
    height: 40px;
    line-height: 40px;
    /* padding: 0 20px; */
    /* outline: none; */
    color:#000;
     background: transparent none repeat scroll 0 0;;
    border: 1px solid #e7e7e7;
}
input:hover{
    border:1px soild #000
}
::placeholder{
   padding-left:25px;
   font-size: 16px;
    font-weight: 400
}
.right_subject>input{
    width:100%;
    height: 40px;
    margin-top: 25px;
     border: 1px solid #e7e7e7;
       background: transparent none repeat scroll 0 0;;
}
.right_message{
     margin-top: 25px;
}
.right_message>input{
    width:100%;
    height: 135px;
    outline: none;;
 background: transparent none repeat scroll 0 0;;
    border: 1px solid #e7e7e7;
}
.right_button>button{
    width:150px;
    height:46px;
    line-height: 46px;
    text-align: center;
    margin-top: 25px;
    border-radius: 22px;
        cursor: pointer;
        outline: none;
        color:#fff;
   border: 1px solid orange;
   background: orange;
}
.right_button>button:hover{
    background:  #e7e7e7;
}
.our_main{
    width:100%;
    height: 625px;
    /* background: salmon; */
}
.our_main_head{
   width:230px;
   height: 30px;
   line-height: 30px;
   /* background: yellowgreen; */
  margin:0 auto;
}
.our_main_head{
    margin-top: 109px;
}
.our_main_head>span{
    color:yellow
}
.our_main_p{
    width: 678px;
    line-height: 10px;
    margin:0 auto
}
.our_main_p>p{
    margin-top: 25px;
}
.our_img{
    width:125px;
    height: 30px;
    margin: 0 auto;
}
.our_img>img{
    margin-top: 20px;
}
.our_work{
    width:100%;
    height: 480px;
    margin-top: 50px;
    background: #fff;
    display: flex;
    z-index: 999;
}
.our_work>.left{
    width:240px;
    height: 320px;
    margin-left: 150px;
    background: #fff;
}
.our_work>.left>img{
    width: 100%;
    height: 200px;
    display: block;
    text-align: center;

}
.left>.left_title,.center>.left_title,.right>.left_title{
    margin-top: 30px;
    text-align: center;
}
.left>.left_title>h3,.center>.left_title>h3,.right>.left_title>h3{
    color:yellowgreen
}
.left_title>p{
    font-size: 12px;
    line-height: 10px;
    font-weight: bold;
}
.left_title>span{
    display: block;
    width: 100%;
    line-height: 20px;
    margin-top: 10px;
}
.left_title>span:hover{
    color:yellow
}
.left_title>span>a{
    text-decoration: none;
    color:#000
}
.our_work>.center{
    width:240px;
    height: 320px;
    margin-left: 175px;
    background:#fff;
}
.our_work>.center>img{
     width: 100%;
    height: 200px;
    display: block;
    text-align: center;
 

}
.our_work>.right{
    width:240px;
    height: 320px;
    margin-left: 175px;
    background: #fff;
}
.our_work>.right>img{
    width: 100%;
    height: 200px;
    display: block;
    text-align: center;
 
}
.our_foot{
    width:380px;
    height: 350px;
     background: rgb(77,77,77);
    margin:0 auto;
    position: relative;
    z-index: -1;
    
}
.our_foot_title{
  width:220px;
  height: 260px;
  background: rgb(77,77,77);
  margin:0 auto;
  position: absolute;
  top:30px;
  left:65px;
  z-index: -1;
}
.title_h3{
    width:210px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    margin:0 auto;
    border-bottom: 2px solid rgb(255,179,0);
}
.title_h3>h3{
  color:#fff
}
.tiltle_h3>h3>span{
    padding-left:10px
}
.our_foot_title>span{
    display: inline-block;
    line-height: S0px;
    color:rgb(255,179,0);;
    font-weight: bold;
    margin-top: 20px;
}
.our_foot_title>p{
    line-height: 30px;
    color:white;
    font-size: 14px;
    font-weight: bold;
}
.our_foot_title>p>a{
    color: #fff;
    font-size: 12px;
    text-decoration: none;
}
</style>