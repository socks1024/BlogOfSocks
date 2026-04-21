interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: '我的 itch.io 主页',
    description: `我在 itch.io 上的个人主页，展示我的独立游戏作品和项目。`,
    imgSrc: '/static/images/google.png',
    href: 'https://itch.io/profile/socks1024',
  },
  {
    title: '我的 Bilibili 主页',
    description: `我在 Bilibili 上的个人主页，展示我的视频内容和项目。`,
    imgSrc: '/static/images/time-machine.jpg',
    href: 'https://space.bilibili.com/584816911?spm_id_from=333.1007.0.0',
  },
]

export default projectsData
