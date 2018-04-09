
import { ToastAndroid } from 'react-native'
// 获取数据字典
export  function dataDictionary(dictionaryName,callBack){
    fetchData('dictionary/get','get',{
        data:{
            code:dictionaryName
        },
        fun_Success(resData){
            if(resData.retCode===0){
                let rows = []
                let data = resData.rows;
                console.log(data.length)
                // resData.rows.map(item=>{
                //     let itemVal = string(item.value);
                //     console.log(itemVal)
                //     //rows.push({lable:item.lable,value:itemVal})
                // })
                // console.log(rows,'rows')
            
                for(var i=0; i<data.length ; i++){
                    console.log(i)
                    console.log(data)
                    console.log(data[i])
                    let itemVal = String(data[i].value);
                    rows.push({label:data[i].label,value:itemVal})
                }
                console.log(JSON.stringify(rows)) 
                console.log(rows,'rows')
                callBack(rows)
                //return ;
            }
            ToastAndroid(resData.message,ToastAndroid.SHORT)
        },
        fun_Error(err){
            
        }
    })
}
