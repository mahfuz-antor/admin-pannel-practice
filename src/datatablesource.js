 export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "user", headerName: "User", width: 210,
    // system 2 to join many fileds 
    renderCell: (params) => {
        return (
            <div className="cellWithImg">
                <img src={params.row.img} alt="avatar" className="cellImg" />
                {params.row.username}
            </div>
        );
    },
 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "age", headerName: "Age", width: 70 },
    { field: "status", headerName: "Status", width: 150,
    renderCell: (params) => {
        return (
            <span className={`cellWithStatus ${params.row.status}`}>
                {params.row.status}
            </span>
        )
    }
 },
    { field: "user with age", headerName: "User & Age", width: 170,
    // system 1 to join many fileds
    valueGetter: (params) => `${params.row.username || ''} ${params.row.age || ''}`
 },
 ]
 
 export const userRows = [
    {
        id: 1,
        username: "Snow",
        email: "snow11@gmail.com",
        img: "https://www.finetoshine.com/wp-content/uploads/2020/04/Beautiful-Girl-Wallpapers-New-Photos-Images-Pictures.jpg",
        age: '23',
        status: "active"
    },
    {
        id: 2,
        username: "Jonny",
        email: "jonny11@gmail.com",
        img: "https://www.finetoshine.com/wp-content/uploads/2020/04/Beautiful-Girl-Wallpapers-New-Photos-Images-Pictures.jpg",
        age: '34',
        status: "passive"
    },
    {
        id: 3,
        username: "Konnau",
        email: "Konnau11@gmail.com",
        img: "https://www.finetoshine.com/wp-content/uploads/2020/04/Beautiful-Girl-Wallpapers-New-Photos-Images-Pictures.jpg",
        age: '43',
        status: "pending"
    },
    {
        id: 4,
        username: "Doe",
        email: "sDoe11@gmail.com",
        img: "https://www.finetoshine.com/wp-content/uploads/2020/04/Beautiful-Girl-Wallpapers-New-Photos-Images-Pictures.jpg",
        age: '42',
        status: "active"
    },
    {
        id: 5,
        username: "Jenna",
        email: "Jenna11@gmail.com",
        img: "https://www.finetoshine.com/wp-content/uploads/2020/04/Beautiful-Girl-Wallpapers-New-Photos-Images-Pictures.jpg",
        age: '34',
        status: "pending"
    },
    {
        id: 6,
        username: "bealloe",
        email: "bealloe11@gmail.com",
        img: "https://www.finetoshine.com/wp-content/uploads/2020/04/Beautiful-Girl-Wallpapers-New-Photos-Images-Pictures.jpg",
        age: '32',
        status: "passive"
    },
    {
        id: 7,
        username: "Snow",
        email: "snow11@gmail.com",
        img: "https://www.finetoshine.com/wp-content/uploads/2020/04/Beautiful-Girl-Wallpapers-New-Photos-Images-Pictures.jpg",
        age: '23',
        status: "pending"
    },
    {
        id: 8,
        username: "Snow",
        email: "snow11@gmail.com",
        img: "https://www.finetoshine.com/wp-content/uploads/2020/04/Beautiful-Girl-Wallpapers-New-Photos-Images-Pictures.jpg",
        age: '43',
        status: "active"
    },
]