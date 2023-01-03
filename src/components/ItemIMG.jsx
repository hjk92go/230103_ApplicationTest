import {} from '../css/ItemIMG.css'


const ItemIMG = () => {

    const itemArray = ([
      {id : "옷1", img : "옷1.png"},
      {id : "옷2", img : "옷2.png"},
      {id : "옷3", img : "옷3.png"}  
    ])

    return ( 
        <div className='itemList'>
            <a className="moreLink" href=''>더보기</a>
            <div className="imgFile">
                {
                    itemArray.map((img,index) => (
                        <div key={index}>
                        <img src={require(`../img/${img.img}`)} alt="" />
                        <p className='itemName'>{img.id}</p>
                        </div>    
                    ))
                }        
            </div>
        </div>
    );
}
export default ItemIMG;
