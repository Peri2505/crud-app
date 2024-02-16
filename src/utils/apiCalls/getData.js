import React, { Component } from 'react'
import { BASE_URLS } from './urls'

export default async function fetchData(){
    

    const res = await fetch(BASE_URLS)
    const data = await res.json()
    return data
}


