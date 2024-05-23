import { View, Text , ActivityIndicator , Image} from 'react-native'
import React, { useEffect, useState } from 'react'
// Using ActivityIndicator to show loading on api reloading time

interface Data{
    id:string ,
    title:string ,
    releaseYear:string
}[]
export default function ApiDataCalling() {
    const [data, setData]= useState()
    const [loading, setLoading]= useState(true)
    const getMovies= async ()=>{
        // 1. this is first method
        // const response = fetch('https://reactnative.dev/movies.json')
        // .then(res=> res.json())
        // .then(data=> setData(data.movies))

        // 2. this is second method with try catch statement
            try {
                const response = await fetch('https://reactnative.dev/movies.json')
                const data =await response.json()
                setData(data.movies)
            } catch (error) {
                console.warn(error)
            } finally{
                setLoading(false)
           }
    }
    useEffect(()=>{
        getMovies()
    },[])
  return (
    <View style={{margin:10}}>

      {/*  use of Image tag  (good way to use is using require) */}
     {/* <Image source={require('./my-icon.png')} /> */}
     
      {/*  use of Image tag with url (uri) */}
      <Image source={{uri: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg'}} style={{width: '100%', height: 300 ,
    resizeMode:'cover'}} />
      <Text>Api Data :</Text>

      {/* here we are using simple map function we can also use flatlist .
       which are best for performance for larger data */}
      {loading? <ActivityIndicator />: data && ( data as Data[])?.map((data:Data)=>(
        <View key={data?.id} style={{flex:1 , flexDirection:'row' , flexWrap:'wrap' , marginVertical:20, gap:10}}>
            <Text>{data?.id}</Text>
            <Text>{data?.title}</Text>
            <Text>{data?.releaseYear}</Text>
        </View>
      ))}
    </View>
  )
}