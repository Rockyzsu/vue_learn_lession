const Mock = require('mockjs')

// 保存注册用户的数据
const registerData = []

// 返回的默认登录信息
const loginInfo = Mock.mock({
    username: 'admin',
    password: 123456
})

// 返回的注册id
const registerId = Mock.mock({
    "registerId|+1": 1
});

// // 首页数据
// let homeDataList = Mock.mock({
//     dataList: [   // 生成3组数据    
//         {
//             cateName: '服饰类',
//             cateId: 1,
//             cateData: [
//                 {
//                     name: '2022秋冬新款', img: 'https://picsum.photos/150/150', id: '00001',
//                 },
//                 {
//                     name: '羊毛衫男女', img: 'https://picsum.photos/100/200', id: '00002',
//                 },
//                 {
//                     name: '秋冬大衣情侣', img: 'https://picsum.photos/220/330', id: '00003',
//                 },
//                 {
//                     name: '保暖三件套', img: 'https://picsum.photos/210/310', id: '00004',
//                 },
//                 {
//                     name: '光腿神器', img: 'https://picsum.photos/120/130', id: '00005',
//                 },
//                 {
//                     name: '牛仔裤系列', img: 'https://picsum.photos/110/210', id: '00006',
//                 }
//             ]
//         },
//         {
//             cateName: '食品类',
//             cateId: 2,
//             cateData: [
//                 {
//                     name: '2022新上架', img: 'https://picsum.photos/201/301', id: '0001',
//                 },
//                 {
//                     name: '绝味之各种辣', img: 'https://picsum.photos/176/234', id: '0002',
//                 },
//                 {
//                     name: '甜甜面包房', img: 'https://picsum.photos/207/303', id: '0003',
//                 },
//                 {
//                     name: '火锅、麻辣烫', img: 'https://picsum.photos/170/260', id: '0004',
//                 },
//                 {
//                     name: '嗦粉快乐房', img: 'https://picsum.photos/227/313', id: '0005',
//                 },
//                 {
//                     name: '清淡菜系', img: 'https://picsum.photos/174/263', id: '0006',
//                 }
//             ]
//         },
//         {
//             cateName: '家居类',
//             cateId: 3,
//             cateData: [
//                 {
//                     name: '2022全新家具', img: 'https://picsum.photos/1790/235', id: '001',
//                 },
//                 {
//                     name: '沙发床、沙发摇篮', img: 'https://picsum.photos/140/150', id: '002',
//                 },
//                 {
//                     name: '电视、洗衣机类', img: 'https://picsum.photos/185/190', id: '003',
//                 },
//                 {
//                     name: '厨房用品类', img: 'https://picsum.photos/220/310', id: '004',
//                 },
//                 {
//                     name: '卧室装饰品类', img: 'https://picsum.photos/186/193', id: '005',
//                 },
//                 {
//                     name: '客厅大型用品类', img: 'https://picsum.photos/215/308', id: '006',
//                 }
//             ]
//         }

//     ]
// });


// 首页数据
let homeDataList = Mock.mock({
    dataList: [   // 生成3组数据    
        {
            cateName: '服饰类',
            cateId: 1,
            cateData: [
                {
                    name: '2022秋冬新款', img: 'https://i.loli.net/2021/12/03/mpvXgUTdwP39Zuh.jpg', id: '00001',
                },
                {
                    name: '羊毛衫男女', img: 'https://i.loli.net/2021/12/03/tn47i3kDF1y8IYf.jpg', id: '00002',
                },
                {
                    name: '秋冬大衣情侣', img: 'https://i.loli.net/2021/12/03/j84SAraYWe1lh7d.jpg', id: '00003',
                },
                {
                    name: '保暖三件套', img: 'https://i.loli.net/2021/12/03/xL7kafWBM6oJ9RE.jpg', id: '00004',
                },
                {
                    name: '光腿神器', img: 'https://i.loli.net/2021/12/03/tQzuxGdA2yiKrsH.jpg', id: '00005',
                },
                {
                    name: '牛仔裤系列', img: 'https://i.loli.net/2021/12/03/ZNApMu6mLXykFnJ.jpg', id: '00006',
                }
            ]
        },
        {
            cateName: '食品类',
            cateId: 2,
            cateData: [
                {
                    name: '2022新上架', img: 'https://i.loli.net/2021/12/03/XKxtAMpWwLaV8iF.jpg', id: '0001',
                },
                {
                    name: '绝味之各种辣', img: 'https://i.loli.net/2021/12/03/tIEUQ21XqVdnzxF.jpg', id: '0002',
                },
                {
                    name: '甜甜面包房', img: 'https://i.loli.net/2021/12/03/d9EpW2uBZfG3nV1.jpg', id: '0003',
                },
                {
                    name: '火锅、麻辣烫', img: 'https://i.loli.net/2021/12/03/UZTvoditBy1pWFO.jpg', id: '0004',
                },
                {
                    name: '嗦粉快乐房', img: 'https://i.loli.net/2021/12/03/RcEmIPuOLn5d9Vg.jpg', id: '0005',
                },
                {
                    name: '清淡菜系', img: 'https://i.loli.net/2021/12/03/6CvmGD2zsRnch3k.jpg', id: '0006',
                }
            ]
        },
        {
            cateName: '家居类',
            cateId: 3,
            cateData: [
                {
                    name: '2022全新家具', img: 'https://i.loli.net/2021/12/03/yk3HG7zcVwTuW8S.jpg', id: '001',
                },
                {
                    name: '沙发床、沙发摇篮', img: 'https://i.loli.net/2021/12/03/xH6mp8QWqfVycn2.jpg', id: '002',
                },
                {
                    name: '电视、洗衣机类', img: 'https://i.loli.net/2021/12/03/Wx5J1iIfB8eAYjV.jpg', id: '003',
                },
                {
                    name: '厨房用品类', img: 'https://i.loli.net/2021/12/03/5yCm9cluNTA2174.jpg', id: '004',
                },
                {
                    name: '卧室装饰品类', img: 'https://i.loli.net/2021/12/03/of5gTCWs27G81mt.jpg', id: '005',
                },
                {
                    name: '客厅大型用品类', img: 'https://i.loli.net/2021/12/03/qcT13dUbFhlDmfX.jpg', id: '006',
                }
            ]
        }

    ]
});


// 配置拦截匹配和处理回调
// 登录接口
Mock.mock('http://localhost:8080/login', 'post', config => {
    let data = JSON.parse(config.body)
    // console.log(data);
    console.log(registerData);
    let res = registerData.filter(item => {
        // console.log(item);
        return item.username === data.username && item.password === parseInt(data.password)
    });
    // console.log(res);
    if (res.length != 0) {
        return Mock.mock(res[0]);
    } else {
        return loginInfo;
    }
})

// 注册接口
Mock.mock('http://localhost:8080/register', 'post', config => {
    let data = JSON.parse(config.body)
    let registerUser = {
        username: data.username,
        password: parseInt(data.password)
    }

    registerData.push(registerUser)
    // console.log(registerData);
    return registerId;
})

// 获取首页数据接口
Mock.mock('http://localhost:8080/homedata', 'get', homeDataList)

// 详情页数据
Mock.mock(`http://localhost:8080/detail`, 'post', config => {
    let res = JSON.parse(config.body)
    // 详情页数据
    const detailData = Mock.mock({
        'desc': '@csentence(20,100)',
        'address': '@county(true)',
        'price|45-5200': 100,
        ...res
    })
    return detailData;
})