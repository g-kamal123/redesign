import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {data} from './Data'
export const Storage = createContext()

export const Contxt = (props)=>{
    const [print,setPrint] = useState(data)
    const [flag,setFlag] = useState(true)
    const [cartarr,setcartarr] = useState([])
    const [order1,setOrder1] = useState('0')
    const [log,setLog] = useState(false)
    const [log1,setLog1] = useState(false)
    const l = useLocation()

    // console.log(l.pathname)
    const chklogin =()=>{
        setLog(true)
        setLog1(false)
    }
    const chklog1 =()=>{
        setLog1(false)
    }
    const chklogin1 =()=>{
        setLog1(true)
    }
    const emptycart =()=>{
        cartarr.map((item)=>item.quantity=0)
        setcartarr([])
    }
    useEffect(()=>{
        let arr = [...print]
        arr.sort(increasing)
        setPrint(arr)
    },[])
    useEffect(()=>{
        if(l.pathname==='/')
        setFlag(true)
        else setFlag(false)
    },[l])
    const fruits = ()=>{
        let arr = data.filter((item)=>item.mainCat==='Fresh_Fruits')
        if(order1==='0')
        arr.sort(increasing)
        if(order1==='1')
        arr.sort(decreasing)
        setPrint(arr)
    }
    const veg =()=>{
        let arr = data.filter((item)=>item.mainCat==="Fresh_Vegetables")
        if(order1==='0')
        arr.sort(increasing)
        if(order1==='1')
        arr.sort(decreasing)
        setPrint(arr)
    }
    const dairy =()=>{
        let arr = data.filter((item)=>item.mainCat==="dairy")
        if(order1==='0')
        arr.sort(increasing)
        if(order1==='1')
        arr.sort(decreasing)
        setPrint(arr)
    }
    const nonVeg =()=>{
        let arr = data.filter((item)=>item.mainCat==="non_veg")
        if(order1==='0')
        arr.sort(increasing)
        if(order1==='1')
        arr.sort(decreasing)
        setPrint(arr)
    }
    const dry =()=>{
        let arr = data.filter((item)=>item.mainCat==="dry_fruits")
        if(order1==='0')
        arr.sort(increasing)
        if(order1==='1')
        arr.sort(decreasing)
        setPrint(arr)
    }
    // const dry =()=>{
    //     let arr = data.filter
    // }
    const incrementHandler =(val)=>{
        if(val.quantity===0){
        val.quantity += 1;
        setcartarr([...cartarr,val])
        }
        else{
            val.quantity += 1
            setcartarr([...cartarr])
        }
    }
    const decrementHandler =(val)=>{
        if(val.quantity>1){
        val.quantity -= 1
        setcartarr([...cartarr])
        return;
        }
        if(val.quantity===1){
            val.quantity = 0
            let arr = cartarr.filter((item)=>item!==val)
            setcartarr(arr)
        }
    }
    const deletecartItem =(val)=>{
        val.quantity = 0;
        let arr = cartarr.filter((item)=>item!==val)
        setcartarr(arr)
    }
    const all =()=>{
        let arr = [...data]
        if(order1==='0')
        arr.sort(increasing)
        if(order1==='1')
        arr.sort(decreasing)
        setPrint(arr)
    }
    const searchItem =(val)=>{
        let arr = data.filter((item)=>item.pname.toLowerCase().includes(val))
        if(order1==='0')
        arr.sort(increasing)
        if(order1==='1')
        arr.sort(decreasing)
        setPrint(arr)
    }
    const increasing =(a,b)=>{
        return Number(a.sellPrice) - Number(b.sellPrice)
    }
    const decreasing =(a,b)=>{
        return Number(b.sellPrice) - Number(a.sellPrice)
    }
    const order =(val)=>{
        let arr = [...print]
        if(val==='0'){
        arr.sort(increasing)
        }
        if(val==='1'){
        arr.sort(decreasing)
        }
        setPrint(arr)
        setOrder1(val)
    }
    // console.log(cartarr)
    return(
        <Storage.Provider value={{print:print,fruits:fruits,veg:veg,flag,incrementHandler:incrementHandler,decrementHandler:decrementHandler,
        deletecartItem:deletecartItem,
        all:all,cartarr:cartarr,
        searchItem:searchItem,
        order:order,
        chklogin:chklogin,
        log:log,
        emptycart:emptycart,
        chklogin1:chklogin1,
        log1:log1,
        chklog1:chklog1,
        dairy:dairy,
        nonVeg:nonVeg,
        dry:dry
        }}>
            {props.children}
        </Storage.Provider>
    )
}