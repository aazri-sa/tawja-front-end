

const ChildElement = (elements) => {
    console.log('children :::', elements)
    return(
        <ul>
        {
            // elements.elements && elements.elements.map((el) => 
               ( <li>
                    <a>{elements.first_name} {elements?.partner?.first_name}</a>
                    {/* {el.children && (<ChildElement childrens= {el.children} />)} */}
                </li>)
        // )
        }
    </ul>
    )
}

export default ChildElement