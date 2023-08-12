import logo from './logo.svg';
import './App.css';

// function App() {
//   const getStuff = () => 'text'

//   return (
//     <div>
//       <div className="ex-space">
//         <h4 className='ex-title'>Spot-check 1</h4 >
//         <div className="exercise" id="spotcheck-1">
//           <h1>{getStuff()}</h1>
//         </div>
//       </div>
//     </div>
//   )
// }

// function App() {
//   const personContainer = (name, email) => {

//     let greatName = `The Great ${name}`
 
//     return (
//        <div className='person'>
//          <h4>{greatName}</h4>
//          <p>Contact at: <a href={email}>email</a></p>
//        </div>
//      )
//    }

//   return (
//     personContainer("Louisa", "l@elo.com")
//   );
// }

// Last SPotcheck
// function App() {
//   let hour = new Date().getHours()
//   const getMorningGreeting = () => 'good morning'
//   const getEveningGreeting = () => 'good evening'

//   return (
//     <div>
//       <div className="ex-space">
//         <h4 className='ex-title'>Spot-check 2</h4 >
//         <div className="exercise" id="spotcheck-2">
//           {/* { hour<12 ? getMorningGreeting() : getEveningGreeting() } */}
//           {[getEveningGreeting(), getMorningGreeting(), <p>'text'</p>]}
//         </div>
//       </div>
//     </div>
//   )
// }

// Exercise 1
// function App() {

//   let companies = [
//     { name: "Tesla", revenue: 140 },
//     { name: "Microsoft", revenue: 300 },
//     { name: "Google", revenue: 600 }
//   ]

//   const showCompany = (name, revenue) => {
//     return <div className={name}>{name} makes {revenue} revenue every year</div>
//     //div with an id of the CompanyName with the text CompanyName makes Revenue every year inside the div.
//    }

//   return (
//     <div className="ex-space">
//       <h4 className='ex-title'>Exercise 1</h4>
//       <div className="exercise" id="ex-1">
//         {companies.map(c => showCompany(c.name, c.revenue))}
//       </div>
//     </div>
//   )
// }


//Exercise 2
function App() {
  const getClassName = (temperature) => {
    let res 
    if (temperature < 15) {
      res = 'freezing'
    } else if (temperature < 30) {
      res = 'fair'
    } else {
      res = 'hell-scape'
    }
    return <div className={res}>{res}</div>
   }

  return (
    <div className="ex-space">
      <h4 className='ex-title'>Exercise 2</h4>
      <div className="exercise" id="ex-2">
        <div id='weatherBox' heigh='300px' width='300px'>
          {getClassName(17)}
        </div>
      </div>
    </div>
  )
}

export default App;
