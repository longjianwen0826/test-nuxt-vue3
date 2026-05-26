import { httptsCos } from "@/utils/image"
const userInfo = [
  {
    id: 1,
    ImageUrl: httptsCos+'/img/jianwen/',// 资源路径
    avatar: 'avatar.png',
    name: '龙建文',
    nameEn: 'jianwen.long',
    // 年龄（岁）
    age: 0,
    // 身高（cm）
    height: 183,
    // 体重（kg）
    weight: 67,
    // 性格
    character: '为人豪爽大方，乐善好施，仗义，',
    // 人物描述
    describe: '完美，暂无词语可描述',
    // 爱好
    hobby: ['打台球','打篮球','打王者','游泳','野外到处闲逛'],
    // 过往经历
    guoWang: [
      {
        imageName: ['daoyu1.png'],
        des: '陪飞哥钓鱼的时刻',
        date: '2025:03:21',
      },
      {
        imageName: ['daoyu2.png', 'diaoyu.mp4'],
        des: '陪飞哥钓鱼的时刻第二部分',
        date: '2025:05:16',
      },
      {
        imageName: ['haibian1.png','haibian2.png'],
        des: '公司团建的时候',
        date: '2023:04:27',
      },
    ]
  },
  {
    id: 2,
    ImageUrl: httptsCos+'/img/yongbin/',// 资源路径
    avatar: 'avatar.png',
    name: '罗勇斌',
    nameEn: 'yongbin.luo',
    // 年龄（岁）
    age: 29,
    // 身高（cm）
    height: 175,
    // 体重（kg）
    weight: 77,
    // 性格
    character: '不知道怎么说好',
    // 人物描述
    describe: '查不透的性格，想不尽的理论想法',
    // 爱好
    hobby: ['打台球','打篮球','打王者','发呆'],
    // 过往经历
    guoWang: [
      {
        imageName: ['1.png','2.png','3.png'],
        des: '暂无描述',
        date: '2025:03:21',
      },
      {
        imageName: ['11.png','12.png','13.png'],
        des: '暂无描述',
        date: '2023:03:21',
      },
    ]
  },
  {
    id: 3,
    ImageUrl: httptsCos+'/img/yongyuan/',// 资源路径
    avatar: 'avatar.png',
    name: '罗泳斌',
    nameEn: 'yongyuan.luo',
    // 年龄（岁）
    age: 29,
    // 身高（cm）
    height: 182,
    // 体重（kg）
    weight: 68,
    // 性格
    character: '随便吧',
    // 人物描述
    describe: '不知道',
    // 爱好
    hobby: ['出去玩','煮吃的','打王者','泡富婆'],
    // 过往经历
    guoWang: [
      {
        imageName: ['1.png','2.png'],
        des: '暂无描述',
        date: '2025:03:21',
      },
      {
        imageName: ['3.png','4.png'],
        des: '暂无描述',
        date: '2023:03:21',
      },
    ]
  },
  {
    id: 4,
    ImageUrl: httptsCos+'/img/zhijia/',// 资源路径
    avatar: 'avatar.png',
    name: '罗志佳',
    nameEn: 'zhijia.luo',
    // 年龄（岁）
    age: 29,
    // 身高（cm）
    height: 168,
    // 体重（kg）
    weight: 54,
    // 性格
    character: '随便吧',
    // 人物描述
    describe: '不知道',
    // 爱好
    hobby: ['出去玩','煮吃的','打王者'],
    // 过往经历
    guoWang: [
      {
        imageName: ['1.png','2.png'],
        des: '暂无描述',
        date: '2025:03:21',
      },
      {
        imageName: ['3.png'],
        des: '暂无描述',
        date: '2023:03:21',
      },
    ]
  },
  {
    id: 5,
    ImageUrl: httptsCos+'/img/huanyuan/',// 资源路径
    avatar: 'avatar.png',
    name: '罗焕远',
    nameEn: 'huanyuan.luo',
    age: 30,
    // 身高（cm）
    height: 167,
    // 体重（kg）
    weight: 67,
    // 性格
    character: '随便吧',
    // 人物描述
    describe: '不知道',
    // 爱好
    hobby: ['出去玩','煮吃的','打王者','跑外卖'],
    // 过往经历
    guoWang: [
      {
        imageName: ['1.png'],
        des: '暂无描述',
        date: '2025:03:21',
      },
    ]
  },
  {
    id: 6,
    ImageUrl: httptsCos+'/img/jialiang/',// 资源路径
    avatar: 'avatar.png',
    name: '罗嘉亮',
    nameEn: 'jialiang.luo',
    age: 30,
    // 身高（cm）
    height: 164,
    // 体重（kg）
    weight: 62,
    // 性格
    character: '随便吧',
    // 人物描述
    describe: '不知道',
    // 爱好
    hobby: ['出去玩','煮吃的','打王者','装逼','画画'],
    // 过往经历
    guoWang: [
      {
        imageName: ['1.png'],
        des: '暂无描述',
        date: '2025:03:21',
      },
    ]
  },
]
const allInfo = {
  des: '',
  date: '',
  image: [],
}
export { userInfo, allInfo }