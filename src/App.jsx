// export default function App() {
//   const [userName,setUserName] = useState()
//   useEffect(()=>{
//     // make an api call and set username and passsowrd
//     const data ={
//       name:"Rohit Sharma"
//     }
//     setUserName(data.name)
//   },[])
//   // {loggedInUser:userName} this is what we give inside createContext
//   return (
//     <Provider store={appStore}>
// {/* Default */}
//     <UserContext.Provider value={{loggedInUser:"Virat Kholi"}}>
//       {/* Rohit Sharma */}
//       <div>
//         <Header/>
//         <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
//           <Outlet/>
//         </UserContext.Provider>
//       </div>
//     </UserContext.Provider>
//     </Provider>
    
//   )
// }