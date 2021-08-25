import React, { useState, useEffect } from 'react';
import { mockClassData as data, mockUserData }  from "../mockData/mockData";
import { mockUserData as userData } from '../mockData/mockData'
import styled from 'styled-components';

const loggedInUserID = "1"

const PunchCard = styled.div`

    background-color: gray;
    margin-top:20px;
    padding:20px;
`

function fetchHistory() {
    return Promise.resolve({ success: true, data });
}

function resolveHistory(data) {
//    console.log(data[2].type);
   let typesOfClasses = data.map(classItem => {
       return classItem.type
   })
   let uniqueTypesOfClasses = [...new Set(typesOfClasses)];
//    console.log(uniqueTypesOfClasses)
   let punchData = {}
   uniqueTypesOfClasses.forEach( uniqueTypeOfClass => {
        punchData[uniqueTypeOfClass] = 0
   })

   let loggedInUser  = mockUserData.filter(user => user.userID === loggedInUserID)
//    console.log(loggedInUser)
   let classHistory = loggedInUser[0].reservationIDs

   classHistory.forEach( classID => {


    // console.log(classID)
    const registeredClass = data[parseInt(classID)-1]
    
    const registeredClassType = registeredClass.type
    // console.log(registeredClassType)

    punchData[registeredClassType] += 1
       
   })

   const finalData = uniqueTypesOfClasses.map( (unique,index) => {
       const object = {}
       object.key = unique
       object.count = punchData[unique]
       return object
   })
   
   console.log(finalData)
//    console.log(classHistory)
   return finalData;

}

export default function History(){
    const [history, setHistory] = useState([])

    useEffect(() => {
        fetchHistory().then((res) => {
            const resolvedHistory = resolveHistory(res.data)
            setHistory(resolvedHistory)
            console.log(history)
                // console.log(res.data)
        })
    },[]);

return (
    <div>
        {history.map((item,id) => {
            return (
                <PunchCard key={id}>
                    <h1>{item["key"]}</h1>
                    <h2>{item["count"]}</h2>
                </PunchCard>
            )
        })}

    </div>
)
}