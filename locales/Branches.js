import branch1 from "../Assets/Branches/1.jpg"
import branch2 from "../Assets/Branches/2.jpg"
import branch3 from "../Assets/Branches/3.jpg"
import branch4 from "../Assets/Branches/4.jpg"

const BranchesLocale = [
    {
        location_title : "Байршил", 
        manager : "Салбарын менежер",
        register : "Сургалтанд бүртгүүлэх",
        viaPhone : "Утасаар Бүртгүүлэх",
        viaOnline : "Онлайнаар Бүртгүүлэх",
        branches : [
            {
                title : "Тэнгис Салбар", 
                cover : `${branch1.src}`,
                location : "Чингэлтэй Дүүрэг, Тэнгис Кино Театр, VICTORY CENTER 6 давхарт",
                manager : "О.Нямдалай",
                schedule : {
                    days : "Даваа-Баасан"
                },
                url : "https://daavkatunes.mn/dgl?branch=3",
                phone : "+976 86870330",
            },
            {
                title : "Бөхийн Өргөө Салбар",
                cover : `${branch2.src}`,
                location :  "Баянзүрх Дүүрэг, 13-р Хороолол Бөхийн өргөөний зүүн талд",
                manager : "Э.Хишигжаргал",
                url : "https://daavkatunes.mn/dgl?branch=0",
                phone : "+976 90303311",
            },
            {
                title : "Саппоро Салбар",
                cover : `${branch3.src}`,
                location :"Сонгинохайрхан Дүүрэг, 1р хороолол САППОРО, Номинжин төв 2 давхарт",
                manager: "Э.Анар",
                url : "https://daavkatunes.mn/dgl?branch=2",
                phone: "+976 91203311",
            },
            {
                title : "Алтай Хотхон Салбар",
                cover : `${branch4.src}`,
                location : "Хан Уул Дүүрэг, 19-р хороолол АЛТАЙ ХОТХОН, 18-р байр",
                manager: "Э.Хишигжаргал",
                url : "https://daavkatunes.mn/dgl?branch=1",
                phone : "+976 90303311",
            }
        ]
    },
    {
        location_title : "Location", 
        manager : "Branch Manager",
        register : "Register",
        viaPhone : "Phone Call",
        viaOnline : "Online ",
        branches : [
            {
                title : "Branch 1", 
                cover : `${branch1.src}`,
                location : "Chingeltei district, VICTORY CENTER, 6th floor",
                manager : "O.Nyamdalai",
                url : "https://daavkatunes.mn/dgl?branch=3",
                phone : "+976 86870330",
            },
            {
                title : "Branch 2",
                cover : `${branch2.src}`,
                location : "Bayanzurkh district, on the east side of the Wrestling Palace",
                manager : "E.Khishigjargal",
                url : "https://daavkatunes.mn/dgl?branch=0",
                phone : "+976 90303311",
                
            },
            {
                title : "Branch 3",
                cover : `${branch3.src}`,
                location :  "Songinokhairkhan district, Sapporo, Nominjin center, 2nd floor",
                manager: "E.Anar",
                url : "https://daavkatunes.mn/dgl?branch=2",
                phone: "+976 91203311",
            },
            {
                title : "Branch 4",
                cover : `${branch4.src}`,
                location : "Khan Uul District, ALTAI TOWN 18th building",
                manager: "E.Khishigjargal",
                url : "https://daavkatunes.mn/dgl?branch=1",
                phone : "+976 90303311",
            }

        ]
    },
    {
        location_title : "地点", 
        manager : "分行经理",
        register : "登记",
        viaPhone : "通过电话注册",
        viaOnline : "在线注册",
        branches : [
            {
                title : "分支 1",
                cover : `${branch1.src}`,
                location : "Chingeltei区胜利中心6楼",
                manager : "O.Nyamdalai",
                url : "https://daavkatunes.mn/dgl?branch=3",
                phone : "+976 86870330",
            },
            {
                title : "分支 2",
                cover : `${branch2.src}`,
                location : "Bayanzurkh 区，第 13 khoroo，Buhiin Urgoo 东侧",
                manager: "E.Khishigjargal",
                url : "https://daavkatunes.mn/dgl?branch=1",
                phone : "+976 90303311",
            },
            {
                title : "分支 3",
                cover : `${branch3.src}`,
                location : "Songinokhairkhan 区 1st khoroo 札幌巴士站 Nominjin 中心 2 楼",
                manager: "E.Anar",
                url : "https://daavkatunes.mn/dgl?branch=2",
                phone: "+976 91203311",
            },
            {
                title : "分支 4",
                cover : `${branch4.src}`,
                location :  "Khan Uul 区 19 号 khoroo 阿尔泰镇 18 号楼",
                manager: "E.Khishigjargal",
                url : "https://daavkatunes.mn/dgl?branch=1",
                phone : "+976 90303311",
            }
        ]
    }
]

module.exports = {
  BranchesLocale
}
 