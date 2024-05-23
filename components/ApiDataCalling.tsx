import { View, Text , ActivityIndicator } from 'react-native'
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
      <Text>Api Data :-</Text>

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