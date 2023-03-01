let keyboard=document.querySelector('.cal-keyboard')
let position=document.querySelector('.origin-value')
let data={
  first:'',
  operator:'',
  second:'',
}
let caloperators=['+','-','x','÷']


//绑定事件开始
keyboard.addEventListener('click',function(event){
  let target=event.target
  let content=target.innerHTML
  let type=target.getAttribute('data-action')
  
//点击键盘，触发事件，如果是数字：
if(type==='num'){
  // 如果是第一次输入：
  if(data.first===''){
    data.first=content
    // 直接占据位置 
    position.innerHTML=data.first
   }
  else{
  //  再输入数字就是说还没有按下运算符则在原来后面追加
       if(data.operator===''){
           data.first+=content
           position.innerHTML=data.first
        } 
       else{
   
    
          if(caloperators.indexOf(data.operator)!==-1){
           // 有加减乘除运算符了也就是说这是要按下第二个数字
              if(data.second===''){
            // 是第一次按下第二个数的数字：
                data.second=content
                position.innerHTML=data.second
              }

              
              else{
                // 不是第一次按下第二个数的数字则在后面追加：
                data.second+=content
                position.innerHTML=data.second
              }

           }
    // else if(data.operator==='清空'){
    //   //是清空按钮的运算
    //   data={
    //    first:'',
    //     operator:'',
    //    second:'',
    //     result:''
    //    }
    //    position.innerText=''
    // }

    // else if(data.operator==='='){
    //   cal(data.first,data.second)
    // }
    
  }
}
}
//如果是数字结束
//如果按下了运算符
//按下运算符开始
else if(type==='operator'){
   if(content==='='){
    //是等号运算符要计算显示结果
    if(data.first&&data.second){
      let res=cal(data.first,data.second,data.operator)
    position.innerHTML=res
    data.first=res+''
    data.operator=''
    data.second=''
    }
    
   }
   else if(content==='清空'){
    data={
       first:'',
        operator:'',
       second:'',
        result:''
       }
       position.innerText=''
   }
   else{
    data.operator=content
   }
    
}
//按下运算符结束

  
  
})
//绑定事件结束
function cal(n1,n2,operator){
        n1 = +n1 || 0;
        n2 = +n2 || 0;
        if (operator === '÷') {
          // 请补充代码：获取除法的结果
          if (n1 === 0)
            return 0;
          let res = n1 / n2
          if((res+'').indexOf('.')==-1){
            //找不到小数点即结果为整数
            return res
          }
          if (('' + res).split('.')[1].length <= 2) {
            return n1 / n2
          }
          else {
            let num = Number(('' + res).split('.')[1][2])
            if (num >= 5) {
              return ('' + res).split('.')[0] + '.' + ('' + res).split('.')[1][0] + (+('' + res).split('.')[1][1] + 1)
            }
            else {
              return ('' + res).split('.')[0] + '.' + ('' + res).split('.')[1].slice(0, 2)
            }
          }

        } else if (operator === 'x') {
          // 请补充代码：获取乘法的结果
          return n1*n2
         
        } else if (operator === '+') {
          // 请补充代码：获取加法的结果
          return n1+n2
          
        } else if (operator === '-') {
          // 请补充代码：获取减法的结果
          return n1-n2
        }
}
// function clear(){
//  data={
//        first:'',
//         operator:'',
//        second:'',
//         result:''
//        }
// }