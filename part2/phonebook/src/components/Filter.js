const Filter = ({setCheckName, checkName, setShowAll}) => {
    const filterHandler = (event) => {
        if (event.target.value === '') {
          setCheckName('')
          setShowAll(true)
        } else {
          setCheckName(event.target.value)
          setShowAll(false)
        }
    }

    return (
        <div>
            filter show with  
            <input 
            value={checkName}
            onChange={filterHandler}/>
      </div>
    )
}

export default Filter