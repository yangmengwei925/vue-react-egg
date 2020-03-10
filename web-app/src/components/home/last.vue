<template>
  <div class="latestpost">
    <div class="one">
        <span class="black">LATEST</span>
        <span class="orange">PUSH</span>
    </div>
    <p class="two">
        yiduifeihuayiduifeihuayiduifeihuayiduifeihuayiduifeihuayiduifeihuayiduifeihua
    </p>
    <img src="../../assets/shape/1.png" alt="" class="img">
    <div class="four">
        <div class="left">
            <img src="@/assets/bot/9.jpg" alt="">
            <div class="four-right">
                <p class="data">Data:26oct2016<p/>
                <h4 class="h4">BLOGPOSTAKLSDGHAD</h4>
                <p class="p">kadhglkad,nbalierbnz.,xnboankalzegoHG.KAsk;dxbmdfnbilaredfkbndfkjbn</p>
                <span class="span">dxbdsf&nbsp;aaklajk</span>
                <p class="last">READ MARE</p>
            </div>
        </div>
        <div class="right">
            <img src="@/assets/bot/12.jpg" alt="" class="right_img">
            <div class="four-right">
                <p class="data">Data:26oct2016<p/>
                <h4 class="h4">BLOGPOSTAKLSDGHAD</h4>
                <p class="p">kadhglkad,nbalierbnz.,xnboankalzegoHG.KAsk;dxbmdfnbilaredfkbndfkjbn</p>
                <span class="span">dxbdsf&nbsp;aaklajk</span>
                <p class="last">READ MARE</p>
            </div>
        </div>
    </div>
    <div class="five">
       <li><img src="@/assets/bot/1.png" alt=""></li>
       <li><img src="@/assets/bot/2.png" alt=""></li>
       <li><img src="@/assets/bot/3.png" alt=""></li>
       <li><img src="@/assets/bot/4.png" alt=""></li>
       <li><img src="@/assets/bot/1.png" alt=""></li>
    </div>
    <div class="sex">
        <li>
            <i class="el-icon-location-information"></i>
            <span>Alcatraz Island Photo Albf dhaka ,<br/>New York</span>
        </li>
        <li>
            <i class="el-icon-s-comment"></i>
            <span>www.yourmail.com<br/>www.yourmail.com</span>
        </li>
        <li>
            <i class="el-icon-phone"></i>
            <span>+660 256444 24857<br/>+660 256444 24857</span>
        </li>
    </div>
  </div>
</template>
<style lang="scss" scoped>
*{
    margin: 0;
    padding: 0;
    list-style: none
}
html,body{
    width:100%;
    height: 100%;
}
    .latestpost{
        width:100%;
        margin: 30px auto;
        height: 1000px;
        bottom:0;
        .one{
            width: 100%;
            height: 30px;
            margin-top: 130px;
            text-align: center;
            font-size: 27px;
            font-weight: bold;
            .black{
                color: #000
            }
            .orange{
                margin-left: 15px;
                color: orange
            }
        }
        .two{
            margin-top: 35px;
            text-align: center;
            font-size: 20px;
        }
        .img{
            margin-top: 21px;
            margin-left: 660px;
            height: 35px;
            width: 150px;
        }
        .h4:hover{
            color:yellow
        }
        .four{
            margin-top: 60px;
            width: 100%;
            height: 350px;
            display: flex;
            .left,.right{
                height: 100%;
                width: 50%;
                background: red;
                position: relative;
                left:0;
                img{
                width: 100%;
                height: 100%;
               }
               .four-right{
                   position: absolute;
                   left: 50%;
                   top: 0;
                   width: 50%;
                   height: 100%;
                   background: rgba(0, 0, 0, .5);
                   color: #fff;
                   .data{
                       margin-left: 30px;
                       margin-top: 45px;
                       font-size: 16px;
                   }
                   .h4{
                       font-size: 20px;
                       margin-left: 30px;
                       margin-top: 26px;
                   }
                   .p{
                       display: inline-block;
                       width: 250px;
                       height: 70px;
                       margin-top: 30px;
                       margin-left: 30px;
                       line-height: 26px;
                       word-wrap:break-word;
                   }
                   .span{
                       display: inline-block;
                       margin-left: 30px;
                       margin-top: 25px;
                       font-size: 16px;
                   }
                   .last{
                       font-size: 20px;
                       margin-left: 30px;
                       margin-top: 22px;
                   }
                   .ringht_img{
                       margin-right: 150px;
                   }

                }
            }
            .left{
                margin-left: 7%;
                 margin-right: 2%;
            }
        }
        .five{
            width: 88%;
            height: 160px;
            margin-left: 6%;
            margin-top: 85px;
            //  border: 3px solid #fff;
             border: 1px solid rgba(225, 225, 225, 0.7);
            border-radius: 10px;
            display: flex;
           background-image: #fff;
        //    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1)
            // /!*控制阴影向内inset*!/
            li{
                flex:1;
                text-align: center;
                line-height: 160px;
            }
        }
        .sex{
             width: 90%;
            height: 150px;
            line-height: 150px;
            margin-left: 5%;
            margin-top: 70px;
            display: flex;
        overflow: hidden;
            li{
                display: inline-block;
                flex:1;
              background:rgb(241,241,241);
                margin-left: 15px;
                margin-right: 15px;
                display: flex;
                i{
                    width: 50px;
                    height: 50px;
                    border:1px solid #eee;
                    text-align: center;
                    line-height: 50px;
                    border-radius: 10px;
                    margin-left: 50px;
                    margin-top: 50px;
                    color:rgba(0, 0, 0, .5);
                    font-weight: bold;
                    font-size: 16px
                }
                span{
                    line-height: 30px;
                    font-size: 16px;
                    margin-left: 20px;
                    margin-top: 45px;
                }
            }
        }

    }
</style>
