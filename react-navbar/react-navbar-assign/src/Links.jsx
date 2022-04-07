

export const Links = () => {

    const link_arr = ["Services", "Projects", "About"]
    return <div>
        <ul>
            {
                link_arr.map((el) => {
                    return <li>{el}</li>
                })
            }
        </ul>
    </div>

}