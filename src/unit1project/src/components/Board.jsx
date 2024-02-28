function Board({ name, cuisine, area,image,link })  {

    return (
        <table>
            <tr> 
                    <div className="eachBlock">
                        <img src={image} alt={name} className="restaurant" style={{height: 100, width:100}} />
                        
                        <div className = "linespacing">
                        <h3>{name}</h3>
                        <h4>{cuisine}</h4>
                        <h4>{area}</h4>
                        </div>
                        
                        <form action={link} method="get" target="_blank">
                            <button>Menu</button>
                        </form>
                    </div>
            </tr>
        </table>
    )
  }
  
  export default Board


  