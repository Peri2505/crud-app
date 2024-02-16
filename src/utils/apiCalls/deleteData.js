import React, { Component } from 'react'
import { BASE_URLS } from './urls'

export default async function deleteData(id){
    
const options={
    method:"DELETE"
}
    const res = await fetch(BASE_URLS + "/" +id,options)
    const data = await res.json()
    return data
}


