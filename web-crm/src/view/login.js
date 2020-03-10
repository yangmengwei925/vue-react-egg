import React,{useState} from 'react'
import { Input, Button } from 'antd';



export default props => {
    const { httpSuccess } = React.Meili;
    const [user,setUser] = useState('');
    const [pwd,setPwd]   = useState('');

    //提交函数
    let submit = (user,pwd) =>{

        //非空校验

        //正则校验

        //数据请求
        httpSuccess(['post','/crm/login',{user,pwd}],(data,msg)=>{
            //弹出提示信息
            alert(msg)
            //本地存储user
            localStorage.setItem('user',user)
            //跳路由 props.history
            props.history.push('/home')
        })
    }
     
    return (
        <div className="login_out">
            <Input placeholder="请输入账号" value={user} onChange={ e =>setUser(e.target.value)} />
            <Input.Password  placeholder="请输入密码" value={pwd} onChange={ e =>setPwd(e.target.value)}/>
            <Button block onClick={()=>submit()}>提交</Button>
        </div>
        )

    
}




