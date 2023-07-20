
export default function Option({kind}){
  
  function optionAll(){
    return kind.map((item,index) => {
      return (
        <option value={item} key={index}>{item}</option>
      )
    })
  }

  return(
    <p className="form">
    <label htmlFor = "kind"> All : </label>
    <select id = "kind"  defaultValue = {kind}>
      {optionAll()}
    </select>
</p>
  )
}