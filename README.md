# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```


Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

# 访问地址
http://119.29.160.147:3000/

# 服务器pm2重启
pm2 start "node .output/server/index.mjs" --name "nuxt-app" # 启动 Nuxt3 项目（PM2 永久后台运行
pm2 restart nuxt-app 重启项目
pm2 list        # 看项目是否运行
pm2 logs        # 看日志

# 直接删除所有名为nuxt-app运行中的项目
pm2 delete nuxt-app

# finalshenll 给目录开放读、写、执行全权限
sudo chmod -R 777 /home/testNuxt
# finalshenll把目录所有者改成Ubuntu(服务器名)，和你WinSCP的登录用户完全匹配
sudo chown -R root:Ubuntu /home/testNuxt