import logo from './logo.svg';
import './App.css';
import Company from './components/Company.js'

// function App() {
//   let companies = [
//       { name: "Tesla", revenue: 140 },
//       { name: "Microsoft", revenue: 300 },
//       { name: "Google", revenue: 600 }
//     ];

//   // function generateCompanyTags(companies) {
//   //   let companyTags = []
//   //   for (let c of companies) {
//   //     companyTags.push(<Company name={c.name} revenue={c.revenue} />)
//   //   }
//   //   return companyTags
//   // }

//   return (
//     <div>{companies.map(c => <Company name={c.name} revenue={c.revenue} />)}
//     )
// }

const Article = (props) => {
  return <div>{props.info.color} {props.info.type}</div>
}

const Wardrobe = () => {
  let wardrobe = [
    { type: "shirt", color: "red", size: "Medium" },
    { type: "shirt", color: "blue", size: "Medium" },
    { type: "pants", color: "blue", size: "Medium" },
    { type: "accessory", color: "sapphire", size: "" },
    { type: "accessory", color: "lilac", size: "" },
  ]

  return wardrobe
    .filter(c => c.color === "blue")
    .map(c => <Article info={c} key={c.color + c.type} />)
}

const App = () => {
  return <Wardrobe />
}
export default App;
